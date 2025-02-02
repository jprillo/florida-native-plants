import React from "react";
import Link from "next/link";
import { Butterfly } from "../components/getButterflies";

type ButterflyListProps = {
  butterflies: Butterfly[];
};

export default function ButterflyList({ butterflies }: ButterflyListProps) {
  return (
    <ul    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      paddingTop: "20px",
      paddingBottom: "50px",
      gap: "20px",
    }}>
      {butterflies.map((butterfly) => (

          <Link
          key={butterfly.id}
            className="flower-container"
            style={{
              color: butterfly.color,
              borderColor: butterfly.color,
              backgroundImage: `url(${butterfly.imageOne})`,
              borderRadius: "25px",
              backgroundPosition: "center",
          backgroundSize: "cover",
              height: "265px",

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "10px",
              textDecoration: "none",
              textAlign: "center",
            }}
            href={`/butterflies/${butterfly.id}`}
          >
            <div>
              <h3>{butterfly.commonName}</h3>
              <p>
                {butterfly.latinName}
              </p>
            </div>
          </Link>

      ))}
    </ul>
  );
}
