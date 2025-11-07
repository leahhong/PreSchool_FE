import { useEffect, useMemo, useState } from "react";
import hero1 from "../assets/images/homepage1.png";
import hero2 from "../assets/images/homepage2.png";
import hero3 from "../assets/images/homepage3.png";

const heroImages = [hero1, hero2, hero3];
const sliderInterval = 5000;

const featureCards = [
  {
    icon: "❤️",
    title: "Giáo viên tận tâm",
    description:
      "Giáo viên luôn thấu hiểu và đồng hành, giúp trẻ khám phá bản thân qua những hoạt động gần gũi và ý nghĩa.",
    accent: "bg-[#F25243]/15 text-[#F25243]",
  },
  {
    icon: "🍼",
    title: "Bữa ăn dinh dưỡng",
    description:
      "Thực đơn được thiết kế bởi chuyên gia dinh dưỡng, đảm bảo năng lượng cho mỗi ngày học tập và vui chơi.",
    accent: "bg-[#FFD739]/20 text-[#FFD739]",
  },
  {
    icon: "🧸",
    title: "Chương trình phong phú",
    description:
      "Kết hợp nhuần nhuyễn giữa học tập, sáng tạo, kỹ năng sống và vận động thể chất để trẻ phát triển toàn diện.",
    accent: "bg-[#91C73A]/20 text-[#91C73A]",
  },
  {
    icon: "🌀",
    title: "Trò chơi thú vị",
    description:
      "Hoạt động vui chơi đa dạng giúp trẻ rèn luyện sự tự tin, khả năng hợp tác và giao tiếp hằng ngày.",
    accent: "bg-[#1FABD5]/20 text-[#1FABD5]",
  },
];

const HomePage = () => {
  const slides = useMemo(() => heroImages, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, sliderInterval);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="relative h-[520px] w-full overflow-hidden md:h-[580px]">
        {slides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Kiddie Preschool"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2.5 w-7 rounded-full transition ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Chuyển tới ảnh ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Vì sao phụ huynh tin tưởng chúng tôi?</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feature) => (
            <article key={feature.title} className="space-y-4">
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl ${feature.accent}`}>
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 text-left md:grid-cols-[3fr_1fr] md:items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-slate-900">Làm thế nào để đăng ký cho bé?</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Quy trình ghi danh của Kiddie Preschool luôn thân thiện và rõ ràng. Đội ngũ tư vấn sẽ đồng hành cùng gia đình
            ở mỗi bước để bé sẵn sàng cho ngày đầu đến lớp.
          </p>
        </div>
        <div className="flex justify-end">
          <button className="w-full rounded-full bg-[#FFD739] px-16 py-3 text-md font-semibold text-slate-900 transition hover:bg-[#f7c816] md:w-auto">
            Đăng ký ngay
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

