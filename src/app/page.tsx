import { Benefit } from "@/components/Benefit"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { Partner } from "@/components/Partner"
import { Product } from "@/components/Product"
import { Testimonial } from "@/components/Testimonials"

import { Video } from "@/components/Video"

export default function Home() {
  return (
    <div className="w-full bg-secondary">
      <Video />
      <section className="container absolute inset-0 flex items-center bg-opacity-50 ">
        <Hero />
      </section>

      <section>
        <Testimonial />
      </section>

      <section className="bg-[#0E2326] container">
        <Product />
      </section>

      <section className="container ">
        {/* <Benefits /> */}
        <Benefit />
      </section>

      <section className=" container  ">
        <Partner />
      </section>

      <section className="bg-[#EEEEE7] ">
        <Contact />
      </section>
    </div>
  )
}
