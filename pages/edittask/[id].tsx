import Head from "next/head";
import EditTask from "../../components/EditTask";
import PleaseSignIn from "../../components/PleaseSignIn";

type EditTaskPageProps = {
  query: {
    id: string;
  };
};

function EditTaskPage({ query }: EditTaskPageProps) {
  return (
    <div>
      <Head>
        <title>Kanban | Edit Task</title>
      </Head>
      <PleaseSignIn>
        <EditTask id={query.id} />
      </PleaseSignIn>
    </div>
  );
}

export default EditTaskPage;
