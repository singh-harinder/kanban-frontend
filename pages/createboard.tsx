import Head from "next/head";
import CreateBoard from "../components/CreateBoard";

function SectionPage() {
  return (
    <div>
      <Head>
        <title>Kanban | Create a new Board</title>
      </Head>
      <CreateBoard />
    </div>
  );
}

export default SectionPage;
