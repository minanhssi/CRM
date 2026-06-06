# PRD: Employee Management

## Change Log

| Version | Date | Author | Type | Description |
|---------|------|--------|------|-------------|
| 1.0 | 2026-05-14 | Hoang | Created | Initial version |
| 1.1 | 2026-05-15 | Hoang | Updated | Added Required column to Field Specification. Fixed Error Handling trigger points across all user stories. |

## TL;DR

Employee Management is a Global Level module in the Field Intel Portal that allows administrators to manage their field workforce. Admins can create employees manually or enable self-registration via Zalo Mini App with eKYC verification.

The module includes a first-time onboarding wizard to customize data collection fields, a full CRUD lifecycle with approval workflows, face matching to prevent duplicate registrations, and credential delivery mechanisms. This module serves as the foundation for all downstream features (scheduling, task assignment, reporting) since employees are a shared resource pool across projects.

---

## 1. Introduction

### 1.1 Objective

Provide administrators with a streamlined, configurable system to onboard and manage field employees at the account level. The module must support two distinct creation flows (manual and self-registration), enforce identity verification through face matching, and maintain employee data integrity across multiple projects.

### 1.2 Scope

#### In scope

- First-time onboarding wizard to configure employee data fields, positions, employee code rules, and weekly availability
- Manual employee creation via drawer form with auto-generated credentials
- Self-registration flow via Zalo Mini App with eKYC and admin approval
- Employee list view with filtering, searching, sorting, and bulk actions
- Employee detail view with personal information and project history tabs
- Employee update flow — admin edits on portal (immediate) and employee edits on mobile app (requires approval)
- Status management (Active / Inactive toggle) with project dependency checks
- Employee deletion (hard delete) with project dependency checks and historical data preservation
- Credential export with automatic password reset
- Module settings page for post-onboarding configuration changes

#### Out of scope

- Employee import from Excel (deferred — see separate document)
- Notification system design (to be specified in a dedicated PRD)
- Authorization module (portal user roles such as Admin/PME — separate module)
- Mobile app employee-facing UI (separate PRD)

---

## 2. Feature Overview

### 2.1 Feature Description

| Feature | Description |
|---------|-------------|
| Onboarding Wizard | A sequential question flow presented when the admin first accesses the Employee Management module. Configures which data fields to collect, employee positions, employee code generation rules, and weekly availability time slots. All settings can be modified later via the Settings page. |
| Manual Creation | Admin opens a drawer form, fills in employee details, uploads 3 face photos (left/front/right angles), and submits. The employee is automatically approved (status = Active). Username auto-fills from phone number; employee code auto-fills from the configured rule. Both are editable. |
| Self-Registration Setup | Admin configures a registration window (fixed date range or unlimited) and receives a shareable message containing the Zalo Mini App link and an 8-character company code. Employees use this to self-register with eKYC verification. |
| Self-Registration (Employee Side) | Employee opens Zalo Mini App, enters company code, fills in personal details, completes eKYC selfie (face matching against existing employees), and submits. Status = Pending Approval. System requests notification permission for approval updates. |
| Approval Flow | Admin reviews pending registrations, inspects submitted data and eKYC photos, and either approves (triggers Zalo notification with credentials) or rejects (with option to delete data or retain it). |
| Employee List View | Paginated table with filters (status, position, project, creation date, last modified date), search (name, phone, CMND, employee code, email), sorting, and bulk actions (export, status toggle, update position, delete, export credentials). |
| Employee Detail View | Two-tab layout: Tab 1 shows all personal information fields (read-only with edit button); Tab 2 shows project participation history (project name, role, date range, status). |
| Employee Update (Admin) | Admin edits any field directly on the portal. Changes apply immediately. System logs all changes in an audit trail (who changed, which field, old value, new value, timestamp). |
| Employee Update (Employee) | Employee edits select fields via mobile app (phone, address, email, bank info, face photos). Changes enter Pending Review status. Admin receives notification, reviews old vs. new values, approves or rejects. |
| Status Toggle | Admin can switch employees between Active and Inactive. If the employee has current or future project assignments, system requires reassignment or removal of future assignments before allowing the status change. |
| Employee Deletion | Hard delete with confirmation. Inactive employees are deleted immediately. Active employees with project assignments trigger a warning with options to reassign or remove future assignments first. Historical data (completed check-ins, finished tasks) is preserved with a "Deleted" tag. |
| Credential Export | Admin selects one or more employees and exports credentials to Excel. This action automatically resets passwords for all selected employees. Employees must log in again with the new password (no forced password change on this login). |
| Module Settings | A dedicated settings page accessible via a "Settings" button next to "Add Employee" on the list view. Allows admin to modify all onboarding configurations: position list, employee code rules, weekly availability time slots, and optional field toggles. |

### 2.2 Field Specification

