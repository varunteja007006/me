"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import React from "react";
import { toast } from "sonner";

export default function SimpleForm() {
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (
			formData.name === "" ||
			formData.email === "" ||
			formData.password === ""
		) {
			toast("Please fill in all fields");
			return;
		}
		e.preventDefault();
		toast("Form submitted successfully!");
		setFormData({
			name: "",
			email: "",
			password: "",
		});
	};

	return (
		<div className="flex flex-col gap-3 max-w-lg p-5 dark:bg-purple-950 dark:text-white border bg-blue-200">
			<h1 className="text-lg">Simple Form</h1>
			<Input
				name="name"
				value={formData.name}
				onChange={handleChange}
				placeholder="Name"
				className="border-black dark:border-white"
			/>
			<Input
				name="email"
				value={formData.email}
				onChange={handleChange}
				placeholder="Email"
				className="border-black dark:border-white"
			/>
			<Input
				name="password"
				value={formData.password}
				onChange={handleChange}
				placeholder="Password"
				className="border-black dark:border-white"
			/>
			<Button variant={"default"} className="w-fit" onClick={handleSubmit}>
				Submit
			</Button>
		</div>
	);
}
