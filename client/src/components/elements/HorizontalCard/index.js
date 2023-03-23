import { Button } from 'flowbite-react';

const HorizontalCard = ({ contentCategory, onDrawerContentClick }) => {
  return (
    <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <p class='mb-1 font-light text-gray-700 dark:text-gray-400'>
          <span>#Frontend</span>
        </p>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Noteworthy technology
        </h5>
        <p class='mb-1 font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far.
        </p>

        <p class='mb-3 font-light text-gray-700 dark:text-gray-400'>
          About 2 months ago
        </p>

        <div className='flex flex-wrap gap-2'>
          <div onClick={() => onDrawerContentClick(contentCategory)}>
            <Button color='gray'>Gray</Button>
          </div>
          <div>
            <Button color='gray'>Gray</Button>
          </div>
          <div>
            <Button color='gray'>Gray</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