| Field Name | Description | Required | Format / Constraints |
|------------|-------------|----------|----------------------|
| Employee Code | Unique identifier for the employee within the account | ✅ | Auto-generated per configured rule. Editable on manual creation. Unique within account. |
| Employee Name | Full name of the employee | ✅ | Text only — no digits or special characters allowed. |
| Phone Number | Mobile phone number | ✅ | Unique within account. Format: 10 digits starting with 0 (Vietnam). Used as default username. |
| Username | Login credential for the mobile app | ✅ | Unique within account. Auto-filled from Phone Number; admin can override. |
| Password | Login credential for the mobile app | ✅ | Admin sets a default (manual creation only). Forced change on first login. For self-registration, system auto-generates after approval. |
| Date of Birth | Employee's date of birth | ✅ | Date picker. Employee must be at least 16 years old. |
| Gender | Employee's gender | ✅ | Dropdown: Male / Female / Other. |
| Email | Employee's email address | - | Standard email format validation. |
| CCCD | National ID card number | - | Admin toggles in onboarding Q4. Text field — 9 or 12 digits. Unique within account if provided. |
| Height | Employee's height in cm | - | Admin toggles in onboarding Q4. Numeric. |
| Weight | Employee's weight in kg | - | Admin toggles in onboarding Q4. Numeric. |
| Tax ID | Employee's tax identification number | - | Admin toggles in onboarding Q4. Text. |
| Province / City | Current residential province or city | ✅ | Cascading dropdown (Vietnam administrative divisions). |
| District | Current residential district | ✅ | Cascading dropdown filtered by Province. |
| Ward | Current residential ward or commune | ✅ | Cascading dropdown filtered by District. |
| Detailed Address | Street name, house number, etc. | - | Free text. |
| Face Photo - Left Angle | Photo of employee's face from the left side | ✅ | Image upload (JPG/PNG, max 5MB). Replaced by eKYC in self-registration. |
| Face Photo - Front | Photo of employee's face from the front | ✅ | Image upload (JPG/PNG, max 5MB). Replaced by eKYC in self-registration. |
| Face Photo - Right Angle | Photo of employee's face from the right side | ✅ | Image upload (JPG/PNG, max 5MB). Replaced by eKYC in self-registration. |
| Positions | Job roles the employee can perform | - | Multi-select checkboxes from admin-configured list (e.g., TL/SUP, PG, PB, Mixer). |
| Weekly Availability | Time slots during the week when the employee is available to work | - | Interactive weekly grid (7 days x configurable time slots). Has an "Available all slots" toggle. Reference data only — does not enforce scheduling rules. |
| Bank Account Number | Employee's bank account number | - | Admin toggles in onboarding Q4. Text. |
| Bank Account Holder | Name of the bank account holder | - | Admin toggles in onboarding Q4. Text. |
| Bank Name | Name of the bank | - | Admin toggles in onboarding Q4. Dropdown from bank list. |

---

## 3. Functional Requirements

### 3.1 First-Time Module Configuration

**As an admin** I want to configure which employee data fields to collect and set up classification dimensions when I first access the Employee Management module **So that** the employee creation forms match my organization's specific needs

**Precondition:**

- Admin is logged into the portal
- No employees exist in the account (first-time access to Employee Management module)

**User Flow:**

1. Admin navigates to the Employee Management module for the first time.
2. System detects no employees exist and displays the onboarding wizard.
3. **Question 1 — Employee Positions:** "Do you need to differentiate employee roles? (e.g., Team Lead, Supervisor, PG, PB...)"
   - **If Yes:** system displays an interface to create a list of positions (add/edit/delete position names). Admin can add multiple positions.
   - **If No:** the Positions field is hidden from all employee creation forms.
4. **Question 2 — Employee Code Rule:** "Configure the rule for auto-generating employee codes:"
   - Maximum character length (number input)
   - Allow uppercase letters (checkbox)
   - Allow lowercase letters (checkbox)
   - Allow digits (checkbox)
   - Fixed prefix string (text input, e.g., "NV-", "PG-HCM-")
5. **Question 3 — Weekly Availability:** "Do you need to collect employee weekly availability?"
   - **If Yes:** system displays an interface to configure time slot granularity.
     - Admin defines the time slots that will appear in the weekly availability grid (e.g., Morning 6:00-12:00 / Afternoon 12:00-18:00 / Evening 18:00-22:00, or hourly slots).
     - These time slots will be presented as an interactive weekly grid (7 columns for days x N rows for time slots) in the employee creation form, where each cell can be toggled on/off.
     - A "Available all slots" toggle is provided for convenience.
   - **If No:** the Weekly Availability field is hidden from all employee creation forms.
   - Note displayed to admin: "This data is for reference only when assigning schedules. It does not restrict which schedules an employee can be assigned to."
6. **Question 4 — Optional Fields:** "Do you need to collect the following information?" (multi-select checkboxes)
   - CMND/CCCD (National ID)
   - Height / Weight
   - Tax ID
   - Bank Information (account number, holder name, bank)
7. Admin clicks "Complete Setup" to save all configurations.
8. System saves settings and transitions to the empty-state employee list view with "Add Employee" and "Settings" buttons visible.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Onboarding wizard only appears when no employees exist in the account. |
| AC-2 | All four questions are presented sequentially; admin can navigate back to previous questions. |
| AC-3 | Position list supports add, edit, and delete operations within the wizard. |
| AC-4 | Employee Code rule requires at least one character type to be selected. |
| AC-4a | Weekly Availability time slot configuration defines the grid structure used across all employee forms. The grid is interactive (click/tap to toggle cells). |
| AC-5 | Optional fields toggled off in Q4 are completely hidden from all creation forms (manual and self-registration). |
| AC-6 | All configurations are saved and immediately applied to employee creation forms. |
| AC-7 | After completion, the wizard does not appear again. Admin uses the Settings page for future changes. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Admin closes the wizard without completing all questions | Wizard state is preserved. On next visit, wizard resumes from where admin left off. |
| EC-2 | Admin selects "Yes" for Positions but adds zero items | System shows validation: "Please add at least one position" |
| EC-3 | Admin leaves all character type checkboxes unchecked for employee code rule | System shows validation: "Please select at least one character type for the employee code." |
| EC-4 | Admin selects "Yes" for Weekly Availability but defines zero time slots | System shows validation: "Please define at least one time slot" |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Empty position list | Q1 — admin selects Yes but adds no items | Validation Error | Please add at least one position | Vui long them it nhat mot vi tri |
| No character type selected | Q2 — no checkboxes checked for employee code | Validation Error | Please select at least one character type for the employee code. | Vui long chon it nhat mot loai ky tu cho ma nhan vien. |
| Prefix too long | Q2 — prefix string exceeds max length | Validation Error | Prefix length cannot exceed the maximum character limit. | Do dai tien to khong duoc vuot qua gioi han ky tu toi da. |
| Empty time slot list | Q3 — admin selects Yes but defines no time slots | Validation Error | Please define at least one time slot | Vui long tao it nhat mot khung gio |
| Save failure | Complete Setup button | Server Error | Failed to save settings. Please try again. | Luu cau hinh that bai. Vui long thu lai. |

