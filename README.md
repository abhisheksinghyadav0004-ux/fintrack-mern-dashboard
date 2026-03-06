🚀 FinTrack: Full-Stack Financial Management Dashboard
FinTrack is a high-performance, real-time financial tracking application built using the MERN Stack. It’s designed for users who want a sleek, dark-themed interface to monitor their cash flow, visualize spending patterns, and manage transactions with zero lag.

🛠️ The Tech Stack (What I Used):
        1)Frontend: React.js (Functional Components, Hooks)
        2)State Management: React Context API (for seamless data flow without prop-drilling)
        3)Backend: Node.js & Express.js (RESTful API architecture)
        4)Database: MongoDB Atlas (Cloud-based NoSQL database for data persistence)
        5)Data Visualization: Chart.js (for interactive and responsive graphs)
        6)Styling: Custom CSS3 with Glassmorphism and Neon UI effects.

✨ Key Features in Detail:
1. Sleek Sidebar & Navigation
      1)Implemented a Persistent Sidebar that provides quick access to different dashboard views.
      2)Includes smooth hover transitions and active-state highlighting for a premium user experience.

2. Real-time Inflow/Outflow Tracking:
      1)Income Card: High-contrast Neon Green UI that calculates total earnings using JavaScript’s reduce() method.
      2)Expense Card: Neon Red UI designed to provide immediate visual feedback on spending.

3. Smart Transaction History:
      1)Developed a dynamic feed where the latest transactions always appear at the top.
      2)Applied CSS Linear-Gradient Masking to create a fade-out effect, keeping the dashboard clean.
      3)Features a custom-styled scrollbar for an integrated look.

4. Interactive Analytics Engine:
      1)Doughnut Charts: Visualizes the ratio of Income vs. Expenses.
      2)Line Graphs: Tracks financial trends over time, helping users identify peak spending periods.
      3)Fully responsive charts that resize based on the device screen.

5. Robust Backend Integration
      1)Connected via Axios to a custom-built Express API.
      2)Ensures all data is securely stored in MongoDB, so your financial records are never lost.

🎨 Design Philosophy:
     The UI is built on a Neon-Dark Theme, utilizing high-contrast colors (Green for Profit, Red for Loss) to provide psychological cues. 
     The use of "Net Liquidity" as the primary metric ensures the user knows their exact financial standing in less than a second.

🧑‍💻 Author
Designed & Developed by Abhishek Yadav
Full-Stack Developer



⚙️ Installation & Setup (How to Run This Project)
Follow these steps to get a local copy of the project up and running on your machine.

1. Prerequisites:
    1)Node.js (v14 or higher)
    2)npm (comes with Node.js)
    3)MongoDB Atlas Account (to host your database)

2. Clone the Repository
  1)Bash
  2)git clone https://github.com/YOUR_USERNAME/fintrack-mern-dashboard.git
  3)cd fintrack-mern-dashboard
   
3. Backend Setup
  1)Navigate to the server folder: cd server
  2)Install dependencies: npm install
  3)Create a .env file in the server directory and add your MongoDB URI:
3.1)Plaintext
3.2)MONGO_URI=your_mongodb_connection_string
3.3)PORT=5000
3.4)Start the server: npm start (or npm run dev if using nodemon)

4. Frontend Setup
 1)Open a new terminal and navigate to the client folder: cd client
 2)Install dependencies: npm install
 3)Start the React app: npm start

5. Access the App
 1)The frontend will run on: http://localhost:3000
 2)The backend will run on: http://localhost:5000

📂 Project Structure
Plaintext
fintrack-mern-dashboard/
├── client/                # React.js Frontend
│   ├── src/
│   │   ├── components/    # Sidebar, Analytics, Cards
│   │   ├── context/       # Global State (Context API)
│   │   └── App.js
├── server/                # Node.js & Express Backend
│   ├── models/            # MongoDB Schemas
│   ├── routes/            # API Endpoints
│   └── server.js          # Entry point
└── .gitignore             # Ignoring node_modules and .env 
