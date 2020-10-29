import { NextSeo } from "next-seo";
import React from "react";
import { Footer, Hero, Servi, Team, Contact } from "../components";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Veterinary"
        description="Uma equipe de veterinarios de ponta com o objetivo de trazer o melhor tratamento que seu animal merecem."
      />
      <div className="bg-gray-200">
        <Hero />
        <main className="relative z-30 ">
          <Servi />
        </main>
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
