import { Button, Card } from 'flowbite-react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import { TCard } from './Types/TCard';

function CardComponent({
  cardDetails,
  isReadMoreButtonDisplay = true,
}: {
  cardDetails: TCard;
  isReadMoreButtonDisplay?: boolean;
}) {
  return (
    <Card
      className="m-2 flex h-fit min-w-[22rem] max-w-[22rem] rounded-t-[20px]"
      renderImage={() => (
        //#Region
        // <LazyLoadImage
        //   className="h-[300px] w-full rounded-t-[20px] object-cover shadow-lg shadow-slate-600"
        //   alt={cardDetails.title}
        //   title={cardDetails.title}
        //   src={cardDetails.image.url}
        //   effect="blur"
        //   wrapperProps={{
        //     style: { transitionDelay: '150ms' },
        //   }}
        // />
        //#Region
        <img
          className="h-[300px] w-full rounded-t-[20px] object-cover shadow-lg shadow-slate-600"
          src={cardDetails.image.url}
          alt={cardDetails.title}
        />
      )}
    >
      <div className="flex h-[300px] flex-col justify-between">
        <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cardDetails.title}
        </h4>
        <h3 className="font-normal text-gray-700 dark:text-gray-400">
          {cardDetails.subtitle}
        </h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {cardDetails.description}
        </p>
        {isReadMoreButtonDisplay && (
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        )}
      </div>
    </Card>
  );
}

export default CardComponent;
