"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import "../styles/PlantTemplate.scss";
import TableOfContents from "../components/TableOfContents";

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
    <div className="h-pad pad-top">
    <div className="flex gap-1 " style={{alignContent: "center"}}>
<div className="col-8">
      {/* Title Section */}
<div className="butterfly-name">
      <h1 >{commonName}</h1>
      <h2 style={{color: color}}>{scientificName}</h2>
      </div>
      <img width="100%" className="h-image" src={imageOne} alt={commonName} />
      <p className="description">{description}</p>

      <div>
          <p>
            <span style={{color: color }}  className="bold">Toxicity:</span>
          </p>
          <p>
           {toxic}
          </p>
          </div>
      </div>

      <div className="col-4 stats">
      <TableOfContents/>
      {/* Details Section */}

      <div>
          <p>
            <span style={{color: color }}  className="bold">Family:</span>
          </p>
          <p>
           {family}
          </p>
          </div>
          <div>
          <p>
            <span style={{color: color }}  className="bold">Size:</span>
          </p>
          <p>
           {size}
          </p>
          </div>
          <div>
          <p>
            <span style={{color: color }}  className="bold">Host to:</span>
          </p>
          <p>
           {hostTo}
          </p>
          </div>
          <div>
          <p>
            <span style={{color: color }}  className="bold">Zones:</span>
          </p>
          <p>
           {zones}
          </p>
          </div>
          <div>
          <p>
            <span style={{color: color }}  className="bold">Lifespan:</span>
          </p>
          <p>
           {lifespan}
          </p>
          </div>



</div>
</div>

      {/* Needs Section */}
      <div className="needs-section">
        <div className="need col-4 ">
          <h3 className="need-title">Water Needs</h3>
          <p className="need-description">{waterNeeds}</p>
        </div>
        <div className="need col-4">
          <h3 className="need-title">Sun Needs</h3>
          <p className="need-description">{sunNeeds}</p>
        </div>
        <div className="need col-4">
          <h3 className="need-title">Fertilizer Needs</h3>
          <p className="need-description">{fertilizerNeeds}</p>
        </div>
        <div className="need col-6">
          <h3 className="need-title">Soil Needs</h3>
          <p className="need-description">{soilNeeds}</p>
        </div>
        <div className="need col-6">
          <h3 className="need-title">Propagation</h3>
          <p className="need-description">{propagation}</p>
        </div>
      </div>

      {/* Additional MDX Content */}

        <MDXRemote {...mdxSource} />

      </div>
  );
};

export default PlantTemplate;
