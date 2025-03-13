import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-[#FDF8F6]">
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8 relative w-full max-w-xs aspect-square rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1287&auto=format&fit=crop"
            alt="웨딩 이미지"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        <div className="mb-8">
          <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">모바일 청첩장</h1>
          <p className="text-muted-foreground">소중한 순간을 특별하게 초대하세요</p>
        </div>

        <div className="grid gap-4 w-full max-w-xs">
          <Link href="/create" className="w-full">
            <Button className="w-full" size="lg">
              청첩장 만들기
            </Button>
          </Link>
          <Link href="/examples" className="w-full">
            <Button variant="outline" className="w-full" size="lg">
              샘플 보기
            </Button>
          </Link>
          <Link href="/login" className="w-full">
            <Button variant="ghost" className="w-full" size="lg">
              로그인
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">이미 청첩장이 있으신가요?</p>
          <Link href="/manage" className="text-sm text-primary font-medium">
            내 청첩장 관리하기
          </Link>
        </div>
      </div>
    </main>
  )
}

