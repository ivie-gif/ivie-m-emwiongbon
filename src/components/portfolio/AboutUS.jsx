import { CheckCircleRounded } from "@mui/icons-material";
import { useIsMobile } from "../../hooks/use-mobile";

const highlights = [
  "Frontend architecture & reusable component systems",
  "API integrations and payment gateways",
  "Mock-up to high-quality, pixel-accurate UI",
  "Cross-functional collaboration, remote & onsite",
];

export function About() {
  const isMobile = useIsMobile();
  return (
    <section id="about" className={isMobile ? "py-10 sm:px-6" : "py-24 px-4 sm:px-6"}>
      <div className="max-w-7xl mx-auto ">
      <div className="max-w-7xl sm:mx-auto grid lg:grid-cols-2 gap-12 items-center">
         <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#000000] mb-3">About me</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            A software engineer obsessed with <span className="text-[#0D82FE]">shipping value</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dynamic Software Engineer with 4 years of experience developing enterprise applications,
            fintech platforms, ERP systems, administrative dashboards and telecom solutions using
           <span className="font-bold text-[#000000]"> React, TypeScript, JavaScript, Python, and Go</span>.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I led the development of a Telecom Aggregator application that saved the organization
            over <span className="text-foreground font-semibold">$20,000 annually</span> in
            maintenance and support costs and I love translating mock-ups into polished, performant
            interfaces.
          </p>
        {/* </div> */}
        </div>

        <ul className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <li key={h} className="glass rounded-2xl p-5 shadow-card flex gap-3">
              <CheckCircleRounded sx={{ color: "#0D82FE" }} />
              <span className="text-sm leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
