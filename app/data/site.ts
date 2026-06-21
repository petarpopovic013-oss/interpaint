export const contact = {
  phone: "+381 63 326222",
  phoneHref: "tel:+38163326222",
  email: "info@interpaint.rs",
  emailHref: "mailto:info@interpaint.rs",
  address: "Privrednikova 1, Novi Sad",
  oldAddress: "Ribarsko Ostrvo 1a, Novi Sad",
};

export const navItems = [
  { label: "Početna", href: "/" },
  { label: "Naše usluge", href: "/nase-usluge" },
  { label: "EcoBlasting", href: "/eco-blasting" },
  { label: "Reference", href: "/reference" },
  { label: "Kontakt", href: "/kontakt" },
];

export const galleryImages = [
  { src: "/images/interpaint/metal.jpg", alt: "Peskarenje metalne konstrukcije", category: "Metal" },
  { src: "/images/interpaint/project-hero.jpg", alt: "Industrijski radovi peskarenja", category: "Projekti" },
  { src: "/images/interpaint/project-wide.jpg", alt: "Priprema površine na terenu", category: "Projekti" },
  { src: "/images/interpaint/akz-1.jpg", alt: "Antikorozivna zaštita konstrukcije", category: "AKZ" },
  { src: "/images/interpaint/akz-2.jpg", alt: "Zaštitni premaz na metalnoj površini", category: "AKZ" },
  { src: "/images/interpaint/drvo-4.jpg", alt: "Peskarenje drveta", category: "Drvo" },
  { src: "/images/interpaint/drvo-5.jpg", alt: "Strukturiranje drveta peskarenjem", category: "Drvo" },
  { src: "/images/interpaint/project-1.jpg", alt: "Radovi na pripremi materijala", category: "Projekti" },
  { src: "/images/interpaint/project-2.jpg", alt: "Završna obrada površine", category: "Projekti" },
  { src: "/images/interpaint/project-3.jpg", alt: "Peskarenje i čišćenje površine", category: "Projekti" },
  { src: "/images/interpaint/project-4.jpg", alt: "Terenski radovi Interpaint tima", category: "Projekti" },
];

export const services = [
  {
    slug: "peskarenje-metala",
    number: "01",
    title: "Peskarenje metala",
    kicker: "Priprema za AKZ",
    image: "/images/interpaint/metal.jpg",
    excerpt:
      "Mehanička obrada metalnih površina abrazivnim materijalima pod pritiskom radi uklanjanja korozije, starih premaza i nečistoća.",
    detail:
      "Peskarenje metala je najefikasniji način čišćenja i pripreme metalnih elemenata za dalju obradu, bojenje i antikorozivnu zaštitu.",
  },
  {
    slug: "vodeno-mokro-peskarenje",
    number: "02",
    title: "Vodeno peskarenje",
    kicker: "Bez prašine",
    image: "/images/interpaint/project-hero.jpg",
    excerpt:
      "Kombinacija vode, vazduha i abraziva uklanja koroziju, boju i nečistoće uz znatno manje prašine u odnosu na suvi postupak.",
    detail:
      "Mokro peskarenje je praktično rešenje za lokacije gde je kontrola prašine važna, kao i za preciznu pripremu osetljivih površina.",
  },
  {
    slug: "antikorozivna-zastita",
    number: "03",
    title: "Antikorozivna zaštita",
    kicker: "AKZ premazi",
    image: "/images/interpaint/akz-1.jpg",
    excerpt:
      "Nakon pripreme površine nanosimo adekvatne premaze koji štite metalne konstrukcije, opremu i industrijske elemente.",
    detail:
      "AKZ produžava radni vek konstrukcija i obezbeđuje stabilnu zaštitu u industrijskim i spoljnim uslovima eksploatacije.",
  },
  {
    slug: "protivpozarna-zastita",
    number: "04",
    title: "Protivpožarna zaštita",
    kicker: "PZ premazi",
    image: "/images/interpaint/akz-2.jpg",
    excerpt:
      "Mašinski nanosimo protivpožarne premaze na čelične i druge konstrukcije u skladu sa zahtevima objekta i namenom.",
    detail:
      "Protivpožarni premazi usporavaju širenje toplote i pomažu očuvanju nosivosti konstrukcije u kritičnim uslovima.",
  },
  {
    slug: "peskarenje-drveta",
    number: "05",
    title: "Peskarenje drveta",
    kicker: "Rustična struktura",
    image: "/images/interpaint/drvo-4.jpg",
    excerpt:
      "Peskarenjem se uklanjaju stare naslage i oblikuje rustična struktura drveta za enterijere, fasade i dekorativne elemente.",
    detail:
      "Ovaj postupak je pogodan za stilizovanje, čišćenje i pripremu drvenih površina pre završne zaštite.",
  },
  {
    slug: "peskarenje-betona-i-kamena",
    number: "06",
    title: "Peskarenje betona i kamena",
    kicker: "Čišćenje podloga",
    image: "/images/interpaint/project-wide.jpg",
    excerpt:
      "Čišćenje betonskih i kamenih površina, priprema podloga za industrijske premaze i uklanjanje grafita ili starih slojeva.",
    detail:
      "Pravilno pripremljena podloga obezbeđuje bolje prijanjanje industrijskih premaza i dugotrajniji rezultat.",
  },
];

