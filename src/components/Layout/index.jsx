import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <>
        <div className="min-h-screen">
          <Header />
          <main className="container mx-auto px-2 sm:py-0">
            <Outlet />
          </main>
        </div>
      </>
    </div>
  );
};

export default Layout;
