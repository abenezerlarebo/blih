import BlogsSection from "@/components/BlogsSection";
import FooterSection from "@/components/FooterSection";
import HeaderMenu from "@/components/HeaderMenu";
import React from "react";

function page() {
  return (
    <>
      <HeaderMenu />
      <BlogsSection />
      <FooterSection />
    </>
  );
}

export default page;
