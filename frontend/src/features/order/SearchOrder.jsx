import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
