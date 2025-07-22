import Link from "next/link"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
              draggable={false}
            />
            {/* Mobile Logo */}
            <img
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
              draggable={false}
            />
          </div>
        </Link>
        <ul className="flex items-center gap-8.5">
          <li className="text-sm uppercase cursor-pointer" draggable={false}>
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer" draggable={false}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}