---

### 3.2 Create Employee Manually

**As an admin** I want to manually create an employee record by filling in a form **So that** I can onboard individual employees quickly with pre-agreed credentials

**Precondition:**

- Admin is logged into the portal
- Onboarding wizard has been completed (module is configured)

**User Flow:**

1. Admin clicks "Add Employee" button on the employee list view.
2. A menu appears with options: "Create Manually" and "Set Up Registration".
3. Admin selects "Create Manually".
4. A drawer slides in from the right containing the employee creation form with all configured fields (per onboarding settings).
5. Admin enters Phone Number.
6. System auto-fills Username with the phone number value. Admin can override.
7. System auto-fills Employee Code per the configured rule. Admin can override.
8. Admin fills in all required fields and any optional fields.
9. Admin sets a Password (pre-agreed with the employee, e.g., "123456").
10. Admin uploads 3 face photos (left angle, front, right angle).
11. Admin clicks "Create".
12. System validates all fields (see Error Handling below).
    - If validation fails: highlight invalid fields with inline error messages. Do not close the drawer.
    - If validation passes: create the employee with status = Active (auto-approved).
13. Drawer closes. Employee appears in the list view.
14. Employee uses the username and password to log into the mobile app. On first login, the system forces a password change.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Username auto-fills from Phone Number when the Phone Number field loses focus. Admin can manually override the auto-filled value. |
| AC-2 | Employee Code auto-fills per the configured rule. Admin can manually override. |
| AC-3 | All three face photos (left, front, right) are required before the form can be submitted. |
| AC-4 | Employee is created with status = Active immediately upon successful submission (no approval step). |
| AC-5 | Face photos, Phone Number, CCCD (if enabled), Username, and Employee Code must each be unique within the account. |
| AC-6 | On first mobile app login, the employee is forced to change their password before accessing any features. |
| AC-7 | Fields toggled off in onboarding Q4 (e.g., CMND, bank info) do not appear in the form. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Admin overrides auto-filled username to a value that already exists | Inline error on the Username field: "This username is already taken." |
| EC-2 | Admin overrides employee code to a value that does not match the configured rule | Inline warning (non-blocking): "This code does not follow the configured rule: [rule description]." Block submission. |
| EC-3 | Admin uploads a face photo that matches an existing employee | Inline error on the photo field: "This face matches an existing employee: [Name, Employee Code]." Block submission. |
| EC-4 | Admin enters a phone number already used by a deleted employee | Allow creation. Deleted employee data is purged; phone number is available for reuse. |
| EC-5 | Province/District/Ward cascading — admin selects a province, then changes it | District and Ward fields reset to empty. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Empty Employee Name | Name field on submit | Validation Error | Employee name is required. | Ten nhan vien la bat buoc. |
| Invalid Employee Name | Name field on blur | Validation Error | Name must not contain numbers or special characters. | Ten khong duoc chua so hoac ky tu dac biet. |
| Empty Phone Number | Phone field on submit | Validation Error | Phone number is required. | So dien thoai la bat buoc. |
| Invalid Phone Format | Phone field on blur | Validation Error | Phone number must be 10 digits starting with 0. | So dien thoai phai gom 10 chu so va bat dau bang 0. |
| Empty Username | Username field on submit | Validation Error | Username is required. | Ten tai khoan la bat buoc. |
| Empty Password | Password field on submit | Validation Error | Password is required. | Mat khau la bat buoc. |
| Empty Date of Birth | DOB field on submit | Validation Error | Date of birth is required. | Ngay sinh la bat buoc. |
| Underage Employee | DOB field on blur | Validation Error | Employee must be at least 16 years old. | Nhan vien phai tu 16 tuoi tro len. |
| Empty Gender | Gender field on submit | Validation Error | Gender is required. | Gioi tinh la bat buoc. |
| Invalid Email Format | Email field on blur | Validation Error | Please enter a valid email address. | Vui long nhap dia chi email hop le. |
| Invalid CMND Format | CMND field on blur | Validation Error | CMND/CCCD must be 9 or 12 digits. | So CMND/CCCD phai gom 9 hoac 12 chu so. |
| Missing Face Photos | On submit | Validation Error | All 3 face photos (left, front, right) are required. | Can upload du 3 anh khuon mat (trai, truc dien, phai). |
| Invalid Photo Format | Photo upload on select | Validation Error | Photo must be JPG or PNG format, max 5MB. | Anh phai co dinh dang JPG hoac PNG, toi da 5MB. |
| Empty Province | Province field on submit | Validation Error | Province / City is required. | Tinh / Thanh pho la bat buoc. |
| Empty District | District field on submit | Validation Error | District is required. | Quan / Huyen la bat buoc. |
| Empty Ward | Ward field on submit | Validation Error | Ward is required. | Xa / Phuong la bat buoc. |
| Duplicate Phone Number | After submit | Business Rule | This phone number is already used by employee [Name, Code]. | So dien thoai nay da duoc su dung boi nhan vien [Ten, Ma NV]. |
| Duplicate Username | After submit | Business Rule | This username is already taken. | Ten tai khoan nay da duoc su dung. |
| Duplicate CMND | After submit | Business Rule | This CMND/CCCD is already used by employee [Name, Code]. | So CMND/CCCD nay da duoc su dung boi nhan vien [Ten, Ma NV]. |
| Duplicate Employee Code | After submit | Business Rule | This employee code already exists. | Ma nhan vien nay da ton tai. |
| Face Match Detected | After submit | Business Rule | This face matches an existing employee: [Name, Code]. | Hinh anh trung khop voi nhan vien da ton tai: [Ten, Ma NV]. |
| Creation API failure | After submit | Server Error | Failed to create employee. Please try again. | Tao nhan vien that bai. Vui long thu lai. |
| Face matching service unavailable | After submit | Server Error | Face verification service is temporarily unavailable. Please try again later. | Dich vu xac minh khuon mat tam thoi khong kha dung. Vui long thu lai sau. |

