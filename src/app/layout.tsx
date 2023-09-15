import { Navbar } from "@/components/Navbar"
import { cn } from "@/lib/utils"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MoonLanding"
}
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, bricolage.variable)}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
