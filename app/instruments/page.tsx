import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
	const cookieStore = await cookies();
	const supabase = createClient(cookieStore);

	const { data: invitations } = await supabase.from("invitations").select("*");

	console.log("invitations", invitations);

	return (
		<ul>
			<h1>invitations 타이틀 목록</h1>
			{invitations?.map((invitation) => (
				<li key={invitation.id}>{invitation.title}</li>
			))}
		</ul>
	);
}