---

### 3.3 Configure Self-Registration via Zalo Mini App

**As an admin** I want to set up a self-registration channel so employees can register themselves via Zalo Mini App **So that** I can onboard large numbers of employees without manually entering each one

**Precondition:**

- Admin is logged into the portal
- Onboarding wizard has been completed

**User Flow:**

1. Admin clicks "Add Employee" button on the employee list view.
2. Admin selects "Set Up Registration".
3. System displays a modal containing:
   - Illustration and direct link to the Zalo Mini App
   - **Company Code:** an auto-generated 8-character uppercase code unique to this account
   - **Registration Window** configuration:
     - **Option A (radio):** Fixed date range — date range picker (from date — to date)
     - **Option B (radio):** Unlimited — no expiration
   - Notice text: "When the number of registrations exceeds your subscription plan limit, new registrations will be paused."
4. Admin configures the registration window and clicks "Save and Copy Instructions".
5. System saves the configuration and automatically copies the following message to clipboard: "Please access the Zalo Mini App at [link] to register as an employee. Your company code is XXXXXXXX."
6. Admin shares this message with employees via their preferred channel (Zalo group, SMS, email, etc.).

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Company Code is auto-generated (8 uppercase letters), unique per account, and cannot be changed by the admin. |
| AC-2 | Registration window options are mutually exclusive (radio buttons). |
| AC-3 | For fixed date range, the "from" date cannot be in the past and "to" date must be after "from" date. |
| AC-4 | On save, the instruction message is automatically copied to the admin's clipboard with the correct link and company code. |
| AC-5 | Admin can return to this modal later to modify the registration window or view the company code. |
| AC-6 | When subscription limit is reached, new self-registrations are blocked with an appropriate message to the employee. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Admin sets a fixed date range that has already expired | Registration is effectively closed. Employees attempting to register see: "Registration period has ended." |
| EC-2 | Admin changes from Unlimited to a Fixed date range while registrations are pending | Pending registrations are not affected. Only new registrations after the end date are blocked. |
| EC-3 | Subscription limit reached mid-registration | Employee completes the form but on submit receives: "Registration is currently full. Please contact your administrator." |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Invalid date range | Date picker — "to" date before "from" date | Validation Error | End date must be after the start date. | Ngay ket thuc phai sau ngay bat dau. |
| Past start date | Date picker — "from" date in the past | Validation Error | Start date cannot be in the past. | Ngay bat dau khong duoc trong qua khu. |
| No registration window selected | Save button — no radio selected | Validation Error | Please select a registration window option. | Vui long chon thoi han dang ky. |
| Save failure | After save | Server Error | Failed to save registration settings. Please try again. | Luu cau hinh dang ky that bai. Vui long thu lai. |

---

### 3.4 Employee Self-Registration via Zalo Mini App

**As a field employee** I want to register myself through the Zalo Mini App using the company code provided by my admin **So that** I can get an account to access the mobile app without waiting for the admin to create it manually

**Precondition:**

- Admin has configured self-registration (3.3)
- Employee has access to Zalo

**User Flow:**

1. Employee opens the Zalo Mini App link shared by admin.
2. Employee enters the 8-character company code.
3. System validates the company code:
   - If invalid: display error message.
   - If valid but registration window expired: display message.
   - If valid but subscription limit reached: display message.
   - If valid and registration is open: proceed to step 4.
4. Employee fills in the registration form (same fields as manual creation, excluding Password and Username). Client-side validation runs on blur (format checks only — no server calls during form input).
5. Employee Code is auto-generated by the system per configured rules (not editable by employee).
6. Employee completes the eKYC selfie verification flow (using the integrated eKYC library).
7. System performs face matching against all existing employees in the account immediately after eKYC capture.
   - If face matches an existing employee: block registration with error message. Employee cannot proceed.
   - If face matching service is unavailable: display error. Allow retry.
   - If no match: proceed to step 8.
8. Employee reviews the form and taps "Submit".
9. Server validates all data:
   - Phone Number uniqueness check — if already exists: reject with error message.
   - CCCD uniqueness check (if enabled) — if already exists: reject with error message.
   - Registration window re-check — if expired since form load: reject.
   - Subscription limit re-check — if reached since form load: reject.
   - If all checks pass: proceed to step 10.
