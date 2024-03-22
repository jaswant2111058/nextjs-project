// components/SportsCard.tsx
import Image from 'next/image';

interface SportsCardProps {
  teamName: string;
  totalEvents: number;
  sportType: string;
  imageUrl: string;
}

const SportsCard: React.FC<SportsCardProps> = ({ teamName, totalEvents, sportType, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={imageUrl}
        alt={`Image of ${teamName}`}
        width={363} // Adjust as needed
        height={775} // Adjust as needed
        objectFit="cover"
      />
      <div className="px-6 py-4 bg-gray-900 text-white">
        <div className="font-bold text-xl mb-2">{teamName}</div>
        <p className="text-base">
          <span className="font-bold">Total Events</span>
          <span className="block">{totalEvents} Events</span>
        </p>
        <p className="text-base">
          <span className="font-bold">Sport</span>
          <span className="block">{sportType}</span>
        </p>
      </div>
    </div>
  );
};

export default SportsCard;
