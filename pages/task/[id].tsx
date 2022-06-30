import Head from "next/head";
import CreateTask from "../../components/CreateTask";

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
      <CreateTask sectionId={query.id} />
    </div>
  );
}

export default TaskPage;
