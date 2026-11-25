import type { PersonalDetails } from "@/types/portfolio";

export function generatePersonJsonLd(person: PersonalDetails) {
  if (!person.name) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    description: person.bio,
    email: person.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location,
    },
  };
}
