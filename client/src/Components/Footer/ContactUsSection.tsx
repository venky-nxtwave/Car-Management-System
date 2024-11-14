// ContactUsSection.tsx
import React from 'react';
import ContactUsForm from './ContactUsForm';
import "./ContactUsSection.css";

const ContactUsSection: React.FC = () => {
  document.title = "Contact";
  const adminEmail = 'venkateshgali004@gmail.com';
  const ImageUrl = "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1731565699~exp=1731569299~hmac=9d0165cab8e79bac07df225272571ef4cefd311d102c598b5191d9aad800e511&w=740";

  return (
    <div className='ContactUsBody'>
      <div>
      <h1 style={{fontSize : '50px', color : 'black'}} className='headingContactUs' >Contact Us</h1>
      <img style={{textAlign : 'center', margin : 'auto'}} src={ImageUrl} alt="Car Management System" className='contactUsImage' />
      </div>
      <div>
        <ContactUsForm adminEmail={adminEmail} />
      </div>
    </div>
  );
};
export default ContactUsSection;
