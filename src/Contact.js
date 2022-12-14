import React from 'react';
import styled from 'styled-components';

const Contact = () => {


  const Wrapper = styled.section`
  .mapimage{
    width: 50rem;
    height: 50rem;
  }
  .contact{
    min-height: 30rem;
  }
  .inputName{
    width: 40rem;
    margin-bottom: 1rem;
  }
  .inputEmail{
    width: 40rem;
    margin-bottom: 1rem;
  }
  .inputTextarea{
    width: 40rem;
    margin-bottom: 1rem;
  }


  
  
  `;
  return (
    <Wrapper>
      <div className='container contact'>
        <div className='row d-flex justify-content-between my-5'>
          <div className='col-md-5 m-3'>
            <iframe className='mapimage' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27876.510007477496!2d78.39219320566897!3d29.148055192994594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bbba1aacea57f%3A0x5b4d6047c539e2cc!2sNoorpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1670483934183!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-md-5 m-3'>
            <form action="https://formspree.io/f/mjvznadz" method='post'>

              <input type='text' name='username' placeholder='user-name' className='inputName' />
              <input type='email' name='email' placeholder='Email' className='inputEmail' />
              <textarea name='Enter your message' cols='30' row='10' required autoComplete='off' placeholder=' Enter your message' className='inputTextarea' />
              <button type='submit' className='d-block'>submit</button>

            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};





export default Contact;
