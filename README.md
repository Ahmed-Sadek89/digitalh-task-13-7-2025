# 🧩 Frontend Challenge: CRUD Operations Dashboard

## 🚀 Overview

This is a solution to the **Frontend CRUD Dashboard Challenge**, where I built a full-featured dashboard using **Next.js**, **Shadcn UI**, **Zustand**, **NextAuth.js**, and more. The application allows authenticated users to **manage products** with features like:

- Filtering, sorting, and pagination
- Adding, editing, viewing and deleting products
- Form validation using **Zod**
- Global state via **Zustand**
- Authentication with **NextAuth.js**

---

## 📌 Tech Stack

- **Next.js** – Fullstack React framework with SSR
- **Shadcn UI** – Clean, modern UI components
- **NextAuth.js** – Authentication (Credentials Provider)
- **Zustand** – Lightweight global state management
- **Axios** – For API calls (with interceptors)
- **Zod** – Schema-based form validation
- **React Hook Form** – Form management
- **TypeScript** – JavaScript Superset

---

## ✨ Features

### 🔑 Authentication

- Login page with email/password
- Integrated with **NextAuth.js**
- Automatic redirection on login/logout
- Graceful error handling

---

### 📊 Dashboard

#### 🛍 Products Page

- Table listing all products (server-side fetched)
- Columns: Id, Title,Slug, Description, Price, Category(image and name), Images
- Features:
  - Server-side search by product name
  - URL-based search filters (with `SearchParams`)
  - Sorting & pagination
  - Action buttons: **Edit**, **Delete**, **View Details**

#### ➕ Add Product

- "Add Product" button opens a **modal**
- Includes inputs for:  Title, Description, Price, Category(Id), Images
- Validated with `Zod` before submission

#### ✏️ Edit Product

- Click **Edit** to open pre-filled form in modal
- Fields validated using `Zod`
- Updates product on submission

#### 🗑️ Delete Product

- Clicking **Delete** shows a confirmation prompt
- On confirmation, product is removed and UI updates

#### 🔍 View Product Details

- Clicking **View Details** opens a modal with full product info

---

## 🔗 API Endpoints

- Mocked using [Fake Store API by Platzi](https://fakeapi.platzi.com/)
- Axios is used to handle all requests
- Interceptors handle global errors and auth headers

---

## ✅ Bonus Features

- ✅ Written entirely in **TypeScript**
- ✅ **Axios Interceptors** for global error & token handling
- ✅ **Reusable components** (Table, Form Inputs, Modals)
- ✅ Organized code structure using **feature-based folders**
- ✅ Applied **SOLID principles** for maintainability
- ✅ Used **GitHub branches** for each feature

---

## 📁 Project Structure

src/
├── app/ # Next.js pages & layouts
├── components/ # UI components
├── hooks/ # Custom React hooks
├── schema/ # Zod schemas
├── store/ # Zustand state
├── lib/ # Axios & utilities
├── types/ # TypeScript types
├── api/ # API route handlers (mock integration)

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/frontend-dashboard-challenge

# 2. Install dependencies
cd frontend-dashboard-challenge
npm install

# 3. Set environment variables
# Create .env.local with:
BASE_API_URL="https://api.escuelajs.co/api/v1"

NEXTAUTH_SECRET="eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..ECDxwqGvo2WUJgnT.m1z3-R0NFafn1Uz3i4fNGXNE4S3-be8ltI30Ps2oJTA7Z7pWxOgghMxjUMrvOrMk5r4tvOz6hEoekR_B1U_h_TmhoEdO7RCHbVtrHAJrjIk.R8_yae_G2_nmU7_38zzFnw"

# 4. Run the dev server
npm run dev
