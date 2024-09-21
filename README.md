# Issue Tracking System

A feature-rich issue tracking system built with **Next.js**, **NextAuth**, **React**, **TypeScript**, **React Query**, **Prisma**, and **PostgreSQL**. The frontend uses **NextUI** to create a smooth and interactive user experience. Users can log in via GitHub, manage issues with markdown support, and assign issues to others.

## Tech Stack

<div align="center flex">
  <img src="https://skillicons.dev/icons?i=nextjs,react,typescript,prisma,postgres" alt="Tech stack icons" />
  <img src="https://next-auth.js.org/img/favicon.ico" />
</div>

<br/>

- **Next.js**: Server-side rendering and static site generation.
- **NextAuth**: Authentication for Next.js apps, supporting GitHub login.
- **React**: Frontend JavaScript library for building interactive UIs.
- **TypeScript**: Type-safe development for scalability and reliability.
- **React Query**: Data-fetching and state management for React.
- **Prisma**: Type-safe database access.
- **PostgreSQL**: Relational database management system.
- **NextUI**: A React-based UI library for building beautiful interfaces.

## Features

- **GitHub Login**: Secure user authentication through GitHub using **NextAuth**.
- **Add Issues with Markdown**: Users can create new issues with markdown support, including a live preview feature.
- **Issue Management**: Easily assign issues to other users and delete them when no longer needed.
- **Real-Time Updates**: The app leverages **React Query** for fast and efficient data fetching.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/issue-tracking-system.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Install dependencies:

   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/mydb
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. Install dependencies:

   ```bash
   npx prisma migrate dev
   ```

5. Generate the Prisma client:

   ```bash
   npx prisma generate
   ```

6. Seed your database if necessary:

   ```bash
   npx prisma db seed
   ```

7. Install dependencies:
   ```bash
   npx prisma migrate dev
   ```
   
8. Run the Project:
   ```bash
   npm run dev
   ```
