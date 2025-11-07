import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiPencil, HiTrash, HiUser, HiEnvelope, HiPhone, HiCalendar, HiTag } from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
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
    address: "123 Đường ABC, Quận 1, TP.HCM",
    notes: "Phụ huynh muốn đăng ký cho con học buổi sáng.",
    classRegistration: "Lớp Mầm Non 1",
    gender: "Male",
    dateOfBirth: "01/15/2020",
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
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    notes: "Đã hoàn tất thanh toán.",
    classRegistration: "Lớp Mầm Non 2",
    gender: "Female",
    dateOfBirth: "03/20/2021",
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
    address: "789 Đường DEF, Quận 3, TP.HCM",
    notes: "Không đủ điều kiện.",
    classRegistration: "Lớp Mầm Non 3",
    gender: "Male",
    dateOfBirth: "05/10/2019",
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
    address: "321 Đường GHI, Quận 4, TP.HCM",
    notes: "Đang chờ xét duyệt.",
    classRegistration: "Lớp Mầm Non 1",
    gender: "Female",
    dateOfBirth: "08/25/2020",
    relationship: "Mother",
  },
];

const ApplicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const application = applications.find((app) => app.id === parseInt(id));

  if (!application) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy đơn đăng ký</h2>
          <button
            onClick={() => navigate("/staff/applications")}
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

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/staff/applications")}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chi tiết đơn đăng ký</h1>
            <p className="text-sm text-slate-500">ID: #{application.id}</p>
          </div>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Card */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Trạng thái đơn đăng ký</h2>
              {getStatusBadge(application.status)}
            </div>
          </div>

          {/* Parent Information */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin phụ huynh</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiUser className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Họ và tên</p>
                  <p className="text-sm font-medium text-slate-900">{application.parentName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiEnvelope className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium text-slate-900">{application.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiPhone className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Số điện thoại</p>
                  <p className="text-sm font-medium text-slate-900">{application.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiTag className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Địa chỉ</p>
                  <p className="text-sm font-medium text-slate-900">{application.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiUser className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Mối quan hệ với trẻ</p>
                  <p className="text-sm font-medium text-slate-900">{application.relationship}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Child Information */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin trẻ em</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiUser className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Họ và tên</p>
                  <p className="text-sm font-medium text-slate-900">{application.childName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiCalendar className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Ngày sinh</p>
                  <p className="text-sm font-medium text-slate-900">{application.dateOfBirth}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiTag className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Giới tính</p>
                  <p className="text-sm font-medium text-slate-900">{application.gender}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiCalendar className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Tuổi</p>
                  <p className="text-sm font-medium text-slate-900">{application.childAge} tuổi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiTag className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Lớp đăng ký</p>
                  <p className="text-sm font-medium text-slate-900">{application.classRegistration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          {application.notes && (
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Ghi chú</h2>
              <p className="text-sm text-slate-600">{application.notes}</p>
            </div>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Application Info */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin đơn đăng ký</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500">Ngày đăng ký</p>
                <p className="text-sm font-medium text-slate-900">{application.appliedDate}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Mã đơn</p>
                <p className="text-sm font-medium text-slate-900">#{application.id.toString().padStart(6, "0")}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          {application.status === "Pending" && (
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thao tác nhanh</h2>
              <div className="space-y-2">
                <button className="w-full rounded-lg border border-green-500 bg-white px-4 py-2 text-sm font-medium text-green-500 transition hover:bg-green-50 ">
                  Phê duyệt
                </button>
                <button className="w-full rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
                  Từ chối
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;

