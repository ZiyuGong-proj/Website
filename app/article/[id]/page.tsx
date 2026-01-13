import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { articles } from '@/data/articles';

interface ArticlePageProps {
  params: { id: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.id === params.id);

  if (!article) {
    return (
      <PageShell title="Article not found" subtitle="The requested article could not be located.">
        <Link href="/" className="text-sm font-medium text-brand-600">
          Return to journal home
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell title={article.title} subtitle={`${article.articleType} · ${article.firstPublished}`}>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
          <h2 className="text-lg font-semibold text-ink">Abstract</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            This is a mock article detail page showcasing how an abstract and metadata
            could appear. Replace this text with actual content when integrating real data.
          </p>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Authors
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {article.authors.map((author) => (
              <li key={author.name}>{author.name}</li>
            ))}
          </ul>
        </section>
        <aside className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Access
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            {article.accessType === 'open'
              ? 'Open access - immediately available.'
              : 'Restricted access - institutional sign-in required.'}
          </p>
          <Link
            href="https://example.com/access"
            className="mt-4 inline-flex text-sm font-medium text-brand-600"
          >
            Access options
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
