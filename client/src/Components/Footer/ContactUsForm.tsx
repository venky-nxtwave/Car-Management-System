import React, { useState } from 'react'
import './ContactUsForm.css'

interface ContactFormProps {
  adminEmail: string;
}

const ContactUsForm: React.FC<ContactFormProps> = ({adminEmail}) => {
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('');
  const [photos, setPhotos] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Admin Email: ${adminEmail}`);
    console.log(`User Email: ${userEmail}`);
    console.log(`Message: ${message}`);
    console.log(`Photos: ${photos ? photos.length : 0}`)
    alert('Issue submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Contact Us Form</h4>
      <div className="form-group">
        <label>
          Admin Email
          
        </label>
        <input type="email" value={adminEmail} readOnly className='inputEl' />
      </div>
      <div className="form-group">
        <label>
          Your Email*
          
        </label>
        <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className='inputEl'
          />
      </div>
      <div className="form-group">
        <label>
          Your Message*
          
        </label>
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className='textarealInput'
          />
      </div>
      <div className="form-group">
        <label>
          Photos

        </label>
        <input
            type="file"
            onChange={(e) => setPhotos(e.target.files)}
            multiple 

          />
      </div>
      <div className="form-group">
        <button type="submit">Send Mail</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
