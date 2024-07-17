// src/data/newsData.js
import { RiNewspaperLine, RiArticleLine } from 'react-icons/ri';

export const newsHeadlines = [
  {
    id: 1,
    title: 'News Article 1',
    date: '2024-07-16',
    summary: 'Summary of news article 1.',
    url: 'https://example.com/news1',
    icon: RiNewspaperLine().props.children,
  },
  {
    id: 2,
    title: 'News Article 2',
    date: '2024-07-15',
    summary: 'Summary of news article 2.',
    url: 'https://example.com/news2',
    icon: RiArticleLine().props.children,
  },
  // Add more news items as needed
];