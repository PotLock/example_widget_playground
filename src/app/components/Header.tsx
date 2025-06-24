"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Link href="/">
        <div className="flex items-center">
          <span className="text-black font-bold text-xl">🫕 POTLOCK</span>
        </div>
      </Link>

      <nav className="hidden md:flex space-x-6">
        <Link href="#features" className="text-gray-700 hover:text-gray-900">
          Features
        </Link>
        <Link
          href="https://docs.potlock.io/"
          className="text-gray-700 hover:text-gray-900"
        >
          Documentation
        </Link>
      </nav>
      <Link href="/playground">
        <button className="hidden md:block bg-black text-white w-[150px] h-[48px] gap-2.5 rounded-xl p-0 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-gray-900">
          Playground
        </button>
      </Link>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 p-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-4 right-4 text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <Link
                href="#features"
                className="block text-gray-700 hover:text-gray-900 py-4 text-2xl"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="https://docs.potlock.io/"
                className="block text-gray-700 hover:text-gray-900 py-4 text-2xl"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/playground"
                className="block bg-black text-white w-[150px] h-[48px] gap-2.5 rounded-xl p-4 flex items-center justify-center mt-4 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Launch app
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
