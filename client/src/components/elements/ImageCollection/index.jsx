import ImageCard from '../ImageCard';

const ImageCollection = ({
  contentCategory,
  onDrawerContentClick,
  collection,
}) => {
  return (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {(collection || []).map(({ id, title, src, tags, createdDate }) => {
        return (
          <div>
            <ImageCard
              imgSrc={src}
              contentCategory={contentCategory}
              onDrawerContentClick={onDrawerContentClick}
              tags={tags}
              title={title}
              createdDate={createdDate}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCollection;
