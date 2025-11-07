import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiPencil, HiTrash, HiPlus, HiMagnifyingGlass, HiFunnel, HiChevronDown, HiUserGroup, HiXMark } from "react-icons/hi2";

const classrooms = [
  {
    id: 1,
    name: "Lớp Mầm Non 1",
    capacity: 20,
    currentStudents: 18,
    teacher: "Cô Lan Anh",
    ageGroup: "3-4 tuổi",
    status: "Active",
  },
  {
    id: 2,
    name: "Lớp Mầm Non 2",
    capacity: 20,
    currentStudents: 20,
    teacher: "Cô Minh Hương",
    ageGroup: "4-5 tuổi",
    status: "Full",
  },
  {
    id: 3,
    name: "Lớp Mầm Non 3",
    capacity: 20,
    currentStudents: 15,
    teacher: "Thầy Văn Đức",
    ageGroup: "5-6 tuổi",
    status: "Active",
  },
  {
    id: 4,
    name: "Lớp Mầm Non 4",
    capacity: 20,
    currentStudents: 0,
    teacher: "Chưa phân công",
    ageGroup: "3-4 tuổi",
    status: "Inactive",
  },
];

const ClassroomManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const statusOptions = ["Tất cả", "Active", "Full", "Inactive"];

  const getStatusBadge = (status) => {
    const styles = {
      Active: "bg-green-100 text-green-800",
      Full: "bg-blue-100 text-blue-800",
      Inactive: "bg-gray-100 text-gray-800",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-400 text-white"}`}>
        {status}
      </span>
    );
  };

  const getCapacityPercentage = (current, capacity) => {
    return Math.round((current / capacity) * 100);
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 100) return "bg-blue-300  ";
    if (percentage >= 80) return "bg-yellow-300";
    return "bg-green-300";
  };

  const filteredClassrooms = classrooms.filter((classroom) => {
    const matchesSearch =
      classroom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classroom.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classroom.ageGroup.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "Tất cả" || classroom.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Classroom Management</h1>
        <button
          onClick={() => navigate("/staff/classrooms/add")}
          className="flex items-center gap-2 rounded-lg bg-brand-green px-6 py-2 me-5 text-sm font-medium text-white transition hover:bg-brand-green"
        >
          <HiPlus /> Thêm lớp học
        </button>
      </div>

      {/* Search Bar and Filter */}
      <div className="mb-4 flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên lớp, giáo viên hoặc độ tuổi..."
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

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">ID</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Tên lớp
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Độ tuổi
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Giáo viên
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Sĩ số
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Trạng thái
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredClassrooms.map((classroom) => (
              <tr key={classroom.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">{classroom.id}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900">{classroom.name}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{classroom.ageGroup}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{classroom.teacher}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <HiUserGroup className="text-gray-500" />
                      <span className="text-slate-900 font-medium">
                        {classroom.currentStudents}/{classroom.capacity}
                      </span>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full ${getProgressBarColor(getCapacityPercentage(classroom.currentStudents, classroom.capacity))}`}
                        style={{ width: `${getCapacityPercentage(classroom.currentStudents, classroom.capacity)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">{getStatusBadge(classroom.status)}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/staff/classrooms/${classroom.id}/edit`)}
                      className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                      title="Chỉnh sửa"
                    >
                      <HiPencil className="text-sm" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedClassroom(classroom);
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
            ))}
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
                  setSelectedClassroom(null);
                }}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn xóa lớp học <span className="font-semibold">{selectedClassroom?.name}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setSelectedClassroom(null);
                }}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  // TODO: Gọi API xóa classroom
                  console.log("Deleting classroom:", selectedClassroom?.id);
                  setDeleteModalOpen(false);
                  setSelectedClassroom(null);
                  // Có thể thêm toast notification ở đây
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

export default ClassroomManagement;


