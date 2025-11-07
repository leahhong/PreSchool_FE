import { useNavigate } from "react-router-dom";
import {
  HiUserGroup,
  HiUsers,
  HiAcademicCap,
  HiBuildingOffice2,
  HiDocumentText,
  HiCurrencyDollar,
  HiArrowTrendingUp,
  HiClock,
  HiArrowRight,
} from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
const stats = {
  totalStudents: 150,
  totalParents: 120,
  totalTeachers: 15,
  totalClassrooms: 8,
  totalApplications: 45,
  totalPayments: 320,
  monthlyRevenue: 125000000,
  pendingApplications: 8,
};

// Mock data cho biểu đồ thanh toán theo tháng (6 tháng gần nhất)
const monthlyRevenue = [
  { month: "Tháng 9", revenue: 110000000 },
  { month: "Tháng 10", revenue: 115000000 },
  { month: "Tháng 11", revenue: 120000000 },
  { month: "Tháng 12", revenue: 118000000 },
  { month: "Tháng 1", revenue: 125000000 },
  { month: "Tháng 2", revenue: 130000000 },
];

// Mock data cho trạng thái đơn đăng ký
const applicationStatus = {
  Pending: 8,
  Approved: 30,
  Rejected: 7,
};

// Mock data cho trạng thái thanh toán
const paymentStatus = {
  "Đã thanh toán": 280,
  "Chưa thanh toán": 25,
  "Quá hạn": 15,
};

// Mock data cho số lượng học sinh theo lớp
const studentsByClass = [
  { className: "Lớp Mầm Non 1", count: 18, capacity: 20 },
  { className: "Lớp Mầm Non 2", count: 20, capacity: 20 },
  { className: "Lớp Mầm Non 3", count: 15, capacity: 20 },
  { className: "Lớp Mầm Non 4", count: 12, capacity: 20 },
  { className: "Lớp Mầm Non 5", count: 20, capacity: 20 },
  { className: "Lớp Mầm Non 6", count: 18, capacity: 20 },
  { className: "Lớp Mầm Non 7", count: 20, capacity: 20 },
  { className: "Lớp Mầm Non 8", count: 17, capacity: 20 },
];

// Mock data cho đơn đăng ký gần đây
const recentApplications = [
  {
    id: 1,
    parentName: "Nguyễn Văn A",
    childName: "Nguyễn Văn B",
    appliedDate: "15/11/2024",
    status: "Pending",
  },
  {
    id: 2,
    parentName: "Trần Thị C",
    childName: "Trần Thị D",
    appliedDate: "14/11/2024",
    status: "Approved",
  },
  {
    id: 3,
    parentName: "Lê Văn E",
    childName: "Lê Văn F",
    appliedDate: "13/11/2024",
    status: "Rejected",
  },
  {
    id: 4,
    parentName: "Phạm Thị G",
    childName: "Phạm Thị H",
    appliedDate: "12/11/2024",
    status: "Pending",
  },
];

