package com.viper.booking;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class BookingService {
    private final List<Booking> bookings = new ArrayList<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    public List<Booking> getAll() {
        return new ArrayList<>(bookings);
    }

    public Optional<Booking> findById(Long id) {
        return bookings.stream().filter(b -> b.getId().equals(id)).findFirst();
    }

    public Booking create(Booking booking) {
        booking.setId(idGenerator.getAndIncrement());
        bookings.add(booking);
        return booking;
    }

    public boolean delete(Long id) {
        return bookings.removeIf(b -> b.getId().equals(id));
    }
}
