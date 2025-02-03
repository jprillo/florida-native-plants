"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import "../styles/BlogTemplate.scss";

type BlogTemplateProps = {
  frontmatter: {
    title: string;
    author: string;
    description: string;
    color1: string;
    featuredImage: string;
    tags: string[];
    date: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const BlogTemplate: React.FC<BlogTemplateProps> = ({ frontmatter, mdxSource }) => {
  const {
    title,
    author,
    description,
    color1,
    featuredImage,
    tags,
    date,
  } = frontmatter;


    // Format the date
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <div className="plant-container h-pad pad-top">
      {/* Title Section */}
      <h1 className="title" >{title}</h1>
      <div className="flex">
      <p>{formattedDate}</p>
      <p >{author}</p>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      </div>

            {/* Animated Line */}
            <div style={{backgroundColor: color1}} className="animated-line"></div>
      <img  style={{textAlign: "center"}} className="featured-image" src={featuredImage} alt={title} />
      <p style={{maxWidth: "800px"}} className="description">{description}</p>
      {/* Additional MDX Content */}
      <div className="additional-content">
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  );
};

export default BlogTemplate;
