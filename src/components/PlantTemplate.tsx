"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import "../styles/PlantTemplate.scss";

type PlantTemplateProps = {
  frontmatter: {
    commonName: string;
    otherNames: string;
    scientificName: string;
    family: string;
    size: string;
    hostTo: string;
    zones: string;
    toxic: string;
    lifespan: string;
    description: string;
    waterNeeds: string;
    sunNeeds: string;
    fertilizerNeeds: string;
    soilNeeds: string;
    propagation: string;
    imageOne: string;
    color: string;
    interestingFacts: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const PlantTemplate: React.FC<PlantTemplateProps> = ({ frontmatter, mdxSource }) => {
  const {
    commonName,
    scientificName,
    color,
    description,
    family,
    size,
    hostTo,
    zones,
    lifespan,
    toxic,
    waterNeeds,
    sunNeeds,
    fertilizerNeeds,
    soilNeeds,
    propagation,
    imageOne,
  } = frontmatter;

  return (
    <div className="h-pad">
    <div className="flex gap-1 pad-top b-pad ">
<div className="col-6">
      {/* Title Section */}
      <img src={imageOne} alt={commonName} className="image" />
      <h1 className="title" style={{ color }}>{commonName}</h1>
      <h2 className="subtitle">{scientificName}</h2>
      <p className="description">{description}</p>
      </div>
      <div className="col-6">
      {/* Details Section */}
      <div className="details">
        <p className="detail">
          <span className="label">Family:</span> {family}
        </p>
        <p className="detail">
          <span className="label">Size:</span> {size}
        </p>
        <p className="detail">
          <span className="label">Host To:</span> {hostTo}
        </p>
        <p className="detail">
          <span className="label">Zones:</span> {zones}
        </p>
        <p className="detail">
          <span className="label">Lifespan:</span> {lifespan}
        </p>
        <p className="detail">
          <span className="label">Toxicity:</span> {toxic}
        </p>
      </div>

</div>
</div>

      {/* Needs Section */}
      <div className="needs-section">
        <div className="need">
          <h3 className="need-title">Water Needs</h3>
          <p className="need-description">{waterNeeds}</p>
        </div>
        <div className="need">
          <h3 className="need-title">Sun Needs</h3>
          <p className="need-description">{sunNeeds}</p>
        </div>
        <div className="need">
          <h3 className="need-title">Fertilizer Needs</h3>
          <p className="need-description">{fertilizerNeeds}</p>
        </div>
        <div className="need">
          <h3 className="need-title">Soil Needs</h3>
          <p className="need-description">{soilNeeds}</p>
        </div>
        <div className="need">
          <h3 className="need-title">Propagation</h3>
          <p className="need-description">{propagation}</p>
        </div>
      </div>

      {/* Additional MDX Content */}
      <div className="additional-content">
        <MDXRemote {...mdxSource} />
      </div>
      </div>
  );
};

export default PlantTemplate;
