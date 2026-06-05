import { Button } from "@mui/material";
// import { useMediaQuery } from "@mui/material";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
// const {  md: isMd } = useMediaQuery();

  return (
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center">
      <nav className="glass shadow-card rounded-full px-3 py-2 flex items-center gap-1 sm:gap-2 w-full max-w-3xl">
        <a href="#top" className="flex items-center gap-2 px-3 py-1.5 rounded-full">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#0D82FE] text-white font-bold text-sm">IME</span>
          <span className="font-semibold tracking-tight text-sm md:block">Ivie Maryann Emwiongbon</span>
        </a>
        <ul className={ " flex items-center gap-1 ml-2"}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <Button href="#contact" size="small" sx={{ bgcolor: "#0D82FE", "&:hover": { bgcolor: "#0D82FE" }, color: "white" }}>Hire me</Button>
        </div>
      </nav>
    </header>
  );
}
