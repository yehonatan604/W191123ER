import { useEffect } from "react";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import useCards from "../../Hooks/useCards";

const Favorites = () => {
  const { user, searchFavoriteCards, isLikedCard, navToCard, getData, likeUnlikeCard } = useCards();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <h1 className="text-2xl">Home Page</h1>
      <p className="text-lg">Welcome Home!</p>
      {user.isLoggedIn && <p className="text-lg">User Is Logged IN!!!!!!!!</p>}

      <div className="flex flex-wrap w-3/5 gap-1 m-auto">
        {searchFavoriteCards()!.map((item: TCard) => {
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
                <FaHeart
                  size={20}
                  className="m-auto cursor-pointer"
                  color={isLikedCard(item) ? "red" : "black"}
                  onClick={() => likeUnlikeCard(item)}
                />
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;

