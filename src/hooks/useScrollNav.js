import { useState } from "react";

export function useScrollNav(initial = "Home") {
  const [active, setActive] = useState(initial);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { active, menuOpen, setMenuOpen, scrollTo };
}
