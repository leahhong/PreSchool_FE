import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";

const contactDetails = [
  {
    label: "Địa chỉ",
    value: "7 Đ. D1, Long Thạnh Mỹ, Thủ Đức, TP. Hồ Chí Minh 700000",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Điện thoại",
    value: "000-111-222-333",
    icon: FaPhone,
  },
  {
    label: "Email",
    value: "example@example.com",
    icon: FaEnvelope,
  },
  {
    label: "Giờ làm việc",
    value: "Thứ 2 - Thứ 6: 9:00 - 17:00",
    icon: FaClock,
  },
];

const socialChannels = [
  { name: "Twitter", icon: FaTwitter },
  { name: "Youtube", icon: FaYoutube },
  { name: "Instagram", icon: FaInstagram },
  { name: "Snapchat", icon: FaSnapchat },
];

const ContactPage = () => (
  <div className="bg-slate-50 pb-24">
    <section className="bg-gradient-to-r from-brand-blue/15 via-brand-green/10 to-brand-yellow/20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Liên hệ Kiddie Preschool</h1>
        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ gia đình bạn. Gửi tin nhắn trực tiếp hoặc sử dụng các thông tin
          dưới đây để kết nối với Kiddie Preschool.
        </p>
      </div>
    </section>

    <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr]">
      <section className="space-y-8 rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">Thông tin liên hệ</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Đội ngũ tư vấn của chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc. Bạn cũng có thể ghé thăm trường để trải
          nghiệm không gian học tập và gặp gỡ giáo viên.
        </p>
        <ul className="space-y-5">
          {contactDetails.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.label} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <IconComponent className="mt-0.5 text-xl text-brand-blue" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.value}</p>
                </div>
              </li>
            );
          })}
        </ul>
        
      </section>

      <section className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">Gửi lời nhắn cho chúng tôi</h2>
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Họ và tên
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@domain.com"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">
              Số điện thoại
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0901 234 567"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Lời nhắn
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Bạn muốn tìm hiểu thêm điều gì về Kiddie Preschool?"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-px"
          >
            Gửi yêu cầu
          </button>
        </form>
        <p className="text-xs text-slate-500">
          *Chúng tôi cam kết bảo mật thông tin của bạn. Vui lòng kiểm tra hộp thư trong vòng 24 giờ làm việc.
        </p>
      </section>
    </div>
  </div>
);

export default ContactPage;