10. Registration is saved with status = Pending Approval.
11. System displays a popup requesting notification permission (to notify when approved/rejected).
12. Employee sees a confirmation screen: "Your registration has been submitted. You will be notified once it is reviewed."

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Company code validation happens before the form is shown. |
| AC-2 | Employee Code is auto-generated and not visible or editable by the employee during registration. |
| AC-3 | eKYC selfie replaces the 3-angle face photo upload required in manual creation. |
| AC-4 | Face matching runs immediately after eKYC capture, before the employee can submit the form. This is the only server-side check that happens before submit. |
| AC-5 | If CCCD field is enabled in onboarding, it appears in the self-registration form. |
| AC-6 | Notification permission popup appears after successful submission, not before. |
| AC-7 | Phone Number and CCCD uniqueness are checked server-side after submit. Employee cannot register if their phone number, CMND, or face already exists in the system (regardless of status: Active, Inactive, Pending, or Rejected-and-retained). |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Employee's face matches a deleted employee | Allow registration. Hard-deleted employee data is purged including face data. |
| EC-2 | Employee declines notification permission | Registration still proceeds. Employee will need to check status manually via the Mini App. |
| EC-3 | Employee's phone number matches a rejected-and-retained record | Block registration. Display: "This phone number is already associated with an existing record. Please contact your administrator." |
| EC-4 | Network interruption during eKYC | Display error. Allow retry without re-filling the form. |
| EC-5 | Employee closes the app mid-registration | Form data is not saved. Employee must start over. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Invalid company code | Company code field on submit | Validation Error | Invalid company code. Please check and try again. | Ma doanh nghiep khong hop le. Vui long kiem tra va thu lai. |
| Empty required field | On submit | Validation Error | [Field name] is required. | [Ten truong] la bat buoc. |
| Invalid phone format | Phone field on blur | Validation Error | Phone number must be 10 digits starting with 0. | So dien thoai phai gom 10 chu so va bat dau bang 0. |
| eKYC verification failed | During eKYC capture | Validation Error | Face verification failed. Please try again in good lighting. | Xac minh khuon mat that bai. Vui long thu lai o noi co du anh sang. |
| Face match detected | After eKYC capture | Business Rule | Your identity matches an existing employee record. Registration cannot proceed. | Danh tinh cua ban trung khop voi nhan vien da ton tai. Khong the tiep tuc dang ky. |
| Registration window expired | After company code submit | Business Rule | The registration period has ended. Please contact your administrator. | Thoi han dang ky da ket thuc. Vui long lien he quan tri vien. |
| Subscription limit reached | After company code submit | Business Rule | Registration is currently full. Please contact your administrator. | So luong dang ky da dat gioi han. Vui long lien he quan tri vien. |
| Duplicate phone number | After submit | Business Rule | This phone number is already registered. | So dien thoai nay da duoc dang ky. |
| Duplicate CMND | After submit | Business Rule | This CMND/CCCD is already registered. | So CMND/CCCD nay da duoc dang ky. |
| Registration window expired (race condition) | After submit | Business Rule | The registration period has ended. Please contact your administrator. | Thoi han dang ky da ket thuc. Vui long lien he quan tri vien. |
| Subscription limit reached (race condition) | After submit | Business Rule | Registration is currently full. Please contact your administrator. | So luong dang ky da dat gioi han. Vui long lien he quan tri vien. |
| Face matching service unavailable | After eKYC capture | Server Error | Verification service is temporarily unavailable. Please try again later. | Dich vu xac minh tam thoi khong kha dung. Vui long thu lai sau. |
| Registration API failure | After submit | Server Error | Registration failed. Please try again. | Dang ky that bai. Vui long thu lai. |

---

### 3.5 Approve or Reject Registration

**Review and Approve/Reject Employee Registrations**

**As an admin** I want to review self-registered employee applications and approve or reject them **So that** only verified and legitimate employees gain access to the mobile app

**Precondition:**

- At least one employee registration has status = Pending Approval

**User Flow:**

1. Admin navigates to the employee list view.
2. Admin filters by status "Pending Approval".
3. Admin clicks on a pending registration to view the full detail.
4. System displays all submitted information including eKYC selfie photos.
5. Admin reviews the data and takes one of two actions:
   - **Approve:** Click "Approve" button.
     - System changes status to Active.
     - System auto-generates Username (= phone number) and Password.
     - System sends a Zalo notification to the employee with login credentials and instruction to change password on first login if desired.
   - **Reject:** Click "Reject" button. System displays a popup with two options:
     - **"Reject and Delete Data":** deletes the registration record. Sends a Zalo notification to the employee informing them of the rejection. Employee can re-register.
     - **"Reject and Retain Data":** keeps the record with status = Rejected. Does NOT send any notification to the employee. Employee cannot re-register (their phone/CMND/face data still exists in the system).

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Pending Approval count badge is visible on the status filter and updates in real time. |
| AC-2 | Upon approval, credentials are automatically sent via Zalo notification. |
| AC-3 | Upon "Reject and Delete", the employee's data (including face data) is permanently removed, freeing up their phone number and CMND for re-registration. |
| AC-4 | Upon "Reject and Retain", no notification is sent. The record remains visible in the list with status = Rejected. |
| AC-5 | Admin can bulk-approve multiple pending registrations at once. |
| AC-6 | Admin can delete a retained rejected record at any time from the list, which then frees the employee's data for re-registration. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Admin approves a registration but Zalo notification fails | Employee is still created as Active. Admin sees a warning: "Employee approved but notification delivery failed. Please inform the employee manually." Credential export is available as fallback. |
| EC-2 | Admin tries to approve when subscription limit has been reached | Block approval. Display: "Subscription limit reached. Cannot approve more employees." |
| EC-3 | Two admins review the same pending registration simultaneously | First action (approve/reject) succeeds. Second admin sees: "This registration has already been processed." |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Subscription limit reached | After approve click | Business Rule | Subscription limit reached. Cannot approve more employees. Upgrade your plan to continue. | Da dat gioi han goi dang ky. Khong the duyet them nhan vien. Vui long nang cap goi de tiep tuc. |
| Registration already processed | After approve/reject click | Business Rule | This registration has already been processed by another admin. | Don dang ky nay da duoc xu ly boi quan tri vien khac. |
| Notification delivery failed | After approval | Server Error | Employee approved but notification failed. Please inform the employee manually. | Da duyet nhan vien nhung gui thong bao that bai. Vui long thong bao truc tiep cho nhan vien. |
| Delete failed | After reject and delete | Server Error | Failed to delete registration data. Please try again. | Xoa du lieu dang ky that bai. Vui long thu lai. |
| Approval API failure | After approve click | Server Error | Failed to approve employee. Please try again. | Duyet nhan vien that bai. Vui long thu lai. |

---

### 3.6 View and Search Employee List

**As an admin** I want to view, search, filter, and sort my employee list **So that** I can quickly find specific employees and manage them efficiently

**Precondition:**

