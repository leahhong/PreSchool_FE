import { useState } from "react";
import { HiCalendarDays } from "react-icons/hi2";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    classRegistration: "",
    parentName: "",
    relationship: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Đơn đăng ký đã được gửi thành công!");
    // TODO: Gửi dữ liệu lên API
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-red-500"></div>
              <div className="absolute inset-2 rounded-full border-4 border-orange-500"></div>
              <div className="absolute inset-4 rounded-full border-4 border-green-500"></div>
              <div className="absolute inset-6 rounded-full border-4 border-blue-500"></div>
              <div className="absolute inset-8 rounded-full bg-white"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-brand-blue">Kiddie Registration</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Child's Information */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-800">Child's Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="childName" className="mb-1 block text-sm font-medium text-slate-700">
                  Child's Name
                </label>
                <select
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                >
                  <option value="">Select child</option>
                  <option value="Child 1">Child 1</option>
                  <option value="Child 2">Child 2</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="dateOfBirth" className="mb-1 block text-sm font-medium text-slate-700">
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="mm/dd/yyyy"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
                <HiCalendarDays className="absolute right-3 top-9 text-gray-400" />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-slate-700">Child's Gender</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                    required
                  />
                  <span className="ml-2 text-sm text-slate-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                    required
                  />
                  <span className="ml-2 text-sm text-slate-700">Female</span>
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="mb-1 block text-sm font-medium text-slate-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter child's address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                required
              ></textarea>
            </div>
          </div>

          {/* Lớp đăng ký */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-800">Lớp đăng ký</h2>
            <div>
              <label htmlFor="classRegistration" className="mb-1 block text-sm font-medium text-slate-700">
                Lớp đăng ký
              </label>
              <select
                id="classRegistration"
                name="classRegistration"
                value={formData.classRegistration}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                required
              >
                <option value="">Chọn lớp</option>
                <option value="Lớp Mầm Non 1">Lớp Mầm Non 1</option>
                <option value="Lớp Mầm Non 2">Lớp Mầm Non 2</option>
                <option value="Lớp Mầm Non 3">Lớp Mầm Non 3</option>
                <option value="Lớp Mầm Non 4">Lớp Mầm Non 4</option>
              </select>
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-800">Parent/Guardian Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="parentName" className="mb-1 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  placeholder="Enter parent/guardian full name"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="relationship" className="mb-1 block text-sm font-medium text-slate-700">
                  Relationship to Child
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                >
                  <option value="">Select relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian">Guardian</option>
                </select>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="rounded-lg border-l-4 border-orange-400 bg-yellow-50 p-4">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Note:</span> The application fee is{" "}
              <span className="font-bold">100,000 VND</span>. If the application is not completed, you will be refunded.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="rounded-lg bg-brand-blue px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
