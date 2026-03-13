"use client";
import dynamic from "next/dynamic";

const Admin = dynamic(() => import("./admin-app"), {
  ssr: false, // Required to avoid react-router related errors
});

export default Admin;