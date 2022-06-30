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

function Task(section: TaskProps) {
  const [deleteSection, { loading, error }] = useDeleteSectionMutation();

  if (loading) return <p>loading...</p>;
  if (error) return <DisplayError error={error} />;

  async function handleSectionDelete() {
    await deleteSection({
      variables: {
        id: section.section!.id,
      },
      refetchQueries: [refetchSectionsQuery()],
      update,
    });
  }

  return (
    <>
      <div className="rounded-lg bg-gray-100">
        <p className="m-4 flex items-center border-b-4 border-b-slate-700 p-2 font-bold">{section.section?.name}</p>
        {section.section?.tasks?.map((task) => (
          <SingleTask key={task?.id} task={task} />
        ))}
        <div className="flex w-full flex-col items-center justify-center p-4">
          <div className="mt-10 rounded-md border border-transparent bg-custompurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custompurplehover focus:outline-none focus:ring-2 focus:ring-custompurplehover focus:ring-offset-2">
            <Link
              href={{
                pathname: `/task/${section.section?.id}`,
              }}
            >
              Create a new Task
            </Link>
          </div>
          <button
            type="button"
            onClick={handleSectionDelete}
            className="mt-20 rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete Section
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
