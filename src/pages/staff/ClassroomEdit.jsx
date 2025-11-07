import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiCheck, HiXMark, HiUserPlus, HiXCircle, HiMagnifyingGlass } from "react-icons/hi2";

// Mock data - trong thực tế sẽ fetch từ API
const classrooms = [
  {
    id: 1,
    name: "Lớp Mầm Non 1",
    capacity: 20,
    currentStudents: 18,
    teacher: "Cô Lan Anh",
    ageGroup: "3-4 tuổi",
    status: "Active",
    students: [
      { id: 1, name: "Nguyễn Văn B", age: 4, parentName: "Nguyễn Văn A" },
      { id: 2, name: "Trần Thị D", age: 3, parentName: "Trần Thị C" },
    ],
  },
  {
    id: 2,
    name: "Lớp Mầm Non 2",
    capacity: 20,
    currentStudents: 20,
    teacher: "Cô Minh Hương",
    ageGroup: "4-5 tuổi",
    status: "Full",
    students: [],
  },
  {
    id: 3,
    name: "Lớp Mầm Non 3",
    capacity: 20,
    currentStudents: 15,
    teacher: "Thầy Văn Đức",
    ageGroup: "5-6 tuổi",
    status: "Active",
    students: [],
  },
  {
    id: 4,
    name: "Lớp Mầm Non 4",
    capacity: 20,
    currentStudents: 0,
    teacher: "Chưa phân công",
    ageGroup: "3-4 tuổi",
    status: "Inactive",
    students: [],
  },
];

// Mock data - các học sinh đã approved nhưng chưa có lớp
const availableStudents = [
  {
    id: 101,
    childName: "Lê Văn G",
    childAge: 4,
    parentName: "Lê Văn H",
    email: "levanh@example.com",
    phone: "0905 123 456",
    gender: "Male",
    dateOfBirth: "02/15/2020",
    classRegistration: "Lớp Mầm Non 1",
    status: "Approved",
    classroomId: null, // Chưa có lớp
  },
  {
    id: 102,
    childName: "Phạm Thị I",
    childAge: 3,
    parentName: "Phạm Thị J",
    email: "phamthij@example.com",
    phone: "0906 234 567",
    gender: "Female",
    dateOfBirth: "04/10/2021",
    classRegistration: "Lớp Mầm Non 1",
    status: "Approved",
    classroomId: null,
  },
  {
    id: 103,
    childName: "Hoàng Văn K",
    childAge: 5,
    parentName: "Hoàng Văn L",
    email: "hoangvanl@example.com",
    phone: "0907 345 678",
    gender: "Male",
    dateOfBirth: "06/20/2019",
    classRegistration: "Lớp Mầm Non 3",
    status: "Approved",
    classroomId: null,
  },
  {
    id: 104,
    childName: "Vũ Thị M",
    childAge: 4,
    parentName: "Vũ Thị N",
    email: "vuthin@example.com",
    phone: "0908 456 789",
    gender: "Female",
    dateOfBirth: "09/05/2020",
    classRegistration: "Lớp Mầm Non 1",
    status: "Approved",
    classroomId: null,
  },
];

// Hàm tự động cập nhật trạng thái dựa trên sĩ số
const updateStatusBasedOnCapacity = (currentStudents, capacity) => {
  if (currentStudents === 0) {
    return "Inactive";
  } else if (currentStudents >= capacity) {
    return "Full";
  } else {
    return "Active";
  }
};

const ClassroomEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const classroom = classrooms.find((c) => c.id === parseInt(id));

  const [formData, setFormData] = useState(() => {
    const initialData = classroom || {
      name: "",
      ageGroup: "",
      teacher: "",
      capacity: 20,
      currentStudents: 0,
      students: [],
    };
    // Tự động tính trạng thái ban đầu dựa trên sĩ số
    initialData.status = updateStatusBasedOnCapacity(initialData.currentStudents, initialData.capacity);
    return initialData;
  });

  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [studentSearchQuery, setStudentSearchQuery] = useState("");

  // Lọc các học sinh đã approved nhưng chưa có lớp và phù hợp với độ tuổi của lớp
  const getAvailableStudents = () => {
    return availableStudents.filter((student) => {
      const matchesAgeGroup =
        (formData.ageGroup === "3-4 tuổi" && student.childAge >= 3 && student.childAge <= 4) ||
        (formData.ageGroup === "4-5 tuổi" && student.childAge >= 4 && student.childAge <= 5) ||
        (formData.ageGroup === "5-6 tuổi" && student.childAge >= 5 && student.childAge <= 6);
      
      const matchesSearch =
        student.childName.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
        student.parentName.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(studentSearchQuery.toLowerCase());

      return student.status === "Approved" && student.classroomId === null && matchesAgeGroup && matchesSearch;
    });
  };

  const handleToggleStudent = (studentId) => {
    setSelectedStudentIds((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId]
    );
  };

  const handleAddStudents = () => {
    if (selectedStudentIds.length === 0) {
      alert("Vui lòng chọn ít nhất một học sinh!");
      return;
    }

    const newStudentCount = selectedStudentIds.length;
    if (formData.currentStudents + newStudentCount > formData.capacity) {
      alert(`Không thể thêm ${newStudentCount} học sinh. Lớp chỉ còn ${formData.capacity - formData.currentStudents} chỗ trống.`);
      return;
    }

    // Cập nhật formData với học sinh mới
    const newStudents = availableStudents.filter((s) => selectedStudentIds.includes(s.id));
    setFormData((prev) => {
      const newCurrentStudents = prev.currentStudents + newStudentCount;
      return {
        ...prev,
        currentStudents: newCurrentStudents,
        students: [...(prev.students || []), ...newStudents],
        status: updateStatusBasedOnCapacity(newCurrentStudents, prev.capacity),
      };
    });

    // TODO: Gửi dữ liệu lên API để cập nhật classroomId cho các học sinh

    setSelectedStudentIds([]);
    setShowAddStudentModal(false);
    setStudentSearchQuery("");
    alert(`Đã thêm ${newStudentCount} học sinh vào lớp thành công!`);
  };

  const handleRemoveStudent = (studentId) => {
    setFormData((prev) => {
      const updatedStudents = (prev.students || []).filter((s) => s.id !== studentId);
      const newCurrentStudents = updatedStudents.length;
      return {
        ...prev,
        currentStudents: newCurrentStudents,
        students: updatedStudents,
        status: updateStatusBasedOnCapacity(newCurrentStudents, prev.capacity),
      };
    });
    // TODO: Gửi dữ liệu lên API để xóa học sinh khỏi lớp
  };

  if (!classroom) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Không tìm thấy lớp học</h2>
          <button
            onClick={() => navigate("/staff/classrooms")}
            className="mt-4 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };
      
      // Tự động cập nhật trạng thái khi sĩ số hoặc sức chứa thay đổi
      if (name === "currentStudents" || name === "capacity") {
        const currentStudents = name === "currentStudents" ? parseInt(value) || 0 : prev.currentStudents;
        const capacity = name === "capacity" ? parseInt(value) || 20 : prev.capacity;
        updated.status = updateStatusBasedOnCapacity(currentStudents, capacity);
      }
      
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating classroom:", formData);
    // TODO: Gửi dữ liệu lên API
    alert("Lớp học đã được cập nhật thành công!");
    navigate("/staff/classrooms");
  };

  const getCapacityPercentage = (current, capacity) => {
    return Math.round((current / capacity) * 100);
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 100) return "bg-blue-300";
    if (percentage >= 80) return "bg-yellow-300";
    return "bg-green-300";
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/staff/classrooms")}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Chỉnh sửa lớp học</h1>
            <p className="text-sm text-slate-500">ID: #{classroom.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/staff/classrooms")}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
          >
            <HiXMark className="text-sm" />
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-lg bg-brand-green px-6 py-2 me-5 text-sm font-medium text-white transition"
          >
            <HiCheck className="text-sm" />
            Lưu thay đổi
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Thông tin lớp học</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Tên lớp</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên lớp học..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Độ tuổi</label>
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  >
                    <option value="">Chọn độ tuổi</option>
                    <option value="3-4 tuổi">3-4 tuổi</option>
                    <option value="4-5 tuổi">4-5 tuổi</option>
                    <option value="5-6 tuổi">5-6 tuổi</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Giáo viên</label>
                  <select
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="">Chọn giáo viên</option>
                    <option value="Cô Lan Anh">Cô Lan Anh</option>
                    <option value="Cô Minh Hương">Cô Minh Hương</option>
                    <option value="Thầy Văn Đức">Thầy Văn Đức</option>
                    <option value="Cô Thanh Mai">Cô Thanh Mai</option>
                    <option value="Chưa phân công">Chưa phân công</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Sức chứa (số học sinh tối đa)</label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    min="1"
                    max="30"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Students List */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Danh sách học sinh</h2>
                <button
                  type="button"
                  onClick={() => setShowAddStudentModal(true)}
                  disabled={formData.currentStudents >= formData.capacity}
                  className="flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-blue/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <HiUserPlus className="text-sm" />
                  Thêm học sinh
                </button>
              </div>
              
              {formData.students && formData.students.length > 0 ? (
                <div className="space-y-2">
                  {formData.students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{student.childName || student.name}</p>
                        <p className="text-sm text-slate-500">
                          {student.childAge || student.age} tuổi • Phụ huynh: {student.parentName}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveStudent(student.id)}
                        className="ml-4 rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                        title="Xóa khỏi lớp"
                      >
                        <HiXCircle className="text-lg" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-slate-500">
                  Chưa có học sinh nào trong lớp. Nhấn "Thêm học sinh" để thêm học sinh vào lớp.
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Trạng thái</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Trạng thái lớp học</label>
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        formData.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : formData.status === "Full"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {formData.status}
                    </span>
                    <p className="text-xs text-slate-500">
                      (Tự động cập nhật theo sĩ số)
                    </p>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Sĩ số hiện tại</label>
                  <input
                    type="number"
                    name="currentStudents"
                    value={formData.currentStudents}
                    onChange={handleChange}
                    min="0"
                    max={formData.capacity}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Tối đa: {formData.capacity} học sinh
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Tỷ lệ sĩ số</label>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-900">
                      {formData.currentStudents}/{formData.capacity}
                    </span>
                    <div className="flex-1 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full ${getProgressBarColor(getCapacityPercentage(formData.currentStudents, formData.capacity))}`}
                        style={{ width: `${getCapacityPercentage(formData.currentStudents, formData.capacity)}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500">
                      {getCapacityPercentage(formData.currentStudents, formData.capacity)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Add Student Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-lg bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Thêm học sinh vào lớp</h3>
              <button
                onClick={() => {
                  setShowAddStudentModal(false);
                  setSelectedStudentIds([]);
                  setStudentSearchQuery("");
                }}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[60vh] overflow-y-auto p-6">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên học sinh, phụ huynh hoặc email..."
                    value={studentSearchQuery}
                    onChange={(e) => setStudentSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>
              </div>

              {/* Students List */}
              <div className="space-y-2">
                {getAvailableStudents().length > 0 ? (
                  getAvailableStudents().map((student) => (
                    <div
                      key={student.id}
                      onClick={() => handleToggleStudent(student.id)}
                      className={`cursor-pointer rounded-lg border p-4 transition ${
                        selectedStudentIds.includes(student.id)
                          ? "border-brand-blue bg-brand-blue/10"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <input
                          type="checkbox"
                          checked={selectedStudentIds.includes(student.id)}
                          onChange={() => handleToggleStudent(student.id)}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{student.childName}</p>
                          <p className="text-sm text-slate-500">
                            {student.childAge} tuổi • {student.gender}
                          </p>
                          <p className="text-sm text-slate-500">
                            Phụ huynh: {student.parentName} • {student.email}
                          </p>
                          <p className="text-sm text-slate-500">Điện thoại: {student.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-sm text-slate-500">
                    {studentSearchQuery
                      ? "Không tìm thấy học sinh nào phù hợp với từ khóa tìm kiếm."
                      : "Không có học sinh nào đã được duyệt và phù hợp với độ tuổi của lớp này."}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-200 p-6">
              <p className="text-sm text-slate-600">
                Đã chọn: <span className="font-semibold">{selectedStudentIds.length}</span> học sinh
                {formData.capacity - formData.currentStudents > 0 && (
                  <span className="ml-2">
                    (Còn {formData.capacity - formData.currentStudents} chỗ trống)
                  </span>
                )}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setShowAddStudentModal(false);
                    setSelectedStudentIds([]);
                    setStudentSearchQuery("");
                  }}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddStudents}
                  disabled={selectedStudentIds.length === 0}
                  className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-blue/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Thêm học sinh ({selectedStudentIds.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassroomEdit;
