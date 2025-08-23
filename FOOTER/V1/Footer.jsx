import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div>
        <footer>
          <div className="footer">
            <div className="date">
              <p>{date} Remind. All rights reserved.</p>
            </div>

            <div className="footer-elements">
              <a href="Home">Home</a>
              <a href="Services">Services</a>
              <a href="About">About</a>
              <a href="Contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

/**
 * import { Copyright } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-muted/50 mt-10 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex items-center justify-center space-x-1">
          <Copyright size={16} />
          <p>
            {currentYear} Samuel Kuria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

 */
