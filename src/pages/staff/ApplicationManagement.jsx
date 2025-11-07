import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiPencil, HiTrash, HiMagnifyingGlass, HiFunnel, HiChevronDown, HiXMark } from "react-icons/hi2";

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
    classRegistration: "Lớp Mầm Non 1",
    gender: "Male",
    dateOfBirth: "01/15/2020",
    address: "123 Đường ABC, Quận 1, TP.HCM",
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
    classRegistration: "Lớp Mầm Non 2",
    gender: "Female",
    dateOfBirth: "03/20/2021",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
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
    classRegistration: "Lớp Mầm Non 3",
    gender: "Male",
    dateOfBirth: "05/10/2019",
    address: "789 Đường DEF, Quận 3, TP.HCM",
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
    classRegistration: "Lớp Mầm Non 1",
    gender: "Female",
    dateOfBirth: "08/25/2020",
    address: "321 Đường GHI, Quận 4, TP.HCM",
    relationship: "Mother",
  },
];

const ApplicationManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const statusOptions = ["Tất cả", "Pending", "Approved", "Rejected"];

  const getStatusBadge = (status) => {
    const styles = {
      Pending: "bg-yellow-100 text-yellow-800",
      Approved: "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-800"}`}>
        {status}
      </span>
    );
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "Tất cả" || app.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Application Management</h1>
        <button className="rounded-lg bg-brand-green px-7 py-2 me-5 text-sm font-medium text-white transition hover:bg-brand-green">
          Export
        </button>
      </div>

      {/* Search Bar and Filter */}
      <div className="mb-4 flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc email..."
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
                Phụ huynh
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Trẻ em
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Email
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Điện thoại
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Tuổi
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                Ngày đăng ký
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
            {filteredApplications.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">{app.id}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">{app.parentName}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">{app.childName}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{app.email}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{app.phone}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{app.childAge} tuổi</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{app.appliedDate}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">{getStatusBadge(app.status)}</td>
                <td className="whitespace-nowrap px-5 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/staff/applications/${app.id}`)}
                      className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                      title="Xem chi tiết"
                    >
                      <HiEye className="text-sm" />
                    </button>
                    <button
                      onClick={() => navigate(`/staff/applications/${app.id}/edit`)}
                      className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                      title="Chỉnh sửa"
                    >
                      <HiPencil className="text-sm" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedApplication(app);
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
                  setSelectedApplication(null);
                }}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn xóa đơn đăng ký của <span className="font-semibold">{selectedApplication?.parentName}</span> cho trẻ{" "}
              <span className="font-semibold">{selectedApplication?.childName}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setSelectedApplication(null);
                }}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  // TODO: Gọi API xóa application
                  console.log("Deleting application:", selectedApplication?.id);
                  setDeleteModalOpen(false);
                  setSelectedApplication(null);
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

export default ApplicationManagement;


