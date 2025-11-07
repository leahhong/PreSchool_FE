import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark } from "react-icons/hi2";

const BlogAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    image: "",
    author: "",
    category: "",
    tag: "",
    publishedDate: "",
    status: "Draft",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating blog post:", formData);
    // TODO: Gửi dữ liệu lên API
    alert("Bài viết đã được tạo thành công!");
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
            <h1 className="text-2xl font-semibold text-slate-900">Thêm bài viết mới</h1>
            <p className="text-sm text-slate-500">Tạo bài viết mới cho blog</p>
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
            Lưu bài viết
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
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogAdd;

