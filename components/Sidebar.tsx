import Link from 'next/link';

const socialLinks = [
  { label: 'Facebook', href: 'https://example.com/facebook' },
  { label: 'X', href: 'https://example.com/x' },
  { label: 'LinkedIn', href: 'https://example.com/linkedin' },
  { label: 'YouTube', href: 'https://example.com/youtube' },
  { label: 'RSS', href: 'https://example.com/rss' }
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <section className="rounded-lg border border-slate-100 bg-white p-5 shadow-subtle">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Browse journal
        </h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link className="link-muted" href="/issues">
              Current issue
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="/issues">
              OnlineFirst
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="/issues">
              All issues
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="/issues">
              Free sample
            </Link>
          </li>
        </ul>
      </section>
      <section className="rounded-lg border border-slate-100 bg-white p-5 shadow-subtle">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Journal information
        </h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link className="link-muted" href="/about">
              Journal overview and metrics
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="/editorial-board">
              Editorial board
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="/submission">
              Submission guidelines
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="https://example.com/reprints">
              Reprints
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="https://example.com/permissions">
              Journal permissions
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="https://example.com/subscribe">
              Subscribe
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="https://example.com/recommend">
              Recommend to library
            </Link>
          </li>
          <li>
            <Link className="link-muted" href="https://example.com/advertising">
              Advertising and promotion
            </Link>
          </li>
        </ul>
      </section>
      <section className="rounded-lg border border-slate-100 bg-white p-5 shadow-subtle">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Keep up to date
        </h3>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-slate-200 px-3 py-1 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Sign up to receive new issue alerts, early access articles, and special
          collections.
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
        >
          Sign Up
        </button>
        <Link href="https://example.com/alerts" className="mt-3 block text-sm font-medium">
          View all options
        </Link>
      </section>
    </aside>
  );
}