- Admin is logged into the portal
- At least one employee exists in the account

**User Flow:**

1. Admin navigates to the Employee Management module.
2. System displays a paginated table of all employees with columns: Employee Code, Name, Phone Number, Status, Number of Active Projects, Position, Created Date, Last Modified Date
3. Admin can use the following controls:
   - **Search bar:** search by name, phone number, CCCD, employee code, or email.
   - **Status filter:** Active / Inactive / Pending Approval / Rejected (multi-select).
   - **Position filter:** multi-select from configured position list.
   - **Project filter:** dropdown of all projects in the account.
   - **Created Date filter:** date range picker.
   - **Last Modified Date filter:** date range picker.
   - **Sort:** by Name (A-Z, Z-A), Created Date (newest/oldest), Last Modified Date (newest/oldest).
4. Admin can select multiple employees via checkboxes for bulk actions:
   - Change status (Active / Inactive) for selected
   - Update positions for selected
   - Delete selected
   - Export credentials for selected (triggers password reset)

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | All filters can be combined (AND logic). |
| AC-2 | Search is case-insensitive and supports partial matching. |
| AC-3 | Bulk actions are only available when at least one employee is selected. |
| AC-4 | Status filter shows count badges for each status category. |
| AC-5 | Table is paginated with configurable page size (10/25/50/100). |
| AC-6 | Bulk status change to Inactive applies the same project dependency checks as individual status change (see 3.8). Employees with active projects are flagged and excluded from the bulk operation. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Search returns no results | Display empty state: "No employees found matching your criteria." |
| EC-2 | Admin applies filters that result in zero employees | Same empty state with an option to clear all filters. |
| EC-3 | Bulk delete includes a mix of Active (with projects) and Inactive employees | System processes deletable employees and lists those that require action (project reassignment) separately. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| List load failure | After page load | Server Error | Failed to load employee list. Please refresh the page. | Tai danh sach nhan vien that bai. Vui long tai lai trang. |
| Export failure | After export click | Server Error | Failed to export data. Please try again. | Xuat du lieu that bai. Vui long thu lai. |

---

### 3.7 View Employee Detail with Project History

**As an admin** I want to view complete details of an individual employee including their project participation history **So that** I can make informed decisions about assignment, status changes, or data corrections

**Precondition:**

- Admin is on the employee list view
- At least one employee exists

**User Flow:**

1. Admin clicks on an employee row in the list view.
2. System opens the employee detail page with two tabs:
   - **Tab 1 — Personal Information:** displays all employee fields in read-only mode. An "Edit" button is visible at the top.
     - System fields shown: Created Date, Last Modified Date, Source (Manual / Self-Registration).
   - **Tab 2 — Project History:** displays a table of all projects the employee has participated in:
     - Columns: Project Name, Role in Project, Start Date, End Date, Status (Active / Completed).
     - Sorted by most recent first.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Tab 1 displays all fields from the employee creation form in read-only mode, including photos. |
| AC-2 | Tab 1 includes system-generated fields: Created Date, Last Modified Date, Source. |
| AC-3 | Tab 2 shows all projects — both current and historical. |
| AC-4 | Clicking "Edit" on Tab 1 transitions the view to edit mode (see 3.8). |
| AC-5 | Fields that were toggled off in onboarding Q4 do not appear in the detail view. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Employee has never been assigned to any project | Tab 2 shows empty state: "This employee has not been assigned to any project yet." |
| EC-2 | Employee was created via self-registration | Source field shows "Self-Registration". eKYC selfie photos are displayed instead of 3-angle uploads. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Detail load failure | After page load | Server Error | Failed to load employee details. Please try again. | Tai thong tin nhan vien that bai. Vui long thu lai. |
| Project history load failure | After Tab 2 click | Server Error | Failed to load project history. Please try again. | Tai lich su du an that bai. Vui long thu lai. |

---

### 3.8 Admin Edits Employee Information

**As an admin** I want to edit any employee's information directly on the portal **So that** I can correct data, update classifications, or maintain accurate records

**Precondition:**

- Admin is viewing an employee's detail page (Tab 1)

**User Flow:**

1. Admin clicks the "Edit" button on the employee detail page.
2. All fields transition to editable mode (same form layout as creation, pre-filled with current values).
3. Admin modifies the desired fields.
4. Admin clicks "Save".
5. System validates all fields using the same rules as creation (see 3.2 Error Handling).
   - If validation fails: highlight invalid fields with inline errors.
   - If validation passes: save changes immediately. No approval required.
6. System creates an audit log entry: admin name, field changed, old value, new value, timestamp.
7. Page returns to read-only mode with updated values.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | All fields are editable except: Source (system field), Created Date (system field). |
| AC-2 | Changes are applied immediately upon save — no approval workflow for admin edits. |
| AC-3 | Every change is recorded in an audit log with before/after values. |
| AC-4 | Same validation rules apply as during creation (unique phone, unique CMND, face matching, etc.). |
| AC-5 | If admin changes a face photo, the system runs face matching against other employees. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Admin changes phone number to one already in use | Inline error: "This phone number is already used by employee [Name, Code]." |
| EC-2 | Admin changes the photo and it matches another employee | Inline error: "This face matches an existing employee: [Name, Code]." |
| EC-3 | Two admins edit the same employee simultaneously | Last save wins. The second admin sees a warning: "This record was modified by [admin name] at [time]. Your changes may overwrite theirs." |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| All validation errors from Create Employee Manually apply | Same as Create Employee Manually | Same as Create Employee Manually | Same as Create Employee Manually | Same as Create Employee Manually |
| Concurrent edit conflict | After save | Business Rule | This record was recently modified by another admin. Please refresh and try again. | Ban ghi nay vua duoc chinh sua boi quan tri vien khac. Vui long tai lai va thu lai. |
| Update API failure | After save | Server Error | Failed to save changes. Please try again. | Luu thay doi that bai. Vui long thu lai. |

