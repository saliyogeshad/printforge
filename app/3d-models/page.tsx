import Form from "next/form";
import { getModels } from "@/app/lib/models";
import type { Model , ModelsPageProps } from "@/app/types";
import ModelsGrid from "../components/ModelsGrid";


export default async function ModelsPage({searchParams}: ModelsPageProps){
  const models: Model[] = await getModels();
  const {q} = searchParams

  const filteredModels = q
    ? models.filter((model: Model) =>
        model.name.toLowerCase().includes(q.toLowerCase()) ||
        model.description.toLowerCase().includes(q.toLowerCase())
      )
    : models;

  return (
    <>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. dragon"
          autoComplete="off"
          defaultValue={q}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border 
                    border-[#606060] rounded-full focus:border-[#606060] focus:outline-none 
                    focus:ring-0 md:text-base"
      />
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  );
} 