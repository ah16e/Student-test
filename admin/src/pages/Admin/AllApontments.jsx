import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

export default function AllApontments() {
  const { bookings, token, getCompleteBooking } = useContext(AdminContext);

  useEffect(() => {
    if (token) {
     getCompleteBooking();
    }
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">All Appointments</h1>
      {bookings ?(
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Teacher</th>
              <th className="py-2 px-4 border-b">Student</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2 px-4 border-b">{booking.teacher.name}</td>
                <td className="py-2 px-4 border-b">{booking.student.email}</td>
                <td className="py-2 px-4 border-b">{booking.slotDate}</td>
                <td className="py-2 px-4 border-b">{booking.slotTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

