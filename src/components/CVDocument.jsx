import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// Register fonts if needed for better ATS parsing, standard fonts are usually fine.
// Using standard PDF fonts for maximum compatibility.
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: "#000000",
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
    color: "#333333",
  },
  contact: {
    fontSize: 10,
    color: "#555555",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    paddingBottom: 2,
  },
  summary: {
    marginBottom: 8,
  },
  item: {
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  itemTitle: {
    fontFamily: "Helvetica-Bold",
  },
  itemSubtitle: {
    fontFamily: "Helvetica-Oblique",
    color: "#333333",
    marginBottom: 4,
  },
  itemDate: {
    color: "#555555",
  },
  itemDescription: {
    marginTop: 2,
  },
  skills: {
    marginTop: 4,
  }
});

export default function CVDocument({ data }) {
  if (!data) return null;

  const { name, title, email, phone, location, summary, experience, education, skills } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{name || "Your Name"}</Text>
          {title && <Text style={styles.title}>{title}</Text>}
          <View style={styles.contact}>
            {email && <Text>{email}</Text>}
            {phone && <Text>{phone}</Text>}
            {location && <Text>{location}</Text>}
          </View>
        </View>

        {/* Professional Summary */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        {/* Experience Section */}
        {experience && experience.length > 0 && experience.some(exp => exp.company || exp.role) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp, index) => (
              <View key={index} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{exp.role}</Text>
                  <Text style={styles.itemDate}>{exp.date}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{exp.company}</Text>
                <Text style={styles.itemDescription}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        {education && education.length > 0 && education.some(edu => edu.school || edu.degree) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{edu.school}</Text>
                  <Text style={styles.itemDate}>{edu.date}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{edu.degree}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills Section */}
        {skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.skills}>{skills}</Text>
          </View>
        )}

      </Page>
    </Document>
  );
}
