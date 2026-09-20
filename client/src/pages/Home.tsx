import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Flower2,
  Instagram,
  Mail,
  MessageCircle,
  Menu,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

const imageUrls = {
  hero: "/images/bliss-hero.jpg",
  cocktail: "/images/bliss-cocktail.jpg",
  tablescape: "/images/bliss-tablescape.jpg",
  florals: "/images/bliss-florals.jpg",
  stage: "/images/bliss-stage.jpg",
};

const services = [
  {
    number: "01",
    title: "Full-service planning",
    copy: "A thoughtful, end-to-end plan for the moments that matter most.",
    image: imageUrls.tablescape,
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Floral & decor direction",
    copy: "Colour, texture, light and layers that make a room feel like you.",
    image: imageUrls.florals,
    icon: Flower2,
  },
  {
    number: "03",
    title: "Guest experience",
    copy: "The little rituals, transitions and surprises your guests remember.",
    image: imageUrls.cocktail,
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Brand & gala events",
    copy: "Polished environments with a point of view for teams and brands.",
    image: imageUrls.stage,
    icon: WandSparkles,
  },
];

const gallery = [
  { image: imageUrls.hero, label: "Saffron dusk", type: "Wedding weekend" },
  { image: imageUrls.cocktail, label: "A little afterglow", type: "Cocktail hour" },
  { image: imageUrls.florals, label: "Wild abundance", type: "Floral design" },
  { image: imageUrls.tablescape, label: "The golden table", type: "Tablescape" },
  { image: imageUrls.stage, label: "A room with a view", type: "Brand experience" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="site-shell">
      <header className="site-nav">
        <button className="brand-lockup" aria-label="Bliss Decor home" onClick={() => scrollToSection("top")}>
          <span className="brand-mark"><span>BD</span></span>
          <span className="brand-name">Bliss <em>Decor</em></span>
        </button>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <button onClick={() => handleNav("studio")}>Studio</button>
          <button onClick={() => handleNav("services")}>Services</button>
          <button onClick={() => handleNav("journal")}>Journal</button>
          <button onClick={() => handleNav("contact")}>Contact</button>
        </nav>
        <button className="nav-cta" onClick={() => setContactOpen(true)}>
          Plan your event <ArrowUpRight size={16} />
        </button>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-image" style={{ backgroundImage: `url(${imageUrls.hero})` }} />
        <div className="hero-grain" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-content container">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Event design studio · India & everywhere</div>
          <h1>Make room for <span>magic.</span></h1>
          <p className="hero-copy">Thoughtful planning, expressive styling and the kind of details that turn a gathering into a memory.</p>
          <div className="hero-actions">
            <button className="button button-gold" onClick={() => scrollToSection("services")}>Explore our craft <ArrowUpRight size={17} /></button>
            <button className="text-link light-link" onClick={() => scrollToSection("journal")}>See the journal <ArrowDown size={15} /></button>
          </div>
          <div className="hero-footer">
            <div className="hero-note"><span className="line" /> For celebrations with soul</div>
            <div className="hero-scroll"><span>Scroll to wander</span><ArrowDown size={15} /></div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div><strong>120<span>+</span></strong><small>beautifully held celebrations</small></div>
          <div><strong>14</strong><small>cities, one point of view</small></div>
          <div><strong>11</strong><small>years making room for magic</small></div>
          <div className="stats-statement">Good taste is a feeling.<br /><em>We make it tangible.</em></div>
        </div>
      </section>

      <section id="studio" className="studio-section section-pad">
        <div className="container studio-grid">
          <div className="studio-heading reveal-up">
            <div className="eyebrow"><span className="eyebrow-dot" /> The Bliss edit</div>
            <h2>We make the<br /><em>ordinary</em> feel rare.</h2>
          </div>
          <div className="studio-copy reveal-up delay-1">
            <p className="lede">Bliss Decor is an event styling and management studio for people who notice the light, care about the table and believe a good party should feel like a story.</p>
            <p>From first sketch to last song, we bring a calm, considered energy to the beautiful chaos of bringing people together. The result is never just an event. It is a world your guests get to step into.</p>
            <button className="text-link" onClick={() => setContactOpen(true)}>Meet the studio <ArrowUpRight size={16} /></button>
          </div>
          <div className="studio-image-wrap reveal-up delay-2">
            <img src={imageUrls.tablescape} alt="A warm gold and ivory event tablescape" className="studio-image" />
            <div className="image-stamp"><span>BD</span><small>Since<br />2014</small></div>
          </div>
          <div className="studio-aside reveal-up delay-3"><span>01</span><p>It starts with a feeling<br />and ends with a full room.</p></div>
        </div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="container">
          <div className="section-heading-row reveal-up">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> What we do</div>
              <h2>Designed to be<br /><em>remembered.</em></h2>
            </div>
            <p className="section-intro">The big picture, the tiny detail, and everything in between. Choose the level of support that makes your celebration feel effortless.</p>
          </div>
          <div className="services-grid">
            {services.map(({ number, title, copy, image, icon: Icon }, index) => (
              <article className={`service-card reveal-up delay-${(index % 4) + 1}`} key={title}>
                <div className="service-image-wrap"><img src={image} alt="" className="service-image" /><span className="service-icon"><Icon size={20} strokeWidth={1.5} /></span></div>
                <div className="service-meta"><span>{number}</span><span className="service-arrow"><ArrowUpRight size={17} /></span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="gallery-section section-pad">
        <div className="container">
          <div className="gallery-heading reveal-up">
            <div>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> From the journal</div>
              <h2>Scenes from a<br /><em>beautiful life.</em></h2>
            </div>
            <button className="text-link light-link" onClick={() => setContactOpen(true)}>View all stories <ArrowUpRight size={16} /></button>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-item gallery-item-${index + 1} reveal-up delay-${(index % 4) + 1}`} key={item.label}>
                <img src={item.image} alt={item.label} />
                <figcaption><span>{item.type}</span><strong>{item.label}</strong></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <div className="section-heading-row process-heading reveal-up">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> The way we work</div>
              <h2>From first spark<br />to <em>final toast.</em></h2>
            </div>
            <div className="process-aside">A clear process. A soft landing.<br />A celebration that feels entirely yours.</div>
          </div>
          <div className="process-grid">
            <div className="process-step reveal-up delay-1"><span>01</span><div><h3>Gather</h3><p>We listen for the mood, the people and the little things that make your story yours.</p></div></div>
            <div className="process-step reveal-up delay-2"><span>02</span><div><h3>Shape</h3><p>We build the palette, plan the flow and turn the feeling into a visual language.</p></div></div>
            <div className="process-step reveal-up delay-3"><span>03</span><div><h3>Celebrate</h3><p>We bring it all to life, so you can be present for every beautiful minute.</p></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-image" style={{ backgroundImage: `url(${imageUrls.stage})` }} />
        <div className="contact-overlay" />
        <div className="container contact-content reveal-up">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Your next chapter</div>
          <h2>Let’s make<br /><em>something lovely.</em></h2>
          <p>Tell us a little about the gathering you’re dreaming up. We’ll bring the good questions and a lot of ideas.</p>
          <button className="button button-gold" onClick={() => setContactOpen(true)}>Start a conversation <ArrowUpRight size={17} /></button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand"><button className="brand-lockup" onClick={() => scrollToSection("top")}><span className="brand-mark"><span>BD</span></span><span className="brand-name">Bliss <em>Decor</em></span></button><p>Event styling & management<br />for the beautifully particular.</p></div>
          <div className="footer-links"><div><span>Explore</span><button onClick={() => handleNav("studio")}>Studio</button><button onClick={() => handleNav("services")}>Services</button><button onClick={() => handleNav("journal")}>Journal</button></div><div><span>Say hello</span><div className="footer-contact-actions"><a className="footer-contact-btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=poojananwani9@gmail.com" target="_blank" rel="noreferrer">Contact via Gmail <Mail size={15} /></a><a className="footer-contact-btn footer-contact-btn-whatsapp" href="https://wa.me/918446569599?text=Hello%20Bliss%20Decor%2C%20I%27d%20love%20to%20discuss%20an%20event." target="_blank" rel="noreferrer">Contact on WhatsApp <MessageCircle size={15} /></a></div><a href="tel:+918446569599">+91 84465 69599</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Instagram size={15} /></a></div></div>
          <div className="footer-mark"><span>BD</span><ArrowUpRight size={18} /></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Bliss Decor Studio</span><span>Made by Saanvi Nanwani</span><span>All stories reserved.</span></div>
      </footer>

      {contactOpen && <div className="modal-backdrop" onClick={() => setContactOpen(false)}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close contact form" onClick={() => setContactOpen(false)}><X size={20} /></button><div className="eyebrow"><span className="eyebrow-dot" /> Hello, lovely</div><h2 id="contact-title">Let’s start with<br /><em>your date.</em></h2>{submitted ? <div className="form-success"><span><Check size={20} /></span><h3>Message received.</h3><p>We’ll be in touch within two working days with a few thoughtful questions.</p><button className="text-link" onClick={() => setContactOpen(false)}>Close this window <ArrowUpRight size={16} /></button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label>Your name<input required placeholder="e.g. Aanya & Rohan" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Tell us about it<textarea required placeholder="A wedding, a launch, a dinner..." rows={3} /></label><button className="button button-plum" type="submit">Send enquiry <Mail size={16} /></button></form>}</div></div>}
    </main>
  );
}
