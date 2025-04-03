import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

export default async function TopicPage({ 
  params 
}: { params: { slug: string } }) {
  const { slug } = await params; // ✅ Await params before using it
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
