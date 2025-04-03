import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

// Type for generateStaticParams return value
type StaticParam = { slug: string };

// Generate static paths with correct return type
export function generateStaticParams(): StaticParam[] {
  // Ensure we only return topics with valid slugs
  return topics
    .filter(topic => topic.slug && typeof topic.slug === 'string')
    .map(topic => ({
      slug: topic.slug
    }));
}

// Properly type the page component using Next.js's expected format
type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default function TopicPage({ params, searchParams }: Props) {
  const { slug } = params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
    return null;
  }

  const { prevTopic, nextTopic } = getNextPrevTopics(topic.id);

  return (
    <Layout>
      <AnimatedContent topic={topic} />
      <NextPrevNavigation prevTopic={prevTopic} nextTopic={nextTopic} />
    </Layout>
  );
}

// Add metadata function with the same typing pattern
export function generateMetadata({ params }: Props) {
  const { slug } = params;
  const topic = getTopicBySlug(slug);
  
  if (!topic) {
    return { title: 'Topic Not Found', description: 'The requested topic could not be found.' };
  }
  
  return { title: topic.title, description: topic.shortDescription };
}