const ImageCard = ({ imgSrc, contentCategory, onDrawerContentClick }) => {
  console.log(onDrawerContentClick);
  return (
    <div onClick={() => onDrawerContentClick(contentCategory)}>
      <div
        className='relative h-80 w-full max-w-full rounded-lg flex items-end justify-start text-left bg-cover bg-center'
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      >
        <div class='absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg'></div>
        <div class='absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center'>
          <a
            href='#'
            class='text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500'
          >
            Politics
          </a>
          <div class='text-white font-regular flex flex-col justify-start'>
            <span class='text-3xl leading-0 font-semibold'>25</span>
            <span class='-mt-3'>May</span>
          </div>
        </div>
        <main class='p-5 z-10'>
          <a
            href='#'
            class='text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline'
          >
            Dr. Abdullah Abdullah's Presidential Election Campaign
          </a>
        </main>
      </div>
    </div>
  );
};

export default ImageCard;
