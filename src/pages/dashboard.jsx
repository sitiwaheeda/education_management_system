import {
  Users,
  UserCheck,
  CalendarDays,
  CreditCard,
  Clock3,
  ChevronRight,
  CheckCircle2,
  CircleAlert,
} from 'lucide-react'

import DashboardLayout from '../layouts/dashboard_layout'

const summaryData = [
  {
    label: 'Jumlah Siswa',
    value: '128',
    description: 'Total siswa terdaftar',
    icon: Users,
  },
  {
    label: 'Siswa Aktif',
    value: '96',
    description: 'Sedang mengikuti program',
    icon: UserCheck,
  },
  {
    label: 'Kelas Hari Ini',
    value: '12',
    description: 'Dari seluruh cabang',
    icon: CalendarDays,
  },
  {
    label: 'Pembayaran',
    value: 'Rp 4,8 jt',
    description: 'Transaksi bulan ini',
    icon: CreditCard,
  },
]

const schedules = [
  {
    time: '16.15 – 17.15',
    program: 'Tahfidz',
    className: 'Tahfidz A',
    teacher: 'Ust. Ahmad',
    students: '12 siswa',
  },
  {
    time: '17.30 – 18.30',
    program: 'CBQ',
    className: 'CBQ B',
    teacher: 'Ust. Ali',
    students: '15 siswa',
  },
  {
    time: '19.00 – 20.00',
    program: 'CBQ',
    className: 'CBQ C',
    teacher: 'Ust. Fatimah',
    students: '10 siswa',
  },
]

const payments = [
  {
    student: 'Ahmad Fauzan',
    description: 'Pembayaran CBQ',
    amount: 'Rp 150.000',
  },
  {
    student: 'Siti Aisyah',
    description: 'Pembayaran Tahfidz',
    amount: 'Rp 200.000',
  },
  {
    student: 'Muhammad Rizky',
    description: 'Pembayaran CBQ',
    amount: 'Rp 150.000',
  },
]

function SummaryCard({ item }) {
  const Icon = item.icon

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm shadow-gray-100/50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {item.label}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {item.value}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {item.description}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#14532D]">
          <Icon size={20} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px]">
        {/* Welcome */}
        <section className="mb-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold tracking-wide text-[#14532D]">
              Ahlan wa Sahlan
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Selamat datang di Bimbel Management System
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Jaga amanah, utamakan kejujuran, dan kelola setiap
              aktivitas dengan penuh tanggung jawab.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryData.map((item) => (
            <SummaryCard key={item.label} item={item} />
          ))}
        </section>

        {/* Main Grid */}
        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          {/* Schedule */}
          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-gray-100/50">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <h2 className="font-semibold text-gray-900">
                  Jadwal Hari Ini
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Kelas yang berlangsung hari ini
                </p>
              </div>

              <button className="flex items-center gap-1 text-xs font-semibold text-[#14532D] hover:text-[#166534]">
                Lihat semua
                <ChevronRight size={15} />
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {schedules.map((schedule) => (
                <div
                  key={`${schedule.time}-${schedule.className}`}
                  className="flex items-center gap-5 px-6 py-4 transition hover:bg-gray-50/70"
                >
                  <div className="flex w-28 shrink-0 items-center gap-2 text-xs font-medium text-gray-500">
                    <Clock3 size={15} />
                    {schedule.time}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {schedule.className}
                      </h3>

                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-[#14532D]">
                        {schedule.program}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      {schedule.teacher} · {schedule.students}
                    </p>
                  </div>

                  <span className="hidden text-xs text-gray-400 sm:block">
                    Hari ini
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance */}
          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-gray-100/50">
            <div className="border-b border-gray-100 px-6 py-5">
              <h2 className="font-semibold text-gray-900">
                Kehadiran Hari Ini
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Ringkasan kehadiran siswa
              </p>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Kehadiran
                  </span>

                  <span className="text-sm font-bold text-[#14532D]">
                    86%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[86%] rounded-full bg-[#14532D]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <div className="flex items-center gap-2 text-[#14532D]">
                    <CheckCircle2 size={17} />
                    <span className="text-xs font-medium">
                      Hadir
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    86%
                  </p>
                </div>

                <div className="rounded-xl bg-red-50 p-4">
                  <div className="flex items-center gap-2 text-red-600">
                    <CircleAlert size={17} />
                    <span className="text-xs font-medium">
                      Alpa
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    6%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between rounded-lg border border-gray-100 px-3 py-2.5">
                  <span className="text-gray-500">Izin</span>
                  <span className="font-semibold text-gray-700">
                    5%
                  </span>
                </div>

                <div className="flex justify-between rounded-lg border border-gray-100 px-3 py-2.5">
                  <span className="text-gray-500">Sakit</span>
                  <span className="font-semibold text-gray-700">
                    3%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Grid */}
        <section className="mt-6 grid gap-6 xl:grid-cols-2">
          {/* Outstanding */}
          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-gray-100/50">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <h2 className="font-semibold text-gray-900">
                  Tagihan Belum Lunas
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Pembayaran yang masih perlu ditindaklanjuti
                </p>
              </div>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
                8 tagihan
              </span>
            </div>

            <div className="space-y-1 p-4">
              <div className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Ahmad Fauzan
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    CBQ · Oktober 2026
                  </p>
                </div>

                <p className="text-sm font-semibold text-gray-800">
                  Rp 150.000
                </p>
              </div>

              <div className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Aisyah Putri
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Tahfidz · Oktober 2026
                  </p>
                </div>

                <p className="text-sm font-semibold text-gray-800">
                  Rp 200.000
                </p>
              </div>

              <div className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Muhammad Rizky
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    CBQ · Oktober 2026
                  </p>
                </div>

                <p className="text-sm font-semibold text-gray-800">
                  Rp 150.000
                </p>
              </div>
            </div>
          </div>

          {/* Recent Payments */}
          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-gray-100/50">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <div>
                <h2 className="font-semibold text-gray-900">
                  Pembayaran Terbaru
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Transaksi pembayaran yang baru dicatat
                </p>
              </div>

              <button className="text-xs font-semibold text-[#14532D] hover:text-[#166534]">
                Lihat semua
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {payments.map((payment, index) => (
                <div
                  key={`${payment.student}-${index}`}
                  className="flex items-center gap-3 px-6 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-[#14532D]">
                    {payment.student
                      .split(' ')
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join('')}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-800">
                      {payment.student}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {payment.description}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    {payment.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard