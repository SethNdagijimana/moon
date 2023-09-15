import Image from "next/image"
import { Button } from "../ui/button"

const Partner = () => {
  return (
    <div className=" mt-[200px] ">
      <div className="relative  ">
        <Image
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          src="/partner.png"
          alt="image"
          className="w-full bg-black bg-opacity-50  "
        />

        <div className="absolute top-0 left-0  w-full  text-white text-2xl ">
          <div className="  mt-[220px] text-center">
            <h1 className="text-[140px] font-semibold font-bricolage">
              Partner Up!
            </h1>
          </div>

          <div className="text-center ">
            <p className="text-base font-medium mt-[10px] mb-[40px] ">
              If you&apos;re broker or a business interested in a partnership
              with Moon Mortgage, get in touch with us and we&apos;ll get back
              to you.
            </p>
          </div>

          <div className="text-center">
            <Button
              text="JOIN WAITLIST "
              className="bg-primary font-bold  text-secondary rounded-full w-[200px] hover:bg-[#8C7DFF] h-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
