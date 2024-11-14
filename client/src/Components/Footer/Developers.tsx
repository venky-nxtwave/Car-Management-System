// Developers.tsx
import React from 'react';
import Developer from './Developer';
import './Developers.css';

const developers = [
  {
    id: 1,
    name: 'Gali Venkatesh',
    email: 'venkateshgali004@gmail.com',
    photo: "https://res.cloudinary.com/dyvtjlhvq/image/upload/v1731564836/waxrxrvbamhrbnlvwnko.jpg",
    background: "e6e6fa",
    role: "Full Stack Developer",
    social:
    {
      twitter: 'https://x.com/GaliVenkatesh44',
      linkedin: 'https://www.linkedin.com/in/galivenkatesh/',
      github: 'https://github.com/venky-nxtwave',
      instagram: "https://www.instagram.com/_the__tony_/"
    }
  },
];

const Developers: React.FC = () => {
  return (
    <div className="developers-container">
      <h1>Developer</h1>
      {developers.map(developer => (
        <Developer key={developer.id} developer={developer} />
      ))}
    </div>
  );
};

export default Developers;
