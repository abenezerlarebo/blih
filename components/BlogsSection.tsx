"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "../styles/components/blogs.module.css";
import {
  FiSearch,
  FiArrowRight,
  FiCalendar,
  FiUser,
  FiClock,
  FiX,
} from "react-icons/fi";
import gsap from "gsap";
import Image from "next/image";
import { blogPosts, categories } from "@/constants/blogs";

const BlogsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<typeof blogPosts>([]);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoized filter function
  const filterBlogs = useCallback(() => {
    return blogPosts.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Debounced filter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResults(filterBlogs());
    }, 300);

    return () => clearTimeout(timer);
  }, [filterBlogs]);

  // Animation setup with improved performance
  useEffect(() => {
    if (isAnimating) return;

    const ctx = gsap.context(() => {
      setIsAnimating(true);

      // Combined animations using timeline for better sequencing
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        onComplete: () => setIsAnimating(false),
      });

      tl.from(`.${styles.header} h2`, { y: 30, opacity: 0, delay: 0.2 })
        .from(`.${styles.header} p`, { y: 30, opacity: 0 }, "-=0.6")
        .from(
          `.${styles.featuresContainer} > *`,
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .from(categoriesRef.current, { y: 30, opacity: 0 }, "-=0.4")
        .from(
          `.${styles.blogCard}`,
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.3"
        );

      // Improved hover animations with GSAP utils
      const blogCards = document.querySelectorAll(`.${styles.blogCard}`);
      blogCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "none",
            duration: 0.3,
          });
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      setIsAnimating(false);
    };
  }, [searchResults]);

  // Focus management and keyboard accessibility
  useEffect(() => {
    if (showSearchPopup && searchInputRef.current) {
      searchInputRef.current.focus();

      // Trap focus within popup when open
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          toggleSearchPopup();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [showSearchPopup]);

  const toggleSearchPopup = () => {
    setShowSearchPopup(!showSearchPopup);
    if (!showSearchPopup) {
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Memoized category buttons to prevent unnecessary re-renders
  const renderCategoryButtons = () =>
    categories.map((category) => (
      <button
        key={category}
        className={`${styles.categoryButton} ${
          activeCategory === category ? styles.active : ""
        }`}
        onClick={() => setActiveCategory(category)}
        aria-label={`Filter by ${category}`}
      >
        {category}
      </button>
    ));

  return (
    <section className={styles.blogsSection} ref={containerRef} id="blogs">
      <div className={styles.header}>
        <h2>Knowledge Hub</h2>
        <p>Explore our latest insights, tutorials, and industry trends</p>
      </div>

      {/* Value Proposition Section */}
      <div className={styles.featuresContainer}>
        {[
          {
            src: "https://images.unsplash.com/photo-1659353222321-0a0cccd79b4a?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Expert Insights",
            desc: "Learn from industry leaders and experienced professionals",
          },
          {
            src: "https://images.unsplash.com/photo-1659406152336-443f050bff83?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Latest Trends",
            desc: "Stay ahead with cutting-edge technologies and methodologies",
          },
          {
            src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Practical Guides",
            desc: "Step-by-step tutorials you can implement immediately",
          },
        ].map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureImage}>
              <Image
                src={feature.src}
                alt={feature.title}
                width={120}
                height={120}
                priority={index === 0}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.featureContent}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.categories} ref={categoriesRef}>
          {renderCategoryButtons()}
        </div>

        <button
          className={styles.searchButton}
          onClick={toggleSearchPopup}
          aria-label="Search articles"
        >
          <FiSearch />
        </button>
      </div>

      {/* Search Popup with improved accessibility */}
      {showSearchPopup && (
        <div
          className={styles.searchPopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-dialog-title"
        >
          <div className={styles.searchHeader}>
            <h3 id="search-dialog-title">Search Articles</h3>
            <button
              className={styles.closeButton}
              onClick={toggleSearchPopup}
              aria-label="Close search"
            >
              <FiX />
            </button>
          </div>
          <div className={styles.searchForm}>
            <input
              type="text"
              placeholder="Type to search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              ref={searchInputRef}
              className={styles.searchInput}
              aria-label="Search input"
            />
          </div>
          <div className={styles.searchResults}>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((blog) => (
                  <li key={blog.id}>
                    <a
                      href={`#blog-${blog.id}`}
                      className={styles.searchResultItem}
                      onClick={toggleSearchPopup}
                    >
                      <h4>{blog.title}</h4>
                      <p>{blog.excerpt}</p>
                      <span className={styles.resultCategory}>
                        {blog.category}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.noResults}>
                <p>No articles found matching your search</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.blogsGrid}>
        {searchResults.length > 0 ? (
          searchResults.map((blog) => (
            <article
              key={blog.id}
              id={`blog-${blog.id}`}
              className={styles.blogCard}
              aria-labelledby={`blog-title-${blog.id}`}
            >
              <div className={styles.blogImageContainer}>
                <Image
                  src={blog.imageUrl}
                  alt={`Featured image for ${blog.title}`}
                  fill
                  className={styles.blogImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.blogCategory}>{blog.category}</div>
              </div>

              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>
                    <FiCalendar aria-hidden="true" /> {blog.date}
                  </span>
                  <span className={styles.blogAuthor}>
                    <FiUser aria-hidden="true" /> {blog.author}
                  </span>
                  <span className={styles.blogReadTime}>
                    <FiClock aria-hidden="true" /> {blog.readTime}
                  </span>
                </div>

                <h3 id={`blog-title-${blog.id}`} className={styles.blogTitle}>
                  {blog.title}
                </h3>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>

                <div className={styles.blogFooter}>
                  <div className={styles.blogTags}>
                    {blog.tags.map((tag, i) => (
                      <span key={i} className={styles.blogTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={styles.readMoreButton}>
                    Read More{" "}
                    <FiArrowRight
                      className={styles.arrowIcon}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className={styles.noResults}>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button
              className={styles.resetFilters}
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
