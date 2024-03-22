// pages/index.tsx
import Head from 'next/head';
import SportsCardProps from "./card1"
import EventCardProps from "./card2"


const Home = () => {
  // Dummy data or fetch from an API
  const sportsData = [
    {
      teamName: "string",
      totalEvents: 15,
      sportType: "string",
      imageUrl: ""
    },
    // Other teams...
  ];

  return (
    <>
      <Head>
        <title>Sports Web Page</title>
      </Head>
      <main className="container mx-auto p-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sportsData.map((data, index) => (
            <SportsCardProps key={index} {...data} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
