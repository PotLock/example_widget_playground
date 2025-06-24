"use client";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the POTLOCK Cross Chain Donation Widget?",
      answer:
        "It’s a simple, embeddable widget that allows you to accept donations from various blockchain networks directly to your NEAR account, without requiring users to connect their wallets.",
    },
    {
      question: "How do I integrate the widget into my website?",
      answer:
        "Please refer to our integration guide for step-by-step instructions.",
    },
    {
      question: "What blockchain networks does it support?",
      answer:
        "Currently, it supports multiple major networks including NEAR, Ethereum, and more.",
    },
    {
      question: "Are there any fees involved?",
      answer:
        "There are no additional fees beyond standard network transaction costs.",
    },
  ];

  return (
    <div className=" bg-white flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900">
            Frequently asked questions
          </h1>
          <p className="text-gray-600 mt-2">
            Find answers to common questions about the POTLOCK Cross Chain
            Donation Widget.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 text-gray-900 font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center  mt-12 text-gray-500 text-sm">
          <div
            className="flex justify-center text-black items-center mb-2"
            style={{ fontWeight: 550 }}
          >
            🫕 POTLOCK
          </div>
          <p style={{ fontWeight: 550, color: "black" }}>
            The Free, Open Funding Stack.
          </p>
          <p className="mt-1">
            Build open source end to end tools for anyone to create their own
            funding solution.
          </p>
        </div>
      </div>
    </div>
  );
}
