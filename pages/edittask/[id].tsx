import Head from "next/head";
import EditTask from "../../components/EditTask";

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
      <EditTask id={query.id} />
    </div>
  );
}

export default EditTaskPage;
