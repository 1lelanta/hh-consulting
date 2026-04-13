import { motion } from "framer-motion";
import CertificateCard from "../CertificateCard";

export const certificates = [
  {
    title: "ISO Certification",
    organization: "International Organization for Standardization",
    description: "Certified for quality management systems in engineering services.",
    image: "/images/certificates/certificate1.jpg",
    alt: "ISO certification awarded to HH Consulting Architects and Engineers",
  },
  {
    title: "Airline Project Recognition",
    organization: "Ethiopian Airlines",
    description: "Recognition for successful project contribution and professional delivery.",
    image: "/images/certificates/certificate2.jpg",
    alt: "Recognition certificate from Ethiopian Airlines for HH Consulting",
  },
  {
    title: "Certificate of Recognition",
    organization: "Belsty Trading",
    description: "Awarded for successful completion of a proposal in airport building works.",
    image: "/images/certificates/certificate3.jpg",
    alt: "Certificate of recognition from Belsty Trading",
  },
  {
    title: "Membership Certificate",
    organization: "Ethiopian Consulting Engineers & Architects Association",
    description: "Professional membership recognition.",
    image: "/images/certificates/certificate4.jpg",
    alt: "Membership certificate from Ethiopian Consulting Engineers and Architects Association",
  },
  {
    title: "Professional Accreditation",
    organization: "Ethiopian Sector Authority",
    description: "Professional accreditation supporting the firm’s engineering consultancy services.",
    image: "/images/certificates/certificate5.jpg",
    alt: "Professional accreditation certificate for HH Consulting",
  },
  {
    title: "Engineering Authorization",
    organization: "Public Works and Building Bureau",
    description: "Authorization certificate for delivering engineering and architectural services.",
    image: "/images/certificates/certificate6.jpg",
    alt: "Engineering authorization certificate for HH Consulting",
  },
];

function CertificationsSection({ className = "" }) {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-transparent px-3 py-14 [animation-delay:320ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">Certifications</p>
          </div>

          <h2 className="m-0 mt-4 text-[1.75rem] font-black uppercase leading-[1.08] tracking-[0.08em] text-brand-navy900 sm:mt-5 sm:text-[2.35rem] lg:text-[3.05rem]">
            Certifications &amp; Licenses
          </h2>

          <p className="m-0 mt-4 max-w-[52rem] text-[1rem] leading-8 text-brand-gray500 sm:text-[1.05rem]">
            Our credentials and professional recognitions reflect the standards, compliance, and confidence behind every project we deliver.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.title} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default CertificationsSection;