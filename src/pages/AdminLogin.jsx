import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup, currentUser } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to dashboard
  if (currentUser) {
    navigate("/admin");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      if (err.code === "auth/user-not-found" || err.code === "auth/invalid-credential") {
         // Optionally you can create a one-time signup here since you control the email constraint.
         setError("Failed to sign in. If you have not created an account yet, use the 'Create Account' button.");
      } else if (err.code === "auth/configuration-not-found") {
         setError("Authentication is not enabled for this Firebase project. Please enable Email/Password authentication in your Firebase Console.");
      } else {
        setError(err.message || "Failed to log in");
      }
    }
    setLoading(false);
  }

  async function handleSignup(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/admin");
    } catch (err) {
      if (err.code === "auth/configuration-not-found" || err.code === "auth/operation-not-allowed") {
         setError("Authentication is not enabled. Please enable Email/Password authentication in your Firebase Console.");
      } else {
         setError(err.message || "Failed to create account");
      }
    }
    setLoading(false);
  }

  return (
    <div className="pt-[calc(72px+48px)] flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 bg-panel rounded-2xl border border-border shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
        {error && <div className="mb-4 p-3 bg-red-900/50 text-red-200 border border-red-800 rounded-md text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-4 pt-4">
            <Button disabled={loading} type="submit" className="flex-1">
              Log In
            </Button>
            <Button disabled={loading} type="button" variant="outline" onClick={handleSignup} className="flex-1">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
