import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiPencil, HiTrash, HiMagnifyingGlass, HiFunnel, HiChevronDown, HiXMark } from "react-icons/hi2";

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
  },
];

const ParentManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);

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

  const filteredParents = parents.filter((parent) => {
    const matchesSearch =
      parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "Tất cả" || parent.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Parent Management</h1>
        
      </div>

      {/* Search Bar and Filter */}
      <div className="mb-4 flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, email, số điện thoại hoặc địa chỉ..."
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
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Số con</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Trạng thái</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Ngày đăng ký</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredParents.length > 0 ? (
              filteredParents.map((parent) => (
                <tr key={parent.id} className="hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">#{parent.id}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900">{parent.name}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{parent.email}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{parent.phone}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{parent.childrenCount}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm">{getStatusBadge(parent.status)}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{parent.registerDate}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/parents/${parent.id}`)}
                        className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        title="Xem chi tiết"
                      >
                        <HiEye className="text-sm" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/parents/${parent.id}/edit`)}
                        className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        title="Chỉnh sửa"
                      >
                        <HiPencil className="text-sm" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedParent(parent);
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
                <td colSpan="8" className="px-5 py-8 text-center text-sm text-slate-500">
                  Không tìm thấy phụ huynh nào
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
                  setSelectedParent(null);
                }}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn xóa phụ huynh <span className="font-semibold">{selectedParent?.name}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setSelectedParent(null);
                }}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log("Deleting parent:", selectedParent?.id);
                  setDeleteModalOpen(false);
                  setSelectedParent(null);
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

export default ParentManagement;

