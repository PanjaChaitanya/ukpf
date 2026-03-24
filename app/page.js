import PortfolioPage from "@/components/PortfolioPage";
import { portfolioData } from "@/data/portfolioData";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.name,
  jobTitle: portfolioData.title,
  email: portfolioData.contact.email,
  telephone: portfolioData.contact.phone,
  sameAs: [portfolioData.contact.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PortfolioPage data={portfolioData} />
    </>
  );
}
