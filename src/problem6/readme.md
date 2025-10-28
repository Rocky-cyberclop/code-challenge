# 🏆 Real-Time Scoreboard Application

This application is a simple **real-time scoreboard** that displays the **top 10 users’ scores**, updated live as users perform actions.  
Only authenticated users can perform actions that increase their scores.

---

## 📦 Project Overview

### Architecture
The system is divided into three main parts:
1. **Frontend** – displays the live scoreboard and handles authentication.
2. **Backend Services**:
   - **Auth Service** – manages users and authentication; includes `User` class with action logic.
   - **Score & Leaderboard Service** – updates scores and computes the top 10 leaderboard.
   - **Socket Service** – handles real-time updates using Pub/Sub channels.

For the **detailed structure and workflow**, please refer to the **two diagrams**:
- **Services Diagram** → shows system components and relationships: https://app.diagrams.net/#G1sftp21ySXLgl75hlb25NBGxUjGrEnMWe#%7B%22pageId%22%3A%22I4EuCvOLdgX4QRM-kxrP%22%7D
- **Flow Diagram** → shows request/event flow through the system: https://app.diagrams.net/#G1MQ6gctUdOzk9C8nxeFgc61hajA4emcsQ#%7B%22pageId%22%3A%22pCdB2hRhflmQmXQ41Ohr%22%7D

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/scoreboard-app.git
cd scoreboard-app
