import { Button, Chip } from "@mui/material";
import { ArrowForwardRounded, DownloadRounded, BoltRounded, CodeRounded, RocketLaunchRounded, AccountTreeRounded } from "@mui/icons-material";
import portrait from "../../assets/hero-portrait2.png";
import { useIsMobile } from "../../hooks/use-mobile";

const stats = [
  { value: "4+", label: "Years exp", color: "#0D82FE" },
  { value: "6+", label: "Shipped projects", color: "#0D82FE" },
  { value: "$20K", label: "Annual savings", color: "#0D82FE" },
  // { value: "10+", label: "Tech stack", color: "#0D82FE" },
];

export function Hero() {
  const isMobile = useIsMobile();


  return (
    <section id="top" className={isMobile ? "relative pt-32 overflow-hidden" : "relative pt-32 pb-20 px-4 overflow-hidden"}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 mb-6 shadow-card">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">Available for new projects · Remote / Hybrid / Onsite</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            Building fintech, ERP & telecom platforms that scale.
          </h1>
          {/* <span className="text-gradient"> */}

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
            Software Engineer with 4 years crafting enterprise apps, admin dashboards and payment integrations using React, TypeScript, Python, and Go.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button sx={{ bgcolor: "#0D82FE", "&:hover": { bgcolor: "#0D82FE" }, color: "white" }} size="large" endIcon={<ArrowForwardRounded />} href="#projects">
              View my work
            </Button>
            <Button variant="outlined" size="large" startIcon={<DownloadRounded />} href="https://drive.google.com/file/d/1M_CTGoLsEzA5IzzUTTlMJp965qSMe8p3/view?usp=sharing"
              sx={{ borderColor: "#0D82FE", color: "#0D82FE", "&:hover": { borderColor: "#0D82FE", background: "rgba(124,42,214,0.06)" } }}>
              Download CV
            </Button>
          </div>

          <div className={isMobile ? "gap-5 flex flex-row mt-10" : "mt-10 grid grid-cols-3 sm:grid-cols-4"}>
            {stats.map((s) => (
              <div key={s.label} >
                <div className="text-2xl sm:text-3xl font-bold text-[#000000]">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait + floating chips */}
        <div className="relative h-full sm:h-[600px]">
          <div className="absolute inset-0 bg-[#0D82FE] rounded-[3rem] blur-3xl opacity-30" />
          <div className="absolute inset-0 flex items-end justify-center">
            <img src={portrait} alt="Portrait" width={1024} height={1000}
              className="h-full w-full " />
          </div>

          {/* <FloatingCard className="top-4 left-0 sm:left-4 animate-float bg-[#0D82FE]">
            <BoltRounded fontSize="small" />
            <div>
              <div className="text-sm font-bold text-white">Fintech Platform</div>
              <div className="text-xs text-white/85">Payment gateway integrations</div>
            </div>
          </FloatingCard>

          <FloatingCard className="top-1/3 right-0 sm:-right-2 animate-float-delay bg-[#0D82FE]">
            <CodeRounded fontSize="small" />
            <div>
              <div className="text-sm font-bold text-white">React + TypeScript</div>
              <div className="text-xs text-white/85">Reusable component systems</div>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-28 left-0 sm:-left-4 animate-float-slow bg-[#0D82FE]">
            <AccountTreeRounded fontSize="small" />
            <div>
              <div className="text-sm font-bold text-white">ERP Systems</div>
              <div className="text-xs text-white/85">Enterprise dashboards</div>
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-10 right-2 sm:right-6 animate-float bg-[#0D82FE]">
            <RocketLaunchRounded fontSize="small" />
            <div>
              <div className="text-sm font-bold text-white">Telecom Aggregator</div>
              <div className="text-xs text-white/85">Saved $5K+ annually</div>
            </div>
          </FloatingCard> */}

          {/* <Chip label="Go" className="!absolute top-2 right-10 glass !text-foreground" /> */}
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ children, className = "" }) {
  return (
    <div className={`absolute z-10 rounded-2xl p-3 sm:p-4 shadow-float text-white flex items-center gap-3 max-w-[220px] ${className}`}>
      {children}
    </div>
  );
}
