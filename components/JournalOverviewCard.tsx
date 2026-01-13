import Image from 'next/image';
import Link from 'next/link';
import { journal } from '@/data/journal';

export default function JournalOverviewCard() {
  return (
    <section className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
      <div className="grid gap-6 md:grid-cols-[140px_1fr]">
        <div className="relative h-44 w-32 overflow-hidden rounded-md border border-slate-100">
          <Image
            src={journal.coverImage}
            alt={`${journal.name} cover`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-ink">Journal overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {journal.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/about" className="font-medium text-brand-600">
              View full journal description
            </Link>
            <Link href={journal.copeUrl} className="font-medium text-brand-600">
              COPE member journal information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
