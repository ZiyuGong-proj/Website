import Link from 'next/link';
import { journal } from '@/data/journal';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-50 via-white to-slate-50">
      <div className="container-tight grid gap-6 py-10 lg:grid-cols-[1.6fr_0.7fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Journal Home
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            {journal.name}
          </h1>
          <p className="mt-2 text-base text-slate-600">{journal.englishName}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              Impact Factor {journal.impactFactor}
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              5-Year Impact Factor {journal.fiveYearImpactFactor}
            </button>
            <Link
              href={journal.homepageUrl}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Journal Homepage
            </Link>
            <Link
              href="/submission"
              className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-subtle"
            >
              Submission Guidelines
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="h-44 w-12 rounded-sm bg-gradient-to-b from-accent to-rose-400" />
        </div>
      </div>
    </section>
  );
}
