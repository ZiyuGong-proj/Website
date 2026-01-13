import PageShell from '@/components/PageShell';

const steps = [
  {
    title: 'Prepare your manuscript',
    detail: 'Follow the journal style guide, include structured abstracts, and ensure data transparency.'
  },
  {
    title: 'Submit online',
    detail: 'Use the submission portal to upload files, cover letter, and disclosure statements.'
  },
  {
    title: 'Peer review',
    detail: 'Double-blind review with at least two independent reviewers.'
  },
  {
    title: 'Decision and production',
    detail: 'Accepted manuscripts move to copyediting and online-first publication.'
  }
];

export default function SubmissionPage() {
  return (
    <PageShell title="Submission guidelines" subtitle="Everything you need to submit your work.">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
          <h2 className="text-lg font-semibold text-ink">Submission pathway</h2>
          <ol className="mt-4 space-y-4 text-sm text-slate-600">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-xs font-semibold text-slate-600">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-slate-600">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <aside className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Key requirements
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Word limit: 8,000 including references</li>
            <li>APA 7th edition style</li>
            <li>Data availability statement</li>
            <li>ORCID encouraged</li>
          </ul>
        </aside>
      </div>
    </PageShell>
  );
}
