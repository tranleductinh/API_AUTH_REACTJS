import {  signIn, signUp } from "../services/api/user";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();
  const signInUser = async (payload) => {
    try {
      const user = await signIn(payload);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      toast.success("Sign in successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  const signUpUser = async (payload) => {
    try {
      const user = await signUp(payload);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      toast.success("Sign up successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Sign out successfully");
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, signInUser, signUpUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
