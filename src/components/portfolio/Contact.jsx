import { Button, TextField } from "@mui/material";
import { EmailRounded, LinkedIn, GitHub, ArrowForwardRounded } from "@mui/icons-material";

export function Contact() {
  return (
    <section id="contact" className="py-24  sm:px-6">
      <div className="w-full relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 bg-[rgba(255,255,255,0.5)] text-[#000000]">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full " />

        <div className="relative items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#000000]/80 mb-3">Let's talk</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Have a project in mind? Let's build it.
            </h2>
            <p className="mt-5 text-[#000000]/85 max-w-md">
              Whether it's a fintech platform, ERP system or a telecom solution, drop a message and I'll get back within 24h.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button startIcon={<EmailRounded />} variant="contained"
                sx={{ background: "white", color: "#0D82FE", "&:hover": { background: "rgba(255,255,255,0.9)" } }}
                href="mailto:emwiongbonivien@gmail.com">Email me</Button>
              <Button startIcon={<LinkedIn />} variant="contained"
                 sx={{ background: "white", color: "#0D82FE", "&:hover": { background: "rgba(255,255,255,0.9)" } }}
                 href="https://www.linkedin.com/in/ivie-maryann-emwiongbon">LinkedIn</Button>
              <Button startIcon={<GitHub />} variant="contained"
                sx={{ background: "white", color: "#0D82FE", "&:hover": { background: "rgba(255,255,255,0.9)" } }}
                href="https://github.com/ivie-gif">GitHub</Button>
            </div>
          </div>

          {/* <form className="bg-white/95 backdrop-blur rounded-3xl p-6 sm:p-8 text-foreground shadow-float space-y-4"
            onSubmit={(e) => e.preventDefault()}>
            <TextField fullWidth label="Your name" variant="outlined" size="small" />
            <TextField fullWidth label="Email" type="email" variant="outlined" size="small" />
            <TextField fullWidth label="Tell me about your project" multiline minRows={4} variant="outlined" size="small" />
            <Button fullWidth variant="contained" size="large" endIcon={<ArrowForwardRounded />} type="submit">
              Send message
            </Button>
          </form> */}
        </div>
      </div>

      <footer className="max-w-6xl mx-auto mt-12 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Ivie Maryann Emwiongbon . All rights reserved.</span>
      </footer>
    </section>
  );
}
