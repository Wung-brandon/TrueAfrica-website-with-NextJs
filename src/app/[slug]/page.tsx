// import React from 'react';
// import Layout from '@/components/Layout';
// import NextPrevNavigation from '@/components/NextPrevNavigation';
// import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
// import { notFound } from 'next/navigation';
// import AnimatedContent from '@/components/AnimatedContent';


// // Generate metadata function with correct typing
// export async function generateMetadata({ 
//   params 
// }: {params: Promise<{ slug: string }>}) {
//   const slug = (await params).slug
//   const topic = getTopicBySlug(slug);
//   if (!topic) {
//     return { title: 'Topic Not Found', description: 'The requested topic could not be found.' };
//   }
//   return { title: topic.title, description: topic.shortDescription };
// }


// // Generate static paths with correct return type
// export function generateStaticParams(): { slug: string }[] {
//   return topics.map(topic => ({ 
//     slug: topic.slug 
//   }));
// }

// // Main page component with correct params typing
// export default async function TopicPage({ 
//   params 
// }: {params: Promise<{ slug: string }>}) {
//   const slug = (await params).slug
//   const topic = getTopicBySlug(slug);

//   if (!topic) {
//     notFound();
//     return null;
//   }

//   const { prevTopic, nextTopic } = getNextPrevTopics(topic.id);

//   return (
//     <Layout>
//       <AnimatedContent topic={topic} />
//       <NextPrevNavigation prevTopic={prevTopic} nextTopic={nextTopic} />
//     </Layout>
//   );
// }



import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

// For generateStaticParams return type
type StaticParams = Array<{ slug: string }>;

// Generate static paths with correct return type
export function generateStaticParams(): StaticParams {
  // Type guard to ensure we only include topics with valid string slugs
  const validTopics = topics.filter((topic): topic is typeof topic & { slug: string } => 
    typeof topic.slug === 'string'
  );
  
  // Map to the expected format with explicit type cast for additional safety
  return validTopics.map(topic => ({ 
    slug: topic.slug 
  })) as StaticParams;
}

// Type for page props (matching Next.js App Router typing)
type PageProps = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

// Main page component with correct params typing
export default function TopicPage({ params }: PageProps) {
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

// Generate metadata with same typing as page component
// // Generate metadata function with correct typing
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