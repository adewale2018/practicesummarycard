import Header from "./components/Header";
import KeyMetrics from "./components/KeyMetrics";
import type { PracticeSummaryProps } from "./types";
import { TrendMiniChart } from "./TrendMiniChart";

function SummaryCard({
  name,
  location,
  conversionRate,
  PracticeStats,
  monthlyTrend,
}: PracticeSummaryProps) {
  return (
    <section className="border border-gray-300 max-w-md rounded-xl px-2 py-4">
      <Header name={name} location={location} conversionRate={conversionRate} />
      <KeyMetrics stats={PracticeStats} />
      <TrendMiniChart data={monthlyTrend} />
    </section>
  );
}

export default SummaryCard;
