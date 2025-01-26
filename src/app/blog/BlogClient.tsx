"use client";

import React from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  description: string;
  author: string;
};

type BlogListProps = {
  blog: Blog[]; // Correct type indicates this is an array of blogs
};

export default function BlogClient({ blog }: BlogListProps) {
  return (
    <div>
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
        {blog.map((item) => (
          <Link
            key={item.id} // Ensure each item has a unique key
            className="flower-container"
            href={`/blog/${item.id}`}
            style={{
              position: "relative",
              borderRadius: "25px",
              height: "265px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "1px solid #ccc", // Optional: Styling for visual clarity
              padding: "10px",
              textDecoration: "none",
            }}
          >
            <div>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>{item.title}</h3>
              <p style={{ margin: "0.5rem 0 0", fontSize: "1rem" }}>
                {item.description}
              </p>
              <small style={{ color: "#555" }}>By {item.author}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
