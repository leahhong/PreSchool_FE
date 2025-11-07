import { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

const navigationLinks = [
  { label: "Trang chủ", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Về chúng tôi", path: "/about" },
  { label: "Liên hệ", path: "/contact" },
];

const Header = () => {
  const links = useMemo(() => navigationLinks, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 font-semibold text-slate-900" aria-label="Trang chủ Kiddie Preschool">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-lg text-white shadow-md shadow-brand-green/30">
            K
          </span>
          <span className="text-base md:text-lg">Kiddie Preschool</span>
        </Link>
        <nav className="flex flex-1 flex-wrap items-center justify-center gap-3 text-sm font-medium md:justify-center" aria-label="Điều hướng chính">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition-colors ${
                  isActive ? "bg-brand-blue/10 text-brand-blue" : "text-slate-500 hover:text-brand-blue"
                }`
              }
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/login"
            className="rounded-full border border-brand-blue/40 px-5 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:text-brand-blue/75"
          >
            Đăng nhập
          </Link>
          <Link
            to="/application"
            className="rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-px"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

