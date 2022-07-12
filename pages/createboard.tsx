import Head from "next/head";
import CreateBoard from "../components/CreateBoard";
import PleaseSignIn from "../components/PleaseSignIn";

function SectionPage() {
  return (
    <div>
      <Head>
        <title>Kanban | Create a new Board</title>
      </Head>
      <PleaseSignIn>
        <CreateBoard />
      </PleaseSignIn>
    </div>
  );
}

export default SectionPage;
