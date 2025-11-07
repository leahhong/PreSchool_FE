const ComingSoon = ({ title }) => (
  <div className="flex min-h-[420px] flex-col items-center justify-center bg-white/70 px-6 py-24 text-center">
    <span className="rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand-blue">
      In progress
    </span>
    <h1 className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl">
      {title || "Page coming soon"}
    </h1>
    <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
      We are shaping new content to support families and educators. Check back shortly for updates or enjoy our
      homepage in the meantime.
    </p>
  </div>
);

export default ComingSoon;
