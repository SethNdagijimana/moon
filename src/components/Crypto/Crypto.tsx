import { motion } from "framer-motion"
import { Button } from "../ui/button"

const Crypto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 2, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="mt-14"
    >
      <div className="space-y-4">
        <h1 className="font-bricolage text-[#EEEEE7] text-[60px] font-medium">
          Mortgage for Crypto Investors
        </h1>

        <p className="mt-2 text-[#949d9a] font-medium text-xl">
          Get a Moon Mortgage to buy your dream house with crypto.
        </p>
      </div>

      <div className="flex items-center gap-x-24 mt-8 benefits">
        <div className="text-[#EEEEE7] space-y-2">
          <h2 className="font-bricolage font-medium">14 Days</h2>
          <p>Average close time</p>
        </div>

        <div className="text-[#EEEEE7] space-y-2">
          <h2 className="font-bricolage font-medium">High</h2>
          <p>Approval rate</p>
        </div>
      </div>

      <div className="flex items-center gap-x-[110px] mt-8 benefits">
        <div className="text-[#EEEEE7] mt-8">
          <h2 className="font-bricolage font-medium">$1m</h2>
          <p className="mt-2">Min loan amount</p>
        </div>

        <div className="text-[#EEEEE7] mt-8">
          <h2 className="font-bricolage font-medium">BTC</h2>
          <p className="">Most popular collateral type </p>
        </div>
      </div>

      <div className="mt-14 space-x-8">
        <Button
          text="JOIN WAITLIST "
          className="bg-primary font-bold  text-secondary rounded-full w-[200px] hover:bg-[#8C7DFF] h-[60px]"
        />
        <Button
          text="LEARN MORE"
          className="text-white border border-white rounded-full w-[200px] hover:bg-[#8C7DFF] hover:text-black h-[60px]"
        />
      </div>
    </motion.div>
  )
}

export default Crypto
