import HorizontalCard from '../HorizontalCard';

const HorizontalCardCollection = ({
  contentCategory,
  onDrawerContentClick,
}) => {
  return (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      <div>
        <HorizontalCard
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
      <div>
        <HorizontalCard
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
      <div>
        <HorizontalCard
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
      <div>
        <HorizontalCard
          contentCategory={contentCategory}
          onDrawerContentClick={onDrawerContentClick}
        />
      </div>
    </div>
  );
};

export default HorizontalCardCollection;
