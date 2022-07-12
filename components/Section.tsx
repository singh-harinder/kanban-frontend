import Link from "next/link";
import { useSingleBoardQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import Task from "./Task";

function Section({ id }: { id: string }) {
  const { data, error, loading } = useSingleBoardQuery({
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div className=" m-0 h-full w-full bg-gray-200 p-0">
      <div className="grid grid-cols-4 gap-4 shadow-md">
        {data?.board?.section?.map((section) => (
          <Task key={section.id} section={section} />
        ))}
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white p-20">
          <Link href={{ pathname: "/createsection", query: { id: data?.board?.id } }}>Create a new Section</Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
