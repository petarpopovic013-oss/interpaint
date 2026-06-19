import Image from "next/image";
import { notFound } from "next/navigation";
import { seoPages, services } from "../data/site";
import { CheckList, ContactStrip, CTAButton, Eyebrow, PageHero, SectionHeading } from "./Shared";
import { GallerySection } from "./HomeSections";

export function SeoServicePage({ slug }: { slug: string }) {
  const page = seoPages.find((item) => item.slug === slug);
  const related = services.filter((service) => service.slug !== slug).slice(0, 3);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} text={page.summary} image={page.image} />

      <section className="seo-content section-light">
        <div className="container seo-grid">
          <div>
            <SectionHeading
              eyebrow="Interpaint postupak"
              title="Priprema površine"
              accent="sa jasnim rezultatom"
              text={page.summary}
            />
            <CheckList items={page.bullets} />
            <p>
              U zavisnosti od materijala, stanja površine i završnog premaza, biramo odgovarajući
              abraziv, pritisak i način rada. Cilj je čista, stabilna i pravilno pripremljena
              površina za dalju obradu.
            </p>
            <CTAButton />
          </div>
          <Image src={page.image} alt={page.title} width={620} height={520} />
        </div>
      </section>

      <section className="related-services section-ice">
        <div className="container">
          <Eyebrow>Povezane usluge</Eyebrow>
          <div className="related-grid">
            {related.map((service) => (
              <a href={`/${service.slug}`} key={service.slug}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />
      <ContactStrip />
    </>
  );
}