// Mock data cho thanh toán gần đây
const recentPayments = [
  {
    id: 1,
    parentName: "Nguyễn Văn A",
    childName: "Nguyễn Văn B",
    amount: 5000000,
    paymentDate: "15/11/2024",
    status: "Đã thanh toán",
  },
  {
    id: 2,
    parentName: "Trần Thị B",
    childName: "Trần Văn D",
    amount: 100000,
    paymentDate: "14/11/2024",
    status: "Đã thanh toán",
  },
  {
    id: 3,
    parentName: "Lê Văn C",
    childName: "Lê Thị E",
    amount: 5000000,
    paymentDate: "13/11/2024",
    status: "Chưa thanh toán",
  },
  {
    id: 4,
    parentName: "Phạm Thị D",
    childName: "Phạm Văn H",
    amount: 5000000,
    paymentDate: "12/11/2024",
    status: "Quá hạn",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusBadge = (status) => {
    const styles = {
      Pending: "bg-yellow-100 text-yellow-800",
      Approved: "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
      "Đã thanh toán": "bg-green-100 text-green-800",
      "Chưa thanh toán": "bg-yellow-100 text-yellow-800",
      "Quá hạn": "bg-red-100 text-red-800",
    };
    return (
      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-800"}`}>
        {status}
      </span>
    );
  };

  // Tính toán max revenue để scale biểu đồ
  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.revenue));

  // Tính toán tổng số đơn đăng ký
  const totalAppStatus = Object.values(applicationStatus).reduce((a, b) => a + b, 0);

  // Tính toán tổng số thanh toán
  const totalPaymentStatus = Object.values(paymentStatus).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="my-8">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Tổng quan hệ thống quản lý trường mầm non</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Tổng số học sinh */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Tổng số học sinh</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.totalStudents}</p>
              <p className="mt-1 text-xs text-slate-500">+12% so với tháng trước</p>
            </div>
            <div className="rounded-full bg-blue-100 p-3">
              <HiUserGroup className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>

        {/* Tổng số phụ huynh */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Tổng số phụ huynh</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.totalParents}</p>
              <p className="mt-1 text-xs text-slate-500">+8% so với tháng trước</p>
            </div>
            <div className="rounded-full bg-green-100 p-3">
              <HiUsers className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        {/* Tổng số giáo viên */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Tổng số giáo viên</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.totalTeachers}</p>
              <p className="mt-1 text-xs text-slate-500">+2 so với tháng trước</p>
            </div>
            <div className="rounded-full bg-purple-100 p-3">
              <HiAcademicCap className="text-2xl text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tổng số lớp học */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Tổng số lớp học</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.totalClassrooms}</p>
              <p className="mt-1 text-xs text-slate-500">+1 so với tháng trước</p>
            </div>
            <div className="rounded-full bg-orange-100 p-3">
              <HiBuildingOffice2 className="text-2xl text-orange-600" />
            </div>
          </div>
        </div>

        {/* Tổng số đơn đăng ký */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Tổng số đơn đăng ký</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.totalApplications}</p>
              <p className="mt-1 text-xs text-slate-500">{stats.pendingApplications} đơn đang chờ</p>
            </div>
            <div className="rounded-full bg-yellow-100 p-3">
              <HiDocumentText className="text-2xl text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Tổng số thanh toán */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Tổng số thanh toán</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.totalPayments}</p>
              <p className="mt-1 text-xs text-slate-500">40 thanh toán chưa hoàn thành</p>
            </div>
            <div className="rounded-full bg-indigo-100 p-3">
              <HiCurrencyDollar className="text-2xl text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Doanh thu tháng này */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Doanh thu tháng này</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{formatCurrency(stats.monthlyRevenue)}</p>
              <div className="mt-1 flex items-center gap-1 text-xs text-green-600">
                <HiArrowTrendingUp className="text-sm" />
                <span>+8.5% so với tháng trước</span>
              </div>
            </div>
            <div className="rounded-full bg-emerald-100 p-3">
              <HiCurrencyDollar className="text-2xl text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Đơn đăng ký đang chờ */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Đơn đăng ký đang chờ</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stats.pendingApplications}</p>
              <p className="mt-1 text-xs text-slate-500">Cần xử lý</p>
            </div>
            <div className="rounded-full bg-amber-100 p-3">
              <HiClock className="text-2xl text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Biểu đồ doanh thu theo tháng */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Doanh thu theo tháng</h2>
            <button
              onClick={() => navigate("/admin/payments")}
              className="flex items-center gap-1 text-sm text-brand-blue hover:text-brand-green"
            >
              Xem tất cả <HiArrowRight className="text-xs" />
            </button>
          </div>
          <div className="h-64">
            <div className="flex h-full items-end justify-between gap-2">
              {monthlyRevenue.map((item, index) => {
                const height = (item.revenue / maxRevenue) * 100;
                return (
                  <div key={index} className="flex flex-1 flex-col items-center gap-2">
                    <div className="relative w-full">
                      <div
                        className="w-full rounded-t bg-gradient-to-t from-brand-blue to-brand-green transition-all hover:opacity-80"
                        style={{ height: `${height}%`, minHeight: "4px" }}
                        title={`${formatCurrency(item.revenue)}`}
                      />
                    </div>
                    <p className="text-xs text-slate-600">{item.month.split(" ")[1]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Biểu đồ trạng thái đơn đăng ký */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Trạng thái đơn đăng ký</h2>
            <button
              onClick={() => navigate("/staff/applications")}
              className="flex items-center gap-1 text-sm text-brand-blue hover:text-brand-green"
            >
              Xem tất cả <HiArrowRight className="text-xs" />
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(applicationStatus).map(([status, count]) => {
              const percentage = (count / totalAppStatus) * 100;
              const colors = {
                Pending: "bg-yellow-500",
                Approved: "bg-green-500",
                Rejected: "bg-red-500",
              };
              return (
                <div key={status}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{status}</span>
                    <span className="text-slate-600">
                      {count} ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full transition-all ${colors[status] || "bg-gray-500"}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Biểu đồ trạng thái thanh toán */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Trạng thái thanh toán</h2>
            <button
              onClick={() => navigate("/admin/payments")}
              className="flex items-center gap-1 text-sm text-brand-blue hover:text-brand-green"
            >
              Xem tất cả <HiArrowRight className="text-xs" />
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(paymentStatus).map(([status, count]) => {
              const percentage = (count / totalPaymentStatus) * 100;
              const colors = {
                "Đã thanh toán": "bg-green-500",
                "Chưa thanh toán": "bg-yellow-500",
                "Quá hạn": "bg-red-500",
              };
              return (
                <div key={status}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{status}</span>
                    <span className="text-slate-600">
                      {count} ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full transition-all ${colors[status] || "bg-gray-500"}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Biểu đồ số lượng học sinh theo lớp */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Số lượng học sinh theo lớp</h2>
            <button
              onClick={() => navigate("/staff/classrooms")}
              className="flex items-center gap-1 text-sm text-brand-blue hover:text-brand-green"
            >
              Xem tất cả <HiArrowRight className="text-xs" />
            </button>
          </div>
          <div className="space-y-3">
            {studentsByClass.map((item, index) => {
              const percentage = (item.count / item.capacity) * 100;
              return (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.className}</span>
                    <span className="text-slate-600">
                      {item.count}/{item.capacity}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full transition-all ${
                        percentage >= 100
                          ? "bg-blue-500"
                          : percentage >= 80
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Đơn đăng ký gần đây */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Đơn đăng ký gần đây</h2>
            <button
              onClick={() => navigate("/staff/applications")}
              className="flex items-center gap-1 text-sm text-brand-blue hover:text-brand-green"
            >
              Xem tất cả <HiArrowRight className="text-xs" />
            </button>
          </div>
          <div className="space-y-3">
            {recentApplications.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 p-3 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => navigate(`/staff/applications/${app.id}`)}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{app.childName}</p>
                  <p className="text-xs text-slate-500">{app.parentName}</p>
                  <p className="text-xs text-slate-400 mt-1">{app.appliedDate}</p>
                </div>
                {getStatusBadge(app.status)}
              </div>
            ))}
          </div>
        </div>

        {/* Thanh toán gần đây */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Thanh toán gần đây</h2>
            <button
              onClick={() => navigate("/admin/payments")}
              className="flex items-center gap-1 text-sm text-brand-blue hover:text-brand-green"
            >
              Xem tất cả <HiArrowRight className="text-xs" />
            </button>
          </div>
          <div className="space-y-3">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 p-3 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => navigate(`/admin/payments/${payment.id}`)}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{payment.childName}</p>
                  <p className="text-xs text-slate-500">{payment.parentName}</p>
                  <p className="text-xs font-semibold text-slate-900 mt-1">{formatCurrency(payment.amount)}</p>
                  <p className="text-xs text-slate-400 mt-1">{payment.paymentDate}</p>
                </div>
                {getStatusBadge(payment.status)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
