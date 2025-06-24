"use client";

export default function KeySection2() {
  return (
    <div
      id="features"
      className="hidden md:flex items-center justify-center bg-white py-26 px-4 min-h-screen"
    >
      <div className="max-w-7xl w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900">Key Features</h1>
          <p className="text-gray-600 mt-2">
            Everything you need to accept cross-chain support with ease
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div className="custom-card2 bg-white p-6 text-center rounded-xl shadow-sm flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/Background Image.svg" alt="Background" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Effortless Integration
            </h2>
            <p className="text-gray-600 text-sm">
              Add multichain support with a simple modal in minutes, no complex
              coding required with your own branding.
            </p>
          </div>

          <div className="custom-card2 bg-white p-6 text-center rounded-xl shadow-sm flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/Background Image (1).svg" alt="Background" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              No Wallet Integration Needed
            </h2>
            <p className="text-gray-600 text-sm">
              No wallet integration needed - users scan QR codes and pay
              instantly.
            </p>
          </div>

          <div className="custom-card2 bg-white p-6 text-center rounded-xl shadow-sm flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/Background Image (2).svg" alt="Background" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Fee Transparency
            </h2>
            <p className="text-gray-600 text-sm">
              Clear breakdown of network, platform, and referral fees. No hidden
              fees.
            </p>
          </div>

          <div className="custom-card2 bg-white p-6 text-center rounded-xl shadow-sm flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/Background Image (3).svg" alt="Background" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Developer Friendly
            </h2>
            <p className="text-gray-600 text-sm">
              TypeScript-powered with full customization options
            </p>
          </div>

          <div className="custom-card2 bg-white p-6 text-center rounded-xl shadow-sm flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/Background Image (4).svg" alt="Background" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Social Sharing
            </h2>
            <p className="text-gray-600 text-sm">
              Built-in sharing options for viral donation campaigns
            </p>
          </div>

          <div className="custom-card2 bg-white p-6 text-center rounded-xl shadow-sm flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/Background Image (5).svg" alt="Background" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Open Source
            </h2>
            <p className="text-gray-600 text-sm">
              Built on NEAR intents and available under the MIT license. Never
              get rugged
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
