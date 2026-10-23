import "@fontsource-variable/manrope";
import "@fontsource/dm-serif-display/latin-400.css";
import "@fontsource/dm-serif-display/latin-400-italic.css";
import "./style.css";
import "./redesign.css";
import "./hero-door.css";
import walnutTexture from "./assets/walnut-natural.webp";
import { mountMotion, disposeMotion, animateCollection } from "./motion.js";

const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.5"/></svg>';
const diagonal =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5"/></svg>';
const download =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" stroke="currentColor" stroke-width="1.5"/></svg>';
const logo =
  '<span class="brand-name">Anjna<span>®</span></span><span class="brand-caption">LOCKS & HARDWARE</span>';
const catalogue = `${import.meta.env.BASE_URL}Anjna-Ellin-Catalogue-2024.pdf`;
const categories = [
  { id: "all", label: "All products" },
  { id: "cabinet", label: "Cabinet handles" },
  { id: "mortice", label: "Mortice handles" },
  { id: "aldrops", label: "Aldrops" },
  { id: "locks", label: "Locks & latches" },
  { id: "pull", label: "Pull handles" },
  { id: "kits", label: "Door kits" },
  { id: "stoppers", label: "Door stoppers" },
  { id: "hooks", label: "Hooks & chest handles" },
  { id: "accessories", label: "Door accessories" },
  { id: "bathroom", label: "Ellin bathroom" },
];
const products = [
  {
    id: "ai-214",
    name: "Classic cabinet handle",
    code: "AI-214",
    category: "cabinet",
    image: "cabinet-214",
    material: "Stainless steel",
    page: 4,
  },
  {
    id: "ai-217",
    name: "Dual-tone cabinet handle",
    code: "AI-217",
    category: "cabinet",
    image: "cabinet-217",
    material: "Stainless steel",
    page: 4,
  },
  {
    id: "ai-216",
    name: "Curved cabinet handle",
    code: "AI-216",
    category: "cabinet",
    image: "cabinet-216",
    material: "Stainless steel",
    page: 4,
  },
  {
    id: "ai-218",
    name: "Slim cabinet handle",
    code: "AI-218",
    category: "cabinet",
    image: "cabinet-218",
    material: "Stainless steel",
    page: 4,
  },
  {
    id: "ai-1001",
    name: "Linear mortice handle",
    code: "AI-1001",
    category: "mortice",
    image: "mortice-1001",
    material: "Stainless steel",
    size: "8 inches",
    page: 13,
  },
  {
    id: "ai-1002",
    name: "Square mortice handle",
    code: "AI-1002",
    category: "mortice",
    image: "mortice-1002",
    material: "Stainless steel",
    size: "8 inches",
    page: 13,
  },
  {
    id: "ai-xuv",
    name: "XUV mortice handle",
    code: "AI-XUV",
    category: "mortice",
    image: "mortice-xuv",
    material: "Stainless steel",
    size: "8 inches",
    page: 13,
  },
  {
    id: "ai-creta",
    name: "Creta welded aldrop",
    code: "AI-CRETA WELDE",
    category: "aldrops",
    image: "aldrop-creta",
    material: "Stainless steel",
    size: "16 × 4 mm / 14 × 3 mm",
    page: 7,
    dark: true,
  },
  {
    id: "ai-omni",
    name: "Omni welded aldrop",
    code: "AI-OMNI WELDE",
    category: "aldrops",
    image: "aldrop-omni",
    material: "Stainless steel",
    size: "16 × 4 mm / 14 × 3 mm",
    page: 7,
    dark: true,
  },
  {
    id: "ai-cupboard",
    name: "Cupboard lock",
    code: "AI-CUPBOARD LOCK",
    category: "locks",
    image: "cupboard-lock",
    size: "65 mm / 75 mm",
    page: 18,
  },
  {
    id: "anjna-padlock",
    name: "Anjna padlock",
    code: "65 MM PADLOCK",
    category: "locks",
    image: "padlock",
    size: "65 mm",
    page: 18,
  },
  {
    id: "anjna-rim",
    name: "Rim lock set",
    code: "RIM LOCK",
    category: "locks",
    image: "rim-lock",
    page: 18,
  },
  {
    id: "pull-collection",
    name: "Pull handle collection",
    code: "PULL HANDLES",
    category: "pull",
    image: "pull-handles",
    material: "Stainless steel",
    page: 6,
    collection: true,
  },
  {
    id: "omni-kit",
    name: "Omni welded door kit",
    code: "AI-OMNI WELDED",
    category: "kits",
    image: "door-kits",
    material: "Stainless steel",
    size: "16 × 4 mm / 14 × 3 mm",
    page: 10,
    collection: true,
  },
  {
    id: "stopper-collection",
    name: "Door stopper collection",
    code: "DOOR STOPPERS",
    category: "stoppers",
    image: "door-stoppers",
    page: 15,
    collection: true,
  },
  {
    id: "hook-collection",
    name: "Hooks & chest handles",
    code: "KHUNTIES & CHEST HANDLES",
    category: "hooks",
    image: "hooks",
    page: 16,
    collection: true,
  },
  {
    id: "accessory-collection",
    name: "Everyday door essentials",
    code: "DOOR ACCESSORIES",
    category: "accessories",
    image: "accessories",
    page: 17,
    collection: true,
  },
  {
    id: "psd-101",
    name: "Single soap dish",
    code: "PSD-101",
    category: "bathroom",
    image: "soap-101",
    material: "Plastic",
    brand: "Ellin",
    page: 21,
  },
  {
    id: "psd-102",
    name: "Round soap dish",
    code: "PSD-102",
    category: "bathroom",
    image: "soap-102",
    material: "Plastic",
    brand: "Ellin",
    page: 21,
  },
  {
    id: "psd-1032",
    name: "Double soap dish",
    code: "PSD-1032",
    category: "bathroom",
    image: "soap-double",
    material: "Plastic",
    brand: "Ellin",
    page: 21,
  },
];
const finishes = [
  ["Brass Antique", "brass", "Warm. Rich. Timeless."],
  ["Black Silver", "black-silver", "A striking contrast."],
  ["C.P. Silver", "cp", "A brighter perspective."],
  ["S.S. Finish", "ss", "Quietly refined."],
  ["Chrome Plated", "chrome", "A polished statement."],
  ["Powder Coating", "powder", "Colour with character."],
];
const app = document.querySelector("#app");
let currentFilter = "all";
let query = "";
let returnFocus = null;
let introTimer;
let revealTimer;
let disposeIntro = () => {};
let replayRequested = false;

