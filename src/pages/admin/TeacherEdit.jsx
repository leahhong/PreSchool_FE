import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark } from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
const teachers = [
  {
    id: 1,
    name: "Cô Lan Anh",
    email: "lananh@example.com",
    phone: "0901 234 567",
    classroom: "Lớp Mầm Non 1",
    ageGroup: "3-4 tuổi",
    status: "Active",
    joinDate: "2022-01-15",
    experience: "5 năm",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    specialization: "Giáo dục mầm non",
  },
  {
    id: 2,
    name: "Cô Minh Hương",
    email: "minhhuong@example.com",
    phone: "0902 345 678",
    classroom: "Lớp Mầm Non 2",
    ageGroup: "4-5 tuổi",
    status: "Active",
    joinDate: "2021-02-20",
    experience: "7 năm",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    specialization: "Giáo dục mầm non",
  },
  {
    id: 3,
    name: "Thầy Văn Đức",
    email: "vanduc@example.com",
    phone: "0903 456 789",
    classroom: "Lớp Mầm Non 3",
    ageGroup: "5-6 tuổi",
    status: "Active",
    joinDate: "2020-03-10",
    experience: "10 năm",
    address: "789 Đường DEF, Quận 3, TP.HCM",
    specialization: "Giáo dục mầm non",
  },
  {
    id: 4,
    name: "Cô Thanh Mai",
    email: "thanhmai@example.com",
    phone: "0904 567 890",
    classroom: "Chưa phân công",
    ageGroup: "",
    status: "Inactive",
    joinDate: "2023-04-05",
    experience: "2 năm",
    address: "321 Đường GHI, Quận 4, TP.HCM",
    specialization: "Giáo dục mầm non",
  },
];

const TeacherEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacher = teachers.find((t) => t.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    classroom: "",
    ageGroup: "",
    status: "Active",
    joinDate: new Date().toISOString().slice(0, 10),
    experience: "",
    specialization: "",
  });

  useEffect(() => {
    if (teacher) {
      setFormData({
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        address: teacher.address || "",
        classroom: teacher.classroom,
        ageGroup: teacher.ageGroup || "",
        status: teacher.status,
        joinDate: teacher.joinDate || new Date().toISOString().slice(0, 10),
        experience: teacher.experience || "",
        specialization: teacher.specialization || "",
      });
    }
  }, [teacher]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher updated:", formData);
    alert("Giáo viên đã được cập nhật thành công!");
    navigate("/admin/teachers");
    // TODO: Gửi dữ liệu lên API
  };

  if (!teacher) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy giáo viên</h2>
          <button
            onClick={() => navigate("/admin/teachers")}
            className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green"
          >
            Quay lại danh sách giáo viên
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/admin/teachers/${teacher.id}`)}
            className="rounded-lg px-6 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chỉnh sửa giáo viên</h1>
            <p className="text-sm text-slate-500">ID: #{teacher.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/admin/teachers/${teacher.id}`)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
          >
            <HiXMark className="text-sm" />
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green/90"
          >
            <HiCheck className="text-sm" />
            Lưu thay đổi
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin cơ bản</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="mb-1 block text-sm font-medium text-slate-700">
                  Địa chỉ
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="1"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Work Information */}
          <div className="border-t border-slate-200 pt-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin công việc</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="classroom" className="mb-1 block text-sm font-medium text-slate-700">
                  Lớp được phân công
                </label>
                <select
                  id="classroom"
                  name="classroom"
                  value={formData.classroom}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  <option value="">Chọn lớp</option>
                  <option value="Lớp Mầm Non 1">Lớp Mầm Non 1</option>
                  <option value="Lớp Mầm Non 2">Lớp Mầm Non 2</option>
                  <option value="Lớp Mầm Non 3">Lớp Mầm Non 3</option>
                  <option value="Lớp Mầm Non 4">Lớp Mầm Non 4</option>
                  <option value="Chưa phân công">Chưa phân công</option>
                </select>
              </div>
              <div>
                <label htmlFor="ageGroup" className="mb-1 block text-sm font-medium text-slate-700">
                  Độ tuổi học sinh
                </label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  <option value="">Chọn độ tuổi</option>
                  <option value="3-4 tuổi">3-4 tuổi</option>
                  <option value="4-5 tuổi">4-5 tuổi</option>
                  <option value="5-6 tuổi">5-6 tuổi</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="mb-1 block text-sm font-medium text-slate-700">
                  Kinh nghiệm
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="VD: 5 năm, 7 năm..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <div>
                <label htmlFor="specialization" className="mb-1 block text-sm font-medium text-slate-700">
                  Chuyên môn
                </label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="VD: Giáo dục mầm non..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <div>
                <label htmlFor="joinDate" className="mb-1 block text-sm font-medium text-slate-700">
                  Ngày tham gia <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="joinDate"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="status" className="mb-1 block text-sm font-medium text-slate-700">
                  Trạng thái
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherEdit;

