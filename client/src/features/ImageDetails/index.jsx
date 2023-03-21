import React from 'react';

function ImageDetails() {
  return (
    <figure class='max-w-xl mx-auto'>
      <img
        class='h-auto max-w-full rounded-lg'
        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
        alt='description'
      />
      <figcaption class='mt-2 text-sm text-center text-gray-500 dark:text-gray-400'>
        Image social link
      </figcaption>
    </figure>
  );
}

export default ImageDetails;
