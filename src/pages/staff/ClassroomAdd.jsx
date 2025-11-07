import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark } from "react-icons/hi2";

const ClassroomAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ageGroup: "",
    teacher: "",
    capacity: 20,
    status: "Inactive",
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
    console.log("Creating classroom:", formData);
    // TODO: Gửi dữ liệu lên API
    alert("Lớp học đã được tạo thành công!");
    navigate("/staff/classrooms");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/staff/classrooms")}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Thêm lớp học mới</h1>
            <p className="text-sm text-slate-500">Tạo lớp học mới</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/staff/classrooms")}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
          >
            <HiXMark className="text-sm" />
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-lg bg-brand-green px-6 py-2 me-5 text-sm font-medium text-white transition"
          >
            <HiCheck className="text-sm" />
            Lưu lớp học
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
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin lớp học</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Tên lớp</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên lớp học..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Độ tuổi</label>
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  >
                    <option value="">Chọn độ tuổi</option>
                    <option value="3-4 tuổi">3-4 tuổi</option>
                    <option value="4-5 tuổi">4-5 tuổi</option>
                    <option value="5-6 tuổi">5-6 tuổi</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Giáo viên</label>
                  <select
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="">Chọn giáo viên</option>
                    <option value="Cô Lan Anh">Cô Lan Anh</option>
                    <option value="Cô Minh Hương">Cô Minh Hương</option>
                    <option value="Thầy Văn Đức">Thầy Văn Đức</option>
                    <option value="Cô Thanh Mai">Cô Thanh Mai</option>
                    <option value="Chưa phân công">Chưa phân công</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Sức chứa (số học sinh tối đa)</label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    min="1"
                    max="30"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Trạng thái</h2>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Trạng thái lớp học</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  <option value="Inactive">Inactive</option>
                  <option value="Active">Active</option>
                  <option value="Full">Full</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClassroomAdd;

