import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TRootState } from "../Store/BigPie";
import { TCard } from "../Types/TCard";

const useCards = () => {
    const [cards, setCards] = useState<TCard[]>([]);
    const nav = useNavigate();
    const searchWord = useSelector(
      (state: TRootState) => state.SearchSlice.search,
    );
    const user = useSelector((state: TRootState) => state.UserSlice);
  
    const searchCards = () => {
      return cards.filter((item: TCard) => item.title.includes(searchWord));
    };

    const searchFavoriteCards = () => {
        return cards.filter((item) => item.likes.includes(user.user!._id))
        .filter((item: TCard) => item.title.includes(searchWord));
      };
  
    const isLikedCard = (card: TCard) => {
      if (user && user.user) {
        return card.likes.includes(user.user._id);
      } else return false;
    };
  
    const navToCard = (id: string) => {
      nav("/card/" + id);
    };
  
    const getData = async () => {
      const res = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
      );
      setCards(res.data);
    };

    const getMyCards = async () => {
        axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
    
        const res = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards",
        );
        setCards(res.data);
      };
  
    const likeUnlikeCard = async (card: TCard) => {
      const res = await axios.patch(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + card._id,
      );
      if (res.status === 200) {
        toast.success("card liked/unliked");
  
        const index = cards.indexOf(card);
        const ifLiked = cards[index].likes.includes(user.user!._id);
        const newCards = [...cards];
        if (ifLiked) {
          newCards[index].likes.splice(index);
        } else {
          newCards[index].likes.push(user.user!._id);
        }
  
        setCards(newCards);
      }
    };

    const deleteCard = async (card: TCard) => {
        try {
          const res = await axios.delete(
            "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" +
              card._id,
          );
    
          const index = cards.indexOf(card);
          const newCards = [...cards];
          newCards.splice(index, 1);
    
          setCards(newCards);
    
          if (res) {
            toast.success("card deleted");
          }
        } catch (err) {
          toast.error("card delete failed");
        }
      };
  
    return { cards, user, searchCards, isLikedCard, navToCard, getData, likeUnlikeCard, searchFavoriteCards, getMyCards, deleteCard };
}

export default useCards;