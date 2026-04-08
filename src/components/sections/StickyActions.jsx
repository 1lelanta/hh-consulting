function StickyActions({ data }) {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-4 left-1/2 z-40 grid w-[calc(100%-1.5rem)] max-w-[366px] -translate-x-1/2 grid-cols-3 rounded-full bg-brand-navy950/95 p-1.5 shadow-[0_16px_34px_rgba(6,19,36,0.35)] backdrop-blur sm:bottom-5 sm:max-w-[520px] lg:left-auto lg:right-8 lg:w-[420px] lg:translate-x-0 2xl:hidden"
    >
      {data.map((action) => {
        const active = action.variant === "active";

        return (
          <a
            key={action.label}
            href={action.href}
            className={[
              "rounded-full px-2 py-2.5 text-center text-sm font-semibold sm:text-[0.95rem]",
              active
                ? "bg-gradient-to-r from-brand-gold500 to-brand-gold400 font-extrabold text-brand-navy950"
                : "text-white",
              action.variant === "soft" ? "bg-white/10" : "",
            ].join(" ")}
          >
            {action.label}
          </a>
        );
      })}
    </nav>
  );
}

export default StickyActions;
