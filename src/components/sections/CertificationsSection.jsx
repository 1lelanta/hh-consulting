import { motion } from "framer-motion";

export const certificates = [
  {
    title: "Airline Project Recognition",
    organization: "Ethiopian Airlines",
    description: "Recognition for successful project contribution and delivery.",
    image: "/images/certificates/certificate1.jpg",
    alt: "ISO certification",
  },
  {
    title: "Axum Airline Project Recognition",
    organization: "Ethiopian Airlines",
    description: "Recognition for successful project contribution and delivery.",
    image: "/images/certificates/certificate2.jpg",
    alt: "Ethiopian Airlines certificate",
  },
  {
    title: "Certificate of Recognition",
    organization: "Belsty Trading",
    description: "Awarded for successful completion of airport building proposal.",
    image: "/images/certificates/certificate3.jpg",
    alt: "Belsty certificate",
  },
  {
    title: "Membership Certificate",
    organization: "Ethiopian Consulting Engineers & Architects Association",
    description: "Professional membership recognition.",
    image: "/images/certificates/certificate4.jpg",
    alt: "Membership certificate",
  },
  {
    title: "Professional Accreditation",
    organization: "Ethiopian Sector Authority",
    description: "Accreditation supporting engineering consultancy services.",
    image: "/images/certificates/certificate5.jpg",
    alt: "Accreditation certificate",
  },
  {
    title: "Engineering Authorization",
    organization: "Public Works and Building Bureau",
    description: "Authorization for engineering and architectural services.",
    image: "/images/certificates/certificate6.jpg",
    alt: "Authorization certificate",
  },
];

function CertificationsSection({ className = "" }) {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mt-24 px-4 ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">

        {/* HEADER */}
        <div className="max-w-[700px]">
          <p className="text-[#FACC15] uppercase tracking-widest text-sm">
            Certifications
          </p>

          <h2 className="mt-4 text-3xl font-black text-white">
            Certifications & Licenses
          </h2>

          <p className="mt-4 text-white/70">
            Our certifications and recognitions demonstrate our commitment to
            quality, compliance, and professional excellence.
          </p>
        </div>

        {/* MOBILE (SCROLL) */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden">
          {certificates.slice(0, 5).map((cert, index) => (
            <motion.div
              key={cert.title}
              className="min-w-[85%] snap-start"
              whileTap={{ scale: 0.98 }}
            >
              <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md">

                {/* IMAGE */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-[1rem] leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-[#FACC15] text-xs mt-1">
                    {cert.organization}
                  </p>

                  <p className="text-white/70 text-sm mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP (GRID) */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md"
            >

              {/* IMAGE */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-[1.1rem] leading-snug">
                  {cert.title}
                </h3>

                <p className="text-[#FACC15] text-sm mt-1">
                  {cert.organization}
                </p>

                <p className="text-white/70 text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default CertificationsSection;