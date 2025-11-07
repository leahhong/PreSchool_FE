import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiPencil, HiTrash, HiMagnifyingGlass, HiFunnel, HiChevronDown, HiXMark, HiPlus } from "react-icons/hi2";

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
  },
];

const TeacherManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const statusOptions = ["Tất cả", "Active", "Inactive"];

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

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.classroom.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "Tất cả" || teacher.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Teacher Management</h1>
        <button
          onClick={() => navigate("/admin/teachers/add")}
          className="flex items-center gap-2 rounded-lg bg-brand-green px-6 py-2 me-5 text-sm font-medium text-white transition hover:bg-brand-green"
        >
          <HiPlus /> Thêm giáo viên
        </button>
      </div>

      {/* Search Bar and Filter */}
      <div className="mb-4 flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, email, số điện thoại hoặc lớp..."
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
                        ? "bg-brand-blue/10 text-brand-blue"
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

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">ID</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Tên</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Email</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Số điện thoại</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Lớp</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Độ tuổi</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Kinh nghiệm</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Trạng thái</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">#{teacher.id}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900">{teacher.name}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{teacher.email}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{teacher.phone}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{teacher.classroom}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{teacher.ageGroup}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{teacher.experience}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm">{getStatusBadge(teacher.status)}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/teachers/${teacher.id}`)}
                        className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        title="Xem chi tiết"
                      >
                        <HiEye className="text-sm" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/teachers/${teacher.id}/edit`)}
                        className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        title="Chỉnh sửa"
                      >
                        <HiPencil className="text-sm" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTeacher(teacher);
                          setDeleteModalOpen(true);
                        }}
                        className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        title="Xóa"
                      >
                        <HiTrash className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-5 py-8 text-center text-sm text-slate-500">
                  Không tìm thấy giáo viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Xác nhận xóa</h3>
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setSelectedTeacher(null);
                }}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn xóa giáo viên <span className="font-semibold">{selectedTeacher?.name}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setSelectedTeacher(null);
                }}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log("Deleting teacher:", selectedTeacher?.id);
                  setDeleteModalOpen(false);
                  setSelectedTeacher(null);
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

export default TeacherManagement;

