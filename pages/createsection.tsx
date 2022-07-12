import Head from "next/head";
import CreateSection from "../components/CreateSection";
import PleaseSignIn from "../components/PleaseSignIn";

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
      <PleaseSignIn>
        <CreateSection id={query.id} />
      </PleaseSignIn>
    </div>
  );
}

export default SectionPage;
