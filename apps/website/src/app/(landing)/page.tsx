import type { Metadata } from "next"
import { Banner } from "@/app/(landing)/_sections/banner"
import { Product } from "@/app/(landing)/_sections/product"
import { Action } from "@/app/(landing)/_sections/action"
import { Review } from "@/app/(landing)/_sections/review"
import { Price } from "@/app/(landing)/_sections/price"
import { Questions } from "@/app/(landing)/_sections/questions"

export const metadata: Metadata = {
  title: "Home",
  description: "This is the description of the Home page."
}

export default function LandingPage() {
  return (
    <>
      <Banner />
      <Product />
      <Action />
      <Review />
      <Price />
      <Questions />
    </>
  )
}
