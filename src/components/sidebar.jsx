import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const mainMenus = [
  {
    label: 'Beranda',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Siswa',
    path: '/students',
    icon: Users,
  },
  {
    label: 'Guru',
    path: '/teachers',
    icon: GraduationCap,
  },
  {
    label: 'Program',
    path: '/programs',
    icon: BookOpen,
  },
  {
    label: 'Kelas & Jadwal',
    path: '/classes',
    icon: CalendarDays,
  },
]

const activityMenus = [
  {
    label: 'Kehadiran',
    path: '/attendance',
    icon: ClipboardCheck,
  },
  {
    label: 'Tagihan & Pembayaran',
    path: '/payments',
    icon: CreditCard,
  },
]

const otherMenus = [
  {
    label: 'Laporan',
    path: '/reports',
    icon: BarChart3,
  },
  {
    label: 'Pengaturan',
    path: '/settings',
    icon: Settings,
  },
]

function MenuItem({ item }) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
          isActive
            ? 'bg-white/15 text-white'
            : 'text-emerald-100 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      <Icon size={19} strokeWidth={1.8} />
      <span>{item.label}</span>
    </NavLink>
  )
}

function SidebarSection({ title, menus }) {
  return (
    <div className="mb-7">
      <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/70">
        {title}
      </p>

      <div className="space-y-1">
        {menus.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-[#14532D] px-4 py-5">
      {/* Logo */}
      <div className="mb-9 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#14532D]">
          <BookOpen size={21} strokeWidth={2} />
        </div>

        <div>
          <h1 className="text-sm font-bold tracking-tight text-white">
            Bimbel
          </h1>
          <p className="text-[11px] text-emerald-200">
            Management System
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <SidebarSection title="Utama" menus={mainMenus} />
        <SidebarSection title="Aktivitas" menus={activityMenus} />
        <SidebarSection title="Lainnya" menus={otherMenus} />
      </nav>

      {/* User */}
      <div className="border-t border-white/10 pt-4">
        <div className="flex items-center gap-3 rounded-xl px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold text-white">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Admin
            </p>
            <p className="truncate text-xs text-emerald-200">
              Administrator
            </p>
          </div>

          <ChevronDown size={16} className="text-emerald-200" />
        </div>

        <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-emerald-100 transition hover:bg-white/10 hover:text-white">
          <LogOut size={18} strokeWidth={1.8} />
          Keluar
        </button>
      </div>
    </aside>
  )
}

export default Sidebar