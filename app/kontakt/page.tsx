import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/site";
import { CTAButton, PageHero, SectionHeading } from "../components/Shared";

export const metadata: Metadata = {
  title: "Kontakt - Interpaint",
  description: "Kontaktirajte Interpaint za peskarenje, EcoBlasting, antikorozivnu i protivpožarnu zaštitu.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Pošaljite upit ili nas pozovite"
        text="Za najbrži odgovor pozovite nas direktno. Kontakt forma je pripremljena kao frontend element za slanje upita."
        image="/images/interpaint/metal.jpg"
      />
      <section className="contact-page section-light">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              eyebrow="Kontaktirajte nas"
              title="Procena posla"
              accent="počinje razgovorom"
              text="Recite nam koji materijal obrađujete, gde se rad izvodi i kakav završni rezultat očekujete."
            />
            <div className="contact-cards">
              <a href={contact.phoneHref}><Phone size={20} /> {contact.phone}</a>
              <a href={contact.emailHref}><Mail size={20} /> {contact.email}</a>
              <span><MapPin size={20} /> {contact.address}</span>
            </div>
            <CTAButton />
          </div>
          <form className="contact-form">
            <label>
              Ime
              <input name="name" placeholder="Vaše ime" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="email@primer.rs" />
            </label>
            <label>
              Naslov
              <input name="subject" placeholder="Vrsta usluge ili projekta" />
            </label>
            <label>
              Poruka
              <textarea name="message" rows={6} placeholder="Opišite materijal, lokaciju i rok" />
            </label>
            <button type="button">Pošaljite upit</button>
            <small>Forma je vizuelno pripremljena. Za slanje koristite telefon ili email do povezivanja backend-a.</small>
          </form>
        </div>
      </section>
    </>
  );
}
