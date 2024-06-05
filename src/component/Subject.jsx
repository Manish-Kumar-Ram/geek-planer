
import React from "react";

export default function Subject({
  subject,
  hour,
  increase,
  decrease,
  index,
}) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <p>{subject}</p>
      <p>{hour} Hours </p>
      <button onClick={() => increase(index)}>+</button>
      <button onClick={() => decrease(index)}>-</button>
    </div>
  );
}