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
    <div className="m-4 cursor-pointer rounded-3xl bg-white p-4 hover:shadow-lg">
      <div className="flex justify-between p-4">
        <p className="font-semibold">{task.task?.title}</p>
        <div className="dropdown-left dropdown ml-4">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
          <ul className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
            <li>
              <Link href={`/edittask/${task.task?.id}`}>Edit Task</Link>
            </li>
            <li>
              <button type="button" onClick={handleTaskDelete}>
                Delete Task
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p className="p-4 font-extralight">{task.task?.description}</p>
    </div>
  );
}

export default SingleTask;
