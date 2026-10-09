# Education Management System

A web-based **Education Management System** designed to help educational foundations manage multiple TK and tutoring branches in one centralized system.

The system covers **student management, teacher management, class scheduling, attendance, enrollment, billing, payments, financial reporting, and receipt management**.

> 🚧 **Project Status:** In Development

---

## 📌 Overview

This project is developed to simplify the daily operational and administrative processes of an educational foundation that manages multiple branches and education programs.

The system supports students who may enroll in **multiple programs simultaneously**, such as:

- TK program in the morning
- Cepat Baca Qur'an tutoring in the afternoon
- Tahfidz tutoring in another schedule

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
└── CBQ

Classes
├── CBQ A
├── CBQ B
└── CBQ C
```

This allows one program to have multiple class groups with different teachers, rooms, and schedules.

### 4. Scheduling

Each class can have its own schedule, teacher, and room.

Example:

```text
Branch A — 16:15–17:15

Room 1 → CBQ A → Teacher A
Room 2 → Tahfidz A    → Teacher B
Room 3 → Tilawah A  → Teacher C
Room 4 → Tahfidz B → Teacher D
Room 5 → CBQ B    → Teacher E
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
CBQ Enrollment

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
CBQ → HIATUS
Tahfidz     → ACTIVE
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
└── Tahfidz     Rp300.000
                 ─────────
Total           Rp1.050.000
