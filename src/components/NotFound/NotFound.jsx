import React from "react";

export default function NotFound() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "180px" }}
    >
      <div class="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
        <h4 class="card-header text-center text-secondary">
          404 Page Not Found
        </h4>
        <div class="card-body text-secondary">
          <a
            href="/"
            class="card-title text-decoration-none text-primary d-flex justify-content-center"
            style={{ fontSize: "20px" }}
          >
            Back to Home.
          </a>
        </div>
      </div>
    </div>
  );
}