function image(name, alt, extra = "") {
  return `<img src="${import.meta.env.BASE_URL}images/${name}.jpg" alt="${alt}" ${extra.includes("loading=") ? "" : 'loading="lazy"'} ${extra}>`;
}
function categoryLabel(id) {
  return categories.find((c) => c.id === id)?.label || "";
}
function button(text, href, light = false) {
  return `<a class="button ${light ? "button-light" : ""}" href="${href}">${text}${arrow}</a>`;
}
function header(page) {
  return `<div class="announcement"><span>Agrawal Industries · Aligarh, India</span><a href="${catalogue}" download>Discover our catalogue ${download}</a></div>
  <header class="site-header"><div class="reading-progress" aria-hidden="true"></div><a class="brand" href="#/" aria-label="Anjna home">${logo}</a><nav class="desktop-nav" aria-label="Main navigation">${[
    ["home", "Home", "/"],
    ["about", "About us", "/about"],
    ["products", "Products", "/products"],
    ["catalogue", "Catalogue", "/catalogue"],
  ]
    .map(
      ([id, label, path]) =>
        `<a href="#${path}" ${page === id ? 'aria-current="page"' : ""}>${label}</a>`,
    )
    .join(
      "",
    )}</nav><a class="header-contact" href="#/contact">Product enquiry ${diagonal}</a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></header>
  <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation" hidden>${[
    ["Home", "/"],
    ["About us", "/about"],
    ["Products", "/products"],
    ["Catalogue", "/catalogue"],
    ["Contact", "/contact"],
  ]
    .map(([label, path]) => `<a href="#${path}">${label}${arrow}</a>`)
    .join("")}</nav>`;
}
function footer() {
  return `<section class="contact-band"><div><span class="eyebrow">LET’S FIND YOUR FINISHING TOUCH</span><h2>Good spaces begin<br>with the right details.</h2></div>${button("Explore the collection", "#/products", true)}</section><footer><div class="footer-top"><a class="brand footer-brand" href="#/">${logo}</a><p>Locks, handles and hardware.<br>Considered for everyday living.</p><div><span class="footer-label">EXPLORE</span><a href="#/about">Our story</a><a href="#/products">Our products</a><a href="#/catalogue">Download catalogue</a></div><div><span class="footer-label">FIND US</span><a href="#/contact">Agrawal Industries</a><span>Aligarh – 202001, India</span><a href="#/contact">Make an enquiry ${diagonal}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Agrawal Industries. Anjna Locks & Hardware.</span><button class="text-button replay-door">Experience the entrance again ${arrow}</button><span>Made for the little details.</span></div></footer>`;
}
function doorMarkup(cls = "") {
  return `<div class="architectural-door ${cls}" aria-hidden="true"><div class="door-recess"><div class="door-slab"><div class="door-border"></div><span class="door-number">A / 01</span><div class="door-line line-one"></div><div class="door-line line-two"></div><div class="door-line line-three"></div><div class="door-hardware"><span class="backplate"><i class="screw screw-top"></i><i class="screw screw-bottom"></i><i class="keyhole"></i></span><span class="handle"></span></div><span class="door-engraving">ANJNA</span></div></div></div>`;
}
function productCard(p) {
  return `<button class="product-card" data-product="${p.id}" aria-label="View ${p.name}, ${p.code}"><div class="product-image ${p.dark ? "dark-product" : ""} ${p.collection ? "collection-image" : ""}">${image(p.image, p.name)}<span class="product-brand">${p.brand || "ANJNA"}</span><span class="product-open">${diagonal}</span></div><div class="product-info"><div class="product-meta"><span>${categoryLabel(p.category)}</span><span>${p.code}</span></div><h3>${p.name}</h3><span class="product-card-action">View ${p.collection ? "collection" : "product"} ${arrow}</span></div></button>`;
}
function home() {
  const ranges = [
    ["mortice", "Mortice handles", "mortice-1002", "01"],
    ["locks", "Locks & latches", "cupboard-lock", "02"],
    ["cabinet", "Cabinet handles", "cabinet-217", "03"],
    ["aldrops", "Aldrops", "aldrop-creta", "04"],
    ["kits", "Door kits", "door-kits", "05"],
    ["bathroom", "Bathroom accessories", "soap-102", "06"],
  ];
  return `
    <section class="home-hero premium-hero">
      <div class="home-hero-copy">
        <span class="eyebrow"><span class="green-rule"></span> ANJNA · LOCKS & HARDWARE</span>
        <h1>A finer way<br>to come <em>home.</em></h1>
        <p>The first touch. The familiar turn. Discover handles, locks and hardware that make a space your own.</p>
        <div class="home-hero-actions">${button("Explore our products", "#/products")}<a class="hero-catalogue-link" href="${catalogue}" download>View catalogue ${diagonal}</a></div>
        <div class="hero-origin"><span>01 — A WELCOME, RECONSIDERED</span><a href="#/about">Agrawal Industries · Aligarh ${diagonal}</a></div>
      </div>
      <div class="hero-product-stage">
        <span class="hero-stage-index">THE ANJNA COLLECTION / 01</span>
        <div class="hero-product-arch"><div class="hero-product-halo"></div>${image("mortice-1002", "Anjna AI-1002 mortice handle in the original catalogue", 'fetchpriority="high" loading="eager"')}</div>
        <div class="hero-stage-label"><div><span>MORTICE HANDLES</span><strong>The first impression.</strong></div><a href="#/products?category=mortice" aria-label="Explore mortice handles">${diagonal}</a></div>
        <button class="hero-replay replay-door">Replay the entrance ${arrow}</button>
      </div>
      <a class="hero-scroll-hint" href="#craft-details" aria-label="Scroll to discover the hardware details"><span>SCROLL TO DISCOVER</span><i></i></a>
    </section>
    <section class="range-overview" aria-label="Our collections">
      <a href="#/products?category=mortice"><span class="range-number">01</span><div><strong>Door & cabinet hardware</strong><span>Handles, aldrops and door kits</span></div>${diagonal}</a>
      <a href="#/products?category=locks"><span class="range-number">02</span><div><strong>Locks & door essentials</strong><span>The details behind every door</span></div>${diagonal}</a>
      <a href="#/products?category=bathroom"><span class="range-number">03</span><div><strong>Ellin bathroom collection</strong><span>Everyday accessories, together</span></div>${diagonal}</a>
    </section>
    <section class="section category-showcase">
      <div class="section-heading"><div><span class="eyebrow">EXPLORE THE RANGE</span><h2>Find the right <em>hardware.</em></h2></div><a class="quiet-link" href="#/products">All products ${arrow}</a></div>
      <div class="range-grid">${ranges.map(([id, label, photo, number]) => `<a class="range-card ${id === "aldrops" ? "range-card-dark" : ""}" href="#/products?category=${id}"><div class="range-card-image">${image(photo, label)}<span>${number}</span></div><div class="range-card-label"><h3>${label}</h3><span>${diagonal}</span></div></a>`).join("")}</div>
    </section>
    <section class="craft-story section" id="craft-details" aria-labelledby="craft-title">
      <div class="craft-summary"><span class="eyebrow">SMALL DETAILS. A LASTING FEEL.</span><h2 id="craft-title">Good design<br>is something<br>you <em>feel.</em></h2><p>Hardware is part of the way you move through your home. Find the detail that feels right.</p><nav class="chapter-links" aria-label="Hardware stories"><a href="#craft-entrance" data-chapter-link="0" class="active" aria-current="step"><span>01</span> The first impression</a><a href="#craft-security" data-chapter-link="1"><span>02</span> The familiar turn</a><a href="#craft-finish" data-chapter-link="2"><span>03</span> The finishing touch</a></nav><span class="chapter-number" aria-hidden="true">01</span></div>
      <div class="craft-scenes"><article class="craft-scene" id="craft-entrance" data-chapter="0"><div class="craft-product">${image("mortice-1001", "Anjna AI-1001 stainless steel mortice handle")}</div><div><span class="eyebrow">01 / THE FIRST IMPRESSION</span><h3>An invitation<br>to come in.</h3><p>Clean lines. A considered shape. Explore our stainless steel mortice handles.</p><a class="quiet-link" href="#/products?category=mortice">Explore handles ${arrow}</a></div></article><article class="craft-scene" id="craft-security" data-chapter="1"><div class="craft-product">${image("cupboard-lock", "Anjna cupboard lock with keys")}</div><div><span class="eyebrow">02 / THE FAMILIAR TURN</span><h3>A place for<br>what matters.</h3><p>Discover locks and latches for the doors and cupboards you use every day.</p><a class="quiet-link" href="#/products?category=locks">Discover locks ${arrow}</a></div></article><article class="craft-scene" id="craft-finish" data-chapter="2"><div class="craft-product">${image("cabinet-217", "Anjna AI-217 dual-tone cabinet handle")}</div><div><span class="eyebrow">03 / THE FINISHING TOUCH</span><h3>The little things.<br>Beautifully chosen.</h3><p>Give your cabinetry a considered finishing touch with the Anjna handle collection.</p><a class="quiet-link" href="#/products?category=cabinet">View cabinet handles ${arrow}</a></div></article></div>
    </section>
    <section class="brand-note section"><div><span class="eyebrow">ANJNA, BY AGRAWAL INDUSTRIES</span><span class="brand-note-origin">ALIGARH, INDIA</span></div><h2>For the spaces we live in.<br>For the details we <em>live with.</em></h2><a class="quiet-link" href="#/about">Our story ${diagonal}</a></section>
    <section class="section home-featured"><div class="section-heading"><div><span class="eyebrow">DISCOVER ANJNA</span><h2>Explore the <em>Anjna collection.</em></h2></div><a class="quiet-link" href="#/products">View the full collection ${arrow}</a></div><div class="featured-tabs" role="group" aria-label="Featured product categories">${[
      ["popular", "Featured products"],
      ["mortice", "Mortice handles"],
      ["locks", "Locks & latches"],
      ["cabinet", "Cabinet handles"],
    ]
      .map(
        ([id, label], i) =>
          `<button data-featured="${id}" class="${i === 0 ? "active" : ""}" aria-pressed="${i === 0}">${label}</button>`,
      )
      .join(
        "",
      )}</div><div class="featured-grid">${[products[4], products[9], products[1], products[7]].map(productCard).join("")}</div></section>
    ${finishSection()}
    <section class="ellin-section section"><div class="ellin-copy"><span class="eyebrow">A FRESH LOOK AT EVERYDAY ESSENTIALS</span><span class="ellin-word">ellin<span>®</span></span><h2>Everyday comfort.<br><em>Thoughtfully organised.</em></h2><p>From towel racks to soap dishes, explore the Ellin Sanitary World collection of bathroom accessories.</p>${button("Explore bathroom accessories", "#/products?category=bathroom")}</div><div class="ellin-image">${image("ellin-feature", "Ellin Sanitary World bathroom collection")}</div></section>
    <section class="catalogue-banner section"><div class="catalogue-stack">${image("catalogue-cover", "Anjna Locks & Hardware catalogue cover")}</div><div><span class="eyebrow">YOUR COMPLETE PRODUCT GUIDE</span><h2>Every product.<br><em>One clear guide.</em></h2><p>Explore the full Anjna and Ellin range.<br>Product codes, sizes and finishes—all in one place.</p><a class="button" href="${catalogue}" download>Download catalogue ${download}</a><span class="file-note">2024 EDITION · PDF · 2.8 MB</span></div><span class="catalogue-bg-text" aria-hidden="true">ANJNA</span></section>`;
}
function finishSection() {
  return `<section class="finishes-section section"><div class="section-heading"><div><span class="eyebrow">THE FINAL TOUCH</span><h2>A finish that <em>feels like you.</em></h2></div><p>From understated silver to warm antique tones.<br>Explore the finishes in our catalogue.</p></div><div class="finish-study"><div class="finish-study-label"><span class="eyebrow">A CLOSER LOOK</span><span>Choose your finishing touch.</span></div><div class="finish-specimen finish-orb brass" aria-hidden="true"></div><span class="finish-study-index" aria-hidden="true">MATERIAL / 01—06</span></div><div class="finish-grid">${finishes.map(([name, cls], i) => `<button class="finish-item ${i === 0 ? "selected" : ""}" data-finish="${i}" aria-pressed="${i === 0}"><span class="finish-orb ${cls}"></span><span>${name}</span></button>`).join("")}</div><p class="finish-caption" aria-live="polite"><span>${finishes[0][0]}</span> — ${finishes[0][2]}</p><p class="finish-disclaimer">Finish availability varies by product. Enquire for available options.</p></section>`;
}
function pageHeading(eyebrow, title, description) {
  return `<section class="page-heading section"><a class="breadcrumb" href="#/">Home <span>/</span></a><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></section>`;
}
function productPage() {
  return `${pageHeading("THE ANJNA & ELLIN COLLECTION", "Details for <em>every space.</em>", "Explore handles, locks and everyday essentials from our product catalogue.")}<section class="products-section section"><div class="collection-toolbar"><label class="search-box"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.5"/><path d="m15 15 5 5" stroke="currentColor" stroke-width="1.5"/></svg><input type="search" id="product-search" placeholder="Search by product or code" aria-label="Search products"></label><span class="result-count" aria-live="polite"></span></div><div class="collection-layout"><aside class="category-sidebar"><h2>Categories</h2><div class="filter-list">${categories.map((c) => `<button data-category="${c.id}" aria-pressed="${currentFilter === c.id}" class="filter-button ${currentFilter === c.id ? "active" : ""}">${c.label}<span>${c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length}</span></button>`).join("")}</div><a class="sidebar-catalogue" href="${catalogue}" download>${download}<strong>The full collection</strong><span>Download the 2024 catalogue</span></a></aside><div id="product-results" class="product-results"></div></div><p class="collection-note">A selection from our 2024 catalogue. Explore the downloadable catalogue for the full range. Current availability, specifications and prices are confirmed on enquiry.</p></section>${finishSection()}`;
}
function aboutPage() {
  return `${pageHeading("OUR STORY", "Small details.<br><em>A shared purpose.</em>", "Discover Anjna Locks & Hardware by Agrawal Industries, Aligarh.")}<section class="about-content section"><div class="about-art">${doorMarkup()}<span>WELCOME TO ANJNA.</span></div><div><span class="eyebrow">HARDWARE FOR EVERYDAY LIVING</span><h2>At home in<br><em>the details.</em></h2><p>Good hardware is part of the moments we rarely stop to notice. Opening a door. Reaching for a cupboard. Making a space feel complete.</p><p>Anjna brings together a range of door and cabinet handles, aldrops, locks, door kits and hardware accessories. Our Ellin Sanitary World collection extends those everyday details to the bathroom.</p><p>Based in Aligarh, Agrawal Industries focuses on providing quality products at reasonable rates, with a commitment to customer service and satisfaction.</p>${button("Explore our products", "#/products")}</div></section><section class="principles section"><span class="eyebrow">WHAT MATTERS TO US</span><h2>Useful. Considered. <em>Everyday.</em></h2><div class="principle-grid"><article><span>01</span><h3>A connected collection</h3><p>Door hardware, cabinet fittings and bathroom essentials, brought together for the spaces you use every day.</p></article><article><span>02</span><h3>Choice in the details</h3><p>A range of styles, sizes and finishes to help you find the right fit for your space.</p></article><article><span>03</span><h3>A focus on service</h3><p>Product information and a considered approach to helping you choose your next hardware detail.</p></article></div></section>${finishSection()}`;
}
function cataloguePage() {
  return `${pageHeading("THE PRODUCT CATALOGUE", "A world of <em>details.</em>", "Explore the Anjna and Ellin collections at your own pace.")}<section class="catalogue-page section"><div class="catalogue-book">${image("catalogue-cover", "Cover of the Anjna Locks & Hardware catalogue")}</div><div><span class="eyebrow">2024 COLLECTION · 24 PAGES</span><h2>One catalogue.<br><em>Every finishing touch.</em></h2><p>Find door and cabinet handles, aldrops, door kits, locks and the Ellin bathroom range, alongside product codes and available size information.</p><ul class="catalogue-contents"><li>Door & cabinet hardware<span>01—14</span></li><li>Locks & latches<span>15—17</span></li><li>Ellin bathroom accessories<span>18—20</span></li><li>Colours & finishes<span>Back cover</span></li></ul><a class="button" href="${catalogue}" download>Download PDF ${download}</a><a class="quiet-link catalogue-open" href="${catalogue}" target="_blank" rel="noopener">Open catalogue ${diagonal}</a><p class="file-note">2.8 MB · Prices shown in the 2024 PDF are historical.<br>Enquire for current prices and availability.</p></div></section>`;
}
function contactPage() {
  return `${pageHeading("LET’S TALK DETAILS", "Product enquiries.<br><em>Made simple.</em>", "Have a model, size or finish in mind? Prepare your requirements below.")}<section class="contact-section section"><div class="contact-information"><span class="eyebrow">FIND US</span><h2>Agrawal Industries</h2><p>Home of Anjna Locks & Hardware<br>and Ellin Sanitary World.</p><div class="address-block"><span class="location-symbol">⌖</span><div><strong>Aligarh – 202001</strong><p>Uttar Pradesh, India</p><a class="quiet-link" href="https://www.google.com/maps/search/?api=1&query=Aligarh+202001+India" target="_blank" rel="noopener">View city on map ${diagonal}</a></div></div><div class="contact-help"><span class="eyebrow">HAVE A PRODUCT IN MIND?</span><p>Add its model code to your enquiry so it’s easy to identify.</p><a class="quiet-link" href="#/products">Browse products ${arrow}</a></div><p class="contact-availability">Direct phone and email contact details will be added when available.</p></div><form id="enquiry-form"><h2>Prepare your enquiry</h2><p class="form-intro">Fill in your requirements and copy a ready-to-share enquiry. This form does not send a message.</p><div class="form-grid"><label>Your name <span>*</span><input name="name" required maxlength="100" autocomplete="name" placeholder="Full name"></label><label>Email address <span>*</span><input name="email" type="email" required maxlength="150" autocomplete="email" placeholder="you@example.com"></label><label>Phone number<input name="phone" type="tel" maxlength="30" autocomplete="tel" placeholder="Your contact number"></label><label>Product / model code<input name="product" id="enquiry-product" maxlength="180" placeholder="e.g. AI-1001"></label><label class="full-field">I am a<select name="role"><option value="">Select an option</option><option>Homeowner</option><option>Dealer / Distributor</option><option>Architect</option><option>Interior designer</option><option>Builder</option><option>Other</option></select></label><label class="full-field">Your requirements <span>*</span><textarea name="message" required maxlength="3000" rows="4" placeholder="Tell us about the products, quantity or finishes you are looking for…"></textarea></label></div><button class="button" type="submit">Copy enquiry ${arrow}</button><button class="text-button download-enquiry" type="button">Download as text ${download}</button><p id="form-status" role="status"></p></form></section>`;
}
function renderProducts() {
  const filtered = products.filter(
    (p) =>
      (currentFilter === "all" || p.category === currentFilter) &&
      `${p.name} ${p.code} ${categoryLabel(p.category)} ${p.brand || "Anjna"}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  document.querySelector(".result-count").textContent =
    `${filtered.length} ${filtered.length === 1 ? "result" : "results"}`;
  document.querySelector("#product-results").innerHTML = filtered.length
    ? filtered.map(productCard).join("")
    : `<div class="empty-state"><span>⌕</span><h2>No matching products</h2><p>Try a different model code or browse all categories.</p><button class="button reset-filters">Reset filters ${arrow}</button></div>`;
  animateCollection(document.querySelector("#product-results"));
  document.querySelectorAll("[data-category]").forEach((b) => {
    b.classList.toggle("active", b.dataset.category === currentFilter);
    b.setAttribute("aria-pressed", b.dataset.category === currentFilter);
  });
}
function readSession(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}
function setSession(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {}
}
function openIntro(force = false) {
  const hero = document.querySelector(".premium-hero");
  if (!hero || (!force && readSession("anjna-hero-door-v4"))) return;
  disposeIntro();
  clearTimeout(revealTimer);
  hero.classList.remove("entrance-reveal");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setSession("anjna-hero-door-v4", "1");
  const content = [...hero.children];
  const intro = document.createElement("div");
  intro.className = "hero-entrance";
  intro.setAttribute("role", "region");
  intro.setAttribute("aria-label", "Wooden door entrance");
  intro.innerHTML = `<div class="hero-door-leaf" aria-hidden="true"><div class="hero-door-moulding"></div><span class="hero-door-seam"></span><div class="hero-door-wordmark">${logo}<p>A warm welcome.<br>A lasting impression.</p></div><span class="hero-door-hinge hinge-upper"></span><span class="hero-door-hinge hinge-lower"></span><div class="hero-door-handle"><i></i><span></span><b></b></div><span class="hero-door-signature">AGRAWAL INDUSTRIES · ALIGARH</span></div><div class="hero-door-light" aria-hidden="true"></div><span class="hero-door-caption">EVERY GREAT SPACE BEGINS AT THE DOOR.</span><button class="hero-door-skip">Enter website ${arrow}</button>`;
  const previousFocus = document.activeElement;
  content.forEach((node) => { node.inert = true; });
  hero.classList.add("hero-door-active");
  hero.append(intro);
  const controller = new AbortController();
  // Automatic entrances leave navigation focus alone; explicit replay brings the door into view.
  if (force) {
    hero.scrollIntoView({ behavior: "instant", block: "start" });
    intro.querySelector("button").focus({ preventScroll: true });
  }
  const close = (reveal = true) => {
    const focusWasInside = intro.contains(document.activeElement);
    clearTimeout(introTimer);
    controller.abort();
    intro.remove();
    content.forEach((node) => { node.inert = false; });
    hero.classList.remove("hero-door-active");
    clearTimeout(revealTimer);
    hero.classList.remove("entrance-reveal");
    if (reveal && hero.isConnected) {
      hero.classList.add("entrance-reveal");
      revealTimer = setTimeout(() => hero.classList.remove("entrance-reveal"), 1200);
      if (focusWasInside) {
        const target = previousFocus?.isConnected && hero.contains(previousFocus)
          ? previousFocus : hero.querySelector(".home-hero-actions a");
        target?.focus({ preventScroll: true });
      }
    }
    disposeIntro = () => {};
  };
  disposeIntro = () => close(false);
  intro.querySelector("button").addEventListener("click", () => close(), { signal: controller.signal });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  }, { signal: controller.signal });
  matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (event) => {
    if (event.matches) close();
  }, { signal: controller.signal });
  const texture = new Image();
  texture.src = walnutTexture;
  const start = () => {
    if (!intro.isConnected) return;
    requestAnimationFrame(() => {
      if (!intro.isConnected) return;
      intro.classList.add("is-opening");
      introTimer = setTimeout(() => close(), 4100);
    });
  };
  texture.decode().catch(() => {}).then(start);
}
function openProduct(id) {
  const p = products.find((p) => p.id === id);
  if (!p) return;
  returnFocus = document.activeElement;
  const dialog = document.querySelector("#product-dialog");
  dialog.innerHTML = `<button class="dialog-close" aria-label="Close product details">×</button><div class="dialog-image ${p.dark ? "dark-product" : ""}">${image(p.image, p.name)}</div><div class="dialog-copy"><span class="eyebrow">${p.brand || "ANJNA"} · ${categoryLabel(p.category)}</span><h2>${p.name}</h2><p class="model-code">${p.code}</p><dl>${p.material ? `<div><dt>Material</dt><dd>${p.material}</dd></div>` : ""}${p.size ? `<div><dt>Size</dt><dd>${p.size}</dd></div>` : ""}<div><dt>Collection</dt><dd>${p.brand || "Anjna Locks & Hardware"}</dd></div></dl><p>${p.collection ? "Explore the complete range on the linked catalogue page." : "View this model in our original product catalogue."} Ask about current availability and finish options.</p><a class="button product-enquire" href="#/contact?product=${encodeURIComponent(p.code)}">Enquire about ${p.collection ? "this collection" : "this product"} ${arrow}</a><a class="quiet-link" href="${catalogue}#page=${p.page}" target="_blank" rel="noopener">View in catalogue ${diagonal}</a></div>`;
  dialog.showModal();
  document.body.classList.add("dialog-active");
}
function closeProduct() {
  const dialog = document.querySelector("#product-dialog");
  if (dialog?.open) dialog.close();
}
function render() {
  disposeIntro();
  disposeMotion();
  closeProduct();
  document.body.classList.remove("dialog-active");
  const raw = location.hash.slice(1) || "/";
  const [path, params] = raw.split("?");
  const search = new URLSearchParams(params || "");
  const page =
    {
      "/": "home",
      "/about": "about",
      "/products": "products",
      "/catalogue": "catalogue",
      "/contact": "contact",
    }[path] || "notfound";
  currentFilter = categories.some((c) => c.id === search.get("category"))
    ? search.get("category")
    : "all";
  query = "";
  const content = {
    home,
    about: aboutPage,
    products: productPage,
    catalogue: cataloguePage,
    contact: contactPage,
  }[page];
  app.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>${header(page)}<main id="main-content" tabindex="-1">${content ? content() : `${pageHeading("PAGE NOT FOUND", "Let’s find <em>your way.</em>", "The page you are looking for is not here.")}<div class="section">${button("Back to home", "#/")}</div>`}</main>${footer()}<dialog id="product-dialog" aria-label="Product details"></dialog><div id="toast" role="status"></div>`;
  document.title = `${{ home: "Anjna — Locks & Hardware", products: "Our Products — Anjna", about: "Our Story — Anjna", catalogue: "Product Catalogue — Anjna", contact: "Contact — Anjna" }[page] || "Page Not Found — Anjna"}`;
  if (page === "products") {
    renderProducts();
    document.querySelector("#product-search").addEventListener("input", (e) => {
      query = e.target.value;
      renderProducts();
    });
  }
  if (page === "contact") {
    document.querySelector("#enquiry-product").value =
      search.get("product") || "";
    setupForm();
  }
  document.querySelector("#product-dialog").addEventListener("close", () => {
    document.body.classList.remove("dialog-active");
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  });
  window.scrollTo({ top: 0, behavior: "instant" });
  mountMotion(app);
  if (replayRequested) {
    replayRequested = false;
    openIntro(true);
  } else if (page === "home") openIntro();
}
function setupForm() {
  const form = document.querySelector("#enquiry-form");
  const status = document.querySelector("#form-status");
  const prepare = () => {
    if (!form.reportValidity()) return null;
    const d = new FormData(form);
    return `PRODUCT ENQUIRY — ANJNA / ELLIN\n\nName: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone") || "Not provided"}\nProduct: ${d.get("product") || "General enquiry"}\nCustomer type: ${d.get("role") || "Not specified"}\n\nRequirements:\n${d.get("message")}`;
  };
  const save = (text) => {
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "Anjna-product-enquiry.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent =
      "Enquiry downloaded. You can share the file when contact details are available. No message has been sent.";
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = prepare();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent =
        "Enquiry copied. It is ready to share. No message has been sent.";
    } catch {
      save(text);
    }
  });
  form.querySelector(".download-enquiry").addEventListener("click", () => {
    const text = prepare();
    if (text) save(text);
  });
}
document.addEventListener("click", (e) => {
  const card = e.target.closest("[data-product]");
  if (card) openProduct(card.dataset.product);
  const filter = e.target.closest("[data-category]");
  if (filter) {
    currentFilter = filter.dataset.category;
    const url = new URL(location.href);
    url.hash = `/products${currentFilter === "all" ? "" : `?category=${currentFilter}`}`;
    history.replaceState(null, "", url);
    renderProducts();
  }
  if (e.target.closest(".reset-filters")) {
    currentFilter = "all";
    query = "";
    document.querySelector("#product-search").value = "";
    history.replaceState(null, "", "#/products");
    renderProducts();
  }
  const finish = e.target.closest("[data-finish]");
  if (finish) {
    const [name, , caption] = finishes[Number(finish.dataset.finish)];
    document.querySelectorAll("[data-finish]").forEach((b) => {
      b.classList.toggle("selected", b === finish);
      b.setAttribute("aria-pressed", b === finish);
    });
    document.querySelector(".finish-caption").innerHTML =
      `<span>${name}</span> — ${caption}`;
  }
  if (e.target.closest(".menu-toggle")) {
    const b = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#mobile-menu");
    const expanded = b.getAttribute("aria-expanded") !== "true";
    b.setAttribute("aria-expanded", String(expanded));
    b.setAttribute("aria-label", expanded ? "Close menu" : "Open menu");
    menu.hidden = !expanded;
  }
  if (e.target.closest(".dialog-close") || e.target.closest(".product-enquire"))
    closeProduct();
  const dialog = document.querySelector("#product-dialog");
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      closeProduct();
  }
  if (e.target.closest(".replay-door")) {
    if (document.querySelector(".premium-hero")) openIntro(true);
    else { replayRequested = true; location.hash = "/"; }
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const menu = document.querySelector("#mobile-menu");
    if (menu && !menu.hidden) {
      menu.hidden = true;
      const b = document.querySelector(".menu-toggle");
      b.setAttribute("aria-expanded", "false");
      b.setAttribute("aria-label", "Open menu");
      b.focus();
    }
  }
});
document.addEventListener("click", (e) => {
  if (e.target.closest("#mobile-menu a")) {
    document.querySelector("#mobile-menu").hidden = true;
    const button = document.querySelector(".menu-toggle");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
  }
});
window.addEventListener("hashchange", () => {
  if (
    [
      "#main-content",
      "#craft-details",
      "#craft-entrance",
      "#craft-security",
      "#craft-finish",
    ].includes(location.hash)
  )
    return;
  render();
  document.querySelector("#main-content")?.focus({ preventScroll: true });
});
render();

document.addEventListener("click", (event) => {
  if (event.target.closest(".skip-link")) {
    event.preventDefault();
    document.querySelector("#main-content")?.focus();
    document.querySelector("#main-content")?.scrollIntoView();
  }
  const tab = event.target.closest("[data-featured]");
  if (tab) {
    const selected = tab.dataset.featured;
    const entries =
      selected === "popular"
        ? [products[4], products[9], products[1], products[7]]
        : products
            .filter((product) => product.category === selected)
            .slice(0, 4);
    document.querySelector(".featured-grid").innerHTML = entries
      .map(productCard)
      .join("");
    animateCollection(document.querySelector(".featured-grid"));
    document.querySelectorAll("[data-featured]").forEach((button) => {
      const active = button === tab;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
});

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#craft-"]');
  if (!anchor) return;
  event.preventDefault();
  const section = document.querySelector(anchor.getAttribute("href"));
  section?.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
    block: "start",
  });
});
