import update from "immutability-helper";
import React, { useCallback, useState, useEffect } from "react";
import { Card } from "./dndCard";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../store/layoutSlice";

export interface Item {
  id: number;
  text: string;
}

export const Container = ({ onClose }) => {
  const dispatch = useDispatch();

  const order = useSelector((state: any) => state.layout.order);

  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Dashboard",
    },
    {
      id: 2,
      text: "User Table",
    },
    {
      id: 3,
      text: "Product Table",
    },
  ]);

  useEffect(() => {
    const sortedCards = cards.sort(
      (a, b) =>
        (order[a.text.toLowerCase().replace(" ", "")] || 0) -
        (order[b.text.toLowerCase().replace(" ", "")] || 0)
    );
    setCards([...sortedCards]);
  }, [order]);

  const onSave = () => {
    const newOrder = cards.reduce((order, card, index) => {
      const cardName = card.text.toLowerCase().replace(" ", "");
      order[cardName] = index + 1;
      return order;
    }, {});

    dispatch(setOrder({ order: newOrder }));
    onClose();
  };

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      })
    );
  }, []);

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  return (
    <>
      <div style={{ minWidth: 300 }}>
        {cards.map((card, i) => renderCard(card, i))}
        <Button
          onClick={onSave}
          variant="contained"
          sx={{ marginTop: 2, marginRight: 2 }}
        >
          Save
        </Button>

        <Button onClick={onClose} variant="outlined" sx={{ marginTop: 2 }}>
          Close
        </Button>
      </div>
    </>
  );
};
