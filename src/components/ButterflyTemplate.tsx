"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type ButterflyTemplateProps = {
  commonName: string;
  latinName: string;
  color: string;
  family: string;
  description: string;
  size: string;
  host: string;
  distribution: string;
  whereToFind: string;
  migration: string;
  flightSpeed: string;
  conservationStatus: string;
  culturalSignificance: string;
  predatorsAndThreats: string;
  interestingFactsOne: string;
  interestingFactsTwo: string;
  otherNames: string;
  imageOne: string;
  content: MDXRemoteSerializeResult; // MDX content
};

const ButterflyTemplate: React.FC<ButterflyTemplateProps> = ({
  commonName,
  latinName,
  color,
  family,
  description,
  size,
  host,
  distribution,
  whereToFind,
  migration,
  flightSpeed,
  conservationStatus,
  culturalSignificance,
  predatorsAndThreats,
  interestingFactsOne,
  interestingFactsTwo,
  otherNames,
  imageOne,
  content,
}) => {
  return (
    <div className="butterfly-container">
      <div className="flex gap-1 pad-top h-pad b-pad">
        <div className="col-7">
          <div className="butterfly-name">
            <h1>{commonName}</h1>
            <h2 className="sci-name" style={{ backgroundColor: color }}>
              {latinName}
            </h2>
          </div>
          <img className="h-image" src={imageOne} alt={commonName} />
          <p>{description}</p>
        </div>
        <div className="col-5 stats">
          <p>
            <span className="bold">Family:</span> {family}
          </p>
          <p>
            <span className="bold">Other Common Names:</span> {otherNames}
          </p>
          <p>
            <span className="bold">Size:</span> {size}
          </p>
          <p>
            <span className="bold">Host Plant:</span> {host}
          </p>
          <p>
            <span className="bold">Distribution:</span> {distribution}
          </p>
          <p>
            <span className="bold">Where to Find:</span> {whereToFind}
          </p>
          <p>
            <span className="bold">Conservation Status:</span> {conservationStatus}
          </p>
        </div>
      </div>
      <div className="flex gap-1 pad-top b-pad h-pad">
        <div className="col-9">
          <h3>Additional Information</h3>
          {/* Render the MDX content */}
          <MDXRemote {...content} />
        </div>
        <div className="col-3">
          <div className="info-box" style={{ backgroundColor: color }}>
            <h3>Did you know?</h3>
            <p>{interestingFactsTwo}</p>
          </div>
          <div className="ad-box">
            <h3>Does your business need a leg up? Formal Flamingo Digital Marketing</h3>
          </div>
          <div className="info-box" style={{ backgroundColor: color }}>
            <h3>Did you know?</h3>
            <p>{interestingFactsOne}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButterflyTemplate;
