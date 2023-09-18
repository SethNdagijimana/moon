"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { Crypto } from "../Crypto"
import { Trade } from "../Trade"
import { Button } from "../ui/button"

const Product = () => {
  const [showTradeBorrowContent, setShowTradeBorrowContent] =
    useState<boolean>(true)
  const [showCryptoMortgage, setShowCryptoMortgage] = useState<boolean>(false)

  const handleTradeBorrowClick = () => {
    setShowTradeBorrowContent(!showTradeBorrowContent)
    setShowCryptoMortgage(false)
  }

  const handleCryptoMortgageClick = () => {
    setShowCryptoMortgage(!showCryptoMortgage)
    setShowTradeBorrowContent(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="px-8 py-[55px] flex "
    >
      <div className=" min-w-[180px] mr-[160px] mt-[140px] ">
        <span className="item flex gap-2 ">
          <p className="text-white">PRODUCTS</p>
        </span>

        <div className="mt-[140px] gap-2  ">
          <Button
            text=" TRADE & BORROW"
            className={cn(
              "border-b-2",
              showTradeBorrowContent ? "text-[#00F78C]" : "text-[#949d9a]"
            )}
            onClick={handleTradeBorrowClick}
          />
        </div>

        <div className="mt-4 gap-2  ">
          <Button
            text="CRYPTO MORTGAGE"
            className={cn(
              "border-b-2",
              showCryptoMortgage ? "text-[#00F78C]" : "text-[#949d9a]"
            )}
            onClick={handleCryptoMortgageClick}
          />
        </div>
      </div>

      <div className="  w-full max-w-[760px] mr-[200px] mx-auto mt-[140px]">
        <h1 className="text-[#EEEEE7] text-[80px] font-bricolage font-semibold t  ">
          Check out our Products
        </h1>

        {showTradeBorrowContent && <Trade />}
        {showCryptoMortgage && <Crypto />}
      </div>
    </motion.div>
  )
}

export default Product
