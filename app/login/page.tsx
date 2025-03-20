"use client";

import { login, signup } from "./actions";

export default function LoginPage() {
	async function onLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		await login(formData);
	}

	async function onSignup(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		await signup(formData);
	}

	return (
		<>
			<form onSubmit={onLogin}>
				<label htmlFor="email">Email:</label>
				<input id="email" name="email" type="email" required />
				<label htmlFor="password">Password:</label>
				<input id="password" name="password" type="password" required />
				<button type="submit">Log in</button>
			</form>

			<form onSubmit={onSignup}>
				<label htmlFor="email">Email:</label>
				<input id="email" name="email" type="email" required />
				<label htmlFor="password">Password:</label>
				<input id="password" name="password" type="password" required />
				<button type="submit">Sign up</button>
			</form>
		</>
	);
}
