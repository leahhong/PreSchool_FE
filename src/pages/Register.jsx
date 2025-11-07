import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    console.log("Đăng ký");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-gradient-to-r from-brand-blue/15 via-brand-green/10 to-brand-yellow/20 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Đăng ký tài khoản</h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Tạo tài khoản để truy cập các dịch vụ của Kiddie Preschool
          </p>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-md px-6">
        <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                Họ và tên
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

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
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Số điện thoại
              </label>
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0901 234 567"
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
                  placeholder="Tối thiểu 8 ký tự"
                  required
                  minLength={8}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
              />
              <label htmlFor="terms" className="text-xs leading-relaxed text-slate-600">
                Tôi đồng ý với{" "}
                <Link to="/terms" className="font-medium text-brand-blue hover:underline">
                  Điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link to="/privacy" className="font-medium text-brand-blue hover:underline">
                  Chính sách bảo mật
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-px"
            >
              Đăng ký
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Đã có tài khoản?{" "}
              <Link to="/login" className="font-semibold text-brand-blue transition-colors hover:text-brand-green">
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

