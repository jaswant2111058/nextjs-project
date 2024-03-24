// pages/index.tsx
import Head from 'next/head';
import SportsCardProps from "./card1"
import EventCardProps from "./card2"
import Image from 'next/image';


const Home = () => {
  // Dummy data or fetch from an API
  const sportsData = [
    {
      teamName: "Sacramento River Cats",
      totalEvents: 15,
      sportType: "Baseball",
      imageUrl: "/images/card0.png"
    },
    {
      teamName: "Las Vegas Aviators",
      totalEvents: 15,
      sportType: "string",
      imageUrl: "/images/card1.png"
    },
    {
      teamName: "New Jersey Devils",
      totalEvents: 15,
      sportType: "string",
      imageUrl: "/images/card2.png"
    },
    {
      teamName: "Las Vegas Aviators",
      totalEvents: 15,
      sportType: "string",
      imageUrl: "/images/card3.png"
    },
    // Other teams...
  ];



  return (
    <>
      <div style={{ backgroundColor: "#292B32", padding: 70, }}>

        <div style={{ borderWidth: 3, borderTop: "none", borderLeft: "none", borderRight: "none", borderBottomColor: "#738FFF", width: 70 }} >
          <p style={{ fontSize: 18, textAlign: "center", fontWeight: "bold", marginBottom: 5 }}>Sports</p>
        </div>
        {/* <Head>
          <title>Sports Web Page</title>
        </Head> */}
        <main className="">
          <section style={{ overflow: "hidden", display: "flex", justifyContent: "center", gap: 15, flexWrap: "wrap" }} className="">
            {sportsData.map((data, index) => (
              <SportsCardProps key={index} {...data} />
            ))}
            <div style={{ backgroundColor: "#3B3E47", padding: 10, maxWidth: "18%", maxHeight: "10%", marginTop: 10, marginBottom: 50 }} className="">
              <Image
                className=""
                src={"/images/ad.png"}
                alt={`Image of ${"AD"}`}
                width={350}
                height={400}
              />
              <div className="">
                <div style={{ fontSize: "100%", textAlign: "center", fontWeight: "bold", marginTop: 10, marginBottom: 10 }} className="">{"Advertisement title"}</div>
                <div style={{ padding: 2, overflow: "hidden" }}>
                  <p style={{ textAlign: "center" }} className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div >
          </section>
        </main>
        <div style={{backgroundColor:"#2C9CF0", margin:30,marginTop:10,marginBottom:40,marginLeft:"auto", marginRight:"auto", padding:20, textAlign:"center",width:150}}>
            See More 
        </div>
        <div style={{ backgroundColor: "#18282A", padding: 50 }}>
          <div style={{ textAlign: "center", fontSize: 24, fontWeight: "700", marginTop: 10, marginBottom: 20 }}>
            Collection Spotlight
          </div>
          <div style={{ textAlign: "center", fontSize: 14, marginBottom: 20, maxWidth: "70%", marginLeft: "auto", marginRight: "auto" }}>
            Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10, alignItems: "center" }}>
            <div style={{ color: "#2C9CF0", fontSize: 20, paddingLeft: 5, paddingRight: 5, borderColor: "#2C9CF0", borderWidth: 1, }}>
              {"<"}
            </div>
            <div style={{display:"flex",justifyContent:"center" ,gap :20, maxWidth:"70%"}} >
              <div style={{ backgroundColor: "#3B3E47", padding: 10, overflow: "hidden", maxWidth: "50%" }}>

                <Image
                  className=""
                  src={"/images/ev0.png"}
                  alt={`Image of ${"AD"}`}
                  width={350}
                  height={400}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <div style={{ width: 20, height: 20, borderRadius: 100, marginLeft: -20, backgroundColor: "#18282A" }}></div>
                  <div style={{ borderStyle: "dashed", borderWidth: 1, borderColor: "#818A97", width: "100%" }}></div>
                  <div style={{ width: 20, height: 20, borderRadius: 100, marginRight: -20, backgroundColor: "#18282A" }}></div>
                </div>
                <div style={{ textAlign: "center", fontSize: 20, fontWeight: "700", }}>
                  Las Vegas Aviators
                </div>
                <div style={{ textAlign: "center", margin: 5 }}>
                  Oct 15 | SUN | 4:30 PM
                </div>
                <div style={{ textAlign: "center", margin: 5 }}>
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
                <div style={{ textAlign: "center", backgroundColor: "black", padding: 6 }}>
                  Take Flight Collection
                </div>
              </div>

              <div style={{ backgroundColor: "#3B3E47", padding: 10, overflow: "hidden", maxWidth: "50%" }}>

                <Image
                  className=""
                  src={"/images/ev0.png"}
                  alt={`Image of ${"AD"}`}
                  width={350}
                  height={400}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <div style={{ width: 20, height: 20, borderRadius: 100, marginLeft: -20, backgroundColor: "#18282A" }}></div>
                  <div style={{ borderStyle: "dashed", borderWidth: 1, borderColor: "#818A97", width: "100%" }}></div>
                  <div style={{ width: 20, height: 20, borderRadius: 100, marginRight: -20, backgroundColor: "#18282A" }}></div>
                </div>
                <div style={{ textAlign: "center", fontSize: 20, fontWeight: "700", }}>
                  Las Vegas Aviators
                </div>
                <div style={{ textAlign: "center", margin: 5 }}>
                  Oct 15 | SUN | 4:30 PM
                </div>
                <div style={{ textAlign: "center", margin: 5 }}>
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
                <div style={{ textAlign: "center", backgroundColor: "black", padding: 6 }}>
                  Take Flight Collection
                </div>
              </div>

              <div style={{ backgroundColor: "#3B3E47", padding: 10, overflow: "hidden", maxWidth: "50%" }}>

                <Image
                  className=""
                  src={"/images/ev0.png"}
                  alt={`Image of ${"AD"}`}
                  width={350}
                  height={400}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                  <div style={{ width: 20, height: 20, borderRadius: 100, marginLeft: -20, backgroundColor: "#18282A" }}></div>
                  <div style={{ borderStyle: "dashed", borderWidth: 1, borderColor: "#818A97", width: "100%" }}></div>
                  <div style={{ width: 20, height: 20, borderRadius: 100, marginRight: -20, backgroundColor: "#18282A" }}></div>
                </div>
                <div style={{ textAlign: "center", fontSize: 20, fontWeight: "700", }}>
                  Las Vegas Aviators
                </div>
                <div style={{ textAlign: "center", margin: 5 }}>
                  Oct 15 | SUN | 4:30 PM
                </div>
                <div style={{ textAlign: "center", margin: 5 }}>
                  Las Vegas Ballpark, Las Vegas, Nevada
                </div>
                <div style={{ textAlign: "center", backgroundColor: "black", padding: 6 }}>
                  Take Flight Collection
                </div>
              </div>
            </div>
            <div style={{ color: "#2C9CF0", fontSize: 20, paddingLeft: 5, paddingRight: 5, borderColor: "#2C9CF0", borderWidth: 1, }}>
              {">"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
