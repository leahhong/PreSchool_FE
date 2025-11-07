import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiTrash, HiMagnifyingGlass, HiFunnel, HiChevronDown, HiXMark } from "react-icons/hi2";

const payments = [
  {
    id: 1,
    parentName: "Nguyễn Văn A",
    childName: "Nguyễn Văn B",
    amount: 5000000,
    paymentType: "Học phí",
    status: "Đã thanh toán",
    paymentMethod: "Chuyển khoản",
    paymentDate: "01/15/2024",
    dueDate: "01/10/2024",
    description: "Học phí tháng 1/2024",
  },
  {
    id: 2,
    parentName: "Trần Thị B",
    childName: "Trần Văn D",
    amount: 100000,
    paymentType: "Phí đăng ký",
    status: "Đã thanh toán",
    paymentMethod: "Tiền mặt",
    paymentDate: "02/20/2024",
    dueDate: "02/20/2024",
    description: "Phí đăng ký nhập học",
  },
  {
    id: 3,
    parentName: "Lê Văn C",
    childName: "Lê Thị E",
    amount: 5000000,
    paymentType: "Học phí",
    status: "Chưa thanh toán",
    paymentMethod: "-",
    paymentDate: "-",
    dueDate: "02/10/2024",
    description: "Học phí tháng 2/2024",
  },
  {
    id: 4,
    parentName: "Phạm Thị D",
    childName: "Phạm Văn H",
    amount: 5000000,
    paymentType: "Học phí",
    status: "Quá hạn",
    paymentMethod: "-",
    paymentDate: "-",
    dueDate: "01/10/2024",
    description: "Học phí tháng 1/2024",
  },
  {
    id: 5,
    parentName: "Nguyễn Văn A",
    childName: "Nguyễn Thị C",
    amount: 5000000,
    paymentType: "Học phí",
    status: "Đã thanh toán",
    paymentMethod: "Chuyển khoản",
    paymentDate: "02/15/2024",
    dueDate: "02/10/2024",
    description: "Học phí tháng 2/2024",
  },
  {
    id: 6,
    parentName: "Lê Văn C",
    childName: "Lê Văn F",
    amount: 2000000,
    paymentType: "Phí ăn uống",
    status: "Đã thanh toán",
    paymentMethod: "Tiền mặt",
    paymentDate: "02/18/2024",
    dueDate: "02/15/2024",
    description: "Phí ăn uống tháng 2/2024",
  },
];

const PaymentManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const statusOptions = ["Tất cả", "Đã thanh toán", "Chưa thanh toán", "Quá hạn"];

  const getStatusBadge = (status) => {
    const styles = {
      "Đã thanh toán": "bg-green-100 text-green-800",
      "Chưa thanh toán": "bg-yellow-100 text-yellow-800",
      "Quá hạn": "bg-red-100 text-red-800",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-800"}`}>
        {status}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.paymentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "Tất cả" || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Payment Management</h1>
      </div>

      {/* Search Bar and Filter */}
      <div className="mb-4 flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên phụ huynh, học sinh, loại thanh toán..."
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
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Phụ huynh</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Học sinh</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Loại thanh toán</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Số tiền</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Trạng thái</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Ngày thanh toán</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Hạn thanh toán</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredPayments.length > 0 ? (
              filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-900">#{payment.id}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900">{payment.parentName}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{payment.childName}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{payment.paymentType}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900">{formatCurrency(payment.amount)}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm">{getStatusBadge(payment.status)}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{payment.paymentDate}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{payment.dueDate}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/payments/${payment.id}`)}
                        className="rounded p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                        title="Xem chi tiết"
                      >
                        <HiEye className="text-sm" />
                      </button>
                      
                      <button
                        onClick={() => {
                          setSelectedPayment(payment);
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
                  Không tìm thấy thanh toán nào
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
                  setSelectedPayment(null);
                }}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Bạn có chắc chắn muốn xóa thanh toán <span className="font-semibold">#{selectedPayment?.id}</span> của{" "}
              <span className="font-semibold">{selectedPayment?.parentName}</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setSelectedPayment(null);
                }}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  console.log("Deleting payment:", selectedPayment?.id);
                  setDeleteModalOpen(false);
                  setSelectedPayment(null);
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

export default PaymentManagement;
