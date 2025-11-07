import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiPencil, HiTrash, HiUser, HiEnvelope, HiPhone, HiCalendar, HiAcademicCap, HiXMark } from "react-icons/hi2";
import { useState } from "react";

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
    joinDate: "01/15/2022",
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
    joinDate: "02/20/2021",
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
    joinDate: "03/10/2020",
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
    ageGroup: "-",
    status: "Inactive",
    joinDate: "04/05/2023",
    experience: "2 năm",
    address: "321 Đường GHI, Quận 4, TP.HCM",
    specialization: "Giáo dục mầm non",
  },
];

const TeacherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacher = teachers.find((t) => t.id === parseInt(id));
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  if (!teacher) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy giáo viên</h2>
          <button
            onClick={() => navigate("/admin/teachers")}
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
            onClick={() => navigate("/admin/teachers")}
            className="rounded-lg px-6 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chi tiết giáo viên</h1>
            <p className="text-sm text-slate-500">ID: #{teacher.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/admin/teachers/${teacher.id}/edit`)}
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
        {/* Basic Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin cơ bản</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-1 text-xs text-slate-500">Họ và tên</p>
              <p className="text-sm font-medium text-slate-900">{teacher.name}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Email</p>
              <p className="text-sm font-medium text-slate-900">{teacher.email}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Số điện thoại</p>
              <p className="text-sm font-medium text-slate-900">{teacher.phone}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Địa chỉ</p>
              <p className="text-sm font-medium text-slate-900">{teacher.address || "-"}</p>
            </div>
          </div>
        </div>

        {/* Work Information */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin công việc</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-1 text-xs text-slate-500">Lớp được phân công</p>
              <p className="text-sm font-medium text-slate-900">{teacher.classroom || "-"}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Độ tuổi học sinh</p>
              <p className="text-sm font-medium text-slate-900">{teacher.ageGroup || "-"}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Kinh nghiệm</p>
              <p className="text-sm font-medium text-slate-900">{teacher.experience || "-"}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Chuyên môn</p>
              <p className="text-sm font-medium text-slate-900">{teacher.specialization || "-"}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Ngày tham gia</p>
              <p className="text-sm font-medium text-slate-900">{teacher.joinDate}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-slate-500">Trạng thái</p>
              {getStatusBadge(teacher.status)}
            </div>
          </div>
        </div>
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
              Bạn có chắc chắn muốn xóa giáo viên <span className="font-semibold">{teacher.name}</span>? Hành động này không thể hoàn tác.
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
                  console.log("Deleting teacher:", teacher.id);
                  navigate("/admin/teachers");
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

export default TeacherDetail;

