# Local Setup

This project is a full-stack application that includes:

- Frontend (React + TypeScript + Vite)
- Backend (Express + TypeScript)
- Database (Prisma)
- Authentication (Clerk)

Follow the steps below to run the application locally.

---

## 1 Clone the Repository

```bash
git clone <your-repo-url>
cd Sprint
```

---

## 2 Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

---

### Environment Variables

Create a `.env` file inside `/backend` and add:

```env
DATABASE_URL="your_database_connection_string"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

If using SQLite locally:

```env
DATABASE_URL="file:./dev.db"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

You can find your Clerk Secret Key in the Clerk Dashboard.

---

### Generate Prisma Client

```bash
npx prisma generate
```

---

### Run Prisma Migrations (if needed)

```bash
npx prisma migrate dev
```

---

### Start Backend Server

```bash
npm run dev
```

Backend will run at:

```
http://localhost:3000
```

---

## 3 Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

---

### Environment Variables

Create a `.env` file inside `/frontend` and add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

You can find this in the Clerk Dashboard.

---

### Start Frontend Server

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 4 Running the Application

1. Make sure backend is running on port 3000.
2. Make sure frontend is running on port 5173.
3. Open your browser and go to:

```
http://localhost:5173
```

4. Register or log in using Clerk.
5. Add and manage games.

---

## 5 Important Notes

- Backend must be running before frontend can fetch data.
- Prisma client must be generated before starting backend.
- Environment variables must be configured correctly.
- If port 3000 is already in use, stop existing processes.

To check port usage:

```bash
netstat -ano | findstr :3000
```

To kill a process:

```bash
taskkill /PID <PID_NUMBER> /F
```