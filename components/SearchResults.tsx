'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';

export default function SearchResults() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return articles;
    }
    return articles.filter((article) => {
      const inTitle = article.title.toLowerCase().includes(term);
      const inAuthors = article.authors.some((author) =>
        author.name.toLowerCase().includes(term)
      );
      return inTitle || inAuthors;
    });
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
        <label className="text-sm font-semibold text-ink" htmlFor="search-input">
          Search within journal
        </label>
        <input
          id="search-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter keywords or authors"
          className="mt-3 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
        />
        <p className="mt-2 text-xs text-slate-500">
          Showing {results.length} result{results.length === 1 ? '' : 's'}.
        </p>
      </div>
      <div className="space-y-4">
        {results.map((article) => (
          <div key={article.id} className="rounded-lg border border-slate-100 bg-white p-5 shadow-subtle">
            <p className="text-xs font-medium text-slate-500">
              {article.articleType} · {article.firstPublished}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-600 hover:underline">
              <Link href={`/article/${article.id}`}>{article.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {article.authors.map((author) => author.name).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
