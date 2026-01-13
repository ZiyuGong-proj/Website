import JournalHeader from '@/components/JournalHeader';

export default function PageShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <JournalHeader />
      <section className="border-b border-slate-100 bg-white">
        <div className="container-tight py-8">
          <h1 className="text-3xl font-semibold text-ink">{title}</h1>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
      </section>
      <main className="container-tight py-10">{children}</main>
    </div>
  );
}
