import { Hero} from "@/components/Atoms/Hero";
import { CardList } from "@/components/Organisms/CardList";
import { Footer } from "@/components/Organisms/Footer";
import { Header } from "@/components/Organisms/Header";

export default function Oferta() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Header />
      <Hero />
      <CardList />
      <Footer />
    </main>
  );
}
