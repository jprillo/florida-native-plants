// components/BlogTemplateClient.tsx
"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import TableOfContents from "./TableOfContents";
import "../styles/BlogTemplate.scss";

export type BlogFrontmatter = {
  title: string;
  author: string;
  description: string;
  color1: string;
  featuredImage: string;
  tags: string[];
  date: string;
  content: MDXRemoteSerializeResult;
};

const BlogTemplate: React.FC<{ frontmatter: BlogFrontmatter }> = ({ frontmatter }) => {
  const { title, author, description, color1, featuredImage, tags, date, content } = frontmatter;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="plant-container h-pad pad-top">
      <h1 className="title">{title}</h1>
      <div className="flex">
        <p>{formattedDate}</p>
        <p>{author}</p>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: color1 }} className="animated-line"></div>
      {/* Consider using Next.js <Image> for optimization */}
      <img
        style={{ textAlign: "center" }}
        className="featured-image"
        src={featuredImage}
        alt={title}
      />
      <p style={{ maxWidth: "800px" }} className="description">
        {description}
      </p>
      <div className="additional-content">
        <MDXRemote {...content} />
      </div>
      <TableOfContents />
    </div>
  );
};

export default BlogTemplate;
