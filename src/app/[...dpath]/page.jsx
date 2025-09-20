import React from "react";

export default function Page({ params }) {
  return (
    <>
      <h2>Catch all route</h2>
      <ul>
        {params.dpath.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
