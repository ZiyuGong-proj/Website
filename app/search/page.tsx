import PageShell from '@/components/PageShell';
import SearchResults from '@/components/SearchResults';

export default function SearchPage() {
  return (
    <PageShell title="Search results" subtitle="Filter articles by keyword or author name.">
      <SearchResults />
    </PageShell>
  );
}
