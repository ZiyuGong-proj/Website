export type AccessType = 'open' | 'restricted';
export type ArticleCategory = 'recent' | 'read' | 'cited' | 'trending' | 'collection';

export interface Article {
  id: string;
  title: string;
  authors: { name: string; orcid?: boolean }[];
  articleType: string;
  accessType: AccessType;
  firstPublished: string;
  category: ArticleCategory;
}

export const articles: Article[] = [
  {
    id: 'a001',
    title: 'Tourism Governance and Post-Pandemic Recovery in Macau',
    authors: [
      { name: 'Liang Chen', orcid: true },
      { name: 'Ying Zhao' },
      { name: 'Victor Ho' }
    ],
    articleType: 'Research article',
    accessType: 'restricted',
    firstPublished: '12 Aug 2024',
    category: 'recent'
  },
  {
    id: 'a002',
    title: 'Language Policy and Community Media in the Greater Bay Area',
    authors: [
      { name: 'Mei Lin' },
      { name: 'Carlos Pires', orcid: true }
    ],
    articleType: 'Research article',
    accessType: 'open',
    firstPublished: '30 Jul 2024',
    category: 'recent'
  },
  {
    id: 'a003',
    title: 'Book Review: Urban Imaginaries in Pearl River Delta Studies',
    authors: [{ name: 'Sofia Almeida' }],
    articleType: 'Book review',
    accessType: 'restricted',
    firstPublished: '18 Jul 2024',
    category: 'recent'
  },
  {
    id: 'a004',
    title: 'Cross-border Labor Mobility and Social Protection',
    authors: [
      { name: 'Jian Wei' },
      { name: 'Hannah Ko', orcid: true }
    ],
    articleType: 'Research article',
    accessType: 'open',
    firstPublished: '02 Jun 2024',
    category: 'read'
  },
  {
    id: 'a005',
    title: 'Cultural Heritage Branding and Museum Partnerships',
    authors: [{ name: 'Marco Santos' }, { name: 'Xiao Yu' }],
    articleType: 'Research article',
    accessType: 'restricted',
    firstPublished: '15 May 2024',
    category: 'read'
  },
  {
    id: 'a006',
    title: 'Policy Diffusion and Smart City Experimentation',
    authors: [{ name: 'Claire Wong', orcid: true }],
    articleType: 'Research article',
    accessType: 'open',
    firstPublished: '08 Apr 2024',
    category: 'cited'
  },
  {
    id: 'a007',
    title: 'Port Development and Regional Logistics Networks',
    authors: [{ name: 'Thomas Lee' }, { name: 'Ana Torres' }],
    articleType: 'Research article',
    accessType: 'restricted',
    firstPublished: '22 Mar 2024',
    category: 'cited'
  },
  {
    id: 'a008',
    title: 'Public Health Communication in Multilingual Cities',
    authors: [
      { name: 'Ruby Zhang' },
      { name: 'Nicholas Ng', orcid: true }
    ],
    articleType: 'Research article',
    accessType: 'open',
    firstPublished: '10 Feb 2024',
    category: 'trending'
  },
  {
    id: 'a009',
    title: 'Neighborhood Resilience and Community Care Networks',
    authors: [{ name: 'Helena Maia' }],
    articleType: 'Research article',
    accessType: 'restricted',
    firstPublished: '28 Jan 2024',
    category: 'trending'
  },
  {
    id: 'a010',
    title: 'Special Collection: Lusophone Studies in Asia',
    authors: [{ name: 'Editorial Team' }],
    articleType: 'Collection introduction',
    accessType: 'open',
    firstPublished: '05 Dec 2023',
    category: 'collection'
  }
];
