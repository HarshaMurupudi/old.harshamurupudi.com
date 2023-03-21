import ImageCard from '../ImageCard';

const ImageCollection = ({ contentCategory, onDrawerContentClick }) => {
  // console.log(props, 'collection');
  return (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
          }
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
          }
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
          }
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
          }
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
    </div>
  );
};

export default ImageCollection;
