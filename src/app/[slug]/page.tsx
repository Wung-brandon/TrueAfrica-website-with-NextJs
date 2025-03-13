import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
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
export default async function TopicPage(props: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { params } = props;
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  const { prevTopic, nextTopic } = getNextPrevTopics(topic.id);

  return (
    <Layout>
      <AnimatedContent topic={topic} />
      <NextPrevNavigation prevTopic={prevTopic} nextTopic={nextTopic} />
    </Layout>
  );
}