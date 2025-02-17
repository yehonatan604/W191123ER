import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";
import { useEffect, useState } from "react";
import axios from "axios";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cards, setCards] = useState([]);
  const nav = useNavigate();
  const searchWord = useSelector(
    (state: TRootState) => state.SearchSlice.search,
  );

  const searchCards = () => {
    return cards.filter((item: TCard) => item.title.includes(searchWord));
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

  useEffect(() => {
    getData();
  }, []);

  const user = useSelector((state: TRootState) => state.UserSlice);

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <h1 className="text-2xl">Home Page</h1>
      <p className="text-lg">Welcome Home!</p>
      {user.isLoggedIn && <p className="text-lg">User Is Logged IN!!!!!!!!</p>}

      <div className="flex flex-wrap w-3/5 gap-1 m-auto">
        {searchCards()!.map((item: TCard) => {
          return (
            <Card
              key={item._id}
              className="w-2/6 m-auto"
              onClick={() => navToCard(item._id)}
            >
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="h-[200px] object-fill"
              />
              <h1>{item.title}</h1>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
