# Education Management System

A web-based **Education Management System** designed to help educational foundations manage multiple TK and tutoring branches in one centralized system.

The system covers **student management, teacher management, class scheduling, attendance, enrollment, billing, payments, financial reporting, and receipt management**.

> 🚧 **Project Status:** In Development

---

## 📌 Overview

This project is developed to simplify the daily operational and administrative processes of an educational foundation that manages multiple branches and education programs.

The system supports students who may enroll in **multiple programs simultaneously**, such as:

- TK program in the morning
- Mathematics tutoring in the afternoon
- English tutoring in another schedule

Each enrollment is managed independently, including its attendance, status, billing period, and payment history.

---

## 🎯 Main Goals

- Centralize data from multiple branches
- Manage students, teachers, programs, classes, and schedules
- Record student and teacher attendance
- Automatically detect consecutive student absences
- Automatically change enrollment status to **HIATUS** based on attendance rules
- Manage rolling billing periods
- Record and track payments
- Generate payment receipts
- Support financial reporting
- Prepare integration for sending receipts through WhatsApp
- Provide role-based dashboards for administrators and teachers

---

## ✨ Main Features

### 1. Branch Management
- Manage multiple TK and tutoring branches
- Manage rooms within each branch
- Assign classes and schedules to specific branches

### 2. Student Management
- Student profiles
- Parent/guardian information
- Multiple program enrollments per student
- Enrollment status tracking

### 3. Program & Class Management

The system separates **programs** from **classes**.

Example:

```text
Program
└── Mathematics

Classes
├── Mathematics A
├── Mathematics B
└── Mathematics C
```

This allows one program to have multiple class groups with different teachers, rooms, and schedules.

### 4. Scheduling

Each class can have its own schedule, teacher, and room.

Example:

```text
Branch A — 16:15–17:15

Room 1 → Mathematics A → Teacher A
Room 2 → English A    → Teacher B
Room 3 → Calistung A  → Teacher C
Room 4 → Mathematics B → Teacher D
Room 5 → English B    → Teacher E
```

The system prevents scheduling conflicts such as:

- One teacher teaching two classes at the same time
- One room being used by two classes at the same time

### 5. Attendance

#### Student Attendance

Teachers can record attendance for each class session.

Attendance statuses may include:

- `PRESENT`
- `ALPA`
- `IZIN`
- `SAKIT`

Attendance is connected to the student's specific enrollment/class rather than only the student.

#### Teacher Attendance

The system also records teacher attendance, including:

- Check-in
- Check-out
- Attendance status

### 6. Automatic Hiatus

For tutoring students, the system can detect consecutive absences.

Example:

```text
Mathematics Enrollment

Session 1 → ALPA
Session 2 → ALPA
Session 3 → ALPA
                ↓
             HIATUS
```

The hiatus status applies to the **specific enrollment**, not the entire student.

Therefore:

```text
Aisyah

TK          → ACTIVE
Mathematics → HIATUS
English     → ACTIVE
```

When the student attends again:

```text
HIATUS
   ↓
PRESENT
   ↓
ACTIVE
```

### 7. Billing & Payment

The system uses a **billing-period-based approach**.

Example:

```text
Payment Date:      9 March
Active Since:      6 March

Billing Period:
6 March → 5 April
```

The billing period starts based on when the student becomes active, not necessarily the date when the payment is made.

A single payment transaction can also cover multiple programs.

Example:

```text
Payment #001

Aisyah
├── TK          Rp750.000
└── Mathematics Rp300.000
                 ─────────
Total           Rp1.050.000
```

### 8. Payment Receipt

After an administrator confirms a payment:

```text
Payment
   ↓
Admin Confirmation
   ↓
Generate Receipt
   ↓
Send Receipt via WhatsApp
```

WhatsApp delivery status is tracked separately from payment status.

```text
Payment Status
→ PAID

WhatsApp Status
→ SENT / FAILED
```

A failed WhatsApp delivery does not change the payment status.

### 9. Financial Management

The system provides financial records for:

- Income
- Expenses
- Payments
- Outstanding bills
- Branch-level financial reports
- Date-based financial reports
- Revenue and expense summaries

### 10. Dashboard

#### Super Admin

Can view data across all branches.

Dashboard metrics may include:

- Total students
- Active students
- Hiatus students
- Total teachers
- Total branches
- Revenue
- Expenses
- Outstanding payments
- Attendance statistics

#### Branch Admin

Can only access data belonging to their assigned branch.

#### Teacher

Can access:

- Today's schedule
- Assigned classes
- Student lists
- Attendance
- Attendance history

---

## 👥 User Roles

