import { getAllCategories } from "../lib/categories";


export default function ModelsLayout({
  children,
}: {children: React.ReactNode;    // Ensure children is of type React.ReactNode
                                 // CAN also simply import and use { ReactNode } from "react";
}) {

    const categories = getAllCategories

  return (
    <div className="models-layout">
      <h1>3D Models</h1>
      {children}
    </div>
  );
} 