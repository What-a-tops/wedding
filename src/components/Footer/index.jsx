import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lime-900/80 text-white text-center py-2">
      <p className="text-sm">
        Made with ❤️ for our special day | Bacate ~ Mendros | ©{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
