import { ReactNode } from "react";

interface FieldContainerProps {
  label: string;
  description?: string;
  htmlFor: string;
  children: ReactNode;
}

export default function FieldContainer({
  label,
  htmlFor,
  description,
  children,
}: FieldContainerProps) {
  return (
    <div className={`flex flex-col lg:grid lg:grid-cols-form gap-3`}>
      <label
        htmlFor={htmlFor}
        className="text-zinc font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
        <span className="mt-0.5 block text-sm font-normal text-zinc-500">
          {description}
        </span>
      </label>
      <div className="grid grid-cols-2 gap-6">{children}</div>
    </div>
  );
}
