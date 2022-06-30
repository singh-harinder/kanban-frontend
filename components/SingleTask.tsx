import Link from "next/link";
import { refetchSectionsQuery, refetchTasksQuery, useDeleteTaskMutation } from "../types/generated-queries";
import { Task } from "../types/types";
import DisplayError from "./ErrorMessage";

interface SingleTaskProps {
  key: string | undefined;
  task?: Task | null;
}

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteTask));
}

function SingleTask(task: SingleTaskProps) {
  const [deleteTask, { loading, error }] = useDeleteTaskMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  async function handleTaskDelete() {
    await deleteTask({
      variables: {
        id: task.task!.id,
      },
      refetchQueries: [refetchTasksQuery(), refetchSectionsQuery()],
      update,
    });
  }

  return (
    <div className="m-4 rounded-3xl bg-white p-4">
      <p className="p-4 font-semibold">{task.task?.title}</p>
      <p className="p-4 font-extralight">{task.task?.description}</p>
      <div className="flex w-full justify-between p-4">
        <div className="rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custompurplehover focus:outline-none focus:ring-2 focus:ring-custompurplehover focus:ring-offset-2">
          <Link href={`/edittask/${task.task?.id}`}>Edit Task</Link>
        </div>
        <button
          type="button"
          onClick={handleTaskDelete}
          className="rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default SingleTask;
