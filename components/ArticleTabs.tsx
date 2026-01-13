'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { articles, ArticleCategory } from '@/data/articles';

const tabs: { label: string; value: ArticleCategory }[] = [
  { label: 'Most recent', value: 'recent' },
  { label: 'Most read', value: 'read' },
  { label: 'Most cited', value: 'cited' },
  { label: 'Trending', value: 'trending' },
  { label: 'Collections', value: 'collection' }
];

const lockIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
    <path
      fill="currentColor"
      d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-6 0V6a2 2 0 1 1 4 0v2z"
    />
  </svg>
);

export default function ArticleTabs() {
  const [activeTab, setActiveTab] = useState<ArticleCategory>('recent');

  const filtered = useMemo(
    () => articles.filter((article) => article.category === activeTab),
    [activeTab]
  );

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">Browse by</h2>
        <Link href="/issues" className="text-sm font-medium text-brand-600">
          View all articles
        </Link>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="flex min-w-max gap-2 border-b border-slate-100 pb-2 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-4 py-2 font-medium transition ${
                activeTab === tab.value
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-50 text-slate-600 hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-6">
        {filtered.map((article) => (
          <article key={article.id} className="border-b border-slate-100 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
              {article.accessType === 'restricted' ? (
                <span className="badge border border-slate-200 text-slate-600">
                  {lockIcon}
                  Restricted access
                </span>
              ) : (
                <span className="badge bg-orange-50 text-open">
                  Open Access
                </span>
              )}
              <span>{article.articleType}</span>
              <span>First published {article.firstPublished}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-brand-600 hover:underline">
              <Link href={`/article/${article.id}`}>{article.title}</Link>
            </h3>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600">
              {article.authors.map((author, index) => (
                <span key={author.name} className="inline-flex items-center gap-1">
                  {author.name}
                  {author.orcid && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      ORCID
                    </span>
                  )}
                  {index < article.authors.length - 1 && ','}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
