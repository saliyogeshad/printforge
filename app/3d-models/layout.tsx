import  CategoriesNav  from "@/app/components/CategoriesNav";


export default function ModelsLayout({
  children,
}: {children: React.ReactNode;    // Ensure children is of type React.ReactNode
                                 // CAN also simply import and use { ReactNode } from "react";
}) {

  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNav/>
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
} 