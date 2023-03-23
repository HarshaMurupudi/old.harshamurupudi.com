import HorizontalCardCollection from '@/components/elements/HorizontalCardCollection';

const Projects = ({ onDrawerContentClick }) => {
  return (
    <div>
      <HorizontalCardCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Article'}
      />
    </div>
  );
};

export default Projects;
