import Section from "../../components/Section";

type BoardPageProps = {
  query: {
    id: string;
  };
};

function IndexPage({ query }: BoardPageProps) {
  return (
    <div>
      <Section id={query.id} />
    </div>
  );
}

export default IndexPage;
