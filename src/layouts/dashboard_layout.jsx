import { Bell } from 'lucide-react'
import Sidebar from '../components/sidebar'

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Topbar */}
          <header className="flex h-16 items-center justify-between border-b border-gray-200/80 bg-white px-8">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Sistem Manajemen Bimbel
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-xl p-2.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
                <Bell size={20} strokeWidth={1.8} />

                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
              </button>

              <div className="h-7 w-px bg-gray-200" />

              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">
                  Admin
                </p>
                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14532D] text-sm font-semibold text-white">
                A
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout