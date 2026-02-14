interface MetricCardProps {
  label: string;
  value: string | number;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="flex flex-col bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4">
      <span className="text-[12px] font-normal text-[#6B7280] mb-3">
        {label}
      </span>
      <span className="text-[28px] font-medium text-[#1F2937] leading-none tracking-[-0.01em]">
        {value}
      </span>
    </div>
  );
}
