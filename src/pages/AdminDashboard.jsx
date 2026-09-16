import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { db, storage } from "../lib/firebase";
import { collection, doc, getDocs, setDoc, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { pdf } from "@react-pdf/renderer";
import CVDocument from "../components/CVDocument";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [message, setMessage] = useState("");
  const [cvs, setCvs] = useState([]);
  const [selectedCvId, setSelectedCvId] = useState("");

  const emptyCv = {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: [{ company: "", role: "", date: "", description: "" }],
    education: [{ school: "", degree: "", date: "" }],
    skills: "",
    draftName: ""
  };

  const { register, control, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: emptyCv
  });

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control, name: "experience" });
  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({ control, name: "education" });

  useEffect(() => {
    loadCvs();
  }, []);

  async function loadCvs() {
    try {
      const querySnapshot = await getDocs(collection(db, "resumes"));
      const loadedCvs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCvs(loadedCvs);
      if (loadedCvs.length > 0 && !selectedCvId) {
        setSelectedCvId(loadedCvs[0].id);
        reset(loadedCvs[0]);
      }
    } catch (err) {
      console.error("Error loading CVs:", err);
    }
  }

  const handleSelectCv = (e) => {
    const id = e.target.value;
    setSelectedCvId(id);

    if (id === "new") {
      reset(emptyCv);
    } else {
      const selected = cvs.find(cv => cv.id === id);
      if (selected) reset(selected);
    }
  };

  const onSave = async (data) => {
    setLoading(true);
    try {
      if (!data.draftName) data.draftName = `Draft - ${new Date().toLocaleDateString()}`;

      if (selectedCvId === "new" || !selectedCvId) {
        const docRef = await addDoc(collection(db, "resumes"), data);
        setSelectedCvId(docRef.id);
        setMessage("New CV draft created!");
      } else {
        await setDoc(doc(db, "resumes", selectedCvId), data);
        setMessage("CV Draft updated successfully!");
      }
      await loadCvs();
    } catch (err) {
      setMessage("Error saving data: " + err.message);
    }
    setLoading(false);
  };

  const onPublish = async (data) => {
    setPublishing(true);
    setMessage("");
    try {
      // 1. Save current state first
      if (!data.draftName) data.draftName = `Draft - ${new Date().toLocaleDateString()}`;
      let currentId = selectedCvId;
      if (selectedCvId === "new" || !selectedCvId) {
        const docRef = await addDoc(collection(db, "resumes"), data);
        currentId = docRef.id;
        setSelectedCvId(currentId);
      } else {
        await setDoc(doc(db, "resumes", currentId), data);
      }
      await loadCvs();

      // 2. Generate PDF blob
      const blob = await pdf(<CVDocument data={data} />).toBlob();

      // 3. Upload to Firebase Storage
      const storageRef = ref(storage, "resumes/published_cv.pdf");
      const uploadTask = await uploadBytesResumable(storageRef, blob);

      // 4. Get Download URL
      const downloadURL = await getDownloadURL(uploadTask.ref);

      // 5. Save URL to Firestore
      await setDoc(doc(db, "settings", "publishedResume"), { url: downloadURL, updatedAt: new Date().toISOString() });

      setMessage("CV Published Successfully!");
    } catch (err) {
      setMessage("Error publishing CV: " + err.message);
    }
    setPublishing(false);
  };

  return (
    <div className="pt-[calc(72px+48px)] container pb-24">
       <div className="flex justify-between items-center mb-10">
          <div>
             <span className="eyebrow">Admin Dashboard</span>
             <h1 className="mt-3 text-4xl md:text-5xl">CV Builder</h1>
          </div>
          <Button variant="outline" onClick={logout}>Log Out</Button>
       </div>

       {message && <div className="mb-6 p-4 bg-primary/20 text-primary border border-primary/50 rounded-lg">{message}</div>}

       <div className="mb-8 p-6 bg-panel rounded-2xl border border-border shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Manage CVs</h2>
          <div className="flex items-center gap-4">
             <select
               className="flex-1 px-3 py-2 bg-background border border-border rounded"
               value={selectedCvId}
               onChange={handleSelectCv}
             >
                <option value="new">-- Create New CV Draft --</option>
                {cvs.map(cv => (
                  <option key={cv.id} value={cv.id}>
                    {cv.draftName || "Unnamed Draft"} ({cv.name})
                  </option>
                ))}
             </select>
          </div>
       </div>

       <form className="space-y-12">
          {/* Draft Settings */}
          <section className="p-6 bg-panel rounded-2xl border border-border shadow-lg">
             <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Draft Settings</h2>
             <div>
               <label className="block mb-1 text-sm">Draft Name (for internal organization)</label>
               <input {...register("draftName")} className="w-full px-3 py-2 bg-background border border-border rounded" placeholder="e.g. Frontend Dev Variant" />
             </div>
          </section>
          {/* Personal Info */}
          <section className="p-6 bg-panel rounded-2xl border border-border shadow-lg">
             <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Personal Details</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div><label className="block mb-1 text-sm">Full Name</label><input {...register("name")} className="w-full px-3 py-2 bg-background border border-border rounded" /></div>
               <div><label className="block mb-1 text-sm">Professional Title</label><input {...register("title")} className="w-full px-3 py-2 bg-background border border-border rounded" /></div>
               <div><label className="block mb-1 text-sm">Email</label><input type="email" {...register("email")} className="w-full px-3 py-2 bg-background border border-border rounded" /></div>
               <div><label className="block mb-1 text-sm">Phone</label><input {...register("phone")} className="w-full px-3 py-2 bg-background border border-border rounded" /></div>
               <div className="md:col-span-2"><label className="block mb-1 text-sm">Location</label><input {...register("location")} className="w-full px-3 py-2 bg-background border border-border rounded" /></div>
               <div className="md:col-span-2"><label className="block mb-1 text-sm">Professional Summary</label><textarea {...register("summary")} rows="4" className="w-full px-3 py-2 bg-background border border-border rounded" /></div>
             </div>
          </section>

          {/* Experience */}
          <section className="p-6 bg-panel rounded-2xl border border-border shadow-lg">
             <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
               <h2 className="text-2xl font-semibold">Experience</h2>
               <Button type="button" size="sm" onClick={() => appendExp({ company: "", role: "", date: "", description: "" })}>+ Add Job</Button>
             </div>
             <div className="space-y-6">
                {expFields.map((field, index) => (
                  <div key={field.id} className="p-4 border border-border rounded bg-background relative">
                     <Button type="button" variant="ghost" size="sm" className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-500/10" onClick={() => removeExp(index)}>Remove</Button>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
                        <div><label className="block mb-1 text-sm">Company</label><input {...register(`experience.${index}.company`)} className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                        <div><label className="block mb-1 text-sm">Role</label><input {...register(`experience.${index}.role`)} className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                        <div className="md:col-span-2"><label className="block mb-1 text-sm">Date (e.g. Jan 2020 - Present)</label><input {...register(`experience.${index}.date`)} className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                        <div className="md:col-span-2"><label className="block mb-1 text-sm">Description</label><textarea {...register(`experience.${index}.description`)} rows="3" className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                     </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Education */}
          <section className="p-6 bg-panel rounded-2xl border border-border shadow-lg">
             <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
               <h2 className="text-2xl font-semibold">Education</h2>
               <Button type="button" size="sm" onClick={() => appendEdu({ school: "", degree: "", date: "" })}>+ Add School</Button>
             </div>
             <div className="space-y-6">
                {eduFields.map((field, index) => (
                  <div key={field.id} className="p-4 border border-border rounded bg-background relative">
                     <Button type="button" variant="ghost" size="sm" className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-500/10" onClick={() => removeEdu(index)}>Remove</Button>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
                        <div><label className="block mb-1 text-sm">School/University</label><input {...register(`education.${index}.school`)} className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                        <div><label className="block mb-1 text-sm">Degree</label><input {...register(`education.${index}.degree`)} className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                        <div className="md:col-span-2"><label className="block mb-1 text-sm">Date</label><input {...register(`education.${index}.date`)} className="w-full px-3 py-2 bg-panel border border-border rounded" /></div>
                     </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Skills */}
          <section className="p-6 bg-panel rounded-2xl border border-border shadow-lg">
             <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Skills</h2>
             <div>
               <label className="block mb-1 text-sm">Comma separated skills (e.g. React, Node.js, Python)</label>
               <textarea {...register("skills")} rows="3" className="w-full px-3 py-2 bg-background border border-border rounded" />
             </div>
          </section>

          {/* Actions */}
          <div className="flex gap-4 sticky bottom-4 p-4 bg-panel border border-border rounded-xl shadow-2xl">
             <Button type="button" variant="outline" className="flex-1" disabled={loading || publishing} onClick={handleSubmit(onSave)}>
                {loading ? "Saving..." : "Save Draft"}
             </Button>
             <Button type="button" className="flex-1" disabled={loading || publishing} onClick={handleSubmit(onPublish)}>
                {publishing ? "Publishing..." : "Publish to Site (PDF)"}
             </Button>
          </div>
       </form>
    </div>
  );
}
