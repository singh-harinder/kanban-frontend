import PleaseSignIn from "../../components/PleaseSignIn";
import Section from "../../components/Section";

type BoardPageProps = {
  query: {
    id: string;
  };
};

function IndexPage({ query }: BoardPageProps) {
  return (
    <div>
      <PleaseSignIn>
        <Section id={query.id} />
      </PleaseSignIn>
    </div>
  );
}

export default IndexPage;
