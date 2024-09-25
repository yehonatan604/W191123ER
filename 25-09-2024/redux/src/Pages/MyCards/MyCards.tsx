import { useEffect } from "react";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";
import useCards from "../../Hooks/useCards";

const MyCards = () => {
  const nav = useNavigate();
  const {
    user,
    searchCards,
    isLikedCard,
    navToCard,
    getMyCards,
    likeUnlikeCard,
    deleteCard,
  } = useCards();

  const navToCreate = () => {
    nav("/create-card");
  };

  useEffect(() => {
    getMyCards();
  }, []);

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
