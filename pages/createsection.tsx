import Head from "next/head";
import CreateSection from "../components/CreateSection";

interface SectionPageProps {
  query: {
    id: string;
  };
}

function SectionPage({ query }: SectionPageProps) {
  return (
    <div>
      <Head>
        <title>Kanban | Create a new section</title>
      </Head>
      <CreateSection id={query.id} />
    </div>
  );
}

export default SectionPage;
