### supabase

- JavaScript docs : https://supabase.com/docs/reference/javascript/select
- Next.js 세팅 : https://supabase.com/docs/guides/auth/server-side/nextjs (대시보드 상단의 connect에서도 확인 가능)

### supabase 테이블 생성 시 RLS를 on 하면 테이블을 조회하려고 해도 빈 배열로 반환된다.

RLS를 켜둔 상태에서 테이블 조회 시 계속 빈 배열 반환함. 테이블이 존재하지 않는 경우에는 null이 반환되는데 조회는 됨에도 데이터를 없다고 판단하던 것
RLS를 off 하면 바로 조회 가능함. RLS가 on 되어있는 상태에서는 read, write가 불가함

- RLS : Row Level Security
- 관련 stackoverflow : https://stackoverflow.com/questions/71294440/supabase-in-next-js-returning-an-empty-array-when-data-is-in-relevant-tables
