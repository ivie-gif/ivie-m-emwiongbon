import { Button, Chip, Link } from "@mui/material";
import { ArrowOutwardRounded } from "@mui/icons-material";
import agt from "../../assets/agt-app.png";
import billing from "../../assets/Billing-Platform.png";
import fccl from "../../assets/FCCL-website.png";
import rccg from "../../assets/rccg-website.png";
import vas from "../../assets/Vas-platform.png";
import erp from "../../assets/erp.png";
import { useIsMobile } from "../../hooks/use-mobile";

const projects = [
  {
    id: 1,
    title: "Telecom Aggregator",
    desc: "Unified platform aggregating telecom services with admin tooling. Reduced annual maintenance cost by $5K+.",
    tags: ["React", "Go", "REST", "MUI", "MongoDB"],
    gradient: "bg-gradient-primary",
    image: agt,
    link: "https://agt.broadbased.net/auth/sign-in"
  },
  {
    id: 2,
    title: "Fintech Payment Suite",
    desc: "End-to-end payment gateway integration with reusable component library and secure transaction flows.",
    tags: ["React", "PayStack", "XpressPay", "PinsPay", "Go", "MUI", "Tailwind"],
    gradient: "bg-gradient-pink",
    image: billing,
    link: "https://fibrexpress.net/login"
  },
  {
    id: 3,
    title: "Enterprise ERP Dashboard",
    desc: "Admin dashboard for inventory, HR and finance modules with real-time data visualization.",
    tags: ["React", "TypeScript", "Charts", "TailwindCSS"],
    gradient: "bg-gradient-cyan",
    image: erp,
    link: "https://erp.broadbased.net/"
  },
  {
    id: 4,
    title: "RCCG Website",
    desc: "Modern website for RCCG with responsive design and interactive elements.",
    tags: ["Html", "JavaScript", "CSS"],
    gradient: "bg-gradient-orange",
    image: rccg,
    link: "https://rccglagosprovince48.org/index.html"
  },
  {
    id: 5,
    title: "FCCL Website",
    desc: "Modern website for FCCL with responsive design and interactive elements.",
    tags: ["React", "MUI", "PHP"],
    gradient: "bg-gradient-green",
    image: fccl,
    link: "https://fcclnigeria.net/"
  },
  {
    id: 6,
    title: "VAS Platform",
    desc: "Value-added telecom services portal with subscriber management and campaign analytics.",
    tags: ["React", "Go", "REST", "TailwindCSS", "MongoDB"],
    gradient: "bg-gradient-orange",
    image: vas,
    link: "https://vas.broadbased.net/"
  },
  // {
  //   id: 7,
  //   title: "VAS Platform",
  //   desc: "Value-added telecom services portal with subscriber management and campaign analytics.",
  //   tags: ["React", "TypeScript", "Go", "REST", "MUI", "MongoDB"],
  //   gradient: "bg-gradient-orange",
  //   image: vas,
  //   link: "https://vas.broadbased.net/"
  // },

];

export function Projects() {
  const isMobile = useIsMobile();
  return (
    <section id="projects" className={isMobile ? "py-10 sm:px-6" : "py-24 px-4 sm:px-6"}>
      <div className="max-w-7xl mx-auto"> 
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#000000] mb-3">Selected work</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Projects I've shipped.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A blend of fintech, ERP and telecom platforms built end-to-end with cross-functional teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative glass rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full group-hover:opacity-50 transition-opacity`} />
              <div className={`relative block text-2xl`}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="relative mt-5 text-2xl font-bold">{p.title}</h3>
              <p className="relative mt-3 text-muted-foreground">{p.desc}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t} label={t} size="small" sx={{ background: "rgba(124,42,214,0.08)", color: "#0D82FE", fontWeight: 600 }} />
                ))}
              </div>
              <Button href={p.link} className="!relative !mt-6" endIcon={<ArrowOutwardRounded />} sx={{ color: "#0D82FE", pl: 0 }}>
                View case study
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
