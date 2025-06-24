"use client";
import Link from "next/link";

export default function Start() {
  return (
    <div
      className="min-h-[400px] bg-cover bg-center flex items-center justify-center py-16 px-4 bg-white"
      style={{ backgroundImage: "url('/assets/Background.svg')" }}
    >
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-4xl sm:text-3xl text-2xl">
          Start taking money from anywhere
        </h1>
        <p className="text-lg text-gray-600 mb-8 md:text-lg sm:text-base text-sm">
          Start accepting cross-chain support today with the POTLOCK widget.
          It’s fast, flexible, and designed to help you achieve your goals.
        </p>
        <div className="space-x-4">
          <Link href="/playground">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition md:px-6 md:py-3 sm:px-5 sm:py-2 px-4 py-2">
              Get Started →
            </button>
          </Link>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition md:px-6 md:py-3 sm:px-5 sm:py-2 px-4 py-2">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
