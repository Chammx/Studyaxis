export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        StudyAxis Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">
            Total Leads
          </h2>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">
            Pending Applications
          </h2>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">
            Visa Approvals
          </h2>

          <p className="text-4xl font-bold mt-4">
            0
          </p>
        </div>
      </div>
    </main>
  )
}