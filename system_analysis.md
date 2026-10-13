# System Analysis

## 1. System Overview

Bimbel Management System is a web-based system designed to support the operational management of tutoring centers across multiple branches.

The system manages student and parent data, teachers, programs, classes, schedules, enrollment, attendance, billing, payments, and digital receipts.

The system is intended for internal use by administrators and teachers. Parents do not have access to the system and do not have login accounts.

---

## 2. System Objectives

The system is developed to:

- Centralize bimbel operational data across multiple branches.
- Manage student and parent information.
- Manage teacher, program, class, and schedule data.
- Record student and teacher attendance.
- Manage student enrollment and enrollment status.
- Manage billing periods based on student enrollment status.
- Record payments, including installment payments.
- Generate digital receipts based on payment data.
- Provide operational and payment information for administrators.

---

## 3. System Actors

### 3.1 Super Admin

Super Admin is responsible for managing the overall system and all branches.

Main responsibilities:

- Manage branches.
- Manage user accounts and roles.
- Manage programs, classes, and schedules.
- Manage students, parents, and teachers.
- Monitor attendance.
- Manage billing and payments.
- View reports across all branches.

### 3.2 Branch Admin

Branch Admin is responsible for managing the operational activities of their assigned branch.

Main responsibilities:

- Manage students and parents.
- Manage teachers.
- Manage classes and schedules.
- Manage student enrollment.
- Record attendance.
- Record student payments.
- Generate digital receipts.
- View branch-related information and reports.

### 3.3 Teacher

Teacher is responsible for activities related to teaching and attendance.

Main responsibilities:

- View assigned schedules.
- View assigned classes.
- Record student attendance.
- View relevant student and class information.

### 3.4 Parent

Parents do not have login accounts and cannot access the system directly.

Parent data is stored in the system to:

- Identify the student's parent or guardian.
- Store contact information.
- Support payment and receipt communication.

---

## 4. System Modules

| Module | Description |
|---|---|
| Authentication & User | User authentication, account, and role management |
| Branch | Branch management |
| Parent & Student | Parent and student data management |
| Teacher | Teacher data management |
| Program | Program management |
| Class | Class and learning group management |
| Schedule | Class schedule and teacher assignment |
| Enrollment | Student program and class enrollment |
| Attendance | Student and teacher attendance management |
| Billing | Billing period management |
| Payment | Payment and installment management |
| Digital Receipt | Digital receipt generation |
| Report | Operational and payment reporting |

---

## 5. Main System Flow

### 5.1 Student Enrollment

The enrollment process connects a student to a specific program, branch, and class.

```text
Admin Login
    ↓
Select / Add Parent
    ↓
Add Student
    ↓
Select Program
    ↓
Select Branch
    ↓
Select Class
    ↓
Create Enrollment
    ↓
Enrollment Status = ACTIVE
A student can enroll in multiple programs.
Example:
Student: Ahmad

├── CBQ
│   └── CBQ A → ACTIVE
│
└── Tahfidz
    └── Tahfidz B → ACTIVE

### 5.2 Program, Class, and Schedule

A program represents the type of learning service, while a class represents a specific learning group.
The schedule determines when the class takes place and which teacher is assigned.
Program
   ↓
Class
   ↓
Class Schedule
   ↓
Teacher

Example:
CBQ
├── CBQ A
│   ├── Monday 16:00 - 17:00 → Teacher A
│   └── Wednesday 16:00 - 17:00 → Teacher B
│
├── CBQ B
└── CBQ C

6. Attendance Flow
Student Attendance
Attendance is recorded for each actual class session.
Class Schedule
    ↓
Attendance Session
    ↓
Select Students
    ↓
Record Attendance
    ↓
PRESENT / ALPA / IZIN / SAKIT

Student attendance is associated with the relevant enrollment to ensure that attendance is tracked separately for each program.
Teacher Attendance
Teacher attendance is recorded separately based on the teacher and branch.
7. Enrollment Status
Each enrollment has its own status:
- ACTIVE
- HIATUS
- RESIGNED
Enrollment status is specific to a student's program enrollment.
For example, a student can be:
CBQ     → ACTIVE
Tahfidz → HIATUS

without affecting the other enrollment.
8. Automatic Hiatus Rule
A student will be placed on HIATUS when they have 3 consecutive ALPA records for the same enrollment.
Attendance
    ↓
Status = ALPA
    ↓
Check consecutive ALPA
    ↓
Less than 3 → Remain ACTIVE
    ↓
3 consecutive ALPA
    ↓
HIATUS

The following attendance statuses do not trigger the hiatus rule:
- IZIN
- SAKIT
Attendance from another program does not affect the ALPA calculation for the current enrollment.
Reactivation
When a student attends again after being on hiatus:
HIATUS
   ↓
Student attends
   ↓
ACTIVE

The reactivation date is the date of the student's attendance.
9. Billing Flow
Billing is based on the student's enrollment.
For an active enrollment, the system creates a billing period.
Example:
Enrollment: ACTIVE

Billing Period
2 March - 1 April
Amount: Rp150,000

When the billing period ends, the system checks the enrollment status.
If the enrollment remains active:
2 March - 1 April
        ↓
Period ends
        ↓
Enrollment still ACTIVE
        ↓
Create new billing period
2 April - 1 May

Hiatus and Billing
When an enrollment becomes HIATUS, no new billing period is created.
An existing billing period remains valid until its original end_date.
Example:
Billing Period
2 March - 1 April

Student becomes HIATUS on 20 March
        ↓
Existing period remains valid
        ↓
No new billing period during HIATUS

When the student becomes active again, a new billing period starts from the reactivation date.
Example:
Student attends again: 15 April

New Billing Period:
15 April - 14 May

10. Payment Flow
Payments are recorded by an administrator after the payment has been received.
A payment can be used to pay one or more billing periods, and a billing period can be paid through multiple installments.
Billing Period
      ↓
Payment Item
      ↑
    Payment

Installment Payment
Example:
Billing Period
2 April - 1 May
Total: Rp150,000

First payment:
Payment #001
Rp50,000
        ↓
Billing Period = PARTIAL
Remaining = Rp100,000

Second payment:
Payment #002
Rp100,000
        ↓
Billing Period = PAID
Remaining = Rp0

11. Billing Status
Billing period status:
- OPEN — No payment has been made.
- PARTIAL — Payment has been made but the total payment is less than the billing amount.
- PAID — The total payment has reached the billing amount.
- CANCELLED — The billing period has been cancelled.
Payment status is not stored in the payments table because every payment record represents money that has already been received and recorded by an administrator.
12. Payment Recording
Each payment stores the administrator who recorded the transaction through the recorded_by field.
This allows the system to identify which user recorded a payment.
Example:
Payment Number : PAY-001
Amount         : Rp150,000
Payment Method : TRANSFER
Recorded By    : Branch Admin

This is important because a branch may have multiple administrators.
13. Digital Receipt
The system does not store receipts as separate files or database records.
Instead, a digital receipt is generated dynamically from payment-related data.
Payment
   +
Payment Items
   +
Billing Period
   +
Student
   +
Program
   ↓
Generate Digital Receipt

The receipt contains information such as:
- Student name
- Program
- Class
- Payment number
- Payment date
- Billing period
- Total billing amount
- Payment amount
- Total amount paid
- Remaining balance
- Payment method
- Payment status
The administrator can copy the generated receipt text or open WhatsApp using the parent's phone number.
Automatic WhatsApp messaging is not included in the current MVP.
14. Business Rules
1. A student can have multiple enrollments.
2. Each enrollment belongs to one program and one class.
3. A program can have multiple classes.
4. A class can have multiple schedules.
5. A teacher can teach in multiple branches through assigned schedules.
6. Attendance is tracked based on the student's enrollment.
7. Three consecutive ALPA records for the same enrollment change the enrollment status to HIATUS.
8. IZIN and SAKIT do not count toward the consecutive ALPA rule.
9. Attendance in another program does not affect the current enrollment's ALPA count.
10. A HIATUS enrollment does not generate new billing periods.
11. An existing billing period remains valid until its original end_date.
12. A new billing period after reactivation starts from the student's reactivation date.
13. A billing period can be paid through multiple installments.
14. A billing period becomes PAID when the total allocated payments reach the billing amount.
15. Payment records represent payments that have already been received.
16. Each payment records the administrator who entered the transaction.
17. Digital receipts are generated from existing payment data and are not stored as separate records.
18. Parents do not have system login accounts.
19. A payment can be associated with multiple billing periods through payment_items.
15. Scope of MVP
The current MVP focuses on core bimbel operational management:
- Multi-branch management
- Student and parent management
- Teacher management
- Program and class management
- Schedule management
- Enrollment management
- Student and teacher attendance
- Automatic hiatus based on attendance
- Rolling billing periods
- Installment payments
- Digital receipt generation
- Basic reporting
The following features are not included in the current MVP:
- Parent login
- Automatic WhatsApp messaging
- Online payment gateway
- Automated payment reminders
- Expense management

### Satu catatan kecil

Di bagian **Business Rules nomor 19**, gua tulis:

> A payment can be associated with multiple billing periods through `payment_items`.

Ini sesuai keputusan kita bahwa **satu pembayaran boleh melunasi beberapa periode sekaligus**. Kalau nanti kalian memutuskan satu transaksi cuma boleh untuk satu billing period, rule itu tinggal dihapus.

Untuk sekarang, file lu jadi:

```text
docs/
├── system-analysis.md
└── erd/
    └── erd-bimbel.drawio