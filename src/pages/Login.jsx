import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log("Đăng nhập");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-gradient-to-r from-brand-blue/15 via-brand-green/10 to-brand-yellow/20 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Đăng nhập</h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Chào mừng bạn quay trở lại Kiddie Preschool
          </p>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-md px-6">
        <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Mật khẩu
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                <span>Ghi nhớ đăng nhập</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-brand-blue transition-colors hover:text-brand-green"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-px"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Chưa có tài khoản?{" "}
              <Link to="/register" className="font-semibold text-brand-blue transition-colors hover:text-brand-green">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

