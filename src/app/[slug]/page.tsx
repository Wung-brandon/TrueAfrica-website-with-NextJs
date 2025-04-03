import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

// Generate static paths
export function generateStaticParams() {
  // Only include topics with valid slugs
  return topics
    .filter(topic => !!topic.slug)
    .map(topic => ({ 
      slug: topic.slug 
    }));
}

// Main page component
export default function TopicPage({ 
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = params;
  const topic = getTopicBySlug(slug);

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

// Generate metadata
export function generateMetadata({ 
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const topic = getTopicBySlug(slug);
  
  if (!topic) {
    return { 
      title: 'Topic Not Found', 
      description: 'The requested topic could not be found.' 
    };
  }
  
  return { 
    title: topic.title, 
    description: topic.shortDescription 
  };
}