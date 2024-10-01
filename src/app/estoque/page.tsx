
import { Filter } from "@/components/Molecules/Filter";
import { CardList } from "@/components/Organisms/CardList";
import carList from '@/data/mock/listCar.json'
import { Suspense } from "react";

export default function Estoque() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Filter />
      </Suspense>
      <div className="max-w-[1280px] w-full mt-8 px-8 xl:px-0">
        <h2 className='text-2xl font-medium text-secondary'>
          Carros Seminovos em Ofertas     
        </h2>
      </div>
      <CardList list={carList}/>
    </main>
  );
}
