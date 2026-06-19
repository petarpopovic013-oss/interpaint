import type { Metadata } from "next";
import { ReferencesPage } from "../components/HomeSections";
import { PageHero } from "../components/Shared";

export const metadata: Metadata = {
  title: "Reference - Interpaint",
  description: "Izdvojeni Interpaint projekti: AKZ, protivpožarna zaštita, silosi, rezervoari, cevovodi i čelične konstrukcije.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Reference"
        title="Izvedeni industrijski projekti"
        text="Izdvojili smo deo radova i partnera kako biste videli gde se Interpaint rešenja primenjuju u praksi."
        image="/images/interpaint/project-hero.jpg"
      />
      <ReferencesPage />
    </>
  );
}
