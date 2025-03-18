import React, { useState } from "react";
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

  const linkClasses = (id) =>
    `flex items-center gap-1 text-xs p-3 rounded-md transition-all duration-300 font-bold ${
      active === id
        ? "text-lime-900 bg-[#e0f2f1]"
        : "text-lime-700 hover:bg-[#e0f2f1]"
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
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
              setActive(id);
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
