import type { Metadata } from "next";
import { ServicesPage } from "../components/HomeSections";
import { PageHero } from "../components/Shared";

export const metadata: Metadata = {
  title: "Naše usluge - Interpaint",
  description: "Peskarenje metala, drveta, betona, EcoBlasting, antikorozivna i protivpožarna zaštita.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Naše usluge"
        title="Kompletna priprema i zaštita površina"
        text="Mobilne ekipe, stručan tim i savremena oprema za peskarenje, EcoBlasting, AKZ i protivpožarne premaze."
        image="/images/interpaint/metal.jpg"
      />
      <ServicesPage />
    </>
  );
}
