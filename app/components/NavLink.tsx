import Link from "next/link";

export default function NavLink({ href, children , isActive }:
     { href: string ; children: React.ReactNode ; isActive?: boolean }) {

    return (
        <li className="text-sm uppercase" draggable={false}>
            <Link
                href={href}
                className={`px-4 py-2 transition-colors ${isActive ? "text-[#F77D36]" : "text-gray-700"}
                         rounded-md cursor-pointer hover:text-[#F77D36] `}
            >{children}
            </Link>
        </li>
    )
}