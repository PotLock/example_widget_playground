"use client";

export default function Perfect() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900">
            Perfect for Any Use Case
          </h1>
          <p className="text-gray-600 mt-2">
            From non profits to content creators, our widget adapts to your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="block md:hidden bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2  mb-3">
              <img src="/assets/wave.svg" alt="Background" />
              <h2
                className="text-lg font-semibold text-gray-900"
                style={{ fontSize: 16 }}
              >
                NonProfit Fundraising
              </h2>
            </div>

            <p className="text-gray-600 text-sm mb-4" style={{ fontSize: 14 }}>
              Encourage users to support your favorite non-profit organizations
              with seamless donations.
            </p>

            <div className="relative justify-center mb-4">
              <img src="/assets/SVG.svg" alt="Background" />
            </div>
          </div>

          <div className="hidden md:block custom-card3 bg-white p-6 rounded-xl shadow-sm relative">
            <div className="flex flex-row items-center gap-2 mb-5">
              <img src="/assets/wave.svg" alt="Wave" />
              <h2 className="text-lg font-semibold text-gray-900">
                NonProfit Fundraising
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 16 }}>
              Encourage users to support your favorite non-profit organizations
              with seamless donations.
            </p>

            <div className="relative w-full aspect-[3/2] min-h-[300px] mb-4">
              <img
                src="/assets/SVG.svg"
                alt="Nonprofit Visual"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="block md:hidden bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2  mb-3">
              <img src="/assets/wave.svg" alt="Wave" />
              <h2
                className="text-lg font-semibold text-gray-900"
                style={{ fontSize: 16 }}
              >
                Project & Idea Funding
              </h2>
            </div>

            <p className="text-gray-600 text-sm  mb-4" style={{ fontSize: 14 }}>
              Receive donations for your open-source projects, community
              initiatives, or innovative ideas.
            </p>

            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Feedback.svg"
                alt="Feedback 1"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="/assets/Feedback2.svg"
                alt="Feedback 2"
                className="absolute top-10 inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="hidden md:block custom-card3 bg-white p-6 rounded-xl shadow-sm relative">
            <div className="flex flex-row items-center gap-2 mb-5">
              <img src="/assets/wave.svg" alt="Wave" />
              <h2 className="text-lg font-semibold text-gray-900">
                Project & Idea Funding
              </h2>
            </div>

            <p className="text-gray-600 text-sm mb-4" style={{ fontSize: 16 }}>
              Receive donations for your open-source projects, community
              initiatives, or innovative ideas.
            </p>

            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Feedback.svg"
                alt="Feedback 1"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="/assets/Feedback2.svg"
                alt="Feedback 2"
                className="absolute top-20 inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="block md:hidden bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2  mb-3">
              <img src="/assets/info.svg" alt="Background" />
              <h2
                className="text-lg font-semibold text-gray-900"
                style={{ fontSize: 16 }}
              >
                API Payments
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 14 }}>
              Enable programmable crypto payments for services and digital
              products.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Illustration.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block custom-card3  bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2 mb-5">
              <img src="/assets/info.svg" alt="Background" />
              <h2 className="text-lg font-semibold text-gray-900">
                API Payments
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 16 }}>
              Enable programmable crypto payments for services and digital
              products.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Illustration.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="block md:hidden bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2  mb-3">
              <img src="/assets/hand.svg" alt="Background" />
              <h2
                className="text-lg font-semibold text-gray-900"
                style={{ fontSize: 16 }}
              >
                Campaign Donations
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 14 }}>
              Run refundable funding campaigns with transparent goals.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/SVG2.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block custom-card3  bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2 mb-5">
              <img src="/assets/hand.svg" alt="Background" />
              <h2 className="text-lg font-semibold text-gray-900">
                Campaign Donations
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 16 }}>
              Run refundable funding campaigns with transparent goals.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/SVG2.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="block md:hidden bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2  mb-3">
              <img src="/assets/cash.svg" alt="Background" />
              <h2
                className="text-lg font-semibold text-gray-900"
                style={{ fontSize: 16 }}
              >
                Multichain Donations
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 14 }}>
              Receive contributions from a wide array of blockchain networks,
              with more chains being added regularly.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Group.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block custom-card3  bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2 mb-5">
              <img src="/assets/cash.svg" alt="Background" />
              <h2 className="text-lg font-semibold text-gray-900">
                Multichain Donations
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 16 }}>
              Receive contributions from a wide array of blockchain networks,
              with more chains being added regularly.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Group.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="block md:hidden bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2  mb-3">
              <img src="/assets/hand.svg" alt="Background" />
              <h2
                className="text-lg font-semibold text-gray-900"
                style={{ fontSize: 16 }}
              >
                Tip Creators
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 14 }}>
              Empower your audience to directly support content creators,
              artists, and streamers with tips.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Feedback3.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block custom-card3  bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-row items-center gap-2 mb-5">
              <img src="/assets/hand.svg" alt="Background" />
              <h2 className="text-lg font-semibold text-gray-900">
                Tip Creators
              </h2>
            </div>

            <p className="text-gray-600 text-sm" style={{ fontSize: 16 }}>
              Empower your audience to directly support content creators,
              artists, and streamers with tips.
            </p>
            <div className="relative w-full aspect-[4/3] mb-4">
              <img
                src="/assets/Feedback3.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
