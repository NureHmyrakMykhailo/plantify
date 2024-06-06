import { PropsWithChildren } from "react"
import { Header } from "@/app/(landing)/_components/header"
import { Footer } from "@/app/(landing)/_components/footer"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
