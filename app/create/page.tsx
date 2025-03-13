"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { CalendarIcon, ChevronLeft } from "lucide-react"

export default function CreatePage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기서 데이터를 처리하고 미리보기 페이지로 이동
    router.push("/preview")
  }

  return (
    <div className="container max-w-md mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">청첩장 만들기</h1>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">기본 정보</TabsTrigger>
          <TabsTrigger value="details">상세 정보</TabsTrigger>
          <TabsTrigger value="design">디자인</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <TabsContent value="basic">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="groomName">신랑 이름</Label>
                  <Input id="groomName" placeholder="신랑 이름을 입력하세요" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brideName">신부 이름</Label>
                  <Input id="brideName" placeholder="신부 이름을 입력하세요" required />
                </div>

                <div className="space-y-2">
                  <Label>결혼식 날짜</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: ko }) : "날짜를 선택하세요"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} locale={ko} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weddingTime">결혼식 시간</Label>
                  <Input id="weddingTime" placeholder="예) 오후 2시" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">결혼식장</Label>
                  <Input id="location" placeholder="결혼식장 이름을 입력하세요" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">주소</Label>
                  <Input id="address" placeholder="결혼식장 주소를 입력하세요" required />
                </div>

                <Button type="button" onClick={() => document.querySelector('[data-value="details"]')?.click()}>
                  다음
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="greetings">인사말</Label>
                  <Textarea
                    id="greetings"
                    placeholder="예) 두 사람이 사랑으로 만나 인생이라는 여행을 함께 떠납니다. 저희의 출발점에 함께해 주시면 감사하겠습니다."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groomParents">신랑측 혼주</Label>
                  <Input id="groomParents" placeholder="예) 아버지 홍길동 · 어머니 김말숙" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brideParents">신부측 혼주</Label>
                  <Input id="brideParents" placeholder="예) 아버지 이순신 · 어머니 최영희" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groomContact">신랑측 연락처</Label>
                  <Input id="groomContact" placeholder="예) 010-1234-5678" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brideContact">신부측 연락처</Label>
                  <Input id="brideContact" placeholder="예) 010-8765-4321" />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.querySelector('[data-value="basic"]')?.click()}
                  >
                    이전
                  </Button>
                  <Button type="button" onClick={() => document.querySelector('[data-value="design"]')?.click()}>
                    다음
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label>템플릿 선택</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`border rounded-md p-2 cursor-pointer hover:border-primary ${selectedTemplate === 1 ? "border-primary ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedTemplate(1)}
                    >
                      <div className="aspect-[9/16] rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop"
                          alt="템플릿 1"
                          width={300}
                          height={533}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm">클래식</p>
                    </div>
                    <div
                      className={`border rounded-md p-2 cursor-pointer hover:border-primary ${selectedTemplate === 2 ? "border-primary ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedTemplate(2)}
                    >
                      <div className="aspect-[9/16] rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1287&auto=format&fit=crop"
                          alt="템플릿 2"
                          width={300}
                          height={533}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm">모던</p>
                    </div>
                    <div
                      className={`border rounded-md p-2 cursor-pointer hover:border-primary ${selectedTemplate === 3 ? "border-primary ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedTemplate(3)}
                    >
                      <div className="aspect-[9/16] rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop"
                          alt="템플릿 3"
                          width={300}
                          height={533}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm">로맨틱</p>
                    </div>
                    <div
                      className={`border rounded-md p-2 cursor-pointer hover:border-primary ${selectedTemplate === 4 ? "border-primary ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedTemplate(4)}
                    >
                      <div className="aspect-[9/16] rounded-md overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1470&auto=format&fit=crop"
                          alt="템플릿 4"
                          width={300}
                          height={533}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm">미니멀</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mainImage">대표 이미지 업로드</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <div className="mb-4 relative w-full max-w-xs mx-auto aspect-square rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop"
                        alt="업로드 이미지 미리보기"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground">이미지를 클릭하거나 드래그하여 업로드하세요</p>
                    <Input id="mainImage" type="file" className="hidden" />
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById("mainImage")?.click()}
                    >
                      이미지 선택
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.querySelector('[data-value="details"]')?.click()}
                  >
                    이전
                  </Button>
                  <Button type="submit">미리보기</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </form>
      </Tabs>
    </div>
  )
}

