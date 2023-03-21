import ImageCollection from '@/components/elements/ImageCollection';

const Collection = ({ onDrawerContentClick }) => {
  return (
    <div>
      <ImageCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Collection'}
      />
    </div>
  );
};

export default Collection;
