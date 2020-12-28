import React from 'react';

const ClientCard = (props) => {
  return (
    <>
      <div className='col-md-2 col-6 pb-3'>
        <div className='client-card text-center'>
          <figure>
            <img
              src={props.clientimg}
              alt={props.clientimg}
              className='img-fluid'
            />
          </figure>
          <h5>{props.clientname}</h5>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
