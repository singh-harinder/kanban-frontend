import Link from "next/link";
import { useUserQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import SingleBoard from "./SingleBoard";

function Board() {
  const { data, loading, error } = useUserQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-4 gap-4 p-11 shadow-md">
        {data?.authenticatedItem?.board?.map((board) => (
          <SingleBoard key={board?.id} board={board} />
        ))}
        <div className="flex items-center justify-center rounded-xl bg-white p-20">
          <span>
            <Link href="/createboard">Create a new Board</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Board;
