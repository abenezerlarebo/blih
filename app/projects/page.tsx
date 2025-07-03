import FooterSection from "@/components/FooterSection";
import HeaderMenu from "@/components/HeaderMenu";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import React from "react";

function page() {
  return (
    <>
      <HeaderMenu />
      <ProjectsShowcase />
      <FooterSection />
    </>
  );
}

export default page;
