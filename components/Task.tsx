import Link from "next/link";
import { refetchSectionsQuery, useDeleteSectionMutation } from "../types/generated-queries";
import { Section } from "../types/types";
import DisplayError from "./ErrorMessage";
import SingleTask from "./SingleTask";

interface TaskProps {
  key: string | undefined;
  section: Section | null | undefined;
}

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteSection));
}

function Task(props: TaskProps) {
  const [deleteSection, { loading, error }] = useDeleteSectionMutation();

  if (loading) return <p>loading...</p>;
  if (error) return <DisplayError error={error} />;

  async function handleSectionDelete() {
    await deleteSection({
      variables: {
        id: props.section!.id,
      },
      refetchQueries: [refetchSectionsQuery()],
      update,
    });
  }

  return (
    <>
      <div className="rounded-lg bg-white">
        <div className={`m-4 flex justify-between border-b-4 border-b-slate-500 p-2`}>
          <p className="font-bold uppercase">{props.section?.name}</p>
          <div className="dropdown-left dropdown">
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <ul className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
              <li>
                <a>Edit Section</a>
              </li>
              <li>
                <button type="button" onClick={handleSectionDelete}>
                  Delete Section
                </button>
              </li>
            </ul>
          </div>
        </div>
        {props.section?.tasks?.map((task) => (
          <SingleTask key={task?.id} task={task} />
        ))}
        <div className="flex w-full flex-col items-center justify-center p-4">
          <div className="mt-10 rounded-md border border-transparent bg-custompurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custompurplehover focus:outline-none focus:ring-2 focus:ring-custompurplehover focus:ring-offset-2">
            <Link
              href={{
                pathname: `/task/${props.section?.id}`,
              }}
            >
              + New Task
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
