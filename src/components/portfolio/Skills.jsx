import { useIsMobile } from "../../hooks/use-mobile";


const groups = [
  { title: "Frontend", 
    items: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind", "MUI", "Ant Design", "Modules", "React-Query"] },
  { title: "Backend", 
    items: ["Go", "Node.js", "REST APIs", "Python"] },
  {
    title: "Practice",
    items: ["Frontend Architecture", "Component Systems", "Payment Gateways", "Mock-up to UI"],
  },
  {
    title: "Tools",
    items: ["Figma", "VS Code", "Git", "Postman", "Windsurf", "Cursor"],
  },
  {
    title: "Cloud & Deployment",
    items: ["Vercel", "Netlify", "CI/CD", "Azure DevOps"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
];

export function Skills() {
  const isMobile = useIsMobile();
  return (
    <section id="skills" className={isMobile ? "py-10 sm:px-6" : "py-24 px-4 sm:px-6"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#000000] mb-3">
            Toolkit
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">Tech I work with daily.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-3xl p-7 shadow-card">
              <h3 className="text-lg font-bold mb-5 text-[#000000]">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-[#F8F8FA] border border-[#E0E0E0] text-secondary-foreground text-sm font-medium hover:bg-[#0D82FE] cursor-pointer hover:text-white transition-colors"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
