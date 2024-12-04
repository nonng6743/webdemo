import BitcoinChart from "@/components/BitcoinChart/BitcoinChart";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bitcoin Price Tracker</h1>
      <BitcoinChart />
    </main>
  );
}
