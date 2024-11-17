import Image from "next/image";

// UI
import { Button } from "@/components/ui/button";

// Services
import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  console.log("Hi I'm Server Component");

  const session = await auth();

  console.log(session, "session");

  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

export default Home;