export const seoPages = [
  {
    slug: "peskarenje",
    title: "Peskarenje",
    eyebrow: "Osnovna usluga",
    summary:
      "Peskarenje je postupak mehaničke obrade površina pomoću abrazivnih materijala pod visokim pritiskom. Koristi se za uklanjanje rđe, boje, nečistoća i pripremu materijala za dalju zaštitu.",
    image: "/images/interpaint/project-hero.jpg",
    bullets: ["Metal, drvo, beton i kamen", "Rad u pogonu i na terenu", "Priprema za bojenje, AKZ i PZ premaze"],
  },
  {
    slug: "peskarenje-metala",
    title: "Peskarenje metala",
    eyebrow: "Metalne površine",
    summary:
      "Profesionalno peskarenje metala uklanja koroziju, stare premaze i naslage, ostavljajući površinu spremnom za kvalitetno prijanjanje boje i zaštitnih premaza.",
    image: "/images/interpaint/metal.jpg",
    bullets: ["Konstrukcije, rezervoari i cevovodi", "Abrazivi: kvarcni pesak, grit, staklo i sačma", "Idealna priprema za antikorozivnu zaštitu"],
  },
  {
    slug: "peskarenje-auta",
    title: "Peskarenje auta",
    eyebrow: "Vozila i šasije",
    summary:
      "Peskarenje delova vozila i šasija pomaže kod uklanjanja korozije, starih premaza i nečistoća pre restauracije ili zaštite.",
    image: "/images/interpaint/project-1.jpg",
    bullets: ["Kontrolisana obrada površine", "Priprema za zaštitne premaze", "Pogodno za delove, šasije i specijalne elemente"],
  },
  {
    slug: "peskarenje-felni",
    title: "Peskarenje felni",
    eyebrow: "Precizna priprema",
    summary:
      "Peskarenje felni uklanja stare premaze i oksidaciju, pripremajući površinu za novu zaštitu i završnu obradu.",
    image: "/images/interpaint/project-2.jpg",
    bullets: ["Uklanjanje starih premaza", "Ravnomerna priprema površine", "Priprema za farbanje ili plastifikaciju"],
  },
  {
    slug: "peskarenje-drveta",
    title: "Peskarenje drveta",
    eyebrow: "Drvene površine",
    summary:
      "Peskarenje drveta koristi se za skidanje starih slojeva i dobijanje rustične, naglašene strukture drveta.",
    image: "/images/interpaint/drvo-4.jpg",
    bullets: ["Rustičan efekat", "Skidanje farbe i nečistoća", "Priprema za zaštitu drveta"],
  },
  {
    slug: "vodeno-mokro-peskarenje",
    title: "Vodeno mokro peskarenje",
    eyebrow: "EcoBlasting tehnologija",
    summary:
      "Mokro peskarenje koristi vodu, vazduh i abraziv da očisti površinu uz značajno smanjenje prašine.",
    image: "/images/interpaint/project-hero.jpg",
    bullets: ["Manje prašine na lokaciji", "Uklanjanje rđe i boje", "Pogodno za terenske radove"],
  },
  {
    slug: "peskarenje-betona-i-kamena",
    title: "Peskarenje betona i kamena",
    eyebrow: "Podloge i fasade",
    summary:
      "Peskarenje betona i kamena koristi se za čišćenje, uklanjanje grafita i pripremu površina za industrijske premaze.",
    image: "/images/interpaint/project-wide.jpg",
    bullets: ["Čišćenje betonskih površina", "Uklanjanje grafita", "Priprema za industrijske podloge"],
  },
  {
    slug: "protivpozarna-zastita",
    title: "Protivpožarna zaštita",
    eyebrow: "Sigurnosni premazi",
    summary:
      "Interpaint izvodi nanošenje protivpožarnih premaza za zaštitu konstrukcija i smanjenje posledica požara.",
    image: "/images/interpaint/akz-2.jpg",
    bullets: ["Mašinsko nanošenje", "Čelične konstrukcije", "Rešenja prema zahtevima objekta"],
  },
  {
    slug: "antikorozivna-zastita",
    title: "Antikorozivna zaštita",
    eyebrow: "Dugotrajna zaštita",
    summary:
      "Antikorozivna zaštita obuhvata pripremu površine i nanošenje adekvatnih premaza koji štite metal od korozije.",
    image: "/images/interpaint/akz-1.jpg",
    bullets: ["Priprema peskarenjem", "Industrijski premazi", "Zaštita konstrukcija, opreme i rezervoara"],
  },
];

export const references = [
  "AKZ silosa i difuzora",
  "Protivpožarna zaštita čeličnih konstrukcija",
  "AKZ konstrukcija, kranskih mostova i kotlova",
  "AKZ tornja pogona KAN-a",
  "Zaštita cevovoda energane",
  "Zaštita silosa i rezervoara",
  "AKZ strujnih kontejnera",
  "Limske hidroelektrane Nova Varoš - AKZ zatvarača i cevovoda",
  "Zaštita antenskih stubova u Vojvodini",
  "Zaštita čelične konstrukcije i opreme u pogonu sapuna",
];

export const partners = [
  { name: "MK Group", logo: "/images/partners/mkgroup.webp" },
  { name: "Azotara", logo: "/images/partners/azotara.webp" },
  { name: "Emmezeta", logo: "/images/partners/emmezeta.webp" },
  { name: "Victoria Group", logo: "/images/partners/victoria.webp" },
  { name: "EPS", logo: "/images/partners/eps.webp" },
  { name: "Albus", logo: "/images/partners/albus.webp" },
];
