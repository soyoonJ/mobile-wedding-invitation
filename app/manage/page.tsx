import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Edit, Eye, Share2, Trash2 } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function ManagePage() {
	const cookieStore = await cookies();
	const supabase = createClient(cookieStore);

	const { data: invitations } = await supabase.from("invitations").select("*");

	return (
		<div className="container max-w-md mx-auto p-4">
			<div className="flex items-center mb-6">
				<Link href="/">
					<Button variant="ghost" size="icon" className="mr-2">
						<ChevronLeft className="h-5 w-5" />
					</Button>
				</Link>
				<h1 className="text-xl font-bold">내 청첩장 관리</h1>
			</div>

			<div className="space-y-4">
				{invitations.map((invitation) => (
					<Card key={invitation.id}>
						<div className="flex">
							<div className="relative w-24 h-32">
								<Image
									src={invitation.thumbnail || "/placeholder.svg"}
									alt="청첩장 대표이미지"
									fill
									className="object-cover rounded-l-lg"
								/>
							</div>
							<div className="flex-1">
								<CardHeader className="pb-2">
									<CardTitle>
										{invitation.bride} & {invitation.groom}
									</CardTitle>
								</CardHeader>
								<CardContent className="pb-2">
									<div className="flex items-center">
										<span
											className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800`}
										>
											템플릿
										</span>
										<p className="text-sm text-muted-foreground ml-2">{invitation.type}</p>
									</div>
								</CardContent>
								<CardFooter className="flex justify-between">
									<div className="flex gap-2">
										<Button variant="outline" size="icon">
											<Eye className="h-4 w-4" />
										</Button>
										<Button variant="outline" size="icon">
											<Edit className="h-4 w-4" />
										</Button>
										<Button variant="outline" size="icon">
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
									<div>
										<Button size="sm">
											<Share2 className="h-4 w-4 mr-2" />
											공유
										</Button>
									</div>
								</CardFooter>
							</div>
						</div>
					</Card>
				))}

				<Link href="/create" className="w-full">
					<Button className="w-full mt-4">새 청첩장 만들기</Button>
				</Link>
			</div>
		</div>
	);
}
