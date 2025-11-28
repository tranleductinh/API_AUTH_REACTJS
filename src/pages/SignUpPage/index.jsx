import AuthForm from "@/components/AuthForm";
import AuthContext from "@/contexts/authContext";

import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUpUser } = useContext(AuthContext);
  const handleSignUp = async () => {
    try {
      setLoading(true);
      if(email.trim() === "" || password.trim() === "" || name.trim() === "") return toast.error("Please fill all the fields");
      await signUpUser({email: email.trim(), password: password.trim(), name: name });
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
        header="Create Account"
        button="Sign Up"
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
        handle={handleSignUp}
        loading={loading}
      />
    </div>
  );
};

export default SignUpPage;
