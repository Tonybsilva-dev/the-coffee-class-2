interface Props {
  subtitle: string;
  description?: string;
  children?: React.ReactNode;
}

export default function SubtitlePage({
  subtitle,
  description,
  children,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-300 pb-5 dark:border-zinc-700">
      <div className="space-y-1">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{subtitle}</h2>
        {description && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">{description}</span>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
