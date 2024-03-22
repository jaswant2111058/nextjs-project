// components/EventCard.tsx
import Image from 'next/image';
import React from 'react';

interface EventCardProps {
  teamName: string;
  eventDate: string;
  location: string;
  imageUrl: string;
  buttonText: string;
}

const EventCard: React.FC<EventCardProps> = ({ teamName, eventDate, location, imageUrl, buttonText }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-60">
        {/* Next.js Image component for optimized images */}
        <Image
          src={imageUrl}
          alt={teamName}
          layout="fill" // You can use fill layout for responsive images
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-gray-900 text-xl font-medium mb-2">{teamName}</h3>
        <p className="text-gray-600 text-base mb-4">{eventDate}</p>
        <p className="text-gray-600 text-base mb-4">{location}</p>
        <button className="px-5 py-2 bg-blue-500 text-white text-base font-medium rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
