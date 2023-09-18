"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="w-[685px] mt-14">
      <motion.div
        initial={{ opacity: 0, translateY: 0 }}
        animate={{ opacity: 1, translateY: 50 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="text-8xl font-medium text-[#EEEEE7] font-bricolage">
          Materialize your digital wealth.
        </h1>

        <p className="mt-8 mb-8 text-xl w-[69%] font-medium text-[#EEEEE7] ">
          Close on a dream house, trade your crypto while borrowing against it.
          Be over the moon.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mt-20 flex items-center space-x-4"
      >
        <Button
          text="JOIN WAITLIST"
          className="bg-primary font-bold text-sm  h-[55px] text-secondary font-bricolage rounded-full w-[180px] hover:bg-[#8C7DFF] py-[22px] px-5 transition "
        />
        <Button
          text="SEE HOW IT WORKS"
          className="text-white border py-[22px] px-5  h-[60px] transition font-bold text-sm border-white rounded-full w-[200px] hover:bg-[#8C7DFF] hover:text-black hover:border-none"
        />
      </motion.div>
    </div>
  )
}

export default Hero
