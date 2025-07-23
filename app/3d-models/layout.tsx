import { getAllCategories } from "../lib/categories";
import NavLink from "../components/NavLink";


export default function ModelsLayout({
  children,
}: {children: React.ReactNode;    // Ensure children is of type React.ReactNode
                                 // CAN also simply import and use { ReactNode } from "react";
}) {

    const categories = getAllCategories()

  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
      <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <div className="relative">
          <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
              <NavLink
                href="/3d-models"
              >
                All
              </NavLink>
              {categories.map((item: { slug: string; displayName: string }) => (
                <NavLink
                  href={`/3d-models/categories/${item.slug}`}
                  key={item.slug}
                >
                  {item.displayName}
                </NavLink>
              ))}
            </ul>
          </nav>
          {/* Fading edge/gradient for horizontal scroll hint on mobile */}
          <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
} 