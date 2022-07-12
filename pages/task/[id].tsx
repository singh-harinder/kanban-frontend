import Head from "next/head";
import CreateTask from "../../components/CreateTask";
import PleaseSignIn from "../../components/PleaseSignIn";

type TaskPageProps = {
  query: {
    id: string;
  };
};

function TaskPage({ query }: TaskPageProps) {
  return (
    <div>
      <Head>
        <title>Kanban | Add a new Task</title>
      </Head>
      <PleaseSignIn>
        <CreateTask sectionId={query.id} />
      </PleaseSignIn>
    </div>
  );
}

export default TaskPage;
