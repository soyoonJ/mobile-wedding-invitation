import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function ExamplesPage() {
  // 예시 템플릿 데이터
  const templates = [
    {
      id: "1",
      title: "클래식 템플릿",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "모던 템플릿",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1287&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "로맨틱 템플릿",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "미니멀 템플릿",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop",
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
        <h1 className="text-xl font-bold">샘플 청첩장</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="relative aspect-[9/16] w-full">
              <Image src={template.image || "/placeholder.svg"} alt={template.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-xl font-medium text-white mb-2">{template.title}</h2>
                <Link href="/preview">
                  <Button className="w-full">미리보기</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

