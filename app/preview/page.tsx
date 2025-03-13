import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Copy, Heart, MapPin, Phone, Share2 } from "lucide-react"

export default function PreviewPage() {
  // 실제 구현에서는 서버에서 데이터를 가져오거나 상태 관리를 통해 데이터를 전달받아야 합니다
  const weddingData = {
    groomName: "홍길동",
    brideName: "김미영",
    date: "2024년 6월 15일 토요일",
    time: "오후 2시",
    location: "그랜드 호텔 웨딩홀",
    address: "서울특별시 강남구 테헤란로 123",
    greetings: "두 사람이 사랑으로 만나 인생이라는 여행을 함께 떠납니다. 저희의 출발점에 함께해 주시면 감사하겠습니다.",
    groomParents: "아버지 홍판서 · 어머니 김말숙",
    brideParents: "아버지 김장군 · 어머니 이영희",
    groomContact: "010-1234-5678",
    brideContact: "010-8765-4321",
  }

  return (
    <div className="container max-w-md mx-auto p-0 bg-white">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-4 flex justify-between items-center border-b">
        <Link href="/create">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            공유하기
          </Button>
          <Button size="sm">저장하기</Button>
        </div>
      </div>

      <div className="relative w-full h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop"
          alt="웨딩 이미지"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
          <h1 className="text-3xl font-medium mb-2">
            {weddingData.groomName} & {weddingData.brideName}
          </h1>
          <p className="text-lg">{weddingData.date}</p>
          <p>{weddingData.time}</p>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="text-center">
          <Heart className="h-6 w-6 text-primary mx-auto mb-4" />
          <p className="text-lg leading-relaxed">{weddingData.greetings}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1634&auto=format&fit=crop"
              alt="신랑 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1287&auto=format&fit=crop"
              alt="신부 이미지"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Card className="p-6">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="font-medium mb-1">신랑</h3>
              <p className="text-lg mb-2">{weddingData.groomName}</p>
              <p className="text-sm text-muted-foreground mb-3">{weddingData.groomParents}</p>
              <Button variant="outline" size="sm" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                연락하기
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">신부</h3>
              <p className="text-lg mb-2">{weddingData.brideName}</p>
              <p className="text-sm text-muted-foreground mb-3">{weddingData.brideParents}</p>
              <Button variant="outline" size="sm" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                연락하기
              </Button>
            </div>
          </div>
        </Card>

        <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop"
            alt="웨딩 갤러리 이미지"
            fill
            className="object-cover"
          />
        </div>

        <Card className="p-6">
          <h3 className="font-medium mb-4 text-center">일시 및 장소</h3>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground text-sm">일시</p>
              <p className="font-medium">{weddingData.date}</p>
              <p>{weddingData.time}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">장소</p>
              <p className="font-medium">{weddingData.location}</p>
              <p className="text-sm">{weddingData.address}</p>
            </div>
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src="https://maps.googleapis.com/maps/api/staticmap?center=서울특별시+강남구+테헤란로+123&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C서울특별시+강남구+테헤란로+123&key=YOUR_API_KEY"
                alt="지도"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <MapPin className="h-4 w-4 mr-2" />
                길찾기
              </Button>
              <Button variant="outline" className="flex-1">
                <Copy className="h-4 w-4 mr-2" />
                주소 복사
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop"
              alt="웨딩 갤러리 이미지"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop"
              alt="웨딩 갤러리 이미지"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Card className="p-6">
          <h3 className="font-medium mb-4 text-center">참석 여부</h3>
          <div className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">참석 여부를 알려주시면 감사하겠습니다</p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">참석합니다</Button>
              <Button variant="outline">불참합니다</Button>
            </div>
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground pt-4 pb-8">
          <p>모바일 청첩장 서비스</p>
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

