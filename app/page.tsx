import JournalHeader from '@/components/JournalHeader';
import Hero from '@/components/Hero';
import JournalOverviewCard from '@/components/JournalOverviewCard';
import Sidebar from '@/components/Sidebar';
import ArticleTabs from '@/components/ArticleTabs';

export default function HomePage() {
  return (
    <div>
      <JournalHeader />
      <Hero />
      <main className="container-tight grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-8">
          <JournalOverviewCard />
          <ArticleTabs />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
