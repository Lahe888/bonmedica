import { useState, useEffect, useRef } from "react";

// --- ICONS ---
const Icon = ({ name, size = 24, color = "currentColor" }) => {
  const icons = {
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
    stethoscope: <><path d="M4.8 2.65L2 5.45l2.4 2.4M15.2 2.65l2.8 2.8-2.4 2.4"/><path d="M9 6.2v5.3a4.5 4.5 0 009 0V6.2"/><circle cx="18" cy="18" r="3"/><path d="M18 15v-2.3"/></>,
    clipboard: <><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></>,
    fileText: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
    alertTriangle: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    chevronDown: <polyline points="6 9 12 15 18 9"/>,
    chevronRight: <polyline points="9 18 15 12 9 6"/>,
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    menu: <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    baby: <><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0114 0v2"/></>,
    thermometer: <><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></>,
    activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
    globe: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    euro: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    syringe: <><path d="M18 2l4 4-9.5 9.5-4-4L18 2z"/><path d="M8.5 11.5l-5 5a2.83 2.83 0 004 4l5-5"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
};

// --- DATA ---
const PAGES = {
  home: "Avaleht",
  perearst: "Perearsti vastuvõtt",
  pereode: "Pereõe vastuvõtt",
  toendid: "Tõendid ja uuringud",
  koduravi: "Koduse ravi juhised",
  hinnakiri: "Hinnakiri",
};

const HOURS = [
  { day: "E", time: "8:00–16:00" },
  { day: "T", time: "8:00–16:00" },
  { day: "K", time: "8:00–16:00" },
  { day: "N", time: "10:00–18:00" },
  { day: "R", time: "8:00–16:00" },
];

// --- COMPONENTS ---
const Nav = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e8f0ec",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          
          <span style={{ fontWeight: 700, fontSize: 18, color: "#1A2E3B", letterSpacing: "-0.02em" }}>BonMedica</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {Object.entries(PAGES).map(([key, label]) => (
            <button key={key} onClick={() => setPage(key)}
              style={{
                background: page === key ? "#eef7f3" : "none",
                border: "none", cursor: "pointer", padding: "8px 14px", borderRadius: 8,
                fontSize: 14, fontWeight: page === key ? 600 : 400,
                color: page === key ? "#2D5A7B" : "#556671",
                transition: "all 0.15s",
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", display: "none" }} className="mobile-toggle">
          <Icon name={open ? "x" : "menu"} color="#1A2E3B" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: "8px 0 16px", display: "flex", flexDirection: "column", gap: 2 }} className="mobile-menu">
          {Object.entries(PAGES).map(([key, label]) => (
            <button key={key} onClick={() => { setPage(key); setOpen(false); }}
              style={{
                background: page === key ? "#eef7f3" : "none",
                border: "none", cursor: "pointer", padding: "12px 16px", borderRadius: 8,
                fontSize: 15, fontWeight: page === key ? 600 : 400,
                color: page === key ? "#2D5A7B" : "#1A2E3B", textAlign: "left",
              }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Btn = ({ children, variant = "primary", onClick, icon, style: s }) => {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: variant === "sm" ? "8px 16px" : "12px 24px",
    borderRadius: 10, border: "none", cursor: "pointer",
    fontSize: variant === "sm" ? 13 : 15, fontWeight: 600,
    transition: "all 0.2s",
    ...(variant === "primary" || variant === "sm"
      ? { background: "#2D5A7B", color: "#fff" }
      : { background: "#eef7f3", color: "#2D5A7B", border: "1px solid #c8e6da" }),
    ...s,
  };
  return <button style={base} onClick={onClick}>{children}{icon && <Icon name={icon} size={16} />}</button>;
};

const Section = ({ children, bg, style: s }) => (
  <section style={{ padding: "64px 24px", background: bg || "transparent", ...s }}>
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div>
  </section>
);

const SectionTitle = ({ children, sub }) => (
  <div style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1A2E3B", marginBottom: sub ? 12 : 0, lineHeight: 1.3 }}>{children}</h2>
    {sub && <p style={{ fontSize: 16, color: "#556671", lineHeight: 1.7, maxWidth: 680 }}>{sub}</p>}
  </div>
);

const Card = ({ icon, title, text, onClick }) => (
  <div onClick={onClick}
    style={{
      background: "#fff", borderRadius: 16, padding: 28,
      border: "1px solid #e8f0ec", cursor: onClick ? "pointer" : "default",
      transition: "all 0.2s", display: "flex", flexDirection: "column", gap: 14,
    }}
    onMouseEnter={e => { if(onClick) { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(58,166,135,0.1)"; }}}
    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
  >
    <div style={{ width: 48, height: 48, borderRadius: 12, background: "#eef7f3", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Icon name={icon} color="#2D5A7B" size={22} />
    </div>
    <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1A2E3B" }}>{title}</h3>
    <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.65, margin: 0 }}>{text}</p>
    {onClick && (
      <span style={{ fontSize: 14, fontWeight: 600, color: "#2D5A7B", display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
        Loe lähemalt <Icon name="arrowRight" size={14} color="#2D5A7B" />
      </span>
    )}
  </div>
);

const Accordion = ({ items }) => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8f0ec", overflow: "hidden" }}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "18px 24px", background: openIdx === i ? "#f0f9f5" : "#fff",
              border: "none", cursor: "pointer", textAlign: "left",
              fontSize: 15, fontWeight: 600, color: "#1A2E3B", transition: "background 0.15s",
            }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {item.icon && <Icon name={item.icon} size={18} color="#2D5A7B" />}
              {item.title}
            </span>
            <span style={{ transform: openIdx === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#2D5A7B" }}>
              <Icon name="chevronDown" size={18} />
            </span>
          </button>
          {openIdx === i && (
            <div style={{ padding: "0 24px 20px", fontSize: 14, color: "#556671", lineHeight: 1.75, textAlign: "left" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const ContactBlock = ({ email = "bonmedica@bonmedica.eu" }) => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 32, border: "1px solid #e8f0ec" }}>
    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1A2E3B", marginBottom: 20 }}>Võtke ühendust</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="phone" size={18} color="#2D5A7B" /><span style={{ fontSize: 15, color: "#1A2E3B", fontWeight: 500 }}>+372 609 0833</span></div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="mail" size={18} color="#2D5A7B" /><span style={{ fontSize: 15, color: "#1A2E3B" }}>{email}</span></div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="mapPin" size={18} color="#2D5A7B" /><span style={{ fontSize: 15, color: "#1A2E3B" }}>Nelgi tee 1, Viimsi 74001</span></div>
    </div>
    <div style={{ background: "#f4f9f6", borderRadius: 10, padding: 16, marginBottom: 20 }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: "#1A2E3B", marginBottom: 8 }}>Lahtiolekuajad</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {HOURS.map(h => (
          <div key={h.day} style={{ display: "flex", gap: 6, fontSize: 13, color: "#556671" }}>
            <span style={{ fontWeight: 600, color: "#1A2E3B", minWidth: 14 }}>{h.day}</span>
            <span>{h.time}</span>
          </div>
        ))}
      </div>
    </div>
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <Btn icon="arrowRight" onClick={() => window.location.href = 'tel:+3726090833'}>Helista kohe</Btn>
      <Btn variant="outline" icon="arrowRight" onClick={() => window.location.href = 'mailto:bonmedica@bonmedica.eu'}>Kirjuta e-mail</Btn>
    </div>
  </div>
);

const PageHero = ({ title, sub }) => (
  <div style={{ background: "linear-gradient(135deg, #f0f9f5, #e4f4ed)", padding: "56px 24px 48px" }}>
    <div style={{ maxWidth: 1120, margin: "0 auto",textAlign: "center" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1A2E3B", marginBottom: 12, lineHeight: 1.3 }}>{title}</h1>
      <p style={{ fontSize: 16, color: "#556671", lineHeight: 1.7, maxWidth: 720, margin: "0 auto" }}>{sub}</p>
    </div>
  </div>
);

const InfoList = ({ items }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {items.map((item, i) => (
      <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ marginTop: 4, minWidth: 20 }}><Icon name="check" size={16} color="#2D5A7B" /></div>
        <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.65, margin: 0 }}>{item}</p>
      </div>
    ))}
  </div>
);

const CalloutBox = ({ title, children, variant = "info" }) => {
  const colors = variant === "warning" ? { bg: "#fef7ed", border: "#f5d49a", icon: "alertTriangle", iconColor: "#d97706" } : { bg: "#eef7f3", border: "#c8e6da", icon: "clipboard", iconColor: "#2D5A7B" };
  return (
    <div style={{ background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: 14, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <Icon name={colors.icon} size={20} color={colors.iconColor} />
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "#1A2E3B", margin: 0 }}>{title}</h4>
      </div>
      <div style={{ fontSize: 14, color: "#556671", lineHeight: 1.7 }}>{children}</div>
    </div>
  );
};

// =============================================================
// PAGES
// =============================================================

const HomePage = ({ setPage }) => (
  <>
    {/* HERO */}
    <div style={{
      background: `linear-gradient(135deg, rgba(244,249,246,0.95), rgba(228,244,237,0.9))`,
      padding: "72px 24px 60px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: -60, right: -60, width: 300, height: 300,
        borderRadius: "50%", background: "rgba(85,197,164,0.08)",
      }} />
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
        <div style={{ flex: "1 1 480px", minWidth: 280 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#2D5A7B", marginBottom: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Perearstikeskus Viimsis
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: "#1A2E3B", lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Sinu perearst Viimsis
          </h1>
          <p style={{ fontSize: 17, color: "#556671", lineHeight: 1.7, marginBottom: 12, maxWidth: 520 }}>
            BonMedica perearstikeskus — Dr Helen Lasni nimistu. Hoolime teie ja teie pere tervisest igas eluetapis.
          </p>
          <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
            Igapäevane teadlik tegevus oma tervise säilitamisel tagab väiksema haiguskoormuse tulevikus.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn icon="arrowRight" onClick={() => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' })}>Võta ühendust</Btn>
            <Btn variant="outline" onClick={() => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' })}>Lahtiolekuajad</Btn>
          </div>
        </div>
        <div style={{ flex: "0 1 400px", minWidth: 240 }}>
          <div style={{
            background: "#fff", borderRadius: 20, padding: 6,
            boxShadow: "0 16px 48px rgba(58,166,135,0.12)",
          }}>
            <div style={{
              borderRadius: 16, overflow: "hidden", aspectRatio: "4/3",
              background: "#dfeee7", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <img src="/BonMedica-Hero.png" alt="BonMedica meeskond" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* HEALTH STATS STRIP */}
    <div style={{ background: "#fff", borderBottom: "1px solid #e8f0ec" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "28px 24px", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {[
          { pct: "40–50%", label: "tervisest sõltub elustiilist" },
          { pct: "15–30%", label: "mõjutab geneetika" },
          { pct: "20–25%", label: "mõjutab geneetika" },
          { pct: "10–20%", label: "sõltub meditsiinist" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#2D5A7B", lineHeight: 1 }}>{s.pct}</span>
            <span style={{ fontSize: 13, color: "#556671", lineHeight: 1.4 }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* TUTVUSTUS */}
    <Section>
  <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1A2E3B", marginBottom: 12, lineHeight: 1.3 }}>Perearstikeskus, kus teid tuntakse</h2>
    <p style={{ fontSize: 16, color: "#556671", lineHeight: 1.7, marginBottom: 20 }}>
      Oleme väike ja pühendunud meeskond, kes teenindab Viimsi ja ümbruskonna perekondi. Meie jaoks ei ole te lihtsalt järjekorranumber — me tunneme oma patsiente nimepidi ja teame teie terviselugu.
    </p>
    <p style={{ fontSize: 15, color: "#556671", lineHeight: 1.7 }}>
      Dr Helen Lasni juhtimisel pakume nii igapäevast perearstiteenust kui ka ennetavat tervishoidu. Meie eesmärk on lihtne: aidata teil püsida terve ja tunda end hoituna.
    </p>
  </div>
</Section>

    {/* TEENUSED */}
    <Section bg="#F4F9F6">
      <SectionTitle>Kuidas saame teid aidata</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        <Card icon="stethoscope" title="Perearsti vastuvõtt"
          text="Terviklik tervise hindamine, diagnoosimine, raviplaanid ja saatekirjad eriarstide juurde. Dr Helen Lasn on teie pikaajaline tervisepartner."
          onClick={() => setPage("perearst")} />
        <Card icon="heart" title="Pereõe vastuvõtt"
          text="Vaktsineerimised, analüüsid, protseduurid, krooniliste haiguste jälgimine ja laste tervisekontrollid. Pereõde on teie esimene kontakt."
          onClick={() => setPage("pereode")} />
        <Card icon="clipboard" title="Tõendid ja uuringud"
          text="Tervisetõendid juhiloa, relvaloa ja muude ametlike vajaduste jaoks. Vereanalüüsid ja uuringud nii haigekassa kui patsiendi soovil."
          onClick={() => setPage("toendid")} />
      </div>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <Btn variant="outline" onClick={() => setPage("perearst")} icon="arrowRight">Vaata kõiki teenuseid</Btn>
      </div>
    </Section>

    {/* MIKS BONMEDICA */}
    <Section>
      <SectionTitle>Miks patsiendid meid usaldavad</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {[
          { icon: "users", title: "Isiklik lähenemine", text: "Väike nimistu tähendab, et meil on teie jaoks aega. Me ei kiirusta vastuvõtul ega jäta teid üksi oma küsimustega." },
          { icon: "shield", title: "Pikaajaline suhe", text: "Tunneme teie terviselugu ja märkame muutusi varakult. Järjepidev arsti-patsiendi suhe on parema tervise alus." },
          { icon: "activity", title: "Kaasaegne ja ennetav", text: "Peame oluliseks mitte ainult haiguste ravi, vaid ka nende ennetamist. Aitame teil mõista oma terviseseisundit." },
          { icon: "mapPin", title: "Mugav asukoht", text: "Asume Viimsi keskuses aadressil Nelgi tee 1 — hea ligipääsuga nii autoga kui ühistranspordiga." },
        ].map((item, i) => <Card key={i} {...item} />)}
      </div>
    </Section>

    {/* KONTAKT */}
    <Section bg="#F4F9F6">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
        <div>
          <SectionTitle sub="Palume kõigepealt helistada või kirjutada — nii saame teid suunata õige teenuse juurde ja kokku leppida sobiva aja.">
            Esmane kontakt toimub telefoni või e-maili teel
          </SectionTitle>
          <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.7 }}>
            Vastame e-mailidele kolme tööpäeva jooksul ja helistame tagasi ühe kuni kolme tööpäeva jooksul.
          </p>
        </div>
        <ContactBlock />
      </div>
    </Section>

    {/* KODUNE RAVI TEASER */}
    <Section>
      <CalloutBox title="Enne helistamist — kerge viirushaiguse kodune ravi">
        <p>Enamiku köha- ja kurguhaigusi saab edukalt ravida kodus käsimüügiravimitega. Oleme koostanud juhised vanusegruppide kaupa, et te teaksite, millal on kodune ravi piisav ja millal tuleks meiega ühendust võtta.</p>
        <div style={{ marginTop: 14 }}>
          <Btn variant="sm" onClick={() => setPage("koduravi")} icon="arrowRight">Vaata koduse ravi juhiseid</Btn>
        </div>
      </CalloutBox>
    </Section>

    {/* ERAKORRALINE */}
    <Section bg="#F4F9F6" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <CalloutBox title="Millal pöörduda erakorralise meditsiini poole?" variant="warning">
        <p style={{ marginBottom: 8 }}>
          <strong>Helista 112 kohe</strong>, kui tegemist on eluohtliku seisundiga (näiteks tugev rindkerevalu, hingamisraskus, teadvusekadu, raske trauma).
        </p>
        <p>Erakorralise, kuid mitte eluohtliku tervisemure korral võid enne nõu küsida telefonilt <strong>1220</strong> meie vastuvõtu välisel ajal.</p>
      </CalloutBox>
    </Section>
  </>
);

const PerearstPage = () => (
  <>
    <PageHero title="Perearsti vastuvõtt"
      sub="Perearst on teie esimene ja kõige olulisem partner terviseküsimustes. Dr Helen Lasn hindab teie tervist terviklikult, diagnoosib ja määrab ravi ning suunab vajadusel edasi eriarsti juurde." />

    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
        <div>
          <SectionTitle>Millal pöörduda perearsti poole</SectionTitle>
          <InfoList items={[
            "Teil on tervisekaebused, mis ei lahene koduse raviga mõne päeva jooksul",
            "Vajate saatekirja eriarsti juurde (vajalik enamiku eriarstide külastamiseks)",
            "Teil on kroonilised haigused, mis vajavad regulaarset jälgimist",
            "Vajate retseptiravimite määramist või pikendamist",
            "Soovite oma tervislikku seisundit üldiselt hinnata",
            "Vajate tervisetõendit ametlikel eesmärkidel",
          ]} />
          <CalloutBox title="Hea teada" variant="info">
            <p>Silmaarsti, günekoloogi või nahaarsti juurde saate pöörduda otse, ilma saatekirjata. Kõigi teiste eriarstide puhul on vaja esmalt perearsti hinnangut.</p>
          </CalloutBox>
        </div>
        <div>
          <SectionTitle>Kuidas aega kokku leppida</SectionTitle>
          <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.7, marginBottom: 16 }}>
            Vastuvõtule tulemiseks on vajalik alati eelnev kokkulepe telefoni teel.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { step: "1", text: "Helistage numbrile +372 609 0833" },
              { step: "2", text: "Pereõde hindab teie mure iseloomu ja lepib teiega kokku sobiva aja" },
              { step: "3", text: "Vajadusel suunab pereõde teid otse perearsti vastuvõtule" },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  minWidth: 32, height: 32, borderRadius: 8, background: "#eef7f3",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: "#2D5A7B"
                }}>{s.step}</div>
                <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#556671", lineHeight: 1.65, marginTop: 16, fontStyle: "italic" }}>
            E-mailile vastame kolme tööpäeva jooksul. Telefonikõnedele helistame tagasi ühe kuni kolme tööpäeva jooksul. Kui olete saatnud e-maili, ei ole vaja täiendavalt helistada.
          </p>
        </div>
      </div>
    </Section>

    <Section bg="#F4F9F6">
      <SectionTitle>Mida perearsti vastuvõtt sisaldab</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {[
          "Põhjalik vestlus ja kehaline läbivaatus",
          "Esmaste uuringute määramine (vereproovid, EKG jm)",
          "Diagnoosi panemine ja raviplaani koostamine",
          "Retseptide kirjutamine või pikendamine",
          "Saatekirja või e-konsultatsiooni vormistamine eriarsti juurde",
          "Kroonilise haiguse raviskeemi ülevaatamine",
          "Töövõimatuslehe avamine ja sulgemine",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", background: "#fff", borderRadius: 10, padding: "14px 18px", border: "1px solid #e8f0ec" }}>
            <Icon name="check" size={16} color="#2D5A7B" />
            <span style={{ fontSize: 14, color: "#1A2E3B" }}>{item}</span>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
        <div>
          <SectionTitle>Valmistuge vastuvõtuks</SectionTitle>
          <InfoList items={[
            "Kirjeldage oma kaebusi kronoloogiliselt — millal algas, kuidas muutunud",
            "Märkige üles ravimid, mida kasutanud (sh käsimüügiravimid ja toidulisandid)",
            "Mõelge, mis on teie eluviisis hiljuti muutunud",
          ]} />
        </div>
        <div>
          <SectionTitle>Oluline teada</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CalloutBox title="Uuringud Tervisekassa kulul">
              <p>Uuringud toimuvad meditsiinilisel näidustusel. Ilma näidustuseta analüüsid on tasulised Synlabi hinnakirja alusel.</p>
            </CalloutBox>
            <CalloutBox title="Retseptide pikendamine">
              <p>Selleks ei ole alati vaja vastuvõtule tulla. Võimalik telefoni, e-maili teel või perearst24.ee kaudu.</p>
            </CalloutBox>
          </div>
        </div>
      </div>
    </Section>

    <Section bg="#F4F9F6">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1A2E3B", marginBottom: 12 }}>Dr Helen Lasn, MD PhD</h3>
          <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.7 }}>
            Lõpetas Tartu Ülikooli aastal 2001. Kaitses neuroteaduste doktorikraadi 2006 Karolinska Instituudis, Stockholmis. 2006–2010 töötanud teadurina Tervisearengu Instituudis laste- ja noorte terviseennetuse projektides. Lõpetas perearsti residentuuri 2013. Alates 2011 töötanud Viimsis perearstina.
          </p>
        </div>
        <ContactBlock />
      </div>
    </Section>
  </>
);

const PereodePage = () => (
  <>
    <PageHero title="Pereõe vastuvõtt"
      sub="Pereõde on teie esimene kontakt BonMedica perearstikeskuses. Kui teil tekib terviseküsimus, helistage või kirjutage meile — pereõde kuulab teid, hindab olukorra tõsidust ja otsustab, kas saab ise aidata või suunab teid edasi perearsti juurde." />

    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
        <div>
          <SectionTitle>Millal pöörduda pereõe poole</SectionTitle>
          <InfoList items={[
            "Äge haigestumine (köha, nohu, kurguvalu, kõrvavalu, põiepõletik)",
            "Vaktsineerimine (laste immuniseerimine, gripi-, puugi-, reisivaktsiinid)",
            "Lapse korraline tervisekontroll",
            "Krooniline haigus ja regulaarne kontroll",
            "Vereanalüüsid, uriiniproovid ja muud uuringud",
            "Tervisetõendid (juhiluba, relvaluba, töötõend)",
            "Haavahooldus, niitide eemaldamine, süstid, kõrvaloputus",
            "Küsimused ravimite, toidulisandite või elustiili kohta",
          ]} />
          <p style={{ fontSize: 13, color: "#2D5A7B", fontWeight: 500, marginTop: 16 }}>
            Pereõe vastuvõtt on Tervisekassa kindlustatutele tasuta.
          </p>
        </div>
        <ContactBlock email="perearstikabinet@gmail.com" />
      </div>
    </Section>

    <Section bg="#F4F9F6">
      <SectionTitle>Teenused lähemalt</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { icon: "activity", title: "Nõustamine", text: "Ägedate haiguste hindamine, külmetushaiguste nõu, kroonilise haiguse ägenemised, reisi- ja vaktsineerimisnõustamine." },
          { icon: "syringe", title: "Protseduurid ja uuringud", text: "Vere- ja uriinianalüüsid, EKG, vaktsineerimised, haavahooldus, kõrvaloputus ja muud meditsiinilised protseduurid." },
          { icon: "thermometer", title: "Kroonilised haigused", text: "Regulaarne jälgimine: astma, diabeet, kõrgvererõhutõbi, kilpnäärmehaigused ja muud pikaajalised haigused." },
          { icon: "baby", title: "Laste tervisekontrollid", text: "Imikute ja laste arengu jälgimine vastavalt Eesti lapse tervise jälgimise juhendile." },
          { icon: "globe", title: "Reisivaktsineerimine", text: "Abi reisivaktsiinide ja ettevaatusabinõude planeerimisel. Võtke ühendust vähemalt 4–6 nädalat enne reisi." },
        ].map((item, i) => <Card key={i} {...item} />)}
      </div>

      <Accordion items={[
        {
          icon: "activity", title: "Nõustamine ja terviseinfo",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p><strong>Ägedate haiguste hindamine</strong> — pereõde küsib sümptomite kohta, hindab olukorra tõsidust ja soovitab ravi. Paljud levinud haigused saavad esmase hinnangu pereõe juures.</p>
              <p><strong>Külmetushaiguste nõu</strong> — kui pole kindel, kas on vaja arsti juurde, küsige nõu. Pereõde aitab hinnata, millal on kodune ravi piisav.</p>
              <p><strong>Kroonilise haiguse ägenemised</strong> — pereõde aitab olukorda hinnata ja vajadusel ravi korrigeerida koostöös perearstiga.</p>
              <p><strong>Nõuanne telefoni teel</strong> — kirjeldage kaebusi võimalikult täpselt: kestvus, sümptomite järjekord, juba kasutatud ravivõtted.</p>
            </div>
          ),
        },
        {
          icon: "syringe", title: "Protseduurid ja uuringud",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p><strong>Analüüsid ja diagnostika:</strong> vere- ja uriinianalüüsid, kiirtestid, vererõhu mõõtmine, EKG, kaalumine ja pikkuse mõõtmine.</p>
              <p><strong>Protseduurid:</strong> hooajalised ja riikliku kava vaktsineerimised, reisivaktsiinid, kõrvaloputus, haavade sidumine, õmblusniitide eemaldamine.</p>
              <p>Järgige alati pereõe juhiseid protseduuri ettevalmistuseks (nt tühja kõhuga vereproov) või järelhoolduseks.</p>
            </div>
          ),
        },
        {
          icon: "thermometer", title: "Krooniliste haiguste jälgimine",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p>Krooniline haigus vajab pidevat tähelepanu — isegi siis, kui te end parasjagu hästi tunnete.</p>
              <p>Pereõde jälgib teid regulaarselt: astma, kõrgvererõhutõbi, diabeet, kilpnäärmehaigused, südamepuudulikkus, KOK, osteoporoos, depressioon, ärevushäire ja muud.</p>
              <p>Kontrolli intervallid on Tervisekassa juhiste alusel. Pereõde tuletab meelde, millal on aeg kontrolliks.</p>
              <p style={{ fontStyle: "italic" }}>Iga inimese haigus on erinev. Raviskeem, mis sobib teie tuttavale, ei pruugi sobida teile.</p>
            </div>
          ),
        },
        {
          icon: "baby", title: "Laste arengu jälgimine",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p>Pereõde jälgib tervete imikute ja laste arengut vastavalt Eestis kehtivale juhendile. Regulaarsed kontrollid on eriti olulised esimestel eluaastatel.</p>
              <p>Kontrolli ajad lepitakse kokku individuaalselt. Kirjutage enne kontrolli üles küsimused lapse arengu kohta.</p>
              <p>Täpsem info: <a href="https://ravijuhend.ee/tervishoiuvarav/juhendid/130/lapse-tervise-jalgimise-juhend" target="_blank" rel="noopener noreferrer" style={{ color: "#2D5A7B" }}>ravijuhend.ee (lapse tervise jälgimise juhend) </a></p>
            </div>
          ),
        },
        {
          icon: "globe", title: "Reisivaktsineerimine",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p>Võtke meiega aegsasti ühendust — ideaalis vähemalt 4–6 nädalat enne reisi. Mõned vaktsiinid vajavad mitut doosi ja kaitsev immuunsus kujuneb alles mõne nädala pärast.</p>
              <p>Pereõde aitab välja selgitada vajalikud vaktsiinid ja koostab vaktsineerimisplaani.</p>
              <p>Lisainfot reisitervishoiu kohta: vaktsineeri.ee</p>
            </div>
          ),
        },
      ]} />
    </Section>

    <Section>
      <CalloutBox title="Kuidas vastuvõtuks valmistuda">
        <InfoList items={[
          "Pange kirja, millal sümptomid algasid ja kuidas ajas muutunud. Mainige ka juba proovitud ravivõtteid.",
          "Võtke kaasa ravimite nimekiri, mõõtmispäevik ja info seisundi muutuste kohta.",
          "Lapsega kontrollile tulles kirjutage üles küsimused lapse arengu, toitumise või käitumise kohta.",
        ]} />
      </CalloutBox>
    </Section>
  </>
);

const ToendidPage = () => (
  <>
    <PageHero title="Tõendid ja uuringud"
      sub="Väljastame tervisetõendeid ametlikel eesmärkidel." />
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
        {[
          { icon: "fileText", title: "Juhiloa tervisetõend", text: "Tervisekontroll ja tõendi väljastamine mootorsõiduki juhtimise õiguse saamiseks või pikendamiseks." },
          { icon: "shield", title: "Relvaloa tervisetõend", text: "Tervisekontroll ja tõendi väljastamine relvaloa taotlemiseks vastavalt nõuetele." },
          { icon: "clipboard", title: "Nakkushaiguste tõend", text: "Tervisetõend tööandjale nakkushaiguste puudumise kohta vastavalt töötervishoiu nõuetele." },
        ].map((item, i) => <Card key={i} {...item} />)}
      </div>
      <p style={{ fontSize: 14, color: "#556671", lineHeight: 1.7, marginBottom: 32 }}>
        Lisaks väljastame tervisetõendeid spordiklubile, kõrgkoolidele ja kindlustusele esitamiseks.
      </p>
      <ContactBlock />
    </Section>
  </>
);

const KoduraviPage = () => (
  <>
    <PageHero title="Ägedate viiruste ravi kodus"
      sub="Viirushaigused (nohu, köha, kurguvalu, peavalu, palavik) on üldjuhul iseparanevad ning ei vaja perearsti abi esimesel nädalal. Apteegist saate esmased sümptomeid leevendavad vahendid." />

    <Section>
      <Accordion items={[
        {
          icon: "alertTriangle", title: "Imikud (0–6 kuud)",
          content: (
            <CalloutBox title="Võtke kohe ühendust" variant="warning">
              <p>0–6 kuuste imikute haigestumisel (palavik, köha, loidus, isutus) võtke meiega kohe ühendust telefonil +372 609 0833.</p>
            </CalloutBox>
          ),
        },
        {
          icon: "baby", title: "Väikelapsed ja eelkooliealised (1–6 a)",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p><strong>Köha ja palavik:</strong> Sümptomaatiline ravi esimestel päevadel — paratsetamool 10 mg/kg, ibuprofeen 15 mg/kg. Inhalatsioonid 0,9% NaCl või pulmicordiga.</p>
              <p><strong>Kõrvavalu alla 2-aastastel:</strong> Võtke meiega kohe ühendust.</p>
              <p><strong>Kõrvavalu 2–6a lastel:</strong> Ravige 2–3 päeva ibuprofeeniga 15 mg/kg + nina puhastamine ja turse alandamine (ninaspreid käsimüügist), Zyrtec.</p>
            </div>
          ),
        },
        {
          icon: "users", title: "Koolilapsed",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p><strong>Köha ja palavik:</strong> Sümptomaatiline ravi — paratsetamool 10 mg/kg, ibuprofeen 15 mg/kg. Inhalatsioonid 0,9% NaCl või pulmicordiga.</p>
              <p><strong>Kõrvavalu:</strong> Ravige 2–3 päeva ibuprofeeniga 15 mg/kg + nina puhastamine, Zyrtec 5–10 mg.</p>
            </div>
          ),
        },
        {
          icon: "users", title: "Täiskasvanud",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p><strong>Köha ja nohu:</strong> Rögalahtistid (ACC, Flavamed, Fluditec, Gelomyrtol, Brontex) ja ninaspreid (Otrivin, Sudafed) vähemalt 7 päeva enne meie poole pöördumist.</p>
              <p><strong>Põskkoopa põletik:</strong> Ninaspreid + ninasekreedi vedeldajad (Gelomyrtol, Sinupret), Zyrtec 10 mg vähemalt 7 päeva.</p>
              <p><strong>Kõrvavalu:</strong> Ibuprofeen 600 mg × 3 kolm päeva + ninaspreid + Zyrtec 10 mg.</p>
              <CalloutBox title="Millal meie poole pöörduda" variant="warning">
                <p>Kui tekib hingamisraskus või üle 5 päeva kestev palavik üle 38°C.</p>
              </CalloutBox>
            </div>
          ),
        },
        {
          icon: "heart", title: "Eakad (üle 65a)",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p><strong>Köha, nohu:</strong> Rögalahtistid (ACC, Fluditec, Brontex), köhapärssijad (Paxeladin), nina loputamine, Zyrtec 10 mg.</p>
              <p><strong>Kõrvavalu:</strong> Paratsetamool 1000 mg × 4, ibuprofeen 400 mg × 3, ninaspreid (Otrivin), Zyrtec 10 mg.</p>
              <CalloutBox title="Millal meie poole pöörduda" variant="warning">
                <p>Kui tekib hingamisraskus ja üle 3 päeva kestev palavik üle 38°C.</p>
              </CalloutBox>
            </div>
          ),
        },
        {
          icon: "thermometer", title: "Kurgu- ja kõrvavalu juhised",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 8 }}>Kurguvalu esmane ravi:</p>
                <InfoList items={[
                  "Kurguspreid (astelpaju-saialille, Hexoral jm)",
                  "Losengid, imemistabletid",
                  "Paratsetamool 1000 mg × 4 ja ibuprofeen 600 mg × 3",
                  "Juua palju leiget vedelikku",
                ]} />
              </div>
              <CalloutBox title="Millal võtta meiega ühendust (kurguvalu)" variant="warning">
                <InfoList items={[
                  "Palavik püsib üle 5 päeva > 38–39°C",
                  "Esinevad neelamis- või hingamisraskused",
                  "Suud on raske avada ja/või esineb kaelavalu",
                  "Üldseisund halveneb: tugev nõrkus, teadvushäire",
                ]} />
              </CalloutBox>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 8 }}>Kõrvavalu ravi:</p>
                <InfoList items={[
                  "Alla 2a lapsed: Zyrtec + ibuprofeen ja helistage meile",
                  "Üle 2a lapsed ja täiskasvanud: nina puhastamine, 3 päeva ibuprofeen, Zyrtec",
                  "Kui valu kestab üle 3 päeva, helistage meile",
                ]} />
              </div>
              <p style={{ fontSize: 13, fontStyle: "italic" }}>
                2/3 üle 2-aastastel on tegu viirusega, mis paraneb ilma antibiootikumita. Oluline on hoida nina puhtana.
              </p>
            </div>
          ),
        },
      ]} />
    </Section>

    <Section bg="#F4F9F6">
      <ContactBlock />
    </Section>
  </>
);

