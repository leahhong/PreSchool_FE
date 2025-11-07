import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark } from "react-icons/hi2";

const TeacherAdd = () => {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New teacher added:", formData);
    alert("Giáo viên đã được thêm thành công!");
    navigate("/admin/teachers");
    // TODO: Gửi dữ liệu lên API
  };

  return (
    <div>
      {/* Header */}
      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/teachers")}
            className="rounded-lg px-6 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <h1 className="text-2xl font-semibold text-slate-900">Thêm giáo viên mới</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/admin/teachers")}
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
            Thêm giáo viên
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg  bg-white p-6 shadow-sm">
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
                  rows="3"
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

export default TeacherAdd;

