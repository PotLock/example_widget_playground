"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HexColorPicker } from "react-colorful";
const WidgetConfig = () => {
  const [donationTarget, setDonationTarget] = useState("Select Donation Type");
  const [generalSettings, setGeneralSettings] = useState<boolean>(false);
  const [openIndexGeneral, setOpenIndexGeneral] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndexSocial, setOpenIndexSocial] = useState<boolean>(false);
  const [socials, setSocials] = useState<boolean>(false);
  const [openIndexTheme, setOpenIndexTheme] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>("");
  const [link, setlink] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [asset, setAsset] = useState<string>(
    "Select which asset you want to receive."
  );
  const [activeTab, setActiveTab] = useState("preview");
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [buttonColor, setButtonColor] = useState("#262626");
  const [pool, setPool] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const assetTriggerRef = useRef<HTMLDivElement>(null);

  const [primaryColor, setPrimaryColor] = useState("#FFFF");
  const [buttonFont, setButtonFont] = useState("Mona Sans");
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showButtonPicker, setShowButtonPicker] = useState(false);

  const fonts = ["Mona Sans", "Arial", "Helvetica", "Times New Roman"]; 

  const togglePrimaryPicker = () => setShowPrimaryPicker(!showPrimaryPicker);
  const toggleButtonPicker = () => setShowButtonPicker(!showButtonPicker);

  const project_item = ["POTLOCK Campaigns", "Direct Account"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target as Node) &&
        assetTriggerRef.current &&
        !assetTriggerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setShowDropdown2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = () => {
    const config = {
      Address: address || "your-wallet-id-here",
      donationTarget:
        donationTarget === "Select Donation Type"
          ? "POTLOCK Campaigns"
          : donationTarget,
      buttonColor: buttonColor,
      Asset:
        asset !== "Select which asset you want to receive."
          ? asset
          : "your-asset-name-here",
    };

    const encodedConfig = btoa(JSON.stringify(config));

    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Widget Test Page</title>
</head>
<body>
  <h1>Test Page</h1>
  <p>This page tests the widget integration.</p>
  <script 
    async 
    src="https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@latest/dist/widget.js" 
    data-config="${encodedConfig}">
  </script>
</body>
</html>`;

    navigator.clipboard
      .writeText(htmlCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        alert("Copy failed");
      });
  };

  const handleCopy2 = () => {
    const code = `import { useEffect, useRef } from 'react';

function App() {
  useEffect(() => {
    const scriptSrc = 'https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@latest/dist/widget.js';
    
    // Remove existing script if any
    const existing = document.querySelector(\`script[src="\${scriptSrc}"]\`);
    if (existing) existing.remove();

    const config = {
      Address: '${address || "your-wallet-id-here"}',
      donationTarget: '${
        donationTarget === "Select Donation Type"
          ? "POTLOCK Campaigns"
          : donationTarget
      }',
      buttonColor: '${buttonColor}',
      Asset: '${
        asset !== "Select which asset you want to receive."
          ? asset
          : "your-asset-name-here"
      }'
    };

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.setAttribute('data-config', btoa(JSON.stringify(config)));

    script.onload = () => {
      if (typeof window.initDonationWidget === 'function') {
        window.initDonationWidget();
      }
    };

    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(\`script[src="\${scriptSrc}"]\`);
      if (s) s.remove();
    };
  }, []);

  return (
    <div>
      <div id="widget-root" style={{ /* your style */ }}></div>
    </div>
  );
}

export default App;`;

    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied2(true);
        setTimeout(() => setIsCopied2(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        alert("Copy failed");
      });
  };

  useEffect(() => {
    const scriptSrc = `https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@latest/dist/widget.js`;

    const widgetRoot = document.getElementById("widget-root");
    if (widgetRoot) widgetRoot.innerHTML = "";

    if (activeTab === "preview") {
      const old = document.querySelector(`script[src="${scriptSrc}"]`);
      if (old) old.remove();

      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;

      const params = {
        Address: address,
        donationTarget:
          donationTarget === "Select Donation Type"
            ? "POTLOCK Campaigns"
            : donationTarget,
        buttonColor,
        Asset:
          asset !== "Select which asset you want to receive."
            ? asset
            : "your-asset-name-here",
        textColor: primaryColor,
        fontType: buttonFont,
      };
      script.setAttribute("data-config", btoa(JSON.stringify(params)));

      script.onload = () => {
        console.log("Widget reloaded for preview");
        if (typeof (window as any).initDonationWidget === "function") {
          (window as any).initDonationWidget();
        }
      };

      script.onerror = (e) => console.error("Failed to load widget", e);
      document.body.appendChild(script);
    }
  }, [
    activeTab,
    address,
    donationTarget,
    buttonColor,
    asset,
    primaryColor,
    buttonFont,
  ]);

  const fetchTokens = async () => {
    try {
      const res = await fetch("https://1click.chaindefuser.com/v0/tokens", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setPool(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setPool(null);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  const ColorPicker = ({
    onColorChange,
  }: {
    onColorChange: (color: string) => void;
  }) => {
    const [color, setColor] = useState(`#FFFF`);

    const handleChange = (newColor: any) => {
      setColor(newColor);
      // const rgbaString = `rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, ${newColor.a})`;
      onColorChange(newColor);
    };

    return (
      <div className="w-full sm:w-[220px]">
        <HexColorPicker color={color} onChange={handleChange} />
      </div>
    );
  };

  const ColorPicker2 = ({
    onColorChange,
  }: {
    onColorChange: (color: string) => void;
  }) => {
    const [color, setColor] = useState(`#FFFF`);

    const handleChange = (newColor: any) => {
      setColor(newColor);
      onColorChange(newColor);
    };

    return (
      <div className="w-full sm:w-[220px]">
        <HexColorPicker color={color} onChange={handleChange} />
      </div>
    );
  };

  const handleColorChange = (color: string) => {
    setButtonColor(color);
  };

  const handleColorChange2 = (color: string) => {
    setPrimaryColor(color);
  };

  return (
    <div className="flex flex-col min-h-screen text-black bg-white sm:flex-row">
      <div className="w-full p-4 bg-white border-b sm:w-[600px] sm:border-b-0 sm:border-r border-neutral-200 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-3 sm:text-xl sm:mb-4">
            Widget Configuration
          </h2>
          <p className="text-gray-500 text-xs mb-3 sm:text-sm sm:mb-4">
            Adjust settings and see the live preview or embed code
          </p>
          <div
            className="w-full max-h-[calc(100vh-200px)] p-4 border border-gray-300 rounded-lg flex flex-col justify-between sm:p-6 sm:max-h-[746px]"
            style={{ gap: "10px" }}
          >
            <div className="overflow-y-auto">
              <div
                onClick={() => {
                  setOpenIndexGeneral(!openIndexGeneral);
                  setGeneralSettings(!generalSettings);
                  setSocials(false);
                  setTheme(false);
                  setOpenIndexSocial(false);
                  setOpenIndexTheme(false);
                }}
                className="w-full sm:w-[400px] mb-4 h-16 sm:h-20 p-4 sm:p-6 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
              >
                <h3 className="text-base font-medium text-gray-800 transition-colors duration-300 sm:text-lg">
                  General Settings
                </h3>
                <span className="text-lg font-bold text-gray-600 transition-transform duration-300 sm:text-xl">
                  {openIndexGeneral ? "-" : "+"}
                </span>
              </div>

              {generalSettings && (
                <div className="space-y-4 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-base font-medium mb-2 sm:text-lg">
                      Donation Target Type
                    </h3>
                    <div
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full h-12 sm:h-12 p-3 sm:p-4 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
                    >
                      <p className="text-gray-600 text-xs sm:text-sm truncate">
                        {donationTarget}
                      </p>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:w-4 sm:h-4"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="#0F172A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {showDropdown && (
                      <div ref={dropdownRef} className="relative">
                        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                          {project_item.map((type, index) => (
                            <div
                              key={index}
                              className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 cursor-pointer hover:bg-gray-100 ${
                                donationTarget === type ? "bg-gray-50" : ""
                              }`}
                              onClick={() => {
                                setDonationTarget(type);
                                setShowDropdown(false);
                              }}
                            >
                              <span className="text-xs sm:text-sm text-gray-800">
                                {type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {donationTarget === "Direct Account" && (
                    <div>
                      <h3 className="text-base font-medium mb-2 sm:text-lg">
                        Asset Type
                      </h3>
                      <div
                        ref={assetTriggerRef}
                        onClick={() => setShowDropdown2(!showDropdown2)}
                        className="w-full h-12 sm:h-12 p-3 sm:p-4 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
                      >
                        <p className="text-gray-600 text-xs sm:text-sm truncate">
                          {asset}
                        </p>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-4 sm:h-4"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="#0F172A"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {showDropdown2 && (
                        <div ref={dropdownRef2} className="relative">
                          <div
                            className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl z-20 overflow-hidden"
                            style={{ maxHeight: "250px", overflowY: "auto" }}
                          >
                            <div className="px-3 py-2 sm:px-4 sm:py-3 border-b border-gray-200">
                              <span className="text-xs sm:text-sm font-semibold text-gray-800">
                                Available Tokens
                              </span>
                            </div>
                            <div className="px-3 py-2 sm:px-4 sm:py-2">
                              <input
                                type="text"
                                placeholder="Search by symbol..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                            </div>
                            {pool
                              ?.filter((token: any) =>
                                token.symbol
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                              .map((token: any, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center px-3 py-2 sm:px-4 sm:py-3 cursor-pointer hover:bg-gray-100"
                                  onClick={() => {
                                    setAsset(`${token.assetId}`);
                                    setShowDropdown2(false);
                                    setSearchQuery("");
                                  }}
                                >
                                  <span className="text-xs sm:text-sm text-gray-800">
                                    {token.symbol} ({token.blockchain})
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {donationTarget === "POTLOCK Campaigns" && (
                    <div>
                      <h3 className="text-base font-medium mt-4 mb-2 sm:text-lg sm:mt-5">
                        Referral ID
                      </h3>
                      <input
                        type="text"
                        className="w-full h-12 sm:h-12 rounded-md border border-gray-300 p-3 sm:p-4 text-xs sm:text-sm"
                        placeholder="Enter referral ID"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  )}

                  {donationTarget === "Direct Account" && (
                    <div>
                      <h3 className="text-base font-medium mt-4 mb-2 sm:text-lg sm:mt-5">
                        Wallet address
                      </h3>
                      <input
                        type="text"
                        className="w-full h-12 sm:h-12 rounded-md border border-gray-300 p-3 sm:p-4 text-xs sm:text-sm"
                        placeholder="Enter Wallet Address you'd like to donate to"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  )}
                  <Link
                    href="https://staging.alpha.potlock.org/campaign/create"
                    legacyBehavior
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center gap-6  space-x-2 mt-8"
                    >
                      <div style={{ fontSize: 17, fontWeight: 550 }}>
                        Create New Project
                      </div>
                      <svg
                        className="cursor-pointer"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {}}
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="15.5"
                          fill="#E5E5E5"
                          stroke="#A3A3A3"
                        />
                        <path
                          d="M16 9V23"
                          stroke="#737373"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 16H23"
                          stroke="#737373"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              )}

              <div
                className="w-full mb-4 h-16 sm:h-20 p-4 sm:p-6 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
                onClick={() => {
                  setOpenIndexSocial(!openIndexSocial);
                  setSocials(!socials);
                  setShowDropdown(false);
                  setShowDropdown2(false);
                  setGeneralSettings(false);
                  setTheme(false);
                  setOpenIndexTheme(false);
                  setOpenIndexGeneral(false);
                }}
              >
                <h3 className="text-base font-medium sm:text-lg">
                  Social Sharing
                </h3>
                <span className="text-lg sm:text-xl font-bold">
                  {openIndexSocial ? "-" : "+"}
                </span>
              </div>

              {socials && (
                <div className="space-y-4 mb-6 sm:mb-10">
                  <div>
                    <h3 className="text-base font-medium mt-4 mb-2 sm:text-lg sm:mt-5">
                      Enter message
                    </h3>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 p-3 sm:p-4 text-xs sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your message here..."
                      onChange={(e) => setShareUrl(e.target.value)}
                    ></textarea>

                    <h3 className="text-base font-medium mt-4 mb-2 sm:text-lg sm:mt-5">
                      POTLOCK Link
                    </h3>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 sm:p-4 text-xs sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your message here..."
                      onChange={(e) => setlink(e.target.value)}
                    ></input>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-900 active:scale-95 transition-all duration-200 ease-in-out shadow-sm mt-3 sm:mt-4"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 8a3 3 0 10-2.83-4H9a3 3 0 100 2h6.17A3.001 3.001 0 0018 8zm0 2a3 3 0 00-2.83 2H9a3 3 0 100 2h6.17A3.001 3.001 0 0018 18a3 3 0 100-6z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              )}

              <div
                className="w-full mb-4 h-16 sm:h-20 p-4 sm:p-6 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
                onClick={() => {
                  setOpenIndexTheme(!openIndexTheme);
                  setTheme(!theme);
                  setShowDropdown(false);
                  setShowDropdown2(false);
                  setGeneralSettings(false);
                  setSocials(false);
                  setOpenIndexGeneral(false);
                  setOpenIndexSocial(false);
                }}
              >
                <h3 className="text-base font-medium sm:text-lg">
                  Theme Customization
                </h3>
                <span className="text-lg sm:text-xl font-bold">
                  {openIndexTheme ? "-" : "+"}
                </span>
              </div>
              {theme && (
                <>
                  <div className="space-y-6 p-4">
                    <div>
                      <h3 className="text-base font-medium mb-2 sm:text-lg">
                        Button Text Color
                      </h3>
                      <p className="text-sm text-gray-500">
                        Affects the text on the button
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <div
                          className="w-6 h-6 rounded p-3 sm:p-4 cursor-pointer rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
                          style={{ backgroundColor: primaryColor }}
                          onClick={togglePrimaryPicker}
                        />
                        <input
                          type="text"
                          value={primaryColor}
                          readOnly
                          className="w-full h-12 sm:h-12 p-3 sm:p-4 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer "
                          onClick={togglePrimaryPicker}
                        />
                      </div>
                      {showPrimaryPicker && (
                        <div className="mt-4">
                          <ColorPicker2 onColorChange={handleColorChange2} />
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-medium mb-2 sm:text-lg">
                        Button Color
                      </h3>
                      <p className="text-sm text-gray-500">
                        Affects the buttons on your form
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <div
                          className="w-6 h-6 rounded p-3 sm:p-4 cursor-pointer rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gray-50 active:scale-[0.98]"
                          style={{ backgroundColor: buttonColor }}
                          onClick={toggleButtonPicker}
                        />
                        <input
                          type="text"
                          value={buttonColor}
                          readOnly
                          className="w-full h-12 sm:h-12 p-3 sm:p-4 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer "
                          onClick={toggleButtonPicker}
                        />
                      </div>
                      {showButtonPicker && (
                        <div className="mt-4">
                          <ColorPicker onColorChange={handleColorChange} />
                        </div>
                      )}
                    </div>

                    <div>
                      {/* <label className="block text-sm font-medium text-gray-500">Button Font</label> */}

                      <h3 className="text-base font-medium mb-2 sm:text-lg">
                        Button Font
                      </h3>
                      <p className="text-sm text-gray-500">
                        Choose the font for your buttons
                      </p>
                      <select
                        value={buttonFont}
                        onChange={(e) => setButtonFont(e.target.value)}
                        className="w-full h-13 sm:h-13 p-3 sm:p-4 rounded border border-[#E2E8F0] flex items-center justify-between cursor-pointer "
                      >
                        {fonts.map((font) => (
                          <option key={font} value={font}>
                            {font}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-md sm:w-96 h-full sm:h-auto">
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h2 className="text-base font-bold text-gray-800 sm:text-lg">
                      Share this page
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `${shareUrl} ${link}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 sm:space-x-3 text-blue-600 hover:underline text-xs sm:text-sm"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8.1v-2.89h2.34V9.77c0-2.3 1.36-3.57 3.45-3.57.7 0 1.43.12 1.43.12v1.57H14.6c-1.3 0-1.7.81-1.7 1.64v1.97h2.89l-.46 2.89h-2.43v6.99C18.34 21.13 22 17 22 12z" />
                      </svg>
                      <span>Share on Facebook</span>
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `${shareUrl} ${link}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 sm:space-x-3 text-black hover:underline text-xs sm:text-sm"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.248 3h4.912l3.78 5.113L17.91 3H22l-6.756 7.56L22 21h-5.079l-4.056-5.488L8.073 21H4l7.086-7.939L4.248 3zm2.73 1.29l5.043 6.866L6.072 20h2.199l5.058-5.851L18.25 20h1.502l-5.448-7.255L19.922 4h-2.174l-4.866 5.56L7.052 4H6.978z" />
                      </svg>
                      <span>Share on X</span>
                    </a>

                    <a
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        `${shareUrl} ${link}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 sm:space-x-3 text-blue-800 hover:underline text-xs sm:text-sm"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.94 6.5c0 1.11-.9 2.01-2 2.01s-2-.9-2-2.01a2 2 0 114 0zM4.94 9H2V22h2.94V9zm6.75 0H9v13h2.69v-7.02c0-2.31 3-2.5 3 0V22h2.75v-7.76c0-4.56-5.22-4.39-6.75-2.14V9z" />
                      </svg>
                      <span>Share on LinkedIn</span>
                    </a>

                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `${shareUrl} ${link}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 sm:space-x-3 text-green-500 hover:underline text-xs sm:text-sm"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16.01 2.003A14 14 0 002.22 22.267L2 30l7.858-2.063A14 14 0 1016 2zm7.75 19.833c-.325.913-1.611 1.675-2.553 1.9-.687.165-1.57.236-4.54-.968-3.816-1.522-6.271-5.244-6.464-5.49-.192-.248-1.547-2.06-1.547-3.933 0-1.872.974-2.795 1.318-3.183.343-.386.748-.483 1.002-.483h.71c.228 0 .535.04.778.593.298.684 1.012 2.365 1.101 2.537.089.174.148.387.03.623-.117.236-.175.387-.344.59-.174.203-.366.455-.52.61-.173.174-.353.364-.152.716.2.353.894 1.474 1.916 2.386 1.317 1.174 2.429 1.537 2.782 1.711.353.174.56.145.768-.088.208-.232.883-1.026 1.118-1.38.236-.355.473-.295.803-.177.33.12 2.1.993 2.457 1.172.36.178.6.266.688.413.09.15.09.871-.235 1.783z" />
                      </svg>
                      <span>Share on WhatsApp</span>
                    </a>

                    <button
                      className="flex items-center space-x-2 sm:space-x-3 text-gray-600 hover:underline text-xs sm:text-sm"
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl);
                        alert("Link copied!");
                      }}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v16a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 18H8V7h11v16z" />
                      </svg>
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center mt-auto pt-3 sm:pt-4">
              <p
                className="text-gray-500 text-xs sm:text-sm"
                style={{ fontSize: "0.875rem" }}
              >
                Powered by{" "}
                <span className="text-black font-bold text-lg sm:text-xl">
                  🫕 POTLOCK
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 sm:p-6 bg-white rounded-xl flex flex-col justify-between">
        <div className="flex bg-[#F1F5F9] rounded-xl p-1 w-fit mx-auto my-4">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "preview"
                ? "bg-white text-black shadow"
                : "text-slate-500"
            }`}
          >
            Live Preview
          </button>
          <button
            onClick={() => setActiveTab("embed")}
            className={`px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "embed"
                ? "bg-white text-black shadow"
                : "text-slate-500"
            }`}
          >
            Embedded Code
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {activeTab === "embed" && (
            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl w-full max-w-full sm:max-w-4xl mx-auto mt-4 sm:mt-5 overflow-x-auto">
              <h2 className="text-base font-semibold mb-2 sm:text-xl">
                Integrate Your Widget
              </h2>
              <p className="text-gray-500 text-xs mb-3 sm:text-sm sm:mb-4">
                Copy the code below to embed the widget on your website
              </p>

              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <p className="font-semibold text-sm sm:text-base">
                  HTML Embeddable Code
                </p>
                <div
                  className="cursor-pointer transition transform active:scale-95"
                  onClick={handleCopy}
                >
                  {isCopied ? (
                    <svg
                      className="text-green-600 animate-fade-in-out"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#292929"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      <path
                        d="M3 14.8269C1.9 14.8269 1 13.9269 1 12.8269V2.8269C1 1.7269 1.9 0.826904 3 0.826904H13C14.1 0.826904 15 1.7269 15 2.8269M9 6.8269H19C20.1046 6.8269 21 7.72233 21 8.8269V18.8269C21 19.9315 20.1046 20.8269 19 20.8269H9C7.89543 20.8269 7 19.9315 7 18.8269V8.8269C7 7.72233 7.89543 6.8269 9 6.8269Z"
                        stroke="#292929"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <pre className="bg-white border border-gray-200 p-3 sm:p-4 rounded-md text-xs sm:text-sm font-mono text-gray-800 overflow-x-auto mb-4 sm:mb-6">
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Widget Test Page</title>
</head>
<body>
  <h1>Test Page</h1>
  <p>This page tests the widget integration.</p>
  <script 
    async 
    src="https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@latest/dist/widget.js" 
    data-config="{encodedConfig}">
  </script>
</body>
</html>`}
              </pre>

              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <p className="font-semibold text-sm sm:text-base">React code</p>
                <div
                  className="cursor-pointer transition transform active:scale-95"
                  onClick={handleCopy2}
                >
                  {isCopied2 ? (
                    <svg
                      className="text-green-600 animate-fade-in-out"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#292929"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      <path
                        d="M3 14.8269C1.9 14.8269 1 13.9269 1 12.8269V2.8269C1 1.7269 1.9 0.826904 3 0.826904H13C14.1 0.826904 15 1.7269 15 2.8269M9 6.8269H19C20.1046 6.8269 21 7.72233 21 8.8269V18.8269C21 19.9315 20.1046 20.8269 19 20.8269H9C7.89543 20.8269 7 19.9315 7 18.8269V8.8269C7 7.72233 7.89543 6.8269 9 6.8269Z"
                        stroke="#292929"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <pre className="bg-white border border-gray-200 p-3 sm:p-4 rounded-md text-xs sm:text-sm font-mono text-gray-800 overflow-x-auto mb-4 sm:mb-6">
                {`import { useEffect, useRef } from 'react';

function App() {
  useEffect(() => {
    const scriptSrc = 'https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@latest/dist/widget.js';
    
    // Remove existing script if any
    const existing = document.querySelector(\`script[src="\${scriptSrc}"]\`);
    if (existing) existing.remove();

    const config = {
      Address: '${address || "your-wallet-id-here"}',
      donationTarget: '${
        donationTarget === "Select Donation Type"
          ? "POTLOCK Campaigns"
          : donationTarget
      }',
      buttonColor: '${buttonColor}',
      Asset: '${
        asset !== "Select which asset you want to receive."
          ? asset
          : "your-asset-name-here"
      }'
    };

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.setAttribute('data-config', btoa(JSON.stringify(config)));

    script.onload = () => {
      if (typeof window.initDonationWidget === 'function') {
        window.initDonationWidget();
      }
    };

    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(\`script[src="\${scriptSrc}"]\`);
      if (s) s.remove();
    };
  }, []);

  return (
    <div>
      <div id="widget-root" style={{ /* your style */ }}></div>
    </div>
  );
}

export default App;`}
              </pre>
            </div>
          )}

          {activeTab === "preview" && (
            <div
              id="widget-root"
              className="flex items-center justify-center w-full"
              style={{
                marginTop: "60px",
              }}
            ></div>
          )}
        </div>

        <footer className="mt-auto pt-4 sm:pt-6 ">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex justify-center mb-4 sm:mb-0">
              <p
                className="text-gray-500 text-xs sm:text-sm"
                style={{ fontSize: "0.875rem" }}
              >
                Powered by{" "}
                <span className="text-black font-bold text-lg sm:text-xl">
                  🫕 POTLOCK
                </span>
              </p>
            </div>
            <div className="text-center sm:text-right">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z"
                    fill="#292929"
                  />
                </svg>

                <h4 className="text-sm font-semibold text-gray-800 mb-0">
                  Github repo links
                </h4>
              </div>

              <ul className="space-y-1">
                <li>
                  <a
                    href="https://github.com/PotLock/cross-chain-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#292929", fontWeight: 500 }}
                    className="text-xs sm:text-sm underline"
                  >
                    Cross-Chain Widget
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PotLock/example_widget_playground"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#292929", fontWeight: 500 }}
                    className="text-xs sm:text-sm underline"
                  >
                    Widget Playground
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PotLock/cross-chain-widget-landing-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#292929", fontWeight: 500 }}
                    className="text-xs sm:text-sm underline"
                  >
                    Landing Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WidgetConfig;
