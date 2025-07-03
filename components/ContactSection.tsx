"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/components/contact.module.css";
import {
  FiMail,
  FiPhone,
  FiUser,
  FiMessageSquare,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    message: "",
    interest: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Content reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(
        `.${styles.animateOnScroll}`
      );
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullname: "",
      email: "",
      message: "",
      interest: "",
    };

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!formData.interest) {
      newErrors.interest = "Please select an interest";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullname: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          interest: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      className={styles.contactSection}
      id="contact"
      ref={sectionRef}
      style={{ height: "100vh", scrollSnapAlign: "start" }}
    >
      <div className={styles.sunGlow}></div>
      <div className={styles.container}>
        <div className={`${styles.leftColumn} ${styles.animateOnScroll}`}>
          <h2 className={styles.connectTitle}>Connect with us!</h2>
          <p className={styles.visionText}>
            Turn Your Vision Into an Experience That Lasts
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FiMail className={styles.infoIcon} />
              <span>info@marcelodesignx.com</span>
            </div>
            <div className={styles.infoItem}>
              <FiPhone className={styles.infoIcon} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        <div className={`${styles.rightColumn} ${styles.animateOnScroll}`}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h3 className={styles.formTitle}>Let's talk</h3>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FiUser className={styles.inputIcon} />
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={`${styles.formInput} ${
                      errors.fullname ? styles.errorInput : ""
                    }`}
                  />
                </div>
                {errors.fullname && (
                  <span className={styles.errorMessage}>{errors.fullname}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FiBriefcase className={styles.inputIcon} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className={styles.formInput}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FiMail className={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`${styles.formInput} ${
                      errors.email ? styles.errorInput : ""
                    }`}
                  />
                </div>
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FiPhone className={styles.inputIcon} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className={styles.formInput}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.selectLabel}>I'm interested in</label>
              <div className={styles.interestGrid}>
                {["Development", "UI/UX", "Branding", "Animation"].map(
                  (item) => (
                    <div
                      key={item}
                      className={`${styles.interestOption} ${
                        formData.interest === item ? styles.selected : ""
                      }`}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, interest: item }));
                        if (errors.interest) {
                          setErrors((prev) => ({ ...prev, interest: "" }));
                        }
                      }}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              {errors.interest && (
                <span className={styles.errorMessage}>{errors.interest}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputContainer}>
                <FiMessageSquare className={styles.inputIcon} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className={`${styles.formTextarea} ${
                    errors.message ? styles.errorInput : ""
                  }`}
                ></textarea>
              </div>
              {errors.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              <span className={styles.buttonText}>Send</span>
              <FiArrowRight className={styles.arrowIcon} />
            </button>

            {isSubmitted && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
