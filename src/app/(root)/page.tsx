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

			<form
				className="px-10 pt-[100px]"
				action={async () => {
					"use server";

					await signOut({
						redirectTo: ROUTES.SIGN_IN,
					});
				}}
			>
				<Button type="submit">Log out</Button>
			</form>
		</>
	);
};

export default Home;
