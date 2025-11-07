import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiPencil, HiTrash, HiXMark } from "react-icons/hi2";
import { useState } from "react";

// Mock data - trong thực tế sẽ fetch từ API
const parents = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901 234 567",
    childrenCount: 2,
    status: "Active",
    registerDate: "01/15/2023",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    children: [
      {
        id: 1,
        childName: "Nguyễn Văn B",
        dateOfBirth: "01/15/2020",
        gender: "Male",
        childAge: 4,
        classRegistration: "Lớp Mầm Non 1",
        relationship: "Father",
      },
      {
        id: 2,
        childName: "Nguyễn Thị C",
        dateOfBirth: "03/20/2021",
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
    registerDate: "02/20/2023",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    children: [
      {
        id: 3,
        childName: "Trần Văn D",
        dateOfBirth: "05/10/2020",
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
    registerDate: "03/10/2022",
    address: "789 Đường DEF, Quận 3, TP.HCM",
    children: [
      {
        id: 4,
        childName: "Lê Thị E",
        dateOfBirth: "07/15/2019",
        gender: "Female",
        childAge: 5,
        classRegistration: "Lớp Mầm Non 3",
        relationship: "Father",
      },
      {
        id: 5,
        childName: "Lê Văn F",
        dateOfBirth: "09/22/2020",
        gender: "Male",
        childAge: 4,
        classRegistration: "Lớp Mầm Non 2",
        relationship: "Father",
      },
      {
        id: 6,
        childName: "Lê Thị G",
        dateOfBirth: "11/30/2021",
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
    registerDate: "04/05/2023",
    address: "321 Đường GHI, Quận 4, TP.HCM",
    children: [
      {
        id: 7,
        childName: "Phạm Văn H",
        dateOfBirth: "02/14/2021",
        gender: "Male",
        childAge: 3,
        classRegistration: "Lớp Mầm Non 1",
        relationship: "Mother",
      },
    ],
  },
];

const ParentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const parent = parents.find((p) => p.id === parseInt(id));
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  if (!parent) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy phụ huynh</h2>
          <button
            onClick={() => navigate("/admin/parents")}
            className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    const styles = {
      Active: "bg-green-100 text-green-800",
      Inactive: "bg-gray-100 text-gray-800",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-800"}`}>
        {status}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/parents")}
            className="rounded-lg px-6 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chi tiết phụ huynh</h1>
            <p className="text-sm text-slate-500">ID: #{parent.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/admin/parents/${parent.id}/edit`)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
          >
            <HiPencil className="text-sm" />
            Chỉnh sửa
          </button>
          <button
            onClick={() => setDeleteModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            <HiTrash className="text-sm" />
            Xóa
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        {/* Parent Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin phụ huynh</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Họ và tên</p>
              <p className="text-sm text-slate-900">{parent.name}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Email</p>
              <p className="text-sm text-slate-900">{parent.email}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Số điện thoại</p>
              <p className="text-sm text-slate-900">{parent.phone}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Địa chỉ</p>
              <p className="text-sm text-slate-900">{parent.address || "-"}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Ngày đăng ký</p>
              <p className="text-sm text-slate-900">{parent.registerDate}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Trạng thái</p>
              {getStatusBadge(parent.status)}
            </div>
          </div>
        </div>

        {/* Children Information */}
        {parent.children && parent.children.length > 0 && (
          <div className="border-t border-slate-200 pt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Thông tin học sinh</h2>
            </div>
            <div className="space-y-6">
              {parent.children.map((child, index) => (
                <div key={child.id || index} className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-700">Học sinh #{index + 1}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-700">Họ và tên học sinh</p>
                      <p className="text-sm text-slate-900">{child.childName}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-700">Ngày sinh</p>
                      <p className="text-sm text-slate-900">{child.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-700">Giới tính</p>
                      <p className="text-sm text-slate-900">{child.gender === "Male" ? "Nam" : "Nữ"}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-700">Tuổi</p>
                      <p className="text-sm text-slate-900">{child.childAge} tuổi</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-700">Lớp đăng ký</p>
                      <p className="text-sm text-slate-900">{child.classRegistration}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-700">Mối quan hệ với trẻ</p>
                      <p className="text-sm text-slate-900">{child.relationship || "-"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Xác nhận xóa</h3>
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn xóa phụ huynh <span className="font-semibold">{parent.name}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log("Deleting parent:", parent.id);
                  navigate("/admin/parents");
                }}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentDetail;

