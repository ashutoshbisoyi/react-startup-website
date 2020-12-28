import React from 'react';
import ServiceSampleCard from '../CustomComponents/ServiceSampleCard';

const Demo = (props) => {
  const Databasename = props.databasename;
  return (
    <>
      <section className='container'>
        <h3>{props.servicename}</h3>
        <hr />
        <div className='row mx-auto'>
          {Databasename.map((value, index) => {
            return (
              <ServiceSampleCard
                imgsrc={value.imgsrc}
                h4={value.h4}
                p={value.p}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Demo;