const HinnakiriPage = () => (
  <>
    <PageHero title="Hinnakiri" sub="Tasuliste teenuste hinnakiri. Tervisekassa kindlustatutele on pereõe ja perearsti vastuvõtt tasuta." />
    <Section>
      <div style={{ background: "#fff", borderRadius: 16, padding: 40, border: "1px solid #e8f0ec", textAlign: "center" }}>
        <Icon name="euro" size={48} color="#c8e6da" />
        <h3 style={{ fontSize: 20, fontWeight: 600, color: "#1A2E3B", marginTop: 16, marginBottom: 8 }}>Hinnakiri täienemisel</h3>
        <p style={{ fontSize: 15, color: "#556671", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 24px" }}>
          Täpse hinnakirja saamiseks palun võtke meiega ühendust telefoni või e-maili teel.
        </p>
        <Btn icon="arrowRight" onClick={() => document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })}>Võta ühendust</Btn>
      </div>
    </Section>
  </>
);

// =============================================================
// FOOTER
// =============================================================
const Footer = ({ setPage }) => (
  <footer id="kontakt" style={{ background: "#1A2E3B", padding: "48px 24px 32px" }}>
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginBottom: 32 }}>
        <div style={{ flex: "1 1 280px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>BonMedica OÜ</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)", textAlign: "left", paddingLeft: 16 }}>
            <span>Reg nr 12400532</span>
            <span>Nelgi tee 1, Viimsi 74001</span>
            <span>+372 609 0833</span>
            <span>bonmedica@bonmedica.eu</span>
          </div>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Menüü</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {Object.entries(PAGES).map(([key, label]) => (
              <button key={key} onClick={() => setPage(key)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)", fontSize: 14, textAlign: "left", padding: 0 }}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Lahtiolekuajad</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {HOURS.map(h => (
              <div key={h.day} style={{ display: "flex", gap: 10, fontSize: 13 }}>
                <span style={{ color: "rgba(255,255,255,0.5)", minWidth: 14, fontWeight: 600 }}>{h.day}</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
        © 2026 BonMedica OÜ. Kõik õigused kaitstud.
      </div>
    </div>
  </footer>
);

// =============================================================
// APP
// =============================================================
export default function App() {
  const [page, setPage] = useState("home");
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [page]);

  const pages = {
    home: <HomePage setPage={setPage} />,
    perearst: <PerearstPage />,
    pereode: <PereodePage />,
    toendid: <ToendidPage />,
    koduravi: <KoduraviPage />,
    hinnakiri: <HinnakiriPage />,
  };

  return (
    <div ref={topRef} style={{ fontFamily: "'Roboto', 'Segoe UI', system-ui, sans-serif", color: "#1A2E3B", background: "#F4F9F6", minHeight: "100vh" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
        button:hover { opacity: 0.92; }
      `}</style>
      <Nav page={page} setPage={setPage} />
      <main style={{ background: "#fff" }}>
        {pages[page]}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
