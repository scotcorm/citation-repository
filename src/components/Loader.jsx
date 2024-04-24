import React from 'react';
// import LoadingGif from '../images/loading.gif';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader_image'>
        {/* <img src={LoadingGif} alt='' /> */}

        {/* <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' /> */}
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
