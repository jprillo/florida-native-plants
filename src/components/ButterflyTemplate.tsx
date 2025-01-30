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
    <div  className="pad-top h-pad " >
       <div className="butterfly-name">
            <h1>{commonName}</h1>
            <h2  style={{ color: color }}>
              {latinName}
            </h2>

          </div>
      <div className="flex gap-1 " style={{alignContent: "center"}}>
        <div className="col-6">

          <img width="100%" className="h-image" src={imageOne} alt={commonName} />
          <p style={{maxWidth: "800px"}}>{description}</p>
        </div>
        <div className="col-5 stats">
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
            <span style={{color: color }}  className="bold">Other Common Names:</span>
          </p>
          <p>
             {otherNames}
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
            <span style={{color: color }} className="bold">Host Plant:</span>
          </p>
          <p>
            {host}
          </p>
          </div>
        </div>
      </div>

      <div className="flex gap-1  ">
        <div className="col-6">
        <h3>
           Distribution:
          </h3>
          <p >{distribution}</p>
        </div>
        <div>

        </div>
    </div>
      <div className="flex gap-1">

        <div className="col-9">
        <h3 className="bold">Where to Find:</h3>
          <p style={{maxWidth: "700px"}}>
             {whereToFind}
          </p>

          <h3 className="bold">Conservation Status:</h3>
          <p style={{maxWidth: "700px"}}>
           {conservationStatus}
          </p>
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

