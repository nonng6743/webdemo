"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ใช้เพื่อดึงเส้นทางปัจจุบัน

  // ฟังก์ชันตรวจสอบว่าลิงก์ตรงกับเส้นทางปัจจุบันหรือไม่
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MyApp
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/") ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/about") ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/contact")
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/signin"
              className={`px-4 py-2 text-sm font-medium rounded-md text-center ${
                isActive("/signin")
                  ? "text-white bg-blue-700 font-bold"
                  : "text-white bg-blue-500 hover:bg-blue-700"
              }`}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={`px-4 py-2 text-sm font-medium rounded-md text-center ${
                isActive("/register")
                  ? "text-blue-600 border-blue-700 font-bold"
                  : "text-blue-600 border border-blue-600 hover:bg-blue-50"
              }`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 md:hidden bg-gray-50`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <Link
            href="/"
            className={`block text-base font-medium px-3 py-2 rounded-md ${
              isActive("/") ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block text-base font-medium px-3 py-2 rounded-md ${
              isActive("/about") ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`block text-base font-medium px-3 py-2 rounded-md ${
              isActive("/contact")
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className={`block w-full px-4 py-2 text-sm font-medium rounded-md text-center ${
              isActive("/signin")
                ? "text-white bg-blue-700 font-bold"
                : "text-white bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className={`block w-full px-4 py-2 text-sm font-medium rounded-md text-center ${
              isActive("/register")
                ? "text-blue-600 border-blue-700 font-bold"
                : "text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
