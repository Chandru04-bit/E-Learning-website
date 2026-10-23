# EduPulse | Modern Responsive E-Learning Platform

A complete, modern, professional, and fully responsive **E-Learning Web Application** built with **React JS**, **React Router DOM**, **Lucide Icons**, and **LocalStorage** for persistent user authentication, enrollment tracking, and interactive lesson progress.

---

## 🌟 Key Features

### 1. Home Page
- **Hero Section:** High-converting headline, engaging description, primary CTA buttons (*Explore Courses*, *Start Learning*), and student rating metrics.
- **Platform Statistics Banner:** Quick metrics highlighting 45,000+ active students, 150+ courses, 94% completion rate, and 4.9/5 instructor ratings.
- **Domain Categories:** Quick-access category cards (Web Development, UI/UX Design, Data Science, Programming, Digital Marketing) linked directly with catalog filters.
- **Popular & Recently Added Courses:** Responsive course cards with instructor details, ratings, lesson counts, pricing, and dynamic enrollment actions.
- **Platform Benefits & Features:** Value propositions covering industry-vetted curriculum, self-paced progress, real-world projects, and lifetime access.
- **Student Testimonials:** Reviews with ratings, student avatars, and course badges.
- **Final CTA Section:** Call to action encouraging new students to start learning.

### 2. Courses Catalog Page
- **Responsive Course Grid:** Displays 14+ in-depth, unique dummy courses.
- **Live Search Bar:** Instant filtering by course title, topic, or instructor name.
- **Category Filter Tabs:** Pill filters for *All*, *Web Development*, *UI/UX Design*, *Data Science*, *Programming*, and *Digital Marketing* with live course counters.
- **Multi-Option Sorting:** Sort courses by *Recommended*, *Rating (High to Low)*, *Price (Low to High)*, *Price (High to Low)*, *Title (A to Z)*, and *Duration*.
- **Synchronized URL Search Params:** Filter and search state are preserved in URL query parameters (`?category=...&q=...`).
- **Interactive Empty State:** Helpful empty state with a "Reset Filters" action when no courses match.

### 3. Course Details Page (`/courses/:id`)
- **Breadcrumb Navigation:** Seamless navigational trail from Home > Courses > Category > Course Title.
- **Course Banner:** Title, category badge, level tag, rating, student enrollment count, and instructor badge.
- **Sticky Enrollment Sidecard:** Media preview, pricing with discount badges, enrollment button, guarantee notes, and course feature highlights.
- **Learning Outcomes:** Visual grid with bulleted skills mastered upon completion.
- **Interactive Expandable Curriculum:** Accordion modules with lesson titles, lesson types (*video*, *reading*, *quiz*, *project*), and duration. Supports "Expand All" / "Collapse All".
- **Interactive Lesson Checklist Modal:** Allows students to mark lessons complete/incomplete in real time.
- **Instructor Profile:** Dedicated biography with credentials, student reach, and ratings.
- **Related Courses:** Suggested complementary courses in the same category.

### 4. My Learning Page (`/my-learning` - Protected Route)
- **Student Profile Header:** Personalized welcome message, student avatar, and email badge.
- **Real-Time Stat Pills:** Live counts of *Enrolled Courses*, *Courses in Progress*, *Completed Courses*, and *Total Lessons Done*.
- **Filter Tabs:** Tab switching between *All Courses*, *In Progress*, and *Completed*.
- **Enrolled Course Cards:** Thumbnail, category badge, completion ribbon, progress bar percentage, and completed vs total lesson count.
- **Interactive Progress Tracking:** "Continue Learning" opens the interactive lesson modal where students check off lessons; course progress percentage updates automatically and persists in LocalStorage.
- **Empty State:** Helpful empty state encouraging students to explore courses if none are enrolled.

### 5. Authentication (Login & Registration)
- **Login Page (`/login`):**
  - Email and password validation.
  - Password visibility toggle.
  - Verification against registered accounts in LocalStorage.
  - Redirects back to requested page (e.g. `/my-learning` or course details).
  - **One-Click Demo Tester Login:** Instantly populates and signs in as demo student `demo@edupulse.com`.
- **Registration Page (`/register`):**
  - Full name, email, password, and confirm password fields.
  - Form validations (email format, 6+ character password, password matching).
  - Duplicate email prevention.
  - Automatically saves new registered user to LocalStorage and redirects to Login.
- **Protected Routes:** Unauthorized attempts to access `/my-learning` redirect to `/login` with return location preserved.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React 18** | Functional components, Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useContext`) |
| **React Router DOM v6** | Client-side routing, protected routes, URL search params |
| **Lucide React** | Clean, modern SVG icons for navigation, indicators, and controls |
| **HTML5 & CSS3** | Custom design system, Flexbox, CSS Grid, media queries |
| **LocalStorage API** | Browser-persisted user profiles, active sessions, enrollments, and lesson progress |
| **Vite** | Fast development server and production build bundler |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 2. Installation
Clone or navigate to the project directory:
```bash
cd "d:\Stackly Project\E-Learning Website"
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 4. Build for Production
```bash
npm run build
```
The optimized production build will be generated in the `dist/` directory.

---

## 👤 Demo Login Credentials

You can use the built-in **"One-Click Login"** button on the Sign In page, or enter manually:

- **Email:** `demo@edupulse.com`
- **Password:** `Password123`

You can also register any number of new test accounts directly from the Registration page.

---

## 📱 Responsive Testing
The design is verified across all standard viewport dimensions:
- **Mobile devices:** 360px, 375px, 390px, 414px
- **Tablets:** 768px
- **Laptops:** 1024px
- **Desktop screens:** 1280px and above
