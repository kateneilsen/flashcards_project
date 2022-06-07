import React from "react";
import { Link } from "react-router-dom";

export default function DeckNav({ deck, deckId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {deck?.name}
        </li>
      </ol>
    </nav>
  );
}
