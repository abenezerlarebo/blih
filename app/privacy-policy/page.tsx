import FooterSection from "@/components/FooterSection";
import HeaderMenu from "@/components/HeaderMenu";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React from "react";

function page() {
  return (
    <>
      <HeaderMenu />
      <PrivacyPolicy />
      <FooterSection />
    </>
  );
}

export default page;
