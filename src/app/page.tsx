import Image from "next/image";
import Navbar from "./components/navbar.tsx";
import SocialMedia from "./components/socialMedia.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full">
        <article className="flex h-screen justify-center bg-[#303F51]">
          <div className="flex items-center gap-10">
            <div className="flex flex-col space-y-5">
              <p className="text-xl text-[#DDD3C2]">Hei, mitt navn er</p>
              <strong className="text-7xl text-white">Miriam Haugland</strong>
              <p className="text-xl text-[#DDD3C2]">
                og jeg tar en bachelor innen Informasjonsteknologi, <br />
                Frontend- og mobilutvikling.
              </p>
              <SocialMedia />
            </div>
            <div>
              <Image
                src="/profileImage.jpg"
                alt="Profile picture of Miriam"
                width={300}
                height={300}
              />
            </div>
          </div>
        </article>
        <article className="h-screen bg-[#DDD3C2]">
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col w-2/4">
              <h1 className="text-5xl text-[#303F51]">
                <strong>Om meg</strong>
              </h1>
              <p className="text-xl">
                Mitt navn er Miriam og jeg tar en bachelor innen
                Informasjonsteknologi, Frontend- og mobilutvikling hos Høyskolen
                Kristiania. Jeg har et tidligere fagbrev som Barne- og
                ungdomsarbeider, hvor jeg har arbeidet både i Norge og Danmark
                innen faget og fått samarbeidet med mennesker i alle aldre. En
                sterk interesse innen teknologi, design og spill fikk meg til å
                ta en ny utdannelse innen programmering, noe jeg er så glad for
                at jeg turte! <br /> <br />
                Gjennom utdanningen har jeg har fått prøvd meg praktisk på
                forskjellige frontend og backend programmeringsspråk. Fra mindre
                ukentlige oppgaver, til større arbeidskrav og eksamner, har jeg
                fått “hands on experience”. Samtidig har jeg vært
                studentassistent for første års studentene som startet på
                skolen, noe som har vært veldig givende og lærerikt, men jeg
                kommer mer inn på dette under “Utdanning” og “Arbeid”.
              </p>
            </div>
            <div>
              <Image
                src="/profileFull.jpg"
                alt="Picture of Miriam"
                width={400}
                height={400}
              />
            </div>
          </div>
        </article>
        <article className="h-screen bg-[#303F51]">
          <h1 className="text-5xl text-[#DDD3C2]">Utdanning</h1>
        </article>
      </main>
    </>
  );
}
