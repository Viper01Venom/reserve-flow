import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

const API = "http://localhost:8080/api/bookings";

function App() {
  const [bookings, setBookings] = useState([]);

  async function fetchBookings() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Failed to fetch bookings", err);
      setBookings([]);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <h1>Viper Room Booking</h1>
      <BookingForm onCreated={fetchBookings} />
      <hr />
      <h2>Bookings</h2>
      <ul>
        {bookings.length === 0 && <li>No bookings yet</li>}
        {bookings.map(b => (
          <li key={b.id}>
            <strong>{b.roomName}</strong> — {b.bookedBy} (id: {b.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
