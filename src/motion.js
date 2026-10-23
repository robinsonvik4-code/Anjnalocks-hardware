let cleanup = () => {};

const reducedMotion = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches;

export function animateCollection(container) {
  if (!container || reducedMotion()) return;
  [...container.children].forEach((card, index) => {
    card.animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 450,
        delay: Math.min(index, 5) * 45,
        easing: "cubic-bezier(.2,.7,.2,1)",
        fill: "backwards",
      },
    );
  });
}

export function disposeMotion() {
  cleanup();
  cleanup = () => {};
}

export function mountMotion(root) {
  disposeMotion();
  const controller = new AbortController();
  const { signal } = controller;
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let revealObserver;
  let chapterObserver;

  const show = (element) => {
    element.classList.add("is-visible");
    revealObserver?.unobserve(element);
  };

  const updateScroll = () => {
    frame = 0;
    const max = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty(
      "--read-progress",
      max > 0 ? Math.min(1, scrollY / max) : 0,
    );
    root
      .querySelector(".site-header")
      ?.classList.toggle("is-scrolled", scrollY > 30);
    const menu = root.querySelector("#mobile-menu");
    if (menu && !menu.hidden) {
      menu.style.top = `${root.querySelector(".site-header").getBoundingClientRect().bottom}px`;
      if (innerWidth > 760) {
        menu.hidden = true;
        const trigger = root.querySelector(".menu-toggle");
        trigger.setAttribute("aria-expanded", "false");
        trigger.setAttribute("aria-label", "Open menu");
      }
    }
  };
  const scheduleScroll = () => {
    if (!frame) frame = requestAnimationFrame(updateScroll);
  };
  addEventListener("scroll", scheduleScroll, { passive: true, signal });
  addEventListener("resize", scheduleScroll, { passive: true, signal });
  updateScroll();

  if (!media.matches && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) show(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );

    root
      .querySelectorAll(
        ".section-heading, .range-card, .home-about-visual, .home-about-copy, .craft-summary, .craft-scene, .home-featured .product-card, .ellin-copy, .ellin-image, .catalogue-banner>div, .contact-band>div, .principle-grid article",
      )
      .forEach((element, index) => {
        element.classList.add("motion-reveal");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
        revealObserver.observe(element);
      });

    root.querySelector("main")?.animate(
      [
        { opacity: 0.25, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 380, easing: "cubic-bezier(.2,.7,.2,1)" },
    );
  }

  if ("IntersectionObserver" in window) {
    chapterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.chapter);
          root.querySelectorAll("[data-chapter-link]").forEach((item) => {
            const active = Number(item.dataset.chapterLink) === index;
            item.classList.toggle("active", active);
            if (active) item.setAttribute("aria-current", "step");
            else item.removeAttribute("aria-current");
          });
          const number = root.querySelector(".chapter-number");
          if (number) number.textContent = `0${index + 1}`;
        });
      },
      { rootMargin: "-15% 0px -40% 0px", threshold: 0.1 },
    );
    root
      .querySelectorAll("[data-chapter]")
      .forEach((element) => chapterObserver.observe(element));
  }

  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    root.addEventListener(
      "pointermove",
      (event) => {
        if (media.matches) return;
        const card = event.target.closest(
          ".range-card, .product-card, .hero-product-stage",
        );
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--pointer-x", `${x * 7}px`);
        card.style.setProperty("--pointer-y", `${y * 7}px`);
        card.style.setProperty("--tilt-x", `${-y * 3}deg`);
        card.style.setProperty("--tilt-y", `${x * 3}deg`);
      },
      { passive: true, signal },
    );
    root.addEventListener(
      "pointerout",
      (event) => {
        const card = event.target.closest(
          ".range-card, .product-card, .hero-product-stage",
        );
        if (!card || card.contains(event.relatedTarget)) return;
        ["--pointer-x", "--pointer-y", "--tilt-x", "--tilt-y"].forEach((key) =>
          card.style.removeProperty(key),
        );
      },
      { passive: true, signal },
    );
  }

  root.addEventListener(
    "click",
    (event) => {
      if (event.target.closest(".menu-toggle")) {
        const menu = root.querySelector("#mobile-menu");
        menu.style.position = "fixed";
        menu.style.top = `${root.querySelector(".site-header").getBoundingClientRect().bottom}px`;
        menu.style.zIndex = "70";
      }
      const finish = event.target.closest("[data-finish]");
      if (finish) {
        const specimen = root.querySelector(".finish-specimen");
        if (specimen) {
          specimen.className = `finish-specimen finish-orb ${finish
            .querySelector(".finish-orb")
            .className.split(" ")
            .filter((name) => name !== "finish-orb")
            .join(" ")}`;
          if (!media.matches)
            specimen.animate(
              [
                { opacity: 0.25, transform: "rotate(-12deg) scale(.95)" },
                { opacity: 1, transform: "rotate(0) scale(1)" },
              ],
              { duration: 500, easing: "ease-out" },
            );
        }
      }
    },
    { signal },
  );
  root.addEventListener(
    "focusin",
    (event) => {
      const hidden = event.target.closest(".motion-reveal:not(.is-visible)");
      if (hidden) show(hidden);
    },
    { signal },
  );
  const onMediaChange = () => {
    if (media.matches) {
      revealObserver?.disconnect();
      root.querySelectorAll(".motion-reveal").forEach(show);
      root
        .getAnimations({ subtree: true })
        .forEach((animation) => animation.finish());
    }
  };
  media.addEventListener("change", onMediaChange, { signal });

  cleanup = () => {
    controller.abort();
    revealObserver?.disconnect();
    chapterObserver?.disconnect();
    if (frame) cancelAnimationFrame(frame);
  };
}
