type TrendProps = {
  data: number[];
};

export const TrendMiniChart = ({ data }: TrendProps) => {
  const max = Math.max(...data);

  return (
    <div className="flex items-end gap-1 h-12 mt-2">
      {data.map((value, index) => {
        const height = (value / max) * 100;

        return (
          <div
            key={index}
            className="flex-1 rounded-sm bg-green-500/80"
            style={{ height: `${height}%` }}
            title={`Month ${index + 1}: ${value}`}
          />
        );
      })}
    </div>
  );
};
