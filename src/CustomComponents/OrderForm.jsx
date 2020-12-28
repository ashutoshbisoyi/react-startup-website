import React from 'react';

const OrderForm = (props) => {
  return (
    <>
      <section class='container-fluid form'>
        <header className='text-center'>
          <h2>Place Your Order Now</h2>
          <p class='section-description'>
            it's never too late, {props.formdescription}
          </p>
        </header>
        <form>
          <div class='form-group mt-2'>
            <label>Name</label>
            <input type='text' class='form-control' />
          </div>
          <div class='form-group mt-2'>
            <label>Phone Number</label>
            <input type='number' class='form-control' />
          </div>
          <div class='form-group mt-2'>
            <label for='exampleInputEmail1'>Email address</label>
            <input type='email' class='form-control' />
            <small id='emailHelp' class='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class='form-group mt-2'>
            <label for='inputState'>Choose Your Budget</label>
            <select id='inputState' class='form-control'>
              <option selected>Choose...</option>
              <option>{props.option1}</option>
              <option>{props.option2}</option>
              <option>{props.option3}</option>
            </select>
          </div>
          <button type='submit' class='regular-btn mt-4'>
            Place Order
          </button>
        </form>
      </section>
    </>
  );
};
export default OrderForm;
