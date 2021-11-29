import Head from 'next/head';
import styled from 'styled-components';
import emailjs from '../node_modules/emailjs-com';
import { useState, useRef } from 'react';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const PageHeader = styled.h3`
  font-weight: 700;
  font-size: 2em;
  color: #154c79;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 600px;
  padding: 0 0 6rem 0;
`

const FormElement = styled.div`
  width: 100%;
  display: block;
`

const FormLabel = styled.label`
  font-size: 20px;
  padding-bottom: 6px;
  color: #154c79;
`

const FormInput = styled.input`
  background: #154c79;
  opacity: 50%;
  height: 60px;
  width: 100%;
  display: block;
  border: blue;
  padding-left: 10px;
  color: white;
  font-size: 20px;
  font-family: "Avenir Next";
  border-radius: 5px;

  &::placeholder {
    color: white;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 7%;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 10px;
  background-color: white;
  color: #154c79;

  &:hover {
    cursor: pointer;
    background-color: #154c79;
    color: white;
  }
`

const RequiredSign = styled.span`
  color: #6a7b8b;
`

export default function Contact() {

  // handling submittion of the form
  const [message, setMessage] = useState(false);

  // sending the message as an email to my email address
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_smo4oqi', form.current, 'user_9JjODYQnAfM5phT2zIV34')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // setting up message and reseting the form once the user submits it
      form.current.reset();
      setMessage(true);
  };

  // hide the thank you message after 3sec
  setTimeout(() => {
      setMessage(false)
  }, 3000)

  return (
    <>
      <Head>
        <title>Contact Us Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <PageHeader>Contact us</PageHeader>
        <ContactForm ref={form} onSubmit={sendEmail} novalidate>
          <FormElement novalidate>
              <FormLabel for="name">Name <RequiredSign>*</RequiredSign></FormLabel>
              <FormInput type="text" name="name" id="name" required />
          </FormElement>
          
          <FormElement>
              <FormLabel for="surname">Surname <RequiredSign>*</RequiredSign></FormLabel>
              <FormInput type="text" name="surname" id="surname" required />
          </FormElement>
          
          <FormElement>
              <FormLabel for="phone">Phone Number </FormLabel>
              <FormInput type="tel" name="phone" id="phone" />
          </FormElement>
          
          <FormElement>
              <FormLabel for="email">Email address <RequiredSign>*</RequiredSign></FormLabel>
              <FormInput type="email" name="email" id="email" required />
          </FormElement>
          
          <FormElement>
              <FormLabel for="message">Message <RequiredSign>*</RequiredSign></FormLabel>
              <FormInput type="text" name="message" id="message" placeholder="Please type your message here" required/>
          </FormElement>
          
          <ButtonContainer>
              <Button type="submit">Submit</Button>
              {message &&
              <span>
                  Thank you for your message, I'll be in touch shortly.
              </span>}
          </ButtonContainer>
        </ContactForm>
      </Hero>

    </>
  )
}
