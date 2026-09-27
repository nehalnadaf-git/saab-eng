import { redirect } from "next/navigation";
import { industries } from "@/lib/industries";

export async function generateStaticParams() {
  return industries.map(({ id }) => ({ slug: id }));
}

export default async function IndustrySlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/industries#${slug}`);
}
