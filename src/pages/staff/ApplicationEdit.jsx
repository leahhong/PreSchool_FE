import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark } from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
const applications = [
  {
    id: 1,
    parentName: "Nguyễn Văn A",
    childName: "Nguyễn Văn B",
    email: "nguyenvana@example.com",
    phone: "0901 234 567",
    childAge: 4,
    appliedDate: "15/11/2024",
    status: "Pending",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    notes: "Phụ huynh muốn đăng ký cho con học buổi sáng.",
    classRegistration: "Lớp Mầm Non 1",
    gender: "Male",
    dateOfBirth: "01/15/2020",
    relationship: "Father",
  },
  {
    id: 2,
    parentName: "Trần Thị C",
    childName: "Trần Thị D",
    email: "tranthic@example.com",
    phone: "0902 345 678",
    childAge: 3,
    appliedDate: "14/11/2024",
    status: "Approved",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    notes: "Đã hoàn tất thanh toán.",
    classRegistration: "Lớp Mầm Non 2",
    gender: "Female",
    dateOfBirth: "03/20/2021",
    relationship: "Mother",
  },
  {
    id: 3,
    parentName: "Lê Văn E",
    childName: "Lê Văn F",
    email: "levane@example.com",
    phone: "0903 456 789",
    childAge: 5,
    appliedDate: "13/11/2024",
    status: "Rejected",
    address: "789 Đường DEF, Quận 3, TP.HCM",
    notes: "Không đủ điều kiện.",
    classRegistration: "Lớp Mầm Non 3",
    gender: "Male",
    dateOfBirth: "05/10/2019",
    relationship: "Father",
  },
  {
    id: 4,
    parentName: "Phạm Thị G",
    childName: "Phạm Thị H",
    email: "phamthig@example.com",
    phone: "0904 567 890",
    childAge: 4,
    appliedDate: "12/11/2024",
    status: "Pending",
    address: "321 Đường GHI, Quận 4, TP.HCM",
    notes: "Đang chờ xét duyệt.",
    classRegistration: "Lớp Mầm Non 1",
    gender: "Female",
    dateOfBirth: "08/25/2020",
    relationship: "Mother",
  },
];

const ApplicationEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const application = applications.find((app) => app.id === parseInt(id));

  const [formData, setFormData] = useState(
    application || {
      parentName: "",
      childName: "",
      email: "",
      phone: "",
      childAge: "",
      status: "Pending",
      address: "",
      notes: "",
      classRegistration: "",
      gender: "",
      dateOfBirth: "",
      relationship: "",
    }
  );

  if (!application) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy đơn đăng ký</h2>
          <button
            onClick={() => navigate("/staff/applications")}
            className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Gửi dữ liệu lên API
    console.log("Form data:", formData);
    navigate(`/staff/applications/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/staff/applications/${id}`)}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chỉnh sửa đơn đăng ký</h1>
            <p className="text-sm text-slate-500">ID: #{application.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/staff/applications/${id}`)}
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
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Parent Information */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin phụ huynh</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Họ và tên phụ huynh</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Số điện thoại</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Địa chỉ</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Mối quan hệ với trẻ</label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="">Chọn mối quan hệ</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Guardian</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Child Information */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin trẻ em</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Họ và tên trẻ em</label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Ngày sinh</label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    placeholder="mm/dd/yyyy"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Giới tính</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                        className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <span className="ml-2 text-sm text-slate-700">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                        className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <span className="ml-2 text-sm text-slate-700">Female</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Tuổi</label>
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    min="1"
                    max="6"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Lớp đăng ký</label>
                  <select
                    name="classRegistration"
                    value={formData.classRegistration}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  >
                    <option value="">Chọn lớp</option>
                    <option value="Lớp Mầm Non 1">Lớp Mầm Non 1</option>
                    <option value="Lớp Mầm Non 2">Lớp Mầm Non 2</option>
                    <option value="Lớp Mầm Non 3">Lớp Mầm Non 3</option>
                    <option value="Lớp Mầm Non 4">Lớp Mầm Non 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Status */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Trạng thái</h2>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Notes */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Ghi chú</h2>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="6"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                placeholder="Nhập ghi chú..."
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationEdit;

