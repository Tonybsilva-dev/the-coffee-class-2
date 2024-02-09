interface Props {
  title: string;
  description?: string;
}

export default function TitlePage({ title, description }: Props) {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">{title}</h1>
      {description && <span>{description}</span>}
    </>
  );
}
