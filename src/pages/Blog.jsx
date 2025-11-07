import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "5 hoạt động vui chơi giúp trẻ phát triển kỹ năng xã hội",
    excerpt:
      "Khám phá những trò chơi và hoạt động thú vị giúp trẻ học cách giao tiếp, hợp tác và xây dựng mối quan hệ với bạn bè.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    author: "Cô Lan Anh",
    date: "15/11/2024",
    category: "Hoạt động",
    tag: "Kỹ năng xã hội",
  },
  {
    id: 2,
    title: "Dinh dưỡng cho trẻ mầm non: Những điều phụ huynh cần biết",
    excerpt:
      "Thực đơn cân bằng dinh dưỡng là nền tảng cho sự phát triển toàn diện của trẻ. Tìm hiểu cách xây dựng bữa ăn lành mạnh cho bé.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    author: "Cô Minh Hương",
    date: "12/11/2024",
    category: "Dinh dưỡng",
    tag: "Sức khỏe",
  },
  {
    id: 3,
    title: "Phương pháp Montessori tại Kiddie Preschool",
    excerpt:
      "Tìm hiểu cách chúng tôi áp dụng phương pháp Montessori để khuyến khích trẻ học tập độc lập và phát triển tư duy sáng tạo.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    author: "Thầy Văn Đức",
    date: "10/11/2024",
    category: "Giáo dục",
    tag: "Phương pháp",
  },
  {
    id: 4,
    title: "Chuẩn bị tâm lý cho trẻ lần đầu đến trường",
    excerpt:
      "Những bí quyết giúp phụ huynh và trẻ vượt qua giai đoạn đầu đi học một cách nhẹ nhàng và tích cực.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    author: "Cô Thanh Mai",
    date: "8/11/2024",
    category: "Tâm lý",
    tag: "Chuẩn bị",
  },
  {
    id: 5,
    title: "Nghệ thuật và sáng tạo trong giáo dục mầm non",
    excerpt:
      "Khám phá vai trò của nghệ thuật trong việc phát triển trí tưởng tượng, khả năng biểu đạt và tư duy sáng tạo của trẻ.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=500&fit=crop",
    author: "Cô Hồng Nhung",
    date: "5/11/2024",
    category: "Nghệ thuật",
    tag: "Sáng tạo",
  },
  {
    id: 6,
    title: "Xây dựng thói quen đọc sách cho trẻ từ nhỏ",
    excerpt:
      "Những cách thức hiệu quả để nuôi dưỡng tình yêu đọc sách và phát triển ngôn ngữ cho trẻ ngay từ những năm đầu đời.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
    author: "Cô Thu Hà",
    date: "3/11/2024",
    category: "Đọc sách",
    tag: "Phát triển",
  },
];

const BlogPage = () => (
  <div className="bg-slate-50 pb-24">
    <section className="bg-gradient-to-r from-brand-blue/15 via-brand-green/10 to-brand-yellow/20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Blog Kiddie Preschool</h1>
        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
          Chia sẻ kiến thức, kinh nghiệm và những câu chuyện ý nghĩa về giáo dục mầm non và sự phát triển của trẻ
        </p>
      </div>
    </section>

    <div className="mx-auto mt-12 max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-brand-blue/90 px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-xs" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaUser className="text-xs" />
                  {post.author}
                </span>
              </div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-brand-blue transition-colors">
                {post.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  <FaTag className="text-xs" />
                  {post.tag}
                </span>
                <span className="text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-green">
                  Đọc thêm →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default BlogPage;

