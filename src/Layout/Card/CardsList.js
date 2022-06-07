import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function CardsList({ cards }) {
  const { deckId, cardId } = useParams();
  return cards.map((card) => (
    <div className="container">
      <div key={card.id} className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <div>{card.front}</div>
            </div>
            <div className="col-sm-6">
              <div>{card.back}</div>
            </div>
            <div>
              <Link
                to={`/decks/${deckId}/cards/${cardId}/edit`}
                className="btn btn-secondary btn-sm"
              >
                Edit
              </Link>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
