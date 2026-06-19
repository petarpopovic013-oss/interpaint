import type { Metadata } from "next";
import { SeoServicePage } from "../components/SeoServicePage";
import { seoPages } from "../data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Interpaint",
    };
  }

  return {
    title: `${page.title} - Interpaint`,
    description: page.summary,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <SeoServicePage slug={slug} />;
}
