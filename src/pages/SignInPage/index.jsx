import AuthForm from "@/components/AuthForm";
import React, { useContext, useState } from "react";
import AuthContext from "@/contexts/authContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = async () => {
    try {
      setLoading(true);
      if (email.trim() === "" || password.trim() === "") return toast.error("Please fill all the fields");
      await signInUser({ email, password });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <AuthForm
        header="Login"
        button="Login"
        setEmail={setEmail}
        setPassword={setPassword}
        handle={handleSignIn}
        loading={loading}
      />
    </div>
  );
};

export default SignInPage;
