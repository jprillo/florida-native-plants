import React from "react";
import Link from "next/link";
import { Butterfly } from "../components/getButterflies";

type ButterflyListProps = {
  butterflies: Butterfly[];
};

export default function ButterflyList({ butterflies }: ButterflyListProps) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {butterflies.map((butterfly) => (
        <li key={butterfly.id} style={{ listStyle: "none" }}>
          <Link
            className="flower-container"
            style={{
              color: butterfly.color,
              borderColor: butterfly.color,
              backgroundImage: `url('${butterfly.imageOne}')`,

              backgroundSize: "cover",
backgroundPosition: "center",

              borderRadius: "25px",
              height: "265px",
              width: "200px",
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
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>
                {butterfly.commonName}
              </h3>
              <p style={{ margin: "0.5rem 0 0", fontSize: "1rem" }}>
                {butterfly.latinName}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
