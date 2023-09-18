"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "../Footer"
import { Logo } from "../Logo"

const Contact = () => {
  const router = useRouter()

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mt-4 grid grid-cols-2 p-[60px] space-x-4 "
      >
        <div className="mt-16">
          <div>
            <Logo />
          </div>

          <div className="mt-8 text-[#003c32]">
            <h1 className=" font-bricolage font-semibold text-6xl">
              Materialize your digital wealth
            </h1>
            <p className="mt-8">801 Brickell Ave, Miami FL, 33131</p>
          </div>

          <div className="mt-[140px] ">
            <p className="text-sm text-[#003c32]">
              EQUAL CREDIT OPPORTUNITY ACT NOTICE: The Federal Equal Credit
              Opportunity Act prohibits creditors from discriminating against
              credit applicants on the basis of race, color, religion, national
              origin, sex, marital status, or age (provided the applicant has
              the capacity to enter into a binding contract); because all or
              part of the applicant&apos;s income derives from any public
              assistance program; or because the applicant has, in good faith,
              exercised any right under the Consumer Credit Protection Act. The
              Federal Agency that administers Moon Mortgage&apos;s compliance
              with this law is the Federal Trade Commission, Equal Credit
              Opportunity, Washington, DC 20580.
            </p>
          </div>
        </div>

        <div className="mt-[145px] px-8 ">
          <div className="text-[#8C7DFF] text-[32px] ">
            <Link href="#" className="border-b-2 border-b-[#8C7DFF]">
              sethreas@gmail.com
            </Link>
          </div>

          <div className="text-[#8C7DFF] mt-8 space-x-2  text-sm">
            <ul className="flex gap-3 font-bold">
              <li className="cursor-pointer" onClick={() => router.push("/")}>
                CRYPTO MORTGAGE
              </li>
              <li className="cursor-pointer" onClick={() => router.push("/")}>
                TRADE & BORROW
              </li>
              <li className="cursor-pointer" onClick={() => router.push("/")}>
                PRESS PAGE
              </li>
            </ul>
          </div>

          <div className="mt-[205px] flex items-center justify-center gap-4 ">
            <div>
              <p className="text-sm text-[#003c32]">
                Moon Mortgage Servicing LLC NMLS ID#2361495 Moon Mortgage
                Residential LLC NMLS ID#2353334 Moon Mortgage LMA LLC NMLS
                ID#2419733
              </p>
            </div>

            <div className="mb-7 ">
              <p className="text-sm text-[#003c32]">
                Moon Mortgage is not a bank. All crypto services are provided by
                Anchorage Digital, a federally chartered bank. Crypto assets are
                not FDIC-insured products and may lose value
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container border-t-2 border-t-[#C3DDD4]">
        <Footer />
      </div>
    </>
  )
}

export default Contact
