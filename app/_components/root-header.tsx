import { ThemeDropdownMenu } from "@/app/_components/theme-dropdown-menu"
import { Config } from "@/config"
import { PencilLine } from "lucide-react"
import Link from "next/link"

export const RootHeader = () => {
  return (
    <header className="p-8 max-w-screen-xl mx-auto flex space-x-4 justify-between">
      <div className="flex space-x-4 items-center">
        <PencilLine />
        <h2 className="text-xl font-bold">
          <Link href="/">{Config.blogTitle}</Link>
        </h2>
      </div>
      <ThemeDropdownMenu />
    </header>
  )
}
