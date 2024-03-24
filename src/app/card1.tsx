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
    <div style={{backgroundColor:"#3B3E47",padding:10,maxWidth:"18%",marginTop:10,marginBottom:50}} className="">
      <Image
        className=""
        src={imageUrl}
        alt={`Image of ${teamName}`}
        width={350} 
        height={400}        
      />
      <div className="">
        <div style={{fontSize:18,fontWeight:"bold",marginTop:10,marginBottom:10}} className="">{teamName}</div>
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#292B32",padding:10}}>
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
    </div >
  );
};

export default SportsCard;
