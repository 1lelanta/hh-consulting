import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";

function IconBadge({ type }) {
  const common = "h-6 w-6 text-[#FACC15]";

  if (type === "approach") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 18V6a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M8 11h8M8 15h5" />
      </svg>
    );
  }

  if (type === "vision") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M2.5 12S6.5 5 12 5s9.5 7 9.5 7-4 7-9.5 7S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M19 5c-7 0-12 4-12 10 0 2.8 2.2 5 5 5 6 0 10-5 10-12 0-1.7-1.3-3-3-3Z" />
        <path d="M8 16c2-3 5-5 10-7" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.8-4" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function AboutSection({ data, valuesData, stats = {}, className = "" }) {
  const reduceMotion = useReducedMotion();
  const valueItems = Array.isArray(valuesData?.items) ? valuesData.items.slice(0, 6) : [];

  const statItems = [
    { value: `${stats.years ?? 10}+`, label: "Years Experience" },
    { value: `${stats.projects ?? 50}+`, label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const paragraphs = [
    "A multidisciplinary firm based in Ethiopia, dedicated to providing innovative, sustainable, and integrated solutions in architecture and engineering.",
    "We combine visionary design with technical excellence to deliver impactful and resilient projects across Ethiopia and beyond.",
  ];

  return (
    <motion.section
      id="about-us"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className={`animate-reveal relative scroll-mt-28 overflow-hidden bg-[#050816] text-white ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.10),transparent_25%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#050816_0%,#0B1220_55%,#050816_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:34px_34px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 py-[60px] sm:px-6 sm:py-[72px] lg:px-10 2xl:px-14">
        <section className="pt-[20px] pb-[60px] sm:pt-[32px]">
          <div className="max-w-[960px]">
            <p className="section-eyebrow text-[#FACC15]">{data.eyebrow.toUpperCase()}</p>
            <h1 className="m-0 mt-4 text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-white [text-shadow:0_14px_36px_rgba(0,0,0,0.45)]">
              About Us
            </h1>
            <p className="m-0 mt-5 max-w-[620px] text-[1rem] leading-7 text-white/76 sm:text-[1.08rem] sm:leading-8">
              {data.title}
            </p>
            <div className="mt-7 max-w-[620px] space-y-4 text-[0.98rem] leading-[1.7] text-white/72 sm:text-[1.05rem]">
              <p className="m-0">{data.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#FACC15] backdrop-blur">
                Architecture
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#FACC15] backdrop-blur">
                Engineering
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#FACC15] backdrop-blur">
                Supervision
              </span>
            </div>
          </div>
        </section>

        <section className="py-[60px] sm:py-[72px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-14">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-14 bg-[#FACC15]" />
                <p className="section-eyebrow text-[#FACC15]">OUR STORY</p>
              </div>

              <h2 className="m-0 mt-5 max-w-[16ch] text-[clamp(2.2rem,5vw,4.1rem)] font-black leading-[1.02] tracking-[-0.05em] text-white">
                Built on precision and guided by purpose
              </h2>

              <div className="mt-6 max-w-[500px] space-y-4 text-[0.98rem] leading-[1.75] text-white/72 sm:text-[1.04rem]">
                <p className="m-0">
                  <strong className="font-semibold text-white">A multidisciplinary firm based in Ethiopia,</strong> dedicated to providing <strong className="font-semibold text-white">innovative, sustainable, and integrated solutions</strong> in architecture and engineering.
                </p>
                <p className="m-0">
                  We combine <strong className="font-semibold text-white">visionary design</strong> with <strong className="font-semibold text-white">technical excellence</strong> to deliver impactful and resilient projects across Ethiopia and beyond.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {statItems.map((item, index) => (
                  <motion.article
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.05 }}
                    whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                    className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-5 text-center shadow-[0_16px_34px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 hover:border-[#FACC15]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
                  >
                    <p className="m-0 text-[clamp(2rem,6vw,3.4rem)] font-black leading-none tracking-[-0.05em] text-white">
                      {item.value}
                    </p>
                    <p className="m-0 mt-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/72">
                      {item.label}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {data.image ? (
                <motion.figure
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  className="group relative m-0 overflow-hidden rounded-[20px] border border-[#FACC15]/20 shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
                >
                  <img
                    src={data.image}
                    alt={data.imageAlt || "About us image"}
                    className="block h-auto w-full max-w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.22)_100%)]" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(250,204,21,0.18),inset_0_0_0_10px_rgba(250,204,21,0.02)]" aria-hidden="true" />
                </motion.figure>
              ) : null}
            </div>
          </div>
        </section>

        <section className="py-[60px] sm:py-[72px]">
          <div className="max-w-[860px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#FACC15]" />
              <p className="section-eyebrow text-[#FACC15]">OUR APPROACH</p>
            </div>
          </div>

          {data.approachTitle || data.approachDescription ? (
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="mt-6 rounded-[16px] border border-white/12 bg-white/[0.06] p-5 shadow-[0_18px_38px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/10">
                  <IconBadge type="approach" />
                </div>

                <div>
                  {data.approachTitle ? (
                    <h3 className="m-0 text-[1.15rem] font-extrabold leading-tight text-white sm:text-[1.35rem]">
                      {data.approachTitle}
                    </h3>
                  ) : null}

                  {data.approachDescription ? (
                    <p className="m-0 mt-3 max-w-[62ch] text-[0.98rem] leading-[1.75] text-white/72 sm:text-[1.04rem]">
                      {data.approachDescription}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ) : null}
        </section>

        <section className="py-[60px] sm:py-[72px]">
          <div className="max-w-[840px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#FACC15]" />
              <p className="section-eyebrow text-[#FACC15]">MISSION &amp; VISION</p>
            </div>

            <h2 className="m-0 mt-5 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.04] tracking-[-0.05em] text-white">
              What drives our work
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {[
              { title: "Mission", icon: "mission", text: data.description },
              { title: "Vision", icon: "vision", text: data.approachDescription },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.06 }}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                className="group rounded-[20px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_36px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-300 hover:border-[#FACC15]/25 hover:shadow-[0_22px_42px_rgba(0,0,0,0.3)] sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/10">
                    <IconBadge type={item.icon} />
                  </div>
                  <div>
                    <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#FACC15]">
                      {item.title}
                    </p>
                    <h3 className="m-0 mt-1 text-[1.25rem] font-black leading-tight tracking-[-0.03em] text-white sm:text-[1.55rem]">
                      {item.title === "Mission" ? "Delivering enduring value." : "Setting the benchmark."}
                    </h3>
                  </div>
                </div>

                <p className="m-0 mt-5 max-w-[62ch] text-[0.98rem] leading-[1.75] text-white/72 sm:text-[1.04rem]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-[60px] sm:py-[72px]">
          <div className="max-w-[860px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#FACC15]" />
              <p className="section-eyebrow text-[#FACC15]">CORE VALUES</p>
            </div>

            <h2 className="m-0 mt-5 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.04] tracking-[-0.05em] text-white">
              {valuesData?.title || "Why Choose Us"}
            </h2>

            <p className="m-0 mt-4 max-w-[820px] text-[0.98rem] leading-[1.75] text-white/72 sm:text-[1.04rem]">
              {valuesData?.subtitle || "The principles behind every project we design, coordinate, and deliver."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {valueItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                className="group rounded-[18px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_16px_32px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:border-[#FACC15]/25 hover:shadow-[0_22px_40px_rgba(0,0,0,0.28)]"
              >
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-[#FACC15]/20 bg-[#FACC15]/10 transition duration-300 group-hover:scale-105">
                  <IconBadge type={item.icon} />
                </div>

                <h3 className="m-0 mt-5 text-[1.05rem] font-extrabold leading-tight tracking-[-0.02em] text-white">
                  {item.title}
                </h3>

                <p className="m-0 mt-3 text-[0.95rem] leading-[1.75] text-white/70">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-[60px] sm:py-[72px]">
          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#0B1220_0%,#111827_55%,#0A1020_100%)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-7 lg:p-10">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-14 bg-[#FACC15]" />
                <p className="section-eyebrow text-[#FACC15]">AT A GLANCE</p>
              </div>

              <h2 className="m-0 mt-5 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.04] tracking-[-0.05em] text-white">
                Proven impact across projects, people, and places.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {statItems.map((item) => (
                <motion.article
                  key={item.label}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                  className="rounded-[18px] border border-white/10 bg-white/[0.06] px-5 py-6 text-center shadow-[0_16px_34px_rgba(0,0,0,0.22)]"
                >
                  <p className="m-0 text-[clamp(2.2rem,7vw,3.6rem)] font-black leading-none tracking-[-0.05em] text-white">
                    {item.value}
                  </p>
                  <p className="m-0 mt-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/70">
                    {item.label}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[60px] sm:py-[72px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="rounded-[24px] border border-white/10 bg-white/[0.06] px-5 py-8 text-center shadow-[0_20px_44px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8 lg:px-12"
          >
            <p className="section-eyebrow text-[#FACC15]">LET&apos;S TALK</p>
            <h2 className="m-0 mt-4 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.04] tracking-[-0.05em] text-white">
              Let&apos;s build something great together
            </h2>
            <p className="mx-auto m-0 mt-5 max-w-[720px] text-[0.98rem] leading-[1.75] text-white/72 sm:text-[1.04rem]">
              Bring us your next architecture or engineering challenge, and we&apos;ll shape it into a clear, practical, and premium solution.
            </p>

            <Button as={motion.a} href="#get-in-touch" className="mt-8 min-w-[210px]">
              Contact Us
            </Button>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
}

export default AboutSection;
