import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark, HiCalendarDays } from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
const parents = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901 234 567",
    childrenCount: 2,
    status: "Active",
    registerDate: "2023-01-15",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    children: [
      {
        id: 1,
        childName: "Nguyễn Văn B",
        dateOfBirth: "2020-01-15",
        gender: "Male",
        childAge: 4,
        classRegistration: "Lớp Mầm Non 1",
        relationship: "Father",
      },
      {
        id: 2,
        childName: "Nguyễn Thị C",
        dateOfBirth: "2021-03-20",
        gender: "Female",
        childAge: 3,
        classRegistration: "Lớp Mầm Non 1",
        relationship: "Father",
      },
    ],
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@example.com",
    phone: "0902 345 678",
    childrenCount: 1,
    status: "Active",
    registerDate: "2023-02-20",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    children: [
      {
        id: 3,
        childName: "Trần Văn D",
        dateOfBirth: "2020-05-10",
        gender: "Male",
        childAge: 4,
        classRegistration: "Lớp Mầm Non 2",
        relationship: "Mother",
      },
    ],
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@example.com",
    phone: "0903 456 789",
    childrenCount: 3,
    status: "Active",
    registerDate: "2022-03-10",
    address: "789 Đường DEF, Quận 3, TP.HCM",
    children: [
      {
        id: 4,
        childName: "Lê Thị E",
        dateOfBirth: "2019-07-15",
        gender: "Female",
        childAge: 5,
        classRegistration: "Lớp Mầm Non 3",
        relationship: "Father",
      },
      {
        id: 5,
        childName: "Lê Văn F",
        dateOfBirth: "2020-09-22",
        gender: "Male",
        childAge: 4,
        classRegistration: "Lớp Mầm Non 2",
        relationship: "Father",
      },
      {
        id: 6,
        childName: "Lê Thị G",
        dateOfBirth: "2021-11-30",
        gender: "Female",
        childAge: 3,
        classRegistration: "Lớp Mầm Non 1",
        relationship: "Guardian",
      },
    ],
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    phone: "0904 567 890",
    childrenCount: 1,
    status: "Inactive",
    registerDate: "2023-04-05",
    address: "321 Đường GHI, Quận 4, TP.HCM",
    children: [
      {
        id: 7,
        childName: "Phạm Văn H",
        dateOfBirth: "2021-02-14",
        gender: "Male",
        childAge: 3,
        classRegistration: "Lớp Mầm Non 1",
        relationship: "Mother",
      },
    ],
  },
];

const ParentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const parent = parents.find((p) => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    // Parent Information
    name: "",
    email: "",
    phone: "",
    address: "",
    status: "Active",
    registerDate: new Date().toISOString().slice(0, 10),
    // Children Information (array)
    children: [],
  });

  useEffect(() => {
    if (parent) {
      setFormData({
        name: parent.name,
        email: parent.email,
        phone: parent.phone,
        address: parent.address || "",
        status: parent.status,
        registerDate: parent.registerDate || new Date().toISOString().slice(0, 10),
        children: parent.children || [],
      });
    }
  }, [parent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChildChange = (childIndex, field, value) => {
    setFormData((prev) => {
      const newChildren = [...prev.children];
      newChildren[childIndex] = {
        ...newChildren[childIndex],
        [field]: value,
      };
      return {
        ...prev,
        children: newChildren,
      };
    });
  };

  const handleAddChild = () => {
    setFormData((prev) => ({
      ...prev,
      children: [
        ...prev.children,
        {
          id: Date.now(),
          childName: "",
          dateOfBirth: "",
          gender: "",
          childAge: "",
          classRegistration: "",
          relationship: "",
        },
      ],
    }));
  };

  const handleRemoveChild = (childIndex) => {
    setFormData((prev) => ({
      ...prev,
      children: prev.children.filter((_, index) => index !== childIndex),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Parent updated:", formData);
    alert("Phụ huynh đã được cập nhật thành công!");
    navigate("/admin/parents");
    // TODO: Gửi dữ liệu lên API
  };

  if (!parent) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy phụ huynh</h2>
          <button
            onClick={() => navigate("/admin/parents")}
            className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green"
          >
            Quay lại danh sách phụ huynh
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
            onClick={() => navigate(`/admin/parents/${parent.id}`)}
            className="rounded-lg px-6 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chỉnh sửa phụ huynh</h1>
            <p className="text-sm text-slate-500">ID: #{parent.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/admin/parents/${parent.id}`)}
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
          {/* Parent Information */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin phụ huynh</h2>
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
              <div>
                <label htmlFor="registerDate" className="mb-1 block text-sm font-medium text-slate-700">
                  Ngày đăng ký <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="registerDate"
                  name="registerDate"
                  value={formData.registerDate}
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

          {/* Children Information */}
          <div className="border-t border-slate-200 pt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Thông tin học sinh</h2>
              
            </div>
            <div className="space-y-6">
              {formData.children.map((child, index) => (
                <div key={child.id || index} className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-700">Học sinh #{index + 1}</h3>
                    {formData.children.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveChild(index)}
                        className="rounded-lg p-1 text-red-500 transition hover:bg-red-50"
                      >
                        <HiXMark className="text-sm" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Họ và tên học sinh <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={child.childName}
                        onChange={(e) => handleChildChange(index, "childName", e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Ngày sinh <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={child.dateOfBirth}
                        onChange={(e) => handleChildChange(index, "dateOfBirth", e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Giới tính <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name={`gender-${index}`}
                            value="Male"
                            checked={child.gender === "Male"}
                            onChange={(e) => handleChildChange(index, "gender", e.target.value)}
                            className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                            required
                          />
                          <span className="ml-2 text-sm text-slate-700">Nam</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name={`gender-${index}`}
                            value="Female"
                            checked={child.gender === "Female"}
                            onChange={(e) => handleChildChange(index, "gender", e.target.value)}
                            className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                            required
                          />
                          <span className="ml-2 text-sm text-slate-700">Nữ</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Tuổi <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        value={child.childAge}
                        onChange={(e) => handleChildChange(index, "childAge", e.target.value)}
                        min="1"
                        max="6"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Lớp đăng ký <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={child.classRegistration}
                        onChange={(e) => handleChildChange(index, "classRegistration", e.target.value)}
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
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Mối quan hệ với trẻ
                      </label>
                      <select
                        value={child.relationship}
                        onChange={(e) => handleChildChange(index, "relationship", e.target.value)}
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
              ))}
              {formData.children.length === 0 && (
                <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center">
                  <p className="text-sm text-slate-500">Chưa có học sinh nào. Nhấn "Thêm học sinh" để thêm.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ParentEdit;

