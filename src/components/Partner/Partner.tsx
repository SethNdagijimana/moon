"use client"

import Image from "next/image"
import { Button } from "../ui/button"

import { motion } from "framer-motion"

const Partner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className=" mt-[200px] w-full  "
    >
      <div className="relative h-[650px]  ">
        <Image
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          src="/partner.png"
          alt="image"
          className="w-full bg-black bg-opacity-50  "
        />

        <div className="absolute top-0 left-0  w-full text-[#EEEEE7] text-2xl ">
          <h1 className="text-[140px] mt-[140px] text-center font-semibold font-bricolage">
            Partner Up!
          </h1>

          <div className="w-[780px] mt-[10px] mb-5 mx-auto ">
            <p className="text-base w-full font-medium  ">
              If you&apos;re broker or a business interested in a partnership
              with Moon Mortgage, get in touch with us and we&apos;ll get back
              to you.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button
              text="JOIN WAITLIST "
              className="bg-primary font-bricolage font-bold px-10 text-sm  py-5 text-secondary rounded-full hover:bg-[#8C7DFF] "
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Partner
