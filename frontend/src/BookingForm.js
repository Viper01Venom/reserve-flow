import React, { useState } from "react";

const API = "http://localhost:8080/api/bookings";

export default function BookingForm({ onCreated }) {
  const [roomName, setRoomName] = useState("");
  const [bookedBy, setBookedBy] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomName, bookedBy }),
      });
      setRoomName("");
      setBookedBy("");
      if (onCreated) onCreated();
    } catch (err) {
      console.error("Failed to create booking", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      <input required placeholder="Room name" value={roomName} onChange={e => setRoomName(e.target.value)} />
      <input required placeholder="Booked by" value={bookedBy} onChange={e => setBookedBy(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? "Saving..." : "Book"}</button>
    </form>
  );
}
