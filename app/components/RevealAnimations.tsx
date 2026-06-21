"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  ".hero-copy",
  ".hero-text",
  ".hero-stat",
  ".hero-cards article",
  ".section-heading",
  ".image-stack img",
  ".service-row",
  ".eco-grid",
  ".eco-media img",
  ".partner-card",
  ".reference-list article",
  ".gallery-item",
  ".page-hero-inner",
  ".service-card",
  ".seo-grid > img",
  ".related-grid a",
  ".contact-strip-inner",
  ".contact-cards a",
  ".contact-cards span",
  ".contact-form",
].join(",");

const scaleSelectors = [".image-stack img", ".eco-media img", ".seo-grid > img"].join(",");

export function RevealAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    if (!elements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element) => {
      element.classList.add("reveal-item");

      if (element.matches(scaleSelectors)) {
        element.classList.add("reveal-scale");
      }
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
