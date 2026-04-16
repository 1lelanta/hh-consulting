import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const certificates = [
  {
    title: "Airline Project Recognition",
    organization: "Ethiopian Airlines",
    description: "Recognition for successful project contribution and delivery.",
    image: "/images/certificates/certificate1.jpg",
    alt: "ISO certification",
  },
  {
    title: "Airline Project Recognition",
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
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const certificatesScrollerRef = useRef(null);
  const mobileCertificates = certificates.slice(0, 5);

  const handleCertificatesScroll = () => {
    if (!certificatesScrollerRef.current) return;

    const cards = Array.from(certificatesScrollerRef.current.children);
    if (!cards.length) return;

    const scrollLeft = certificatesScrollerRef.current.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMobileIndex(closestIndex);
  };

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
        <div className="mt-10 md:hidden">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/55">
              Swipe credentials
            </p>
            <div className="flex items-center gap-2">
              {mobileCertificates.map((cert, index) => {
                const isActive = index === activeMobileIndex;

                return (
                  <span
                    key={`${cert.title}-${index}-indicator`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-6 bg-[#FACC15]" : "w-1.5 bg-white/30"
                    }`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>
          </div>

          <div
            ref={certificatesScrollerRef}
            onScroll={handleCertificatesScroll}
            className="no-scrollbar flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          >
            {mobileCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
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
        </div>

        {/* DESKTOP (GRID) */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
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
