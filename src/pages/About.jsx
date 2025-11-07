import { FaHeart, FaLightbulb, FaShieldAlt, FaHandshake, FaChartLine } from "react-icons/fa";

const coreValues = [
  {
    icon: FaHeart,
    title: "Tôn trọng và yêu thương mỗi trẻ em",
    description: "Mỗi trẻ đều là một cá thể độc đáo, xứng đáng được tôn trọng và yêu thương vô điều kiện.",
    accent: "bg-[#F25243]/15 text-[#F25243]",
  },
  {
    icon: FaLightbulb,
    title: "Sáng tạo và tò mò",
    description: "Khuyến khích trẻ khám phá, đặt câu hỏi và phát triển tư duy sáng tạo trong mọi hoạt động.",
    accent: "bg-[#FFD739]/20 text-[#FFD739]",
  },
  {
    icon: FaShieldAlt,
    title: "Môi trường an toàn và quan tâm",
    description: "Tạo dựng không gian học tập an toàn, ấm áp nơi trẻ cảm thấy được bảo vệ và quan tâm.",
    accent: "bg-[#91C73A]/20 text-[#91C73A]",
  },
  {
    icon: FaHandshake,
    title: "Đối tác với gia đình",
    description: "Xây dựng mối quan hệ hợp tác chặt chẽ với phụ huynh để đồng hành cùng sự phát triển của trẻ.",
    accent: "bg-[#1FABD5]/20 text-[#1FABD5]",
  },
  {
    icon: FaChartLine,
    title: "Không ngừng cải thiện",
    description: "Luôn học hỏi, đổi mới phương pháp giáo dục để mang đến trải nghiệm tốt nhất cho trẻ.",
    accent: "bg-[#9B59B6]/20 text-[#9B59B6]",
  },
];

const AboutPage = () => (
  <div className="bg-slate-50 pb-24">
    <section className="bg-gradient-to-r from-brand-blue/15 via-brand-green/10 to-brand-yellow/20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Về Kiddie Preschool</h1>
        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
          Kiddie Preschool là môi trường thân thiện, sáng tạo và an toàn dành cho trẻ em từ 2 đến 6 tuổi. Chúng tôi tập
          trung vào sự phát triển toàn diện, giúp trẻ khám phá tiềm năng của mình và xây dựng nền tảng vững chắc cho tương
          lai.
        </p>
      </div>
    </section>

    <div className="mx-auto mt-12 max-w-6xl space-y-12 px-6">
      <section className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">Sứ mệnh của chúng tôi</h2>
        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
          Nuôi dưỡng, truyền cảm hứng và trao quyền cho mỗi trẻ em để yêu thích việc học, tự tin và phát triển các kỹ
          năng sống cần thiết.
        </p>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Giá trị cốt lõi</h2>
          <p className="mt-2 text-base text-slate-600">
            Những nguyên tắc và cam kết định hướng mọi hoạt động của chúng tôi
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => {
            const IconComponent = value.icon;
            return (
              <article key={value.title} className="space-y-4 rounded-2xl bg-white p-6 shadow-md">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${value.accent}`}>
                  <IconComponent className="text-2xl" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  </div>
);

export default AboutPage;

