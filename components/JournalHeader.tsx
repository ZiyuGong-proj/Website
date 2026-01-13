import Link from 'next/link';

const icons = {
  user: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"
      />
    </svg>
  ),
  cart: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M7 18a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm8 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM7.16 14h8.66a2 2 0 0 0 1.9-1.37l2.4-7H6.15L5.6 3H2v2h2.1l3.4 9.11A2 2 0 0 0 7.16 14z"
      />
    </svg>
  )
};

export default function JournalHeader() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="container-tight flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:gap-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-ink">
          SageJournals
        </Link>
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="journal-scope">
            Search scope
          </label>
          <select
            id="journal-scope"
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 sm:w-52"
            defaultValue="this"
          >
            <option value="this">Search this journal</option>
            <option value="all">Search all journals</option>
          </select>
          <div className="flex flex-1 items-center gap-2">
            <label className="sr-only" htmlFor="journal-search">
              Search terms
            </label>
            <input
              id="journal-search"
              className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm"
              placeholder="Enter search terms…"
            />
            <Link
              href="/search"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Advanced search
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <button
            className="flex items-center gap-2 text-sm font-medium hover:text-ink"
            type="button"
          >
            {icons.user}
            Access / Profile
          </button>
          <button
            className="flex items-center gap-2 text-sm font-medium hover:text-ink"
            type="button"
          >
            {icons.cart}
            Cart
          </button>
        </div>
      </div>
      <nav className="border-t border-slate-100 bg-slate-25">
        <div className="container-tight flex flex-wrap gap-4 py-3 text-sm font-medium text-slate-700">
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/editorial-board" className="hover:text-ink">
            Editorial board
          </Link>
          <Link href="/submission" className="hover:text-ink">
            Submission
          </Link>
          <Link href="/issues" className="hover:text-ink">
            Issues
          </Link>
        </div>
      </nav>
    </header>
  );
}
