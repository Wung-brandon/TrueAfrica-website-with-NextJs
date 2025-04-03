import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

// Generate metadata function with correct typing
export async function generateMetadata({ 
  params 
}: {params: Promise<{ slug: string }> | { slug: string }}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams.slug;
  const topic = getTopicBySlug(slug);
  if (!topic) {
    return { title: 'Topic Not Found', description: 'The requested topic could not be found.' };
  }
  return { title: topic.title, description: topic.shortDescription };
}

// Generate static paths with correct return type
export function generateStaticParams(): { slug: string }[] {
  // Filter out any topics that don't have a slug
  return topics
    .filter((topic): topic is { slug: string; id: number; /* other properties */ } => 
      typeof topic.slug === 'string' && topic.slug.length > 0
    )
    .map(topic => ({ 
      slug: topic.slug 
    }));
}

// Main page component with correct params typing
export default async function TopicPage({ 
  params 
}: {params: Promise<{ slug: string }> | { slug: string }}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams.slug;
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