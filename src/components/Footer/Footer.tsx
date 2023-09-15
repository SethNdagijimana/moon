const Footer = () => {
  return (
    <footer className="w-full mt-4 p-4">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-[#003c32]">
            Copyright © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
        <div className="flex items-center space-x-20">
          <p className="text-[#003c32]">Privacy Policy</p>
          <p className="text-[#003c32]">Terms Of Service</p>
          <p className="text-[#003c32]">
            <span>
              <svg
                width={16}
                height={14}
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.032 14C11.0696 14 14.372 8.6132 14.372 3.94228C14.372 3.78894 14.372 3.63646 14.3624 3.48484C15.0048 2.98518 15.5592 2.36492 16 1.65506C15.4016 1.94107 14.7656 2.12887 14.1152 2.21158C14.8 1.76964 15.3128 1.07529 15.5584 0.256027C14.9136 0.667812 14.2088 0.958129 13.4736 1.11406C12.2304 -0.309101 10.1512 -0.378019 8.8288 0.960714C7.9768 1.82391 7.6144 3.11096 7.8792 4.33856C5.24 4.19555 2.7808 2.85337 1.1136 0.645414C0.2424 2.26068 0.688 4.3265 2.1304 5.36371C1.608 5.34734 1.0968 5.19572 0.64 4.92178V4.96657C0.6408 6.64903 1.7424 8.09803 3.2736 8.43143C2.7904 8.57357 2.2832 8.59424 1.792 8.49173C2.2216 9.93212 3.4544 10.9185 4.8584 10.9469C3.696 11.9307 2.26 12.4649 0.7816 12.4631C0.5208 12.4623 0.26 12.4459 0 12.4123C1.5016 13.4495 3.248 14 5.032 13.9974"
                  fill="#003C32"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
