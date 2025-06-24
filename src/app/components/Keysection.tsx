"use client";

export default function KeySection() {
  return (
    <div className=" flex items-center justify-center bg-white py-26 px-4">
      <div className=" max-w-8xl">
        <h1 className="text-2xl text-black font-bold text-center mb-8">
          Take payments without worry about wallets and chains
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          <div className="custom-card bg-gray-50 text-center p-4">
            <div className="flex justify-center mb-4">
              <img src="/assets/Card1.svg" alt="Card1" />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Configure your widget
            </h2>
            <p className="text-gray-600">
              Sign up to the playground and set up your widget configuration
              from the dashboard
            </p>
          </div>

          <div className="custom-card bg-gray-50 text-center p-4">
            <div className="flex justify-center mb-4">
              <img src="/assets/Card2.svg" alt="Card2" />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Paste into your app
            </h2>
            <p className="text-gray-600">
              Copy the generated HTML snippet and embed it into your website,
              wallet or app
            </p>
          </div>

          <div className="custom-card bg-gray-50 text-center p-4">
            <div className="flex justify-center mb-4">
              <img src="/assets/Card3.svg" alt="Card3" />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Receive Support
            </h2>
            <p className="text-gray-600">
              Start receiving cross chain donations directly to your NEAR
              account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
