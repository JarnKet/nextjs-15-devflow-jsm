"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	type DefaultValues,
	type FieldValues,
	type Path,
	type SubmitHandler,
	useForm,
} from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
	schema: z.ZodType<T>;
	defaultValues: T;
	onSubmit: (data: T) => Promise<{ success: boolean; data: T }>;
	formType: "SIGN_UP" | "SIGN_IN";
}

const AuthForm = <T extends FieldValues>({
	schema,
	defaultValues,
	onSubmit,
	formType,
}: AuthFormProps<T>) => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: defaultValues as DefaultValues<T>,
	});

	// 2. Define a submit handler.
	const handleSubmit: SubmitHandler<T> = (data) => {
		onSubmit(data);
	};

	const buttonText = formType === "SIGN_UP" ? "Sign Up" : "Sign In";

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="space-y-6 mt-10 "
			>
				{/* {buttonText} */}
				{Object.keys(defaultValues).map((field) => (
					<FormField
						key={field}
						control={form.control}
						name={field as Path<T>}
						render={({ field }) => (
							<FormItem className="flex w-full flex-col gap-2.5">
								<FormLabel className="paragraph-medium text-dark400_light700">
									{field.name === "email"
										? "Email Address"
										: field.name.charAt(0).toUpperCase() + field.name.slice(1)}
								</FormLabel>
								<FormControl>
									<Input
										required
										type={field.name === "password" ? "password" : "text"}
										placeholder={`Enter ${field.name}`}
										{...field}
										className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}

				<Button
					disabled={form.formState.isSubmitting}
					type="submit"
					className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
				>
					{form.formState.isSubmitting
						? buttonText === "Sign Up"
							? "Signing Up..."
							: "Signing In..."
						: buttonText}
				</Button>

				{formType === "SIGN_IN" ? (
					<p>
						{`Don't have an account?`}{" "}
						<Link
							className="paragraph-semibold primary-text-gradient"
							href={ROUTES.SIGN_UP}
						>
							Sign Up
						</Link>
					</p>
				) : (
					<p>
						Already have an account?{" "}
						<Link
							className="paragraph-semibold primary-text-gradient"
							href={ROUTES.SIGN_IN}
						>
							Sign In
						</Link>
					</p>
				)}
			</form>
		</Form>
	);
};

export default AuthForm;
