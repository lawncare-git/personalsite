import Link from "next/link";

export default function PillButton({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  download = false,
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-black transition hover:bg-white/90"
      : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:border-white/40 hover:bg-white/10";

  if (href && !download) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
