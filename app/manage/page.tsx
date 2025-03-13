import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Edit, Eye, Share2, Trash2 } from "lucide-react"

export default function ManagePage() {
  // 예시 데이터
  const invitations = [
    {
      id: "1",
      title: "홍길동 & 김미영",
      date: "2024년 6월 15일",
      views: 128,
      status: "active",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "이철수 & 박영희",
      date: "2024년 7월 22일",
      views: 56,
      status: "draft",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
    },
  ]

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
                  src={invitation.image || "/placeholder.svg"}
                  alt={invitation.title}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <CardTitle>{invitation.title}</CardTitle>
                  <CardDescription>
                    {invitation.date} • 조회수 {invitation.views}회
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        invitation.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {invitation.status === "active" ? "활성화" : "임시저장"}
                    </span>
                    <p className="text-sm text-muted-foreground ml-2">
                      {invitation.status === "active" ? "게스트가 볼 수 있습니다" : "아직 게시되지 않았습니다"}
                    </p>
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
  )
}

