import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import heroBg from "../../assets/Pasted image.png";

function HeroSection({ data }) {
  const reduceMotion = useReducedMotion();

  const titleWords = String(data.headline || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const hasHighlight = titleWords.length > 1;
  const lastWord = hasHighlight ? titleWords.at(-1) : "";
  const baseTitle = hasHighlight ? titleWords.slice(0, -1).join(" ") : data.headline;

  return (
    <motion.section
      id="home"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative -mx-3 min-h-[92svh] overflow-hidden bg-black sm:-mx-6 lg:-mx-10 2xl:-mx-14"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* DARK OVERLAY (premium depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(247,210,106,0.12),transparent_45%)]" />

      <div className="relative z-10 flex min-h-[92svh] items-center">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="max-w-[900px] space-y-8 sm:space-y-10">

            {/* BADGE */}
            {data.subtitle && (
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#F7D26A] backdrop-blur"
              >
                {data.subtitle}
              </motion.p>
            )}

            {/* TITLE */}
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.6rem] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-[3.6rem] lg:text-[5.2rem]"
            >
              {baseTitle}{" "}
              {hasHighlight && (
                <span className="text-[#F7D26A] drop-shadow-[0_8px_20px_rgba(247,210,106,0.35)]">
                  {lastWord}
                </span>
              )}
            </motion.h1>

            {/* BUTTONS */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button as={motion.a} href="#get-in-touch" className="sm:min-w-[200px]">
                Get Consultation
              </Button>

              <Button as={motion.a} href="#services" variant="outline" className="sm:min-w-[200px]">
                View Services
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;