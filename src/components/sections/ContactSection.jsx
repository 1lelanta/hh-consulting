import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function ContactSection({ data, className = "" }) {
  const icons = {
    phone: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M5 4h4l2 5-2.5 1.8a16 16 0 0 0 4.2 4.2L14.5 13l5 2v4a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
    address: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  };

  const [values, setValues] = useState(() => data.form.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
  const [touched, setTouched] = useState({});
  const [submitState, setSubmitState] = useState("idle");

  const errors = useMemo(() => {
    const nextErrors = {};

    data.form.fields.forEach((field) => {
      const value = values[field.name]?.trim() ?? "";

      if (!value) {
        nextErrors[field.name] = "This field is required.";
        return;
      }

      if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = "Enter a valid email address.";
      }

      if (field.type === "tel" && !/^\+?[0-9()\-\s]{7,}$/.test(value)) {
        nextErrors[field.name] = "Enter a valid phone number.";
      }

      if (field.name === "message" && value.length < 20) {
        nextErrors[field.name] = "Please provide at least 20 characters.";
      }
    });

    return nextErrors;
  }, [data.form.fields, values]);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const allTouched = data.form.fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {});
    setTouched(allTouched);

    if (Object.keys(errors).length === 0) {
      setSubmitState("success");
      setValues(data.form.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
      setTouched({});
      return;
    }

    setSubmitState("error");
  }

  function ContactCard({ card }) {
    const isPhone = card.icon === "phone";
    const isEmail = card.icon === "email";

    function toHref(line) {
      if (isPhone) {
        return `tel:${line.replace(/[^\d+]/g, "")}`;
      }

      if (isEmail) {
        return `mailto:${line}`;
      }

      return null;
    }

    return (
      <article className="group flex h-full min-h-[154px] items-start gap-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_24px_rgba(2,7,17,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#D5B223]/45 hover:bg-white/[0.07]">
        <div className="mt-0.5 inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#D5B223] transition duration-300 [filter:drop-shadow(0_0_6px_rgba(213,178,35,0.35))] group-hover:scale-[1.03] group-hover:border-[#D5B223]/45">
          {icons[card.icon]}
        </div>
        <div className="min-w-0 space-y-2">
          <p className="m-0 text-[0.8rem] font-bold uppercase tracking-[0.13em] text-slate-200">{card.title}</p>
          <div className="space-y-1.5">
            {card.lines.map((line) => (
              toHref(line) ? (
                <a
                  key={line}
                  href={toHref(line)}
                  className="m-0 block break-words text-[0.98rem] leading-7 text-slate-300 transition hover:text-white focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
                >
                  {line}
                </a>
              ) : (
                <p key={line} className="m-0 break-words text-[0.98rem] leading-7 text-slate-300">
                  {line}
                </p>
              )
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden bg-[#0F172A] px-3 py-16 [animation-delay:430ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 56px), repeating-linear-gradient(90deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 56px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2.2rem] font-black leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.7rem] lg:text-[3.45rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 max-w-[760px] text-[1.05rem] leading-8 text-white/78 sm:text-[1.1rem]">{data.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <div className="relative">
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[220px] font-black leading-none text-transparent opacity-5 lg:text-[300px]"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,1)" }}
              aria-hidden="true"
            >
              07
            </span>

            <article id="contact-form" className="relative z-20 rounded-[24px] border border-white/15 bg-[#0B1425]/85 p-5 shadow-[0_24px_44px_rgba(0,0,0,0.22)] backdrop-blur sm:p-7">
              <span className="pointer-events-none absolute -left-2 -top-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -right-2 -top-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -bottom-2 -left-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -bottom-2 -right-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>

              <h3 className="relative z-20 m-0 text-[1.45rem] font-extrabold tracking-[-0.02em] text-white sm:text-[1.8rem]">
                {data.form.title}
              </h3>

              <p className="m-0 mt-2 text-sm leading-6 text-slate-300">Share a few project details and our team will follow up within one business day.</p>

              <form className="mt-5 space-y-4" noValidate onSubmit={handleSubmit}>
                {data.form.fields.map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <label htmlFor={field.name} className="block text-[0.88rem] font-semibold tracking-[0.02em] text-slate-200">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={5}
                        required
                        value={values[field.name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.placeholder}
                        aria-invalid={Boolean(touched[field.name] && errors[field.name])}
                        aria-describedby={`${field.name}-feedback`}
                        className={`w-full resize-none rounded-[14px] border bg-[#0A1323]/90 px-4 py-3 text-[0.98rem] text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-offset-0 ${
                          touched[field.name] && errors[field.name]
                            ? "border-rose-400/85 focus-visible:border-rose-300 focus-visible:ring-rose-400/35"
                            : touched[field.name] && values[field.name].trim()
                              ? "border-emerald-400/80 focus-visible:border-emerald-300 focus-visible:ring-emerald-400/30"
                              : "border-white/15 hover:border-white/30 focus-visible:border-[#D5B223] focus-visible:ring-[#D5B223]/35"
                        }`}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required
                        value={values[field.name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.placeholder}
                        aria-invalid={Boolean(touched[field.name] && errors[field.name])}
                        aria-describedby={`${field.name}-feedback`}
                        className={`w-full rounded-[14px] border bg-[#0A1323]/90 px-4 py-3 text-[0.98rem] text-slate-100 outline-none transition duration-200 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-offset-0 ${
                          touched[field.name] && errors[field.name]
                            ? "border-rose-400/85 focus-visible:border-rose-300 focus-visible:ring-rose-400/35"
                            : touched[field.name] && values[field.name].trim()
                              ? "border-emerald-400/80 focus-visible:border-emerald-300 focus-visible:ring-emerald-400/30"
                              : "border-white/15 hover:border-white/30 focus-visible:border-[#D5B223] focus-visible:ring-[#D5B223]/35"
                        }`}
                      />
                    )}

                    <p
                      id={`${field.name}-feedback`}
                      className={`m-0 min-h-[1.25rem] text-[0.8rem] ${
                        touched[field.name] && errors[field.name]
                          ? "text-rose-300"
                          : touched[field.name] && values[field.name].trim()
                            ? "text-emerald-300"
                            : "text-slate-400"
                      }`}
                    >
                      {touched[field.name] && errors[field.name]
                        ? errors[field.name]
                        : touched[field.name] && values[field.name].trim()
                          ? "Looks good."
                          : " "}
                    </p>
                  </div>
                ))}

                <p
                  className={`m-0 min-h-[1.3rem] text-[0.86rem] ${
                    submitState === "success" ? "text-emerald-300" : submitState === "error" ? "text-rose-300" : "text-slate-400"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {submitState === "success"
                    ? "Thank you. Your message has been prepared successfully."
                    : submitState === "error"
                      ? "Please fix the highlighted fields and try again."
                      : " "}
                </p>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-[16px] bg-[#FF5B1A] px-6 py-4 text-[0.92rem] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_16px_32px_rgba(255,91,26,0.34)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD39E]"
                >
                  {data.form.buttonLabel}
                </button>
              </form>
            </article>
          </div>

          <div className="space-y-5">
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {data.contactCards.map((card) => (
                <ContactCard key={card.title} card={card} />
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-[#D5B223]/35 bg-gradient-to-br from-[#1A3960] via-[#143257] to-[#0F2743] px-6 py-7 text-white shadow-[0_18px_38px_rgba(7,28,52,0.4)] sm:px-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#D5B223]/20 blur-2xl" aria-hidden="true" />
              <p className="relative z-10 m-0 text-[1.42rem] font-black leading-tight sm:text-[1.62rem]">{data.cta.title}</p>
              <p className="relative z-10 m-0 mt-2 text-[1.02rem] leading-7 text-white/85">{data.cta.subtitle}</p>
              <a
                href="#contact-form"
                className="relative z-10 mt-6 inline-flex items-center rounded-2xl bg-[#FF5B1A] px-8 py-3 text-[0.85rem] font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_14px_26px_rgba(255,91,26,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD39E]"
              >
                {data.cta.buttonLabel}
              </a>
            </div>

            <div className="pointer-events-none relative h-[130px] overflow-hidden">
              <span
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-['JetBrains_Mono',monospace] text-[250px] font-black leading-none text-transparent opacity-50"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}
                aria-hidden="true"
              >
                07
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default ContactSection;
