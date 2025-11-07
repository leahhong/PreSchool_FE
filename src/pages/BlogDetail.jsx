import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";

// Dữ liệu chi tiết các bài blog
const blogDetails = {
  1: {
    id: 1,
    title: "5 hoạt động vui chơi giúp trẻ phát triển kỹ năng xã hội",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop",
    author: "Cô Lan Anh",
    date: "15/11/2024",
    category: "Hoạt động",
    tag: "Kỹ năng xã hội",
    content: `
      <p class="mb-4">Kỹ năng xã hội là nền tảng quan trọng cho sự phát triển toàn diện của trẻ. Thông qua các hoạt động vui chơi, trẻ không chỉ học được cách giao tiếp mà còn phát triển khả năng hợp tác, chia sẻ và xây dựng mối quan hệ tích cực với bạn bè.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">1. Trò chơi đóng vai</h3>
      <p class="mb-4">Đóng vai giúp trẻ hiểu được cảm xúc và quan điểm của người khác. Khi trẻ đóng vai bác sĩ, giáo viên hay người bán hàng, chúng học cách đặt mình vào vị trí của người khác và phát triển khả năng đồng cảm.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">2. Hoạt động nhóm</h3>
      <p class="mb-4">Các hoạt động nhóm như xây dựng lâu đài cát, vẽ tranh tập thể hay chơi thể thao giúp trẻ học cách làm việc cùng nhau, chia sẻ ý tưởng và giải quyết xung đột một cách hòa bình.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">3. Trò chơi luân phiên</h3>
      <p class="mb-4">Chơi luân phiên dạy trẻ về sự kiên nhẫn và tôn trọng người khác. Trẻ học được rằng mọi người đều có cơ hội tham gia và cần phải chờ đến lượt của mình.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">4. Kể chuyện nhóm</h3>
      <p class="mb-4">Hoạt động kể chuyện nhóm khuyến khích trẻ lắng nghe, đóng góp ý tưởng và xây dựng câu chuyện cùng nhau. Điều này phát triển kỹ năng giao tiếp và hợp tác.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">5. Trò chơi giải quyết vấn đề</h3>
      <p class="mb-4">Các trò chơi yêu cầu trẻ cùng nhau giải quyết vấn đề, như tìm đường ra khỏi mê cung hay xây dựng cầu, giúp trẻ phát triển tư duy phản biện và kỹ năng làm việc nhóm.</p>
      
      <p class="mb-4 mt-8">Tại Kiddie Preschool, chúng tôi tạo ra môi trường an toàn và khuyến khích để trẻ tham gia các hoạt động này một cách tự nhiên. Giáo viên luôn đồng hành và hướng dẫn trẻ phát triển các kỹ năng xã hội một cách tích cực.</p>
    `,
  },
  2: {
    id: 2,
    title: "Dinh dưỡng cho trẻ mầm non: Những điều phụ huynh cần biết",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
    author: "Cô Minh Hương",
    date: "12/11/2024",
    category: "Dinh dưỡng",
    tag: "Sức khỏe",
    content: `
      <p class="mb-4">Dinh dưỡng đóng vai trò quan trọng trong sự phát triển thể chất và trí tuệ của trẻ mầm non. Một chế độ ăn uống cân bằng không chỉ cung cấp năng lượng mà còn hỗ trợ sự phát triển não bộ và hệ miễn dịch.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Các nhóm chất dinh dưỡng cần thiết</h3>
      <p class="mb-4">Trẻ mầm non cần đầy đủ 4 nhóm chất dinh dưỡng chính: carbohydrate, protein, chất béo và vitamin/khoáng chất. Mỗi nhóm đều có vai trò riêng trong sự phát triển của trẻ.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Thực đơn mẫu cho trẻ</h3>
      <p class="mb-4">Một bữa ăn lý tưởng cho trẻ mầm non nên bao gồm: cơm hoặc bánh mì (carbohydrate), thịt/cá/trứng (protein), rau củ quả (vitamin), và một ít dầu mỡ (chất béo).</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Những lưu ý quan trọng</h3>
      <p class="mb-4">Phụ huynh nên tránh cho trẻ ăn quá nhiều đồ ngọt, thức ăn nhanh và đồ uống có ga. Thay vào đó, hãy khuyến khích trẻ uống nhiều nước và ăn nhiều trái cây tươi.</p>
    `,
  },
  3: {
    id: 3,
    title: "Phương pháp Montessori tại Kiddie Preschool",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    author: "Thầy Văn Đức",
    date: "10/11/2024",
    category: "Giáo dục",
    tag: "Phương pháp",
    content: `
      <p class="mb-4">Phương pháp Montessori là một phương pháp giáo dục tập trung vào việc phát triển tính độc lập, tự chủ và khả năng học tập tự nhiên của trẻ. Tại Kiddie Preschool, chúng tôi áp dụng các nguyên tắc cốt lõi của phương pháp này.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Môi trường học tập được chuẩn bị</h3>
      <p class="mb-4">Lớp học được thiết kế với các giáo cụ phù hợp, dễ tiếp cận, khuyến khích trẻ tự do khám phá và học tập theo nhịp độ của riêng mình.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Học tập thực hành</h3>
      <p class="mb-4">Trẻ học thông qua việc thực hành và trải nghiệm trực tiếp với các giáo cụ Montessori, phát triển các kỹ năng vận động tinh và tư duy logic.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Tôn trọng nhịp độ phát triển</h3>
      <p class="mb-4">Mỗi trẻ có nhịp độ phát triển riêng. Giáo viên quan sát và hỗ trợ trẻ phát triển theo đúng khả năng và sở thích của từng cá nhân.</p>
    `,
  },
  4: {
    id: 4,
    title: "Chuẩn bị tâm lý cho trẻ lần đầu đến trường",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
    author: "Cô Thanh Mai",
    date: "8/11/2024",
    category: "Tâm lý",
    tag: "Chuẩn bị",
    content: `
      <p class="mb-4">Lần đầu đến trường là một bước ngoặt lớn trong cuộc đời của trẻ. Việc chuẩn bị tâm lý tốt sẽ giúp trẻ cảm thấy tự tin và hào hứng với môi trường mới.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Trước khi đến trường</h3>
      <p class="mb-4">Hãy nói chuyện với trẻ về trường học một cách tích cực, kể những câu chuyện vui về việc đi học, và cho trẻ tham quan trường trước khi chính thức nhập học.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Ngày đầu tiên</h3>
      <p class="mb-4">Đồng hành cùng trẻ trong ngày đầu tiên, nhưng hãy để trẻ tự lập dần. Tạo thói quen chào tạm biệt rõ ràng và luôn giữ lời hứa đón trẻ đúng giờ.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Sau khi đến trường</h3>
      <p class="mb-4">Lắng nghe và chia sẻ với trẻ về những trải nghiệm ở trường. Khuyến khích trẻ kể về những điều vui và giải đáp những lo lắng của trẻ một cách nhẹ nhàng.</p>
    `,
  },
  5: {
    id: 5,
    title: "Nghệ thuật và sáng tạo trong giáo dục mầm non",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=600&fit=crop",
    author: "Cô Hồng Nhung",
    date: "5/11/2024",
    category: "Nghệ thuật",
    tag: "Sáng tạo",
    content: `
      <p class="mb-4">Nghệ thuật không chỉ là một môn học mà còn là công cụ mạnh mẽ để phát triển trí tưởng tượng, khả năng biểu đạt và tư duy sáng tạo của trẻ.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Vẽ và tô màu</h3>
      <p class="mb-4">Hoạt động vẽ giúp trẻ phát triển kỹ năng vận động tinh, khả năng tập trung và cách thể hiện cảm xúc thông qua màu sắc và hình ảnh.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Âm nhạc và vận động</h3>
      <p class="mb-4">Âm nhạc kích thích não bộ và giúp trẻ phát triển nhịp điệu, khả năng phối hợp và cảm thụ nghệ thuật.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Thủ công và sáng tạo</h3>
      <p class="mb-4">Các hoạt động thủ công như cắt dán, nặn đất sét giúp trẻ phát triển sự khéo léo và khả năng tạo ra những tác phẩm độc đáo của riêng mình.</p>
    `,
  },
  6: {
    id: 6,
    title: "Xây dựng thói quen đọc sách cho trẻ từ nhỏ",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop",
    author: "Cô Thu Hà",
    date: "3/11/2024",
    category: "Đọc sách",
    tag: "Phát triển",
    content: `
      <p class="mb-4">Đọc sách từ nhỏ không chỉ mở rộng vốn từ vựng mà còn phát triển trí tưởng tượng, khả năng tập trung và tình yêu học tập suốt đời.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Bắt đầu sớm</h3>
      <p class="mb-4">Ngay từ khi trẻ còn nhỏ, hãy đọc sách cho trẻ nghe mỗi ngày. Chọn những cuốn sách có hình ảnh đẹp, màu sắc rực rỡ và câu chuyện phù hợp với lứa tuổi.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Tạo không gian đọc</h3>
      <p class="mb-4">Tạo một góc đọc sách ấm cúng trong nhà với kệ sách thấp để trẻ dễ tiếp cận. Khuyến khích trẻ tự chọn sách và khám phá.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Đọc cùng nhau</h3>
      <p class="mb-4">Đọc sách cùng trẻ không chỉ tạo mối liên kết mà còn giúp trẻ phát triển kỹ năng ngôn ngữ. Hãy đặt câu hỏi và thảo luận về câu chuyện với trẻ.</p>
      
      <h3 class="text-2xl font-semibold text-slate-900 mb-3 mt-8">Làm gương</h3>
      <p class="mb-4">Trẻ học bằng cách quan sát. Khi phụ huynh đọc sách, trẻ sẽ thấy đọc sách là một hoạt động thú vị và muốn bắt chước.</p>
    `,
  },
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogDetails[parseInt(id)];

  if (!post) {
    return (
      <div className=" py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-slate-900">Bài viết không tồn tại</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green"
          >
            <FaArrowLeft /> Quay lại Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 pb-24">
      <article className="mx-auto  px-20">
        <Link
          to="/blog"
          className="mb-8 mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
        >
          <FaArrowLeft /> Quay lại Blog
        </Link>

        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-brand-blue/90 px-4 py-1.5 text-xs font-semibold text-white">
              {post.category}
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-semibold text-slate-900 md:text-4xl">{post.title}</h1>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FaUser />
              {post.author}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
              <FaTag className="text-xs" />
              {post.tag}
            </span>
          </div>

          <div className="mb-8 overflow-hidden rounded-2xl">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div
            className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 prose-headings:text-slate-900 prose-p:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Chia sẻ bài viết</h3>
          <p className="mb-4 text-sm text-slate-600">
            Nếu bạn thấy bài viết này hữu ích, hãy chia sẻ với các phụ huynh khác!
          </p>
          <div className="flex gap-3">
            <button className="rounded-full bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#166FE5]">
              Facebook
            </button>
            <button className="rounded-full bg-[#1DA1F2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1A91DA]">
              Twitter
            </button>
            <button className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-300">
              Copy link
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;

