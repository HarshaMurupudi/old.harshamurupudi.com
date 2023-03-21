import ImageCollection from '@/components/elements/ImageCollection';

const Comics = ({ onDrawerContentClick }) => {
  return (
    <div>
      <ImageCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Comics'}
      />
    </div>
  );
};

export default Comics;
