import Router from "next/router";
import useForm from "../lib/useForm";
import {
  refetchSectionsQuery,
  refetchTasksQuery,
  useSingleTaskQuery,
  useUpdateTaskMutation,
} from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

function EditTask({ id }: { id: string }) {
  const { data, loading, error } = useSingleTaskQuery({
    variables: {
      id,
    },
  });

  const { inputs, handleChange, resetForm } = useForm({
    title: data?.task?.title || "",
    description: data?.task?.description || "",
    section: data?.task?.section?.id || "",
  });

  const [updateTask, { loading: updateLoading, error: updateError }] = useUpdateTaskMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  if (updateLoading) return <p>Loading...</p>;
  if (updateError) return <DisplayError error={updateError} />;

  async function handleSubmit() {
    await updateTask({
      variables: {
        id: id,
        sectionID: data?.task?.section?.id || "",
        description: inputs.description,
        title: inputs.title,
      },
      refetchQueries: [refetchSectionsQuery(), refetchTasksQuery()],
    });
    resetForm();
    Router.push({ pathname: "/" }).catch(() => {});
  }

  return (
    <>
      <DisplayError error={error} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-br from-pink-400 to-red-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Edit Task
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    type="title"
                    name="title"
                    id="title"
                    disabled={loading}
                    placeholder="Task Title"
                    value={inputs.title}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Task Description
                </label>
                <div className="mt-1">
                  <textarea
                    name="description"
                    rows={10}
                    id="description"
                    disabled={loading}
                    placeholder="Enter the Task description"
                    value={inputs.description}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="buttonstyles uppercase" disabled={loading}>
                  Confirm Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTask;
