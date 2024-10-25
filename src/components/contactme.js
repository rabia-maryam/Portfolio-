import React from 'react'
import './contactme.css'
import { useForm } from 'react-hook-form'

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  function submitData(data) {
    console.log(data);
  }
  return (
    <>
      <div className='contact-main'>
        <h1>Get in Touch</h1>
        <div className='contact-container'>
          <div className='contact-left'>
            <div className='contact-info'>
              <label htmlFor='contact-email'>Email:</label>
              <br />
              <a href='mailto:rabiakhanfsd789@gmail.com' id='contact-email'>rabiakhanfsd789@gmail.com</a>
              <br />
              <label htmlFor='contact-phone'>Phone no:</label>
              <br />
              <p id='contact-phone'>+92 3095228039</p>
              <label htmlFor='contact-linkedin'>Linkedin:</label>
              <br />
              <a href='https://www.linkedin.com/in/rabia-maryam-973745287/'>Rabia Maryam</a>
            </div>
          </div>
          <form onSubmit={handleSubmit(submitData)}>
            <div className='contact-right'>
              <input
                type='text'
                placeholder='Enter Your Name'
                {...register('Name', {
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Enter atlease 3 letters' }
                })}
              />
              {errors.Name && <p className='error-message'>{errors.Name.message}</p>}
              <input
                text='email'
                placeholder='Enter Your Email'
                {...register('email' , 
                  {required: 'Email is required',
                    pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,
                      message: "invalid email"}
                   
                  }
                )}
              />
              {errors.email && <p className='error-message'>{errors.email.message}</p>}
              <input
                type='text'
                placeholder='Enter Your Company'
                {...register('company')}
              />
              <input type='submit' id='submit-btn' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact