import HorizontalCardCollection from '@/components/elements/HorizontalCardCollection';

const Work = ({ onDrawerContentClick }) => {
  return (
    <div>
      <HorizontalCardCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Article'}
      />
    </div>
  );
};

export default Work;
