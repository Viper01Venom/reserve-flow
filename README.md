# Spring-React Room Booking

**Simple Full-Stack Demo:** Spring Boot REST API (backend) + React frontend for room bookings.

> Lightweight demo project to show REST API design, Java backend development, and a React frontend — suitable for including on your CV or linking in internship applications.

---

## Quick links
- Repository: (https://github.com/Viper01Venom/reserve-flow.git)`  
  
---

## Features
- REST API with endpoints to list, create and delete bookings.
- In-memory backend service (easy to run; switch to a DB later).
- React frontend that consumes the API and provides a small booking form.
- Simple, easy-to-run local setup for demos and interviews.

---

/backend
├─ pom.xml
└─ src/
├─ main/java/com/viper/booking/
│ ├─ App.java
│ ├─ Booking.java
│ ├─ BookingService.java
│ └─ BookingController.java
└─ main/resources/
└─ application.properties

/frontend
├─ package.json
└─ src/
├─ index.js
├─ App.js
└─ BookingForm.js


---

## Quick start (run locally)

### Prerequisites
- Java 17 (OpenJDK/Temurin recommended) — check: `java --version`
- Maven — check: `mvn -v`
- Node.js + npm — check: `node -v` and `npm -v`

### Run backend
Open a terminal, go to the backend folder, build and run:
```bash
cd backend
mvn clean install
mvn spring-boot:run

Backend will be available at http://localhost:8080.
Test the API:
curl http://localhost:8080/api/bookings
curl -X POST http://localhost:8080/api/bookings -H "Content-Type: application/json" -d '{"roomName":"Room A","bookedBy":"Viper"}'

Run frontend

Open another terminal, install packages and start:
cd frontend
npm install   # first time only
npm start
Open http://localhost:3000 in your browser and use the booking form. The frontend talks to http://localhost:8080/api/bookings.

## Tech stack
- Backend: Java 25, Spring Boot
- Frontend: React (Create React App)
- Dev tools: Maven, Node.js / npm
- Local: Backend runs on `http://localhost:8080`; frontend runs on `http://localhost:3000`

---

