import React from "react";
import PublicNavbar from "../components/PublicNavbar.jsx";

export default function PublicLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      <main style={{ padding: "3rem" }}>{children}</main>
    </>
  );
}