---

### 3.9 Employee Updates Their Own Information

**As a field employee** I want to update my personal information through the mobile app **So that** my records stay current without needing to contact the admin

**Precondition:**

- Employee is logged into the mobile app
- Employee account status is Active

**User Flow:**

1. Employee navigates to their profile in the mobile app.
2. Employee edits allowed fields: Phone Number, Email, Address (Province/District/Ward/Detail), Bank Information, Face Photos.
3. Employee submits the changes.
4. System saves the changes with status = Pending Review.
5. System sends a notification to the admin on the portal (notification design TBD — separate PRD).
6. Admin reviews the change request on the portal:
   - System displays old value vs. new value side by side for each changed field.
   - Admin clicks "Approve": changes are applied to the employee record.
   - Admin clicks "Reject": changes are discarded. Employee is notified of the rejection.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Employees can only edit: Phone, Email, Address, Bank Info, Face Photos. All other fields are read-only. |
| AC-2 | Changes are not applied until admin approves them. The employee's current data remains unchanged during the review period. |
| AC-3 | Admin sees a clear diff view (old vs. new) for each field the employee changed. |
| AC-4 | If the employee submits another change while a previous one is still pending, the new submission replaces the pending one. |
| AC-5 | If admin rejects, employee receives a notification (mechanism TBD in Notification PRD). |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Employee changes phone number to one already in use | Validation at submission: "This phone number is already registered." Block submission. |
| EC-2 | Employee updates face photo and it matches another employee | Face matching runs at submission. Block with error if match found. |
| EC-3 | Employee account is set to Inactive while a change request is pending | Pending change request is automatically discarded. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Duplicate phone number | After submit | Business Rule | This phone number is already registered. | So dien thoai nay da duoc dang ky. |
| Face match detected | After submit | Business Rule | Your photo matches another employee's record. | Anh cua ban trung khop voi nhan vien khac. |
| Submit API failure | After submit | Server Error | Failed to submit changes. Please try again. | Gui thay doi that bai. Vui long thu lai. |

---

### 3.10 Activate or Deactivate an Employee

**As an admin** I want to toggle an employee's status between Active and Inactive **So that** I can control which employees are available for project assignment without deleting their records

**Precondition:**

- Employee exists in the system with status Active or Inactive

**User Flow:**

1. Admin clicks the status toggle on an employee (from list view or detail view).
2. **If changing Active to Inactive:**
   - System checks if the employee has any current or future project assignments.
   - **If NO assignments:** status changes to Inactive immediately.
   - **If YES assignments:** system displays a warning dialog listing all affected projects. Admin must choose:
     - **Option A: "Reassign"** — opens a flow to select a replacement employee for each project assignment. After all reassignments are complete, status changes to Inactive.
     - **Option B: "Remove all future assignments"** — deletes all future schedule entries and task assignments for this employee across all projects. Confirm dialog. Then status changes to Inactive.
     - **Option C: "Cancel"** — no change.
3. **If changing Inactive to Active:**
   - Status changes to Active immediately. No additional checks required.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Inactive employees cannot be assigned to any project. |
| AC-2 | Project dependency check includes both current (today) and future (after today) assignments. |
| AC-3 | Historical data (past assignments, completed tasks) is not affected by status changes. |
| AC-4 | Bulk status toggle applies the same logic. Employees with project dependencies are flagged and excluded, with a summary shown to the admin. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Employee has assignments only in the past (all completed) | No dependency conflict. Allow immediate Inactive toggle. |
| EC-2 | Admin selects "Reassign" but no suitable replacement is available | Admin can cancel the reassignment and choose "Remove all future assignments" instead. |
| EC-3 | Bulk toggle includes employees with and without project dependencies | Process dependency-free employees immediately. List dependent employees separately for individual resolution. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Active projects exist | After toggle click | Business Rule | This employee has active assignments in X project(s). Please reassign or remove future assignments first. | Nhan vien nay dang tham gia X du an. Vui long chuyen giao hoac xoa cac phan bo tuong lai truoc. |
| Reassignment API failure | After reassign confirm | Server Error | Failed to reassign. Please try again. | Chuyen giao that bai. Vui long thu lai. |
| Status toggle API failure | After toggle click | Server Error | Failed to update employee status. Please try again. | Cap nhat trang thai nhan vien that bai. Vui long thu lai. |

---

### 3.11 Delete an Employee Record

**As an admin** I want to permanently delete an employee record **So that** I can remove employees who are no longer associated with my organization

**Precondition:**

- Employee exists in the system

**User Flow:**

1. Admin clicks "Delete" on an employee (from list view or detail view).
2. **If employee status is Inactive and has no future assignments:**
   - System displays confirmation dialog: "This action is permanent and cannot be undone. Delete this employee?"
   - Admin confirms: employee record is permanently deleted (soft delete).
3. **If employee status is Active:**
   - System checks for current or future project assignments.
   - **If NO assignments:** display confirmation dialog. Admin confirms: soft delete.
   - **If YES assignments:** display warning dialog listing all affected projects. Admin must choose:
     - **Option A: "Reassign and Delete"** — reassign all future work to another employee, then delete.
     - **Option B: "Remove all future assignments and Delete"** — remove all future schedule entries and task assignments, then delete.
     - **Option C: "Cancel"** — no action.
4. After deletion:
   - Employee record is permanently removed from the system (including face data, personal info).
   - Historical data (check-ins, completed tasks, reports) is preserved. Employee name appears with a "(Deleted)" tag in reports.
   - Phone number, CCCD, and other unique identifiers are freed for reuse.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Deletion is permanent. No restore functionality. |
