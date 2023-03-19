import HorizontalCard from '../HorizontalCard';

const HorizontalCardCollection = () => {
  return (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      <div>
        <HorizontalCard />
      </div>
      <div>
        <HorizontalCard />
      </div>
      <div>
        <HorizontalCard />
      </div>
      <div>
        <HorizontalCard />
      </div>
    </div>
  );
};

export default HorizontalCardCollection;
