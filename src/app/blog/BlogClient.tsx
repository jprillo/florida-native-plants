"use client";

import React from "react";
import Link from "next/link";
import  "../../styles/BlogTemplate.scss"; // Import your SCSS module

type Blog = {
  id: string;
  title: string;
  description: string;
  author: string;
  featuredimage: string;
};

type BlogListProps = {
  blog: Blog[];
};

export default function BlogClient({ blog }: BlogListProps) {
  return (
    <div className="blog-container ">
      {blog.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item.id}`}
          // Dynamically set background image
          style={{ backgroundImage: `url(${item.featuredimage})` }}
          className="flower-container"
        >
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* If you still want a separate <img> instead of a background: */}
            <img src={item.featuredimage} alt={item.title} className="featured-image"/>
            <small>By {item.author}</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
