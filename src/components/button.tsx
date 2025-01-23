import React from "react";

type ButtonProps = {
  type: string; // Button type (e.g., "primary", "secondary")
  link: string; // URL the button points to
  cta: string; // Call-to-action text
  icon?: string; // Optional icon for the button
};

const Button: React.FC<ButtonProps> = ({ type, link, cta, icon }) => {
  return (
    <a href={link}>
      <button
        className={`button ${type}`}
        style={{ display: "flex", alignItems: "center" }}
      >
        <p style={{ width: "100%" }}>{cta}</p>

        {icon && (
          <div className="btn-icon-contain">
            <img src={icon} alt="button icon" />
          </div>
        )}
      </button>
    </a>
  );
};

export default Button;
