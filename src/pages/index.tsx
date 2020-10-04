import { NextSeo } from "next-seo";
import { Footer, Hero, Servi, Team } from "../components";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Veterinary"
        description="Uma equipe de veterinarios de ponta com o objetivo de trazer o melhor tratamento que seu animal merecem."
      />
      <Hero />
      <main className="relative z-30 ">
        <Servi />
      </main>
      <Team />
      <Footer />
    </>
  );
}
