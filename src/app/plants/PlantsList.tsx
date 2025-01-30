"use client";

import React, { useState } from "react";
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
};

export default function PlantsList({ plants }: PlantsListProps) {
  const [filter, setFilter] = useState("");
  const [showHostPlantsOnly, setShowHostPlantsOnly] = useState(false);

  // Filter plants based on user input
  const filteredPlants = plants.filter((plant) => {
    const isCommonNameMatch = plant.commonName.toLowerCase().includes(filter.toLowerCase());
    const isHostPlant = plant.hostTo !== "N/A";
    return isCommonNameMatch && (!showHostPlantsOnly || isHostPlant);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search plants..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          display: "block",
          margin: "0 auto 20px",
          padding: "10px",
          width: "90%",
          maxWidth: "600px",
        }}
      />
      <button
        onClick={() => setShowHostPlantsOnly(!showHostPlantsOnly)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px 20px",
        }}
      >
        {showHostPlantsOnly ? "Show All Plants" : "Show Only Host Plants"}
      </button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "50px",
          gap: "20px",
        }}
      >
        {filteredPlants.map((plant) => (
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
      </div>
    </div>
  );
}
