import { getAllModels } from "@/app/lib/models";
import type { Model } from "@/app/types";
import ModelsGrid from "../components/ModelsGrid";


export default async function ModelsPage(){
  const models: Model[] = await getAllModels();

  return (
    <ModelsGrid title="3D Models" models={models} />
  );
} 