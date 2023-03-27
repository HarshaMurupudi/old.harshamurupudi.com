import HorizontalCard from '../HorizontalCard';

const HorizontalCardCollection = ({
  contentCategory,
  onDrawerContentClick,
  collection,
}) => {
  return (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {(collection || []).map(
        ({ id, title, tags, createdDate, description, actions }) => {
          return (
            <div>
              <HorizontalCard
                contentCategory={contentCategory}
                onDrawerContentClick={onDrawerContentClick}
                tags={tags}
                title={title}
                createdDate={createdDate}
                id={id}
                description={description}
                actions={actions}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default HorizontalCardCollection;
