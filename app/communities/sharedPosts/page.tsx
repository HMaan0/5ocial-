"use client";
import React from "react";
import { SidebarDemo } from "../../components/Sidebar/SideBar";
import Dashboard from "../../components/Dashboard/Dashboard";
import SharedPosts from "./SharedPosts";

const page = () => {
  return (
    <div>
      <SidebarDemo>
        <Dashboard>
          <SharedPosts></SharedPosts>
          <SharedPosts></SharedPosts>
          <SharedPosts></SharedPosts>
          <SharedPosts></SharedPosts>
          <SharedPosts></SharedPosts>
        </Dashboard>
      </SidebarDemo>
    </div>
  );
};

export default page;
