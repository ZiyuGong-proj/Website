import PageShell from '@/components/PageShell';
import { journal } from '@/data/journal';

export default function AboutPage() {
  return (
    <PageShell
      title="Journal overview and metrics"
      subtitle="Scope, aims, and publishing performance indicators."
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
          <h2 className="text-lg font-semibold text-ink">About {journal.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {journal.description} The journal welcomes interdisciplinary work that advances
            understanding of Macau, the Greater Bay Area, and comparative regional
            studies in Asia.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            We prioritize rigorous methods, clarity of argument, and contributions to
            policy and scholarly debates.
          </p>
        </section>
        <aside className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Metrics
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">Impact Factor</dt>
              <dd className="font-semibold text-ink">{journal.impactFactor}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">5-Year Impact Factor</dt>
              <dd className="font-semibold text-ink">{journal.fiveYearImpactFactor}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">Time to first decision</dt>
              <dd className="font-semibold text-ink">24 days</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">Acceptance rate</dt>
              <dd className="font-semibold text-ink">18%</dd>
            </div>
          </dl>
        </aside>
      </div>
    </PageShell>
  );
}
