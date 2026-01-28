function MetricItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex gap-2">
      <span className="text-gray-600 font-medium">{label}:</span>
      <strong className="stat-value">{value || "0"}</strong>
    </div>
  );
}
export default MetricItem;