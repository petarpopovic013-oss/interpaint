import type { Metadata } from "next";
import Image from "next/image";
import { EcoFeature, GallerySection } from "../components/HomeSections";
import { CheckList, ContactStrip, PageHero, SectionHeading } from "../components/Shared";

export const metadata: Metadata = {
  title: "EcoBlasting - Interpaint",
  description: "Dustless Blasting tehnologija za peskarenje bez prašine, pripremu površina i uklanjanje korozije.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Interpaint EcoBlasting Srbija"
        title="Dustless Blasting bez prašine"
        text="Jedinstvena oprema za uklanjanje korozije, starih premaza i nečistoća kombinacijom vode, vazduha i abraziva."
        image="/images/interpaint/project-wide.jpg"
      />
      <EcoFeature />
      <section className="seo-content section-light">
        <div className="container seo-grid">
          <div>
            <SectionHeading
              eyebrow="Kako radi"
              title="Voda, vazduh"
              accent="i abraziv"
              text="EcoBlasting omogućava efikasnu pripremu površine uz manju količinu prašine, što je naročito važno za terenske radove i lokacije gde je čistoća procesa bitna."
            />
            <CheckList
              items={[
                "Uklanjanje korozije, boje i naslaga",
                "Čistija površina i manji uticaj prašine na okolinu",
                "Primena na metalu, betonu, kamenu i specijalnim površinama",
              ]}
            />
          </div>
          <Image src="/images/interpaint/project-hero.jpg" alt="EcoBlasting oprema i radovi" width={640} height={520} />
        </div>
      </section>
      <GallerySection />
      <ContactStrip />
    </>
  );
}
