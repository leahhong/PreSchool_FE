import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiPencil, HiTrash, HiPlus, HiMagnifyingGlass, HiFunnel, HiChevronDown, HiEye, HiCalendar, HiUser } from "react-icons/hi2";

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
  },
];

const BlogManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const statusOptions = ["Tất cả", "Published", "Draft"];

  const getStatusBadge = (status) => {
    const styles = {
      Published: "bg-green-100 text-green-800",
      Draft: "bg-gray-100 text-gray-800",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-800"}`}>
        {status}
      </span>
    );
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "Tất cả" || blog.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Blog Management</h1>
        <button
          onClick={() => navigate("/staff/blogs/add")}
          className="flex items-center gap-2 rounded-lg bg-brand-green px-6 py-2 me-5 text-sm font-medium text-white transition hover:bg-brand-green"
        >
          <HiPlus /> Thêm bài viết
        </button>
      </div>

      {/* Search Bar and Filter */}
      <div className="mb-6 flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tiêu đề, tác giả hoặc danh mục..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[350px] rounded-lg border border-gray-300 bg-white px-10 py-2 text-sm text-slate-900 placeholder-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>

        {/* Status Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          >
            <HiFunnel className="text-gray-500" />
            <span>{statusFilter}</span>
            <HiChevronDown className={`text-xs text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                {statusOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setStatusFilter(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition ${
                      statusFilter === option
                        ? "bg-brand-blue/10 text-brand-blue font-medium"
                        : "text-slate-700 hover:bg-gray-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-brand-blue/90 px-3 py-1 text-xs font-semibold text-white">
                  {blog.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                {getStatusBadge(blog.status)}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <HiCalendar className="text-xs" />
                  {blog.publishedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiUser className="text-xs" />
                  {blog.author}
                </span>
              </div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900 line-clamp-2">
                {blog.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">{blog.excerpt}</p>
              
              <div className="mb-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {blog.tag}
                </span>
                <span className="text-xs text-slate-500">
                  <HiEye className="inline mr-1" />
                  {blog.views} lượt xem
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                <button
                  onClick={() => navigate(`/staff/blogs/${blog.id}/edit`)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-gray-50"
                >
                  <HiPencil className="text-sm" />
                  Chỉnh sửa
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-3 py-2 text-sm text-red-600 transition hover:bg-red-50">
                  <HiTrash className="text-sm" />
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          Không tìm thấy bài viết nào phù hợp với bộ lọc của bạn.
        </div>
      )}
    </div>
  );
};

export default BlogManagement;


