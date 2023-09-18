"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Logo } from "../Logo"
import { Button } from "../ui/button"

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const navbarRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navbarClassName = `w-full px-[70px] py-[23px] flex items-center justify-between fixed z-50 ${
    hasScrolled ? "bg-[#EEEEE7] text-black" : "bg-[#003c32]"
  }`

  const ulClassName = `flex items-center justify-center   gap-8 font-bold ${
    hasScrolled ? "text-black" : "text-[#00F78C]"
  }`

  return (
    <nav ref={navbarRef} className={navbarClassName}>
      <div className="flex items-center space-x-[200px]  ">
        <span className="">
          <Logo />
        </span>

        <ul className={ulClassName}>
          <li
            className="cursor-pointer font-bricolage transition duration-150 hover:text-[#8C7DFF]  "
            onClick={() => router.push("/")}
          >
            HOME
          </li>
          <li className="cursor-pointer font-bricolage transition duration-150 hover:text-[#8C7DFF]">
            TRADE & BORROW
          </li>
          <li className="cursor-pointer font-bricolage transition duration-150 hover:text-[#8C7DFF]">
            CRYPTO MORTGAGE
          </li>
        </ul>
      </div>

      <div className="flext items-end justify-end  ">
        <Button
          text="JOIN WAITLIST"
          className="bg-primary rounded-full w-[150px] h-[27px] font-bricolage text-base font-bold text-[#003c32] hover:bg-[#8C7DFF] transition "
        />
      </div>
    </nav>
  )
}

export default Navbar
