import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiTrash, HiXMark } from "react-icons/hi2";
import { useState } from "react";

// Mock data - trong thực tế sẽ fetch từ API
const payments = [
  {
    id: 1,
    parentName: "Nguyễn Văn A",
    childName: "Nguyễn Văn B",
    amount: 5000000,
    paymentType: "Học phí",
    status: "Đã thanh toán",
    paymentMethod: "Chuyển khoản",
    paymentDate: "2024-01-15",
    dueDate: "2024-01-10",
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
    paymentDate: "2024-02-20",
    dueDate: "2024-02-20",
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
    paymentDate: "",
    dueDate: "2024-02-10",
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
    paymentDate: "",
    dueDate: "2024-01-10",
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
    paymentDate: "2024-02-15",
    dueDate: "2024-02-10",
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
    paymentDate: "2024-02-18",
    dueDate: "2024-02-15",
    description: "Phí ăn uống tháng 2/2024",
  },
];

const PaymentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const payment = payments.find((p) => p.id === parseInt(id));
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  if (!payment) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy thanh toán</h2>
          <button
            onClick={() => navigate("/admin/payments")}
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

  const formatDate = (dateString) => {
    if (!dateString || dateString === "-") return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/payments")}
            className="rounded-lg px-6 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chi tiết thanh toán</h1>
            <p className="text-sm text-slate-500">ID: #{payment.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
         
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
        {/* Payment Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin thanh toán</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Phụ huynh</p>
              <p className="text-sm text-slate-900">{payment.parentName}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Học sinh</p>
              <p className="text-sm text-slate-900">{payment.childName}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Loại thanh toán</p>
              <p className="text-sm text-slate-900">{payment.paymentType}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Số tiền</p>
              <p className="text-sm font-semibold text-slate-900">{formatCurrency(payment.amount)}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Trạng thái</p>
              {getStatusBadge(payment.status)}
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Phương thức thanh toán</p>
              <p className="text-sm text-slate-900">{payment.paymentMethod || "-"}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Ngày thanh toán</p>
              <p className="text-sm text-slate-900">{formatDate(payment.paymentDate)}</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium text-slate-700">Hạn thanh toán</p>
              <p className="text-sm text-slate-900">{formatDate(payment.dueDate)}</p>
            </div>
            <div className="md:col-span-2">
              <p className="mb-1 text-sm font-medium text-slate-700">Mô tả</p>
              <p className="text-sm text-slate-900">{payment.description || "-"}</p>
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
              Bạn có chắc chắn muốn xóa thanh toán <span className="font-semibold">#{payment.id}</span> của{" "}
              <span className="font-semibold">{payment.parentName}</span>? Hành động này không thể hoàn tác.
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
                  console.log("Deleting payment:", payment.id);
                  navigate("/admin/payments");
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

export default PaymentDetail;

