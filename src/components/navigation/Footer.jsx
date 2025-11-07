const Footer = () => (
  <footer className="bg-slate-800 text-slate-200">
    <div className="mx-auto grid max-w-6xl gap-12 px-8 py-16 md:grid-cols-4">
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Về chúng tôi</h3>
        <p className="text-sm leading-relaxed text-slate-300">
          Tại Kiddie Preschool, chúng tôi mang đến môi trường học tập an toàn, sáng tạo và tràn đầy yêu thương để trẻ
          nhỏ khám phá, học hỏi và phát triển toàn diện. Đội ngũ giáo viên tận tâm nuôi dưỡng sự tò mò, giúp trẻ tự tin
          và hình thành kỹ năng sống thông qua các hoạt động học tập qua chơi.
        </p>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Liên kết nhanh</h3>
        <ul className="space-y-2 text-sm">
          <li>Mầm non của chúng tôi</li>
          <li>Tin tức mới</li>
          <li>Sự kiện sắp tới</li>
          <li>Liên hệ</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Kết nối</h3>
        <ul className="space-y-2 text-sm">
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Snapchat</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Thông tin liên hệ</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>
            <span className="font-semibold text-white">Địa chỉ:</span> 7 Đ. D1, Long Thạnh Mỹ, Thủ Đức, TP. Hồ Chí
            Minh 700000
          </li>
          <li>
            <span className="font-semibold text-white">Điện thoại:</span> 000-111-222-333
          </li>
          <li>
            <span className="font-semibold text-white">Email:</span> example@example.com
          </li>
          <li>
            <span className="font-semibold text-white">Giờ làm việc:</span> Thứ 2 - Thứ 6: 9:00 - 17:00
          </li>
        </ul>
      </section>
    </div>
    <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} Kiddie Preschool. Bản quyền thuộc về chúng tôi.
    </div>
  </footer>
);

export default Footer;

