import BitcoinChart from "@/components/BitcoinChart/BitcoinChart";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Bitcoin Price Tracker
      </h1>

      {/* Chart Component */}
      <div className="w-full max-w-5xl">
        <BitcoinChart />
      </div>
    </main>
  );
}
