import React, { useState, useEffect } from "react";
import {
  BookOpenIcon,
  HomeIcon,
  MapPinIcon,
  TicketIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

const navLinks = [
  { id: "home", label: "HOME", icon: HomeIcon },
  { id: "story", label: "OUR STORY", icon: BookOpenIcon },
  { id: "entourage", label: "ENTOURAGE", icon: UsersIcon },
  { id: "location", label: "LOCATION", icon: MapPinIcon },
  { id: "rsvp", label: "RSVP", icon: TicketIcon },
];

const Index = () => {
  const [active, setActive] = useState("home");
  const [manualClick, setManualClick] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!manualClick) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        }
      },
      { threshold: 0.3, rootMargin: "-150px 0px 0px 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const atTop = window.scrollY < 50; // Improved threshold for detecting top
      if (atTop && !manualClick) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [manualClick]);

  const handleLinkClick = (id) => {
    setManualClick(true);
    setActive(id);

    setTimeout(() => setManualClick(false), 1500);
  };

  const linkClasses = (id) =>
    `flex items-center gap-1 text-xs p-3 rounded-md transition-all duration-300 font-bold ${
      active === id
        ? "text-lime-900 bg-lime-500/20 shadow-md"
        : "text-lime-700 hover:bg-lime-500/20 hover:shadow-md"
    }`;

  return (
    <div className="bg-white text-center gap-0 p-1 shadow-md sticky top-0 z-50">
      <nav
        className="flex justify-around"
        role="navigation"
        aria-label="Main Navigation"
      >
        {navLinks.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={linkClasses(id)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(id);
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Icon className="w-4 h-4" />
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Index;
