import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Generate metadata for the page
export function generateMetadata({ params }: PageProps): Metadata {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    return {
      title: 'Topic Not Found',
      description: 'The requested topic could not be found.',
    };
  }

  return {
    title: topic.title,
    description: topic.shortDescription,
  };
}

// Generate static params for all topics
export function generateStaticParams() {
  return topics.map(topic => ({
    slug: topic.slug,
  }));
}

// Server Component (default export)
export default function TopicPage({ params }: PageProps) {
  const topic = getTopicBySlug(params.slug);

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
