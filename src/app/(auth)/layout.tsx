import Image from "next/image";

import { SocialAuthForm } from "@/components/form/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10">
			<section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[52px] sm:px-8">
				<div className="flex items-center justify-between gap-2">
					<div className="space-y-2.5">
						<h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
						<p className="paragraph-regular text-dark500_light400">
							To get your questions answered
						</p>
					</div>
					<Image
						src={"/images/site-logo.svg"}
						alt="DevFlow Logo"
						height={50}
						width={50}
						className="object-contain"
					/>
				</div>

				{children}

				<SocialAuthForm />
			</section>
		</main>
	);
};

export default AuthLayout;