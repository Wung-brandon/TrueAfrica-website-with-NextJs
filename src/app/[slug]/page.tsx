import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';


// Generate metadata function with correct typing
export async function generateMetadata({ 
  params 
}: {params: Promise<{ slug: string }>}) {
  const slug = (await params).slug
  const topic = getTopicBySlug(slug);
  if (!topic) {
    return { title: 'Topic Not Found', description: 'The requested topic could not be found.' };
  }
  return { title: topic.title, description: topic.shortDescription };
}

// Generate static paths with correct return type
// export function generateStaticParams(): { slug: string }[] {
//   return topics.map(topic => ({ 
//     slug: topic.slug 
//   }));
// }

// Main page component with correct params typing
export default async function TopicPage({ 
  params 
}: {params: Promise<{ slug: string }>}) {
  const slug = (await params).slug
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