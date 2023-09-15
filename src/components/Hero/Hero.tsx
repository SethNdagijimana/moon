"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="w-[685px] mt-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 2, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="text-8xl font-medium text-[#EEEEE7] font-bricolage">
          Materialize your digital wealth.
        </h1>

        <p className="mt-8 text-xl font-light text-[#EEEEE7] ">
          Close on a dream house, trade your crypto while borrowing against it.
          Be over the moon.
        </p>
      </motion.div>

      <div className="mt-10 space-x-4">
        <Button
          text="JOIN WAITLIST"
          className="bg-primary text-secondary rounded-full w-[200px] hover:bg-[#8C7DFF] h-[60px]"
        />
        <Button
          text="SEE HOW IT WORKS"
          className="text-white border border-white rounded-full w-[250px] hover:bg-[#8C7DFF] hover:text-black h-[60px]"
        />
      </div>
    </div>
  )
}

export default Hero
