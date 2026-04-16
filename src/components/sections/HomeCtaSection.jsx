import { motion } from "framer-motion";
import Button from "../ui/Button";

function HomeCtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="animate-reveal -mx-3 scroll-mt-28 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(213,178,35,0.16),transparent_30%),linear-gradient(180deg,#121A2F_0%,#0B1221_55%,#060B15_100%)] px-3 py-20 sm:-mx-6 sm:px-6 sm:py-24 lg:-mx-10 lg:px-10 lg:py-28 2xl:-mx-14 2xl:px-14 [animation-delay:460ms]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-center">
        <div className="w-full text-center">
          <p className="m-0 mb-5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-[#F4D97D]">
            Start your next project
          </p>

          <h2 className="mx-auto m-0 mb-10 max-w-[16ch] font-['Poppins','Inter',sans-serif] text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:max-w-[14ch] sm:text-[3rem] lg:text-[3.6rem]">
            Ready to bring your vision to life?
          </h2>

          <p className="mx-auto m-0 mt-8 max-w-[52ch] text-[1rem] leading-8 text-[#8FA3C8] sm:text-[1.08rem]">
            Partner with us for world-class architectural and engineering solutions.
          </p>

          <Button
            as={motion.a}
            href="#get-in-touch"
            className="mt-10 min-w-[210px]"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export default HomeCtaSection;
