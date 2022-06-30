import Link from "next/link";
import { refetchBoardsQuery, useDeleteBoardMutation } from "../types/generated-queries";
import { Board } from "../types/types";
import DisplayError from "./ErrorMessage";

interface BoardProps {
  key: string | undefined;
  board: Board | null;
}

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteBoard));
}

function SingleBoard(board: BoardProps) {
  const [deleteBoard, { loading, error }] = useDeleteBoardMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  async function handleBoardDelete() {
    await deleteBoard({
      variables: {
        id: board.board?.id || "",
      },
      update,
      refetchQueries: [refetchBoardsQuery()],
    });
  }

  return (
    <div className="relative rounded-xl bg-white p-4">
      <Link href={`/board/${board.board?.id}`}>
        <p className="flex cursor-pointer justify-center border-b-4 border-b-slate-700 p-4">{board.board?.name}</p>
      </Link>
      <div className="mt-10 mb-10 p-4">
        {board.board?.section.map((section) => (
          <div className="p-2" key={section.id}>
            {section.name}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleBoardDelete}
        className="absolute bottom-0 mt-5 rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Delete Board
      </button>
    </div>
  );
}

export default SingleBoard;
