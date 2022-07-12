import Head from "next/head";
import SignIn from "../components/SignIn";

function SignInPage() {
  return (
    <div>
      <Head>
        <title>Kanban | Sign In</title>
      </Head>
      <SignIn />
    </div>
  );
}

export default SignInPage;
