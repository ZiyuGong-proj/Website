import PageShell from '@/components/PageShell';
import { issues } from '@/data/issues';

export default function IssuesPage() {
  return (
    <PageShell title="All issues" subtitle="Archive of past issues and special collections.">
      <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
        <ul className="space-y-4">
          {issues.map((issue) => (
            <li key={issue.id} className="border-b border-slate-100 pb-4 last:border-none">
              <p className="text-sm font-semibold text-ink">{issue.label}</p>
              <p className="text-sm text-slate-600">{issue.date}</p>
              <p className="text-sm text-slate-500">{issue.theme}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
