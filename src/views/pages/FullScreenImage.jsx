import React from "react";

const FullScreenImage = ({ currentFc, toggle }) => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <img
        style={{
          position: "absolute",
          inset: "0",
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        alt="not found"
        src={URL.createObjectURL(currentFc)}
      />

      <button
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".2rem",
        }}
        className="btn btn-danger btn-lg"
        onClick={() => toggle()}
      >
        <i class="nc-icon nc-simple-remove"></i> close
      </button>
    </div>
  );
};

export default FullScreenImage;
