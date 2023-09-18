"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatePresence, motion } from "framer-motion"

const Testimonial = () => {
  return (
    <div className="px-[140px] py-[55px] flex mt-[140px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" min-w-[180px] mr-[160px] "
      >
        <span className="item flex gap-2 ">
          <p className="text-white">WHY WE DID IT</p>
        </span>
      </motion.div>

      <AnimatePresence mode="wait" initial={false}>
        <div className="  w-full max-w-[760px] mr-[200px] mx-auto ">
          <h1 className="text-[#EEEEE7] text-6xl font-bricolage font-medium">
            No bank would touch me with a 10 foot pole, so I built Moon
            Mortgage.
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div>
                <p className="text-white">Seth Reas</p>
              </div>
              <div className="text-white">Moon CEO</div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Testimonial
