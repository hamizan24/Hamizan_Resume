import { profile, seoKeywords } from "@/data/portfolio";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Infrastructure & DevOps Engineer",
    description: profile.intro,
    email: profile.email,
    url: "https://hamizanborhan.dev",
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: seoKeywords,
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
