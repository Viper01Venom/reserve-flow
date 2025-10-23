package com.viper.booking;

public class Booking {
    private Long id;
    private String roomName;
    private String bookedBy;

    public Booking() {}

    public Booking(Long id, String roomName, String bookedBy) {
        this.id = id;
        this.roomName = roomName;
        this.bookedBy = bookedBy;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRoomName() { return roomName; }
    public void setRoomName(String roomName) { this.roomName = roomName; }

    public String getBookedBy() { return bookedBy; }
    public void setBookedBy(String bookedBy) { this.bookedBy = bookedBy; }
}
