## Issue Tracker

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### About The Project

The issue tracker app is a tool designed to help manage and track issues, tasks, bugs, or any other type of work item that needs to be addressed.

- Users can create new "issues" to report problems, bugs, or tasks that need attention.
- Issues are managed with statuses that reflect their progress, such as Open, In Progress, Closed.
- The issue can be assigned to a team member responsible for addressing it.

#### Built With

- React
- TypeScript
- Next.js
- Prisma
- Tailwind CSS

### Getting Started

#### Prerequisites

- node v22.5.1

#### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:ValeriaTrofim/issue-tracker.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Set up MySQl and Prisma for the Database Url

4. Get the Google Client Id and Google Client Secret from https://console.cloud.google.com

5. Generate authentication token for NextAuth Secret

6. Create a .env file

   ```sh
   DATABASE_URL=""
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET=""
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   ```

   ### Contact

Valeria Trofim - valeria.trofim17@gmail.com

Project Link: [https://issue-tracker-sand-seven.vercel.app](https://issue-tracker-sand-seven.vercel.app)
