import Router from "next/router";
import { SyntheticEvent } from "react";
import useForm from "../lib/useForm";
import { refetchBoardsQuery, useCreateBoardMutation } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

function CreateBoard() {
  const { inputs, handleChange, resetForm } = useForm({
    name: "",
  });

  const [createBoard, { loading, error }] = useCreateBoardMutation({
    variables: {
      name: inputs.name!,
    },
    refetchQueries: [refetchBoardsQuery()],
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await createBoard();
    resetForm();
    Router.push({
      pathname: "/",
    }).catch(() => {});
  }

  return (
    <>
      <DisplayError error={error} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-br from-pink-400 to-red-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Create a new Board
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name of the Board
                </label>
                <div className="mt-1">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    disabled={loading}
                    placeholder="Enter the name of the Board"
                    value={inputs.name}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="buttonstyles uppercase" disabled={loading}>
                  + Create Board
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateBoard;
