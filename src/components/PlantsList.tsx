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
    <Link
    key={plant.id}
    className="flower-container"
    href={`/plants/${plant.id}`}
    aria-label={`Learn more about ${plant.commonName}`}
    style={{
      borderColor: plant.color,
      position: "relative",
      backgroundImage: `url('${plant.imageOne}')`,
      borderRadius: "25px",
      height: "265px",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >

      <h3>{plant.commonName}</h3>
      <p>{plant.scientificName}</p>

  </Link>
      ))}
    </ul>
  );
}
