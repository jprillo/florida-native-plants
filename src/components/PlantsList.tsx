"use client";

import React from "react";
import Link from "next/link";

type Plant = {
  id: string;
  commonName: string;
  scientificName: string;
  description: string;
  color: string;
  hostTo: string;
  imageOne: string;
};

type PlantsListProps = {
  plants: Plant[];
  count?: number; // Optional prop to specify how many random plants to show
};

export default function PlantsList({ plants, count = 4 }: PlantsListProps) {
  // Shuffle the plants array and take the first `count` plants
  const shuffledPlants = [...plants].sort(() => Math.random() - 0.5).slice(0, count);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px",  justifyContent: "center" }}>
      {shuffledPlants.map((plant) => (
        <li
          key={plant.id}
          style={{
            listStyle: "none",
            borderColor: plant.color,
            backgroundImage: `url('${plant.imageOne}')`,
            borderWidth: "2px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

          }}
        >
          <Link
            href={`/plants/${plant.id}`}
            style={{
              textDecoration: "none",


            }}
          >

            <div style={{ padding: "10px",
                 color: "inherit",
                 display: "block",
                 height: "100%",

             }}>
              <h3 style={{ margin: "0", fontSize: "1.2rem", color: plant.color }}>
                {plant.commonName}
              </h3>
              <p style={{ margin: "0.5rem 0", fontSize: "1rem", color: "#555" }}>
                {plant.scientificName}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
