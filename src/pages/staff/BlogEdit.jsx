import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark } from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
const blogs = [
  {
    id: 1,
    title: "5 hoạt động vui chơi giúp trẻ phát triển kỹ năng xã hội",
    excerpt: "Khám phá những trò chơi và hoạt động thú vị giúp trẻ học cách giao tiếp, hợp tác và xây dựng mối quan hệ với bạn bè.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    author: "Cô Lan Anh",
    category: "Hoạt động",
    tag: "Kỹ năng xã hội",
    publishedDate: "15/11/2024",
    status: "Published",
    views: 245,
    content: "Nội dung bài viết chi tiết...",
  },
  {
    id: 2,
    title: "Dinh dưỡng cho trẻ mầm non: Những điều phụ huynh cần biết",
    excerpt: "Thực đơn cân bằng dinh dưỡng là nền tảng cho sự phát triển toàn diện của trẻ. Tìm hiểu cách xây dựng bữa ăn lành mạnh cho bé.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    author: "Cô Minh Hương",
    category: "Dinh dưỡng",
    tag: "Sức khỏe",
    publishedDate: "12/11/2024",
    status: "Published",
    views: 189,
    content: "Nội dung bài viết chi tiết...",
  },
  {
    id: 3,
    title: "Phương pháp Montessori tại Kiddie Preschool",
    excerpt: "Tìm hiểu cách chúng tôi áp dụng phương pháp Montessori để khuyến khích trẻ học tập độc lập và phát triển tư duy sáng tạo.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    author: "Thầy Văn Đức",
    category: "Giáo dục",
    tag: "Phương pháp",
    publishedDate: "10/11/2024",
    status: "Draft",
    views: 0,
    content: "Nội dung bài viết chi tiết...",
  },
  {
    id: 4,
    title: "Chuẩn bị tâm lý cho trẻ lần đầu đến trường",
    excerpt: "Những bí quyết giúp phụ huynh và trẻ vượt qua giai đoạn đầu đi học một cách nhẹ nhàng và tích cực.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    author: "Cô Thanh Mai",
    category: "Tâm lý",
    tag: "Chuẩn bị",
    publishedDate: "8/11/2024",
    status: "Published",
    views: 312,
    content: "Nội dung bài viết chi tiết...",
  },
];

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  const [formData, setFormData] = useState(
    blog || {
      title: "",
      excerpt: "",
      image: "",
      author: "",
      category: "",
      tag: "",
      publishedDate: "",
      status: "Draft",
      content: "",
    }
  );

  if (!blog) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy bài viết</h2>
          <button
            onClick={() => navigate("/staff/blogs")}
            className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating blog post:", formData);
    // TODO: Gửi dữ liệu lên API
    alert("Bài viết đã được cập nhật thành công!");
    navigate("/staff/blogs");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/staff/blogs")}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chỉnh sửa bài viết</h1>
            <p className="text-sm text-slate-500">ID: #{blog.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/staff/blogs")}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
          >
            <HiXMark className="text-sm" />
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-lg bg-brand-green px-6 py-2 me-5 text-sm font-medium text-white transition "
          >
            <HiCheck className="text-sm" />
            Lưu thay đổi
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin cơ bản</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Tiêu đề bài viết</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Nhập tiêu đề bài viết..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Mô tả ngắn (Excerpt)</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Nhập mô tả ngắn về bài viết..."
                    rows="3"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">URL hình ảnh</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                  {formData.image && (
                    <div className="mt-2">
                      <img src={formData.image} alt="Preview" className="h-32 w-full rounded-lg object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Nội dung bài viết</h2>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Nhập nội dung bài viết..."
                rows="15"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                required
              />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Cài đặt xuất bản</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Trạng thái</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Ngày đăng</label>
                  <input
                    type="text"
                    name="publishedDate"
                    value={formData.publishedDate}
                    onChange={handleChange}
                    placeholder="dd/mm/yyyy"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin bổ sung</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Tác giả</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Nhập tên tác giả..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Danh mục</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  >
                    <option value="">Chọn danh mục</option>
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Dinh dưỡng">Dinh dưỡng</option>
                    <option value="Giáo dục">Giáo dục</option>
                    <option value="Tâm lý">Tâm lý</option>
                    <option value="Nghệ thuật">Nghệ thuật</option>
                    <option value="Đọc sách">Đọc sách</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Tag</label>
                  <input
                    type="text"
                    name="tag"
                    value={formData.tag}
                    onChange={handleChange}
                    placeholder="Nhập tag..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>
                {blog.views !== undefined && (
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Lượt xem</label>
                    <p className="text-sm text-slate-600">{blog.views} lượt xem</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogEdit;

