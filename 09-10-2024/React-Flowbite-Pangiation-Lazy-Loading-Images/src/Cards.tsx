import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { TCard } from './Types/TCard';
import CardComponent from './CardComponent';

const Cards = () => {
  const [cardsList, setCardsList] = useState<TCard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPaginationStart, setcardPaginationStart] = useState(0);
  const [cardPaginationEnd, setcardPaginationEnd] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    const start = (page - 1) * 8;
    const end = start + 8;
    setcardPaginationStart(start);
    setcardPaginationEnd(end);
  };
  const getCards = useCallback(async () => {
    const response = await axios.get(
      'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards'
    );
    setIsLoading(true);
    setCardsList(await response.data);
  }, []);
  useEffect(() => {
    getCards();
  }, []);

  const cardsToDisplay = cardsList
    .slice(cardPaginationStart, cardPaginationEnd)
    .map((singleCard: TCard) => (
      <CardComponent key={singleCard._id} cardDetails={singleCard} />
    ));
  return (
    <>
      {!isLoading ? (
        <div className="text-center">
          <Spinner color="info" size="xl" aria-label="Info spinner example" />
        </div>
      ) : (
        <>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(cardsList.length / 8)}
              onPageChange={onPageChange}
              showIcons={true}
              previousLabel=""
              nextLabel=""
            />
          </div>
          <div className="mb-[3rem] flex flex-wrap justify-center p-5">
            {
              /* {cardsList
              .slice(cardPaginationStart, cardPaginationEnd)
              .map((singleCard: TCard) => (
                <CardComponent key={singleCard._id} cardDetails={singleCard} />
              ))} */
              cardsToDisplay
            }
          </div>

          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(cardsList.length / 8)}
              onPageChange={onPageChange}
              showIcons={true}
              previousLabel=""
              nextLabel=""
            />
          </div>

          <div style={{ textAlign: 'center', margin: '2rem' }}></div>
        </>
      )}
    </>
  );
};

export default Cards;
