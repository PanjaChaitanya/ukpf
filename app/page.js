import PortfolioPage from "@/components/PortfolioPage";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return <PortfolioPage data={portfolioData} />;
}
