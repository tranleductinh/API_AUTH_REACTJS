import AppCard from "@/components/AppCard";
import { getMe } from "@/services/api/user";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  const [item, setItem] = useState([
    {
      title: "Dashboard Analytics",
      description:
        "A short sentence explaining the benefit of the analytics feature.",
    },
    {
      title: "Project Management",
      description:
        "A short sentence explaining the benefit of the project management feature.",
    },
    {
      title: "Team Collaboration",
      description:
        "A short sentence explaining the benefit of the team collaboration feature.",
    },
  ]);
  const verify = async () => {
    try {
      await getMe();
    } catch (error) {
      toast.error(error.response?.message);
    }
  };
  useEffect(() => {
    verify();
  }, []);
  return (
    <div className="">
      <div className="py-20 text-center">
        <div className="text-[40px] sm:text-[50px] font-bold my-5">Welcome to the App</div>
        <div className="text-muted-foreground mx-auto sm:w-[640px]">
          A brief, one-to-two-sentence summary of the application's purpose or
          value proposition to get you started.
        </div>
      </div>
      <AppCard item={item} />
    </div>
  );
};

export default HomePage;