| AC-2 | All unique identifiers (phone, CMND, employee code, username) are released after deletion. |
| AC-3 | Face data is permanently purged — a new employee with the same face can register. |
| AC-4 | Bulk delete applies the same logic. Employees with project dependencies are flagged separately. |
| AC-5 | Pending change requests (from employee mobile edits) for this employee are automatically discarded upon deletion. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Deleting an employee with status = Pending Approval | Allow immediate deletion (no project dependencies possible for pending employees). |
| EC-2 | Deleting an employee with status = Rejected (retained) | Allow immediate deletion. Frees up their phone/CMND/face for re-registration. |
| EC-3 | Bulk delete includes employees across all statuses | Group by: immediately deletable (Inactive, Pending, Rejected, Active-no-projects) vs. requires action (Active with projects). Process first group, list second group for resolution. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Active project assignments exist | After delete click | Business Rule | This employee has active assignments in X project(s). Please reassign or remove future assignments before deleting. | Nhan vien nay dang tham gia X du an. Vui long chuyen giao hoac xoa cac phan bo tuong lai truoc khi xoa. |
| Deletion API failure | After delete confirm | Server Error | Failed to delete employee. Please try again. | Xoa nhan vien that bai. Vui long thu lai. |

---

### 3.12 Export Employee Login Credentials

**As an admin** I want to export login credentials for selected employees to an Excel file **So that** I can distribute credentials to employees who were created manually or need a password reset

**Precondition:**

- At least one employee with status = Active is selected in the list view

**User Flow:**

1. Admin selects one or more employees from the list view.
2. Admin clicks "Export Credentials" from the bulk actions menu.
3. System displays a confirmation dialog: "This will reset the password for all X selected employees. They will need to log in again with the new password. Continue?"
4. Admin confirms.
5. System resets the password for each selected employee and generates a new password.
6. System generates an Excel file containing: Employee Code, Employee Name, Username, New Password.
7. File downloads to the admin's device.
8. Affected employees are logged out of the mobile app (if currently logged in) and must log in with the new password. Password change is not forced on this login but is available as an option.

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Password reset is applied to ALL selected employees, regardless of creation source (manual or self-registration). |
| AC-2 | Confirmation dialog clearly states that passwords will be reset. |
| AC-3 | Exported Excel file contains only: Employee Code, Name, Username, New Password. No other personal data. |
| AC-4 | Affected employees are immediately logged out of the mobile app. |
| AC-5 | On re-login with the new password, employees are NOT forced to change password (unlike first-ever login). They may optionally change it. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-2 | Admin exports credentials for a single employee | Same flow applies. Excel file contains one row. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| File download failure | After password reset | Server Error | Passwords were reset but the file could not be downloaded. Please try exporting again. | Mat khau da duoc dat lai nhung khong the tai file. Vui long thu xuat lai. |

---

### 3.13 Modify Employee Module Configuration

**As an admin** I want to change the employee module settings after the initial onboarding wizard **So that** I can adapt the configuration as my organization's needs evolve

**Precondition:**

- Onboarding wizard has been completed at least once

**User Flow:**

1. Admin clicks the "Settings" button on the employee list view (positioned next to "Add Employee").
2. System opens the settings page displaying all configurable options (same as onboarding wizard, pre-filled with current settings):
   - **Position list:** add / edit / delete positions
   - **Employee Code rule:** change rule (max length, character types, prefix)
   - **Weekly Availability:** toggle on/off, configure time slot granularity
   - **Optional fields:** toggle CMND/CCCD, Height/Weight, Tax ID, Bank Information on or off
3. Admin makes changes and clicks "Save".
4. Changes take effect immediately for all future employee creation forms.
5. Existing employee records are not retroactively affected (e.g., if CMND is toggled off, existing employees who already have CMND data retain it; the field simply stops appearing on new forms).

**Acceptance Criteria:**

| Criteria | Description |
|----------|-------------|
| AC-1 | Settings page mirrors the onboarding wizard structure but with pre-filled current values. |
| AC-2 | Deleting a position that is currently assigned to employees triggers a warning: "X employees have this position. Removing it will unassign them. Continue?" |
| AC-3 | Changing the employee code rule does not retroactively change existing employee codes. |
| AC-4 | Toggling off an optional field hides it from creation forms but does not delete existing data. |
| AC-5 | Settings changes are applied immediately — no restart or cache clear needed. |

**Edge Cases:**

| Edge Case | Scenario | Behavior |
|-----------|----------|----------|
| EC-1 | Admin deletes all positions | Positions field is hidden from creation forms (same as selecting "No" in onboarding Q1). |
| EC-2 | Admin changes employee code rule (e.g., changes prefix or max length) | Existing employees keep their current codes. New employees get codes per the updated rule. |
| EC-3 | Admin toggles Bank Information off while employees have bank data | Existing bank data is retained but the fields no longer appear on new creation forms or the self-registration form. Existing employee detail views still show the bank data. |

**Error Handling:**

| Error Scenario | Trigger Point | Alert Type | English Message | Vietnamese Message |
|----------------|---------------|------------|-----------------|--------------------|
| Empty position name | Add position input | Validation Error | Position name cannot be empty. | Ten vi tri khong duoc de trong. |
| Duplicate position name | Add position input | Validation Error | This position already exists. | Vi tri nay da ton tai. |
| Deleting assigned position | After delete position click | Business Rule | X employees currently have this position. Removing it will unassign them. Continue? | X nhan vien dang co vi tri nay. Xoa se go bo vi tri cua ho. Tiep tuc? |
| Overlapping time slots | Weekly Availability time slot config | Validation Error | Time slots cannot overlap. Please adjust the time ranges. | Cac khung gio khong duoc chong cheo. Vui long dieu chinh lai. |
| Invalid time range | Weekly Availability time slot config | Validation Error | End time must be after start time. | Gio ket thuc phai sau gio bat dau. |
| Settings save failure | After save | Server Error | Failed to save settings. Please try again. | Luu cau hinh that bai. Vui long thu lai. |
