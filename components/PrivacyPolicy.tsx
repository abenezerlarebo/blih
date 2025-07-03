"use client";

import React, { useRef } from "react";
import styles from "../styles/components/privacy.module.css";
import { FiChevronDown } from "react-icons/fi";

const PrivacyPolicy = () => {
  const privacySections = [
    {
      title: "Introduction",
      content: (
        <>
          <p>
            At Blih Technologies, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the site.
          </p>
        </>
      ),
    },
    {
      title: "Information We Collect",
      content: (
        <>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul>
            <li>Register on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Fill out a contact form</li>
            <li>Use our services</li>
          </ul>
          <p>The types of personal information we collect may include:</p>
          <ul>
            <li>Name and contact details (email, phone number)</li>
            <li>Demographic information</li>
            <li>Payment information for services</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service and updates</li>
            <li>Send you marketing and promotional communications</li>
            <li>Find and prevent fraud</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Security",
      content: (
        <>
          <p>
            We implement appropriate technical and organizational measures to
            protect the security of your personal information. However, please
            remember that no method of transmission over the Internet or method
            of electronic storage is 100% secure.
          </p>
          <p>
            We maintain administrative, technical, and physical safeguards
            designed to protect the personal information you provide against
            accidental, unlawful, or unauthorized destruction, loss, alteration,
            access, disclosure, or use.
          </p>
        </>
      ),
    },
    {
      title: "Your Data Protection Rights",
      content: (
        <>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul>
            <li>
              <strong>Right to access:</strong> You can request copies of your
              personal data.
            </li>
            <li>
              <strong>Right to rectification:</strong> You can request
              correction of inaccurate data.
            </li>
            <li>
              <strong>Right to erasure:</strong> You can request deletion of
              your personal data.
            </li>
            <li>
              <strong>Right to restrict processing:</strong> You can request
              restriction of processing your data.
            </li>
            <li>
              <strong>Right to data portability:</strong> You can request
              transfer of your data to another organization.
            </li>
            <li>
              <strong>Right to object:</strong> You can object to our processing
              of your data.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information provided below.
          </p>
        </>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul>
            <li>By email: privacy@blihtechnologies.com</li>
            <li>
              By visiting this page on our website:
              www.blihtechnologies.com/contact
            </li>
            <li>By mail: 123 Privacy Street, Data City, DC 12345</li>
          </ul>
        </>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    const item = document.querySelectorAll(`.${styles.accordionItem}`)[index];
    const content = item.querySelector(
      `.${styles.accordionContent}`
    ) as HTMLElement;
    const icon = item.querySelector(`.${styles.accordionIcon}`) as HTMLElement;

    const isOpen = item.classList.contains(styles.active);

    if (isOpen) {
      content.style.height = "0";
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.height = `${content.scrollHeight}px`;
      icon.style.transform = "rotate(180deg)";
    }

    item.classList.toggle(styles.active);
  };

  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.header}>
        <h1>Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className={styles.content}>
        {privacySections.map((section, index) => (
          <div key={index} className={styles.accordionItem}>
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
            >
              <h2>{section.title}</h2>
              <FiChevronDown className={styles.accordionIcon} />
            </div>
            <div className={styles.accordionContent}>
              <div className={styles.accordionBody}>{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
