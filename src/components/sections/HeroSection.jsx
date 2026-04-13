import { motion } from "framer-motion";
import heroBg from "../../assets/newbg.jpeg";

function HeroSection({ data, contact }) {
  const currentSlide = {
    badge: data.subtitle,
    title: data.headline,
    description: data.description,
  };

  const currentTitleWords = String(currentSlide.title || "").trim().split(/\s+/).filter(Boolean);
  const shouldHighlightLastWord = currentTitleWords.length > 1;
  const highlightedWord = shouldHighlightLastWord ? currentTitleWords[currentTitleWords.length - 1] : "";
  const leadingHeadline = shouldHighlightLastWord ? currentTitleWords.slice(0, -1).join(" ") : currentSlide.title;

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ backgroundImage: `url(${heroBg})` }}
      className="animate-reveal relative -mx-3 min-h-screen overflow-hidden scroll-mt-28 bg-cover bg-center bg-no-repeat sm:-mx-6 lg:-mx-10 2xl:-mx-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-[#D5B223]/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-[1200px] px-5 py-22 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-start gap-8 lg:gap-10">
            <motion.div
              className="max-w-[820px] pt-32 translate-y-6 sm:pt-36 sm:translate-y-8 lg:pt-44 lg:translate-y-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="space-y-4">
                <div className="min-h-[340px] sm:min-h-[360px] lg:min-h-[420px]">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="space-y-5"
                  >
                    {currentSlide.badge ? (
                      <p className="m-0 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-[#E7CB74] backdrop-blur sm:text-[0.86rem]">
                        {currentSlide.badge}
                      </p>
                    ) : null}

                    <h1 className="m-0 max-w-[11ch] text-[2.45rem] font-black leading-[0.98] tracking-[-0.05em] text-white [text-shadow:0_12px_30px_rgba(2,6,23,0.45)] sm:max-w-[10ch] sm:text-[3.35rem] lg:text-[5.1rem]">
                      {leadingHeadline}
                      {highlightedWord ? (
                        <>
                          {" "}
                          <span className="text-[#F7D26A] [text-shadow:0_8px_24px_rgba(247,210,106,0.35)]">{highlightedWord}</span>
                        </>
                      ) : null}
                    </h1>

                    {currentSlide.description ? (
                      <p className="m-0 max-w-[56ch] text-[1.08rem] font-medium leading-[1.65] text-slate-100/92 sm:text-[1.18rem] lg:text-[1.28rem]">
                        {currentSlide.description}
                      </p>
                    ) : null}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <a
                        href="#get-in-touch"
                        className="inline-flex w-full items-center justify-center rounded-[12px] bg-[#D5B223] px-6 py-3.5 text-center text-[0.9rem] font-extrabold uppercase tracking-[0.12em] text-[#0B1730] shadow-[0_12px_26px_rgba(213,178,35,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#E2C241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8E8B3] sm:w-auto sm:min-w-[190px]"
                      >
                        Get Consultation
                      </a>

                      <div className="relative inline-flex w-full sm:w-auto sm:min-w-[190px]">
                        <span
                          className="pointer-events-none absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-[#D5B223]/90"
                          aria-hidden="true"
                        />
                        <span
                          className="pointer-events-none absolute -right-1.5 -top-1.5 h-3 w-3 border-r border-t border-[#D5B223]/90"
                          aria-hidden="true"
                        />
                        <span
                          className="pointer-events-none absolute -left-1.5 -bottom-1.5 h-3 w-3 border-l border-b border-[#D5B223]/90"
                          aria-hidden="true"
                        />
                        <span
                          className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-3 w-3 border-r border-b border-[#D5B223]/90"
                          aria-hidden="true"
                        />

                        <a
                          href="#services"
                          className="inline-flex w-full items-center justify-center rounded-none border border-white/30 bg-white/10 px-6 py-3.5 text-center text-[0.9rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-white/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          View Services
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
