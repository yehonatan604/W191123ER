import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";
import { useEffect, useState } from "react";
import axios from "axios";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaPencil } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";

const MyCards = () => {
  const [cards, setCards] = useState<TCard[]>([]);
  const nav = useNavigate();
  const searchWord = useSelector(
    (state: TRootState) => state.SearchSlice.search,
  );

  const searchCards = () => {
    return cards.filter((item: TCard) => item.title.includes(searchWord));
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

  const navToCreate = () => {
    nav("/create-card");
  };

  useEffect(() => {
    getData();
  }, []);

  const user = useSelector((state: TRootState) => state.UserSlice);

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <h1 className="text-2xl">My Cards</h1>
      <p className="text-lg">this cards was made by the user</p>

      <div className="flex flex-wrap w-3/5 gap-1 m-auto">
        {searchCards()!.map((item: TCard) => {
          return (
            <Card key={item._id} className="w-2/6 m-auto">
              <img
                onClick={() => navToCard(item._id)}
                src={item.image.url}
                alt={item.image.alt}
                className="h-[200px] object-fill"
              />
              <h1>{item.title}</h1>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
              <hr />
              {user && user.user && (
                <>
                  <FaHeart
                    size={20}
                    className="m-auto cursor-pointer"
                    color={isLikedCard(item) ? "red" : "black"}
                    onClick={() => likeUnlikeCard(item)}
                  />
                  <FaPencil size={20} />
                  <FaTrash size={20} onClick={() => deleteCard(item)} />
                </>
              )}
            </Card>
          );
        })}
      </div>

      <div className="fixed flex p-3 rounded-full cursor-pointer right-10 top-20 bg-cyan-300">
        <PiPlus size={20} onClick={navToCreate} />
      </div>
    </div>
  );
};

export default MyCards;
