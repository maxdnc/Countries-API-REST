interface InfoItemProps {
  label: string;
  value: string | number | string[] | null | undefined;
}

export default function InfoItem({ label, value }: InfoItemProps) {
  const displayValue = value ?? "None";
  return (
    <p>
      {label}: <span className="text-primary/70">{displayValue}</span>
    </p>
  );
}
