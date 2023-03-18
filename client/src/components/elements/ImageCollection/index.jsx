import ImageCard from '../ImageCard';

const ImageCollection = () => {
  return (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
          }
        />
      </div>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
          }
        />
      </div>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
          }
        />
      </div>
      <div>
        <ImageCard
          imgSrc={
            'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
          }
        />
      </div>
    </div>
  );
};

export default ImageCollection;
