import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

const ForgotPasswordPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi email reset password ở đây
    console.log("Gửi email reset password");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-gradient-to-r from-brand-blue/15 via-brand-green/10 to-brand-yellow/20 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Quên mật khẩu</h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Nhập email của bạn để nhận liên kết đặt lại mật khẩu
          </p>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-md px-6">
        <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email đăng ký
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

            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="text-xs leading-relaxed text-blue-800">
                Chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư đến và thư mục
                spam.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-px"
            >
              Gửi yêu cầu
            </button>
          </form>

          <div className="mt-6 space-y-3 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue transition-colors hover:text-brand-green"
            >
              <FaArrowLeft /> Quay lại đăng nhập
            </Link>
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

export default ForgotPasswordPage;