| Role | Access |
|---|---|
| `SUPER_ADMIN` | All branches and system data |
| `ADMIN_CABANG` | Assigned branch |
| `GURU` | Assigned classes and attendance |

A parent/student portal may be added in a future version.

---

## 🏗️ System Architecture

```text
┌─────────────────────┐
│      React + Vite   │
│      Tailwind CSS   │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│       Laravel       │
│   Backend / API     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│        MySQL        │
│      Database       │
└─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- REST API

### Backend
- Laravel
- PHP
- REST API

### Database
- MySQL

### Design
- Figma

### Additional Integration
- WhatsApp Business API / WhatsApp provider
- PDF generation

---

## 🗄️ Database Overview

The planned database structure includes:

```text
users
students
parents
teachers

branches
rooms

programs
classes
class_schedules

enrollments
enrollment_status_histories

attendance_sessions
student_attendances
teacher_attendances

billing_periods
payments
payment_items
receipts

expenses
income_categories
expense_categories
```

### High-Level Relationship

```text
BRANCH
 ├── ROOMS
 └── CLASSES
       └── CLASS SCHEDULES
              └── ATTENDANCE SESSIONS
                     └── STUDENT ATTENDANCES


STUDENT
 └── ENROLLMENTS
       ├── PROGRAM
       ├── BRANCH
       ├── CLASS
       └── STATUS HISTORY
              │
              ▼
        BILLING PERIOD
              │
              ▼
           PAYMENT
              │
              ▼
          RECEIPT
              │
              ▼
          WHATSAPP
```

---

## 📂 Project Structure

### Frontend

```text
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   ├── services/
│   ├── hooks/
│   ├── assets/
│   └── utils/
├── public/
└── package.json
```

### Backend

```text
backend/
├── app/
│   ├── Models/
│   ├── Http/
│   └── Services/
├── database/
│   ├── migrations/
│   └── seeders/
├── routes/
├── resources/
└── composer.json
```

---

## 🚀 Development Roadmap

### Phase 1 — Foundation
- [ ] Project setup
- [ ] Database setup
- [ ] Authentication
- [ ] Role & permission system

### Phase 2 — Master Data
- [ ] Branch management
- [ ] Room management
- [ ] Teacher management
- [ ] Student management
- [ ] Program management
- [ ] Class management
- [ ] Schedule management

### Phase 3 — Enrollment
- [ ] Student enrollment
- [ ] Multiple program enrollment
- [ ] Enrollment status
- [ ] Status history

### Phase 4 — Attendance
- [ ] Class attendance sessions
- [ ] Student attendance
- [ ] Teacher attendance
- [ ] Consecutive absence detection
- [ ] Automatic hiatus
- [ ] Reactivation

### Phase 5 — Finance
- [ ] Billing periods
- [ ] Payment management
- [ ] Payment history
- [ ] Income management
- [ ] Expense management
- [ ] Financial reports

### Phase 6 — Receipt & WhatsApp
- [ ] Receipt generation
- [ ] PDF receipt
- [ ] WhatsApp integration
- [ ] WhatsApp delivery status

### Phase 7 — Dashboard & Reports
- [ ] Super admin dashboard
- [ ] Branch dashboard
- [ ] Teacher dashboard
- [ ] Attendance reports
- [ ] Financial reports
- [ ] Outstanding payment reports
- [ ] Data export

---

## 🔐 Business Rules

Some important business rules:

1. A student can have multiple active enrollments.
2. Enrollment status belongs to the **enrollment**, not the student.
3. A student can attend different programs at different branches.
4. A teacher can teach at multiple branches.
5. A teacher cannot teach two classes at the same time.
6. A room cannot be occupied by two classes at the same time.
7. Attendance is recorded based on a class session.
8. Consecutive absences are evaluated per enrollment/class.
9. Hiatus affects only the related enrollment.
10. Reactivation occurs when a student attends again after being on hiatus.
11. Payment date and billing period start date are separate concepts.
12. One payment transaction can cover multiple billing items.
13. Payment must be confirmed by an administrator before being marked as `PAID`.
14. WhatsApp delivery failure does not invalidate a confirmed payment.

---

## 👨‍💻 Development Team

This project is developed collaboratively with a **Frontend/UI Developer** and **Backend Developer**.

### Frontend / UI
- React
- Vite
- Tailwind CSS
- Figma
- API Integration

### Backend
- Laravel
- PHP
- MySQL
- REST API
- Business Logic
- Authentication & Authorization

---

## 📌 Project Status

> **Currently in development.**

The database architecture, business rules, UI/UX design, and API contracts are being developed before full implementation.

---

## 📄 License

This project is currently intended for internal/educational use.

License details may be added in a future release.
