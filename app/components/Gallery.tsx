"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const [category, setCategory] = useState("Sve");
  const categories = ["Sve", ...Array.from(new Set(images.map((image) => image.category)))];
  const visibleImages = category === "Sve" ? images : images.filter((image) => image.category === category);

  return (
    <>
      <div className="gallery-filters" aria-label="Filter galerije">
        {categories.map((item) => (
          <button
            className={item === category ? "active" : ""}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {visibleImages.map((image) => (
          <button
            className="gallery-item"
            key={image.src}
            onClick={() => setActive(image)}
            type="button"
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
            <span>{image.category}</span>
          </button>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt}>
          <button className="lightbox-close" onClick={() => setActive(null)} type="button" aria-label="Zatvori galeriju">
            <X size={24} />
          </button>
          <div className="lightbox-image">
            <Image src={active.src} alt={active.alt} fill sizes="90vw" />
          </div>
          <p>{active.alt}</p>
        </div>
      ) : null}
    </>
  );
}
