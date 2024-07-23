import React from "react";
type Event = {
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
};
type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="mb-8 p-4 border rounded shadow-md bg-gray-700">
      <h3 className="text-xl font-semibold mb-2 text-gray-100">
        {event.title}
      </h3>
      <p className="text-gray-300">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-gray-300">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-300">
        <strong>Time:</strong> {event.time}
      </p>
      <p className="text-gray-300">
        <strong>Description:</strong> {event.description}
      </p>
    </div>
  );
};

export default EventCard;
