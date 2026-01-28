import MetricItem from "./MetricItem";
import type { PracticeStats } from "../types";

function KeyMetrics({ stats }: { stats: PracticeStats }) {
  return (
    <div className="flex justify-between flex-wrap mt-2 border-t border-gray-300 p-2">
      <MetricItem label="New Patients" value={stats.newPatientsThisMonth} />
      <MetricItem
        label="Appointment Request"
        value={stats.appointmentRequests}
      />
      <MetricItem label="Conversion Rate (%)" value={stats.conversionRate} />
      <MetricItem label="Show Rate" value={stats.showRate} />
    </div>
  );
}
export default KeyMetrics;
