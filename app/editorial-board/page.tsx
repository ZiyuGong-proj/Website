import PageShell from '@/components/PageShell';

const editors = [
  { role: 'Editor-in-Chief', name: 'Prof. Wen Luo', affiliation: 'University of Macau' },
  { role: 'Associate Editor', name: 'Dr. Xin Li', affiliation: 'City University of Hong Kong' },
  { role: 'Associate Editor', name: 'Dr. Maria Fernandes', affiliation: 'University of Lisbon' },
  { role: 'Editorial Board', name: 'Prof. Alan Cheung', affiliation: 'Macau Polytechnic University' },
  { role: 'Editorial Board', name: 'Dr. Evelyn Cho', affiliation: 'Seoul National University' }
];

export default function EditorialBoardPage() {
  return (
    <PageShell title="Editorial board" subtitle="Leadership and advisory members.">
      <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-subtle">
        <ul className="divide-y divide-slate-100">
          {editors.map((editor) => (
            <li key={`${editor.role}-${editor.name}`} className="py-4">
              <p className="text-sm font-semibold text-ink">{editor.role}</p>
              <p className="mt-1 text-sm text-slate-600">{editor.name}</p>
              <p className="text-sm text-slate-500">{editor.affiliation}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
