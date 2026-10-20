import { createRoot } from "react-dom/client"
import SculptureHero from "./components/ui/liquid-sculpture-hero"

const root = document.getElementById("hero-root")

if (root) {
  createRoot(root).render(
    <SculptureHero
      brand="MAISON ELOSIA"
      navLinks={[
        { label: "Notre univers", href: "#art" },
        { label: "Nos offres", href: "#offres" },
        { label: "La méthode", href: "#methode" },
      ]}
      navCta={{ label: "Démarrer un projet", href: "#contact" }}
      eyebrow="Maison créative · sites web & films de marque"
      headline={"Un site qui donne\nenvie de vous choisir."}
      headlineAccent="vous choisir."
      body="Maison Elosia conçoit des sites vivants, élégants et mémorables — pensés pour faire comprendre votre valeur en quelques secondes et transformer l’attention en demandes."
      primaryCta={{ label: "Créer mon site", href: "#contact" }}
      secondaryCta={{ label: "Voir nos offres", href: "#offres" }}
      hint="Faites bouger la matière"
      hintTouch="Touchez la matière"
      background="#0B1D2E"
      darkBackground="#0B1D2E"
      theme="dark"
      themeToggle={false}
      textColor="#F4F7FA"
      accentColor="#9BB8CE"
      sculptureScale={0.94}
      mobileSculptureScale={1.05}
      interactive
      strength={1.1}
      radius={220}
      particleDensity={0.9}
      particleSpread={1.05}
      turbulence={1.1}
      liquid={1.15}
      streaks
      returnSpeed={0.95}
      ambient
      ambientIntensity={0.35}
      intro
      backdropText="ELOSIA"
      showCredit={false}
    />
  )
}
