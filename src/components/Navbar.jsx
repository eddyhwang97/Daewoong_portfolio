import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex-shrink-0">
            <svg
              width="204"
              height="36"
              viewBox="0 0 204 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-auto"
            >
              <g clipPath="url(#clip0_120_893)">
                <path
                  d="M46.7293 0H4.9712C2.22568 0 0 2.04022 0 4.55696V31.443C0 33.9598 2.22568 36 4.9712 36H46.7293C49.4748 36 51.7005 33.9598 51.7005 31.443V4.55696C51.7005 2.04022 49.4748 0 46.7293 0Z"
                  fill="white"
                />
                <path
                  d="M28.3096 9.11499L21.3664 26.7859H23.4594L30.4027 9.11499H28.3096ZM19.3351 11.6637L18.7943 11.9822L10.3914 16.9663L9.94336 17.2282V18.191L10.3605 18.4672L18.7634 23.9044L19.3351 24.2655V22.0496L12.7007 17.7522L19.3351 13.8159V11.6637ZM32.1866 11.6637V13.8159L38.8209 17.7522L32.1866 22.0496V24.2655L32.7582 23.9044L41.1611 18.4672L41.5783 18.191V17.2282L41.1302 16.9663L32.7273 11.9822L32.1866 11.6637Z"
                  fill="#111111"
                />
              </g>
              <defs>
                <clipPath id="clip0_120_893">
                  <rect width="204" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Services
            </a>
            <a
              href="#works"
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Works
            </a>
            <a
              href="#skills"
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Skills
            </a>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <Link
                href="#services"
                className="text-white hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#works"
                className="text-white hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Works
              </Link>
              <Link
                href="#skills"
                className="text-white hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="text-white hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Button className="w-full">Contact</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
