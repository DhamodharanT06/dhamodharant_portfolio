import React from 'react';
import styled from 'styled-components';

const SocialCard = ({ socialLinks, getIcon }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src="https://uiverse.io/astronaut.png" alt="astronaut" className="image" />
        <div className="heading" style={{ textAlign: "center" }}>Connect with Me<br />Social Media</div>
        <div className="icons">
          {socialLinks && socialLinks.length > 0 ? (
            socialLinks.slice(0, 3).map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.label}
              >
                {getIcon ? getIcon(link.iconName, { size: 24 }) : <span>{link.label.charAt(0)}</span>}
              </a>
            ))
          ) : (
            <span style={{ color: '#00d9ff', fontSize: '14px' }}>No links available</span>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* HOLD THE ASTRONAUT */

  .card {
    position: relative;
    width: 100%;
    height: 150%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: transparent;
    font-family: Montserrat;
    font-weight: bold;
    padding: 1.5em 1.5em;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    row-gap: 1em;
  }
  .card img {
    width: 500px;
    height: 500px;
    margin-right: 0;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
    object-fit: contain;
  }
  .image:hover {
    cursor: -webkit-grab;
    cursor: grab;
  }

  .icons svg {
    width: 24px;
    height: 24px;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    background: radial-gradient(#00d9ff66, transparent, transparent);
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover::before {
    width: 150%;
    height: 120%;
    margin-left: -4.25em;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgba(23, 23, 23, 0.9);
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }

  .heading {
    z-index: 2;
    transition: 0.4s ease-in-out;
    color: #00d9ff;
    font-size: 1.1rem;
    text-align: center;
    line-height: 2.2rem;
  }
  .card:hover .heading {
    letter-spacing: 0.025em;
  }

  .heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #00d9ff, 280px 176px #00d9ff, 40px 50px #00d9ff,
      60px 180px #00d9ff, 120px 130px #00d9ff, 180px 176px #00d9ff, 220px 290px #00d9ff,
      520px 250px #00d9ff, 400px 220px #00d9ff, 50px 350px #00d9ff, 10px 230px #00d9ff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
  }
  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    margin-top: 20px;
    box-shadow: 140px 20px #00d9ff, 425px 20px #00d9ff, 70px 120px #00d9ff, 20px 130px #00d9ff,
      110px 80px #00d9ff, 280px 80px #00d9ff, 250px 350px #00d9ff, 280px 230px #00d9ff,
      220px 190px #00d9ff, 450px 100px #00d9ff, 380px 80px #00d9ff, 520px 50px #00d9ff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    margin-top: 40px;
    box-shadow: 490px 330px #00d9ff, 420px 300px #00d9ff, 320px 280px #00d9ff,
      380px 350px #00d9ff, 546px 170px #00d9ff, 420px 180px #00d9ff, 370px 150px #00d9ff,
      200px 250px #00d9ff, 80px 20px #00d9ff, 190px 50px #00d9ff, 270px 20px #00d9ff,
      120px 230px #00d9ff, 350px -1px #00d9ff, 150px 369px #00d9ff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }
  .card:hover .heading::before,
  .card:hover .icons::before,
  .card:hover .icons::after {
    filter: blur(3px);
  }

  .image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .image:active + .heading::before {
    box-shadow: 240px 20px #00d9ff, 240px 25px #00d9ff, 240px 30px #00d9ff,
      240px 35px #00d9ff, 240px 40px #00d9ff, 242px 45px #00d9ff,
      246px 48px #00d9ff, 251px 49px #00d9ff, 256px 48px #00d9ff,
      260px 45px #00d9ff, 262px 40px #00d9ff;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::before {
    box-shadow: 262px 35px #00d9ff, 262px 30px #00d9ff, 262px 25px #00d9ff,
      262px 20px #00d9ff, 275px 20px #00d9ff, 275px 24px #00d9ff,
      275px 28px #00d9ff, 275px 32px #00d9ff, 275px 36px #00d9ff,
      275px 40px #00d9ff, 275px 44px #00d9ff, 275px 48px #00d9ff;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::after {
    box-shadow: 238px 60px #00d9ff, 242px 60px #00d9ff, 246px 60px #00d9ff,
      250px 60px #00d9ff, 254px 60px #00d9ff, 258px 60px #00d9ff,
      262px 60px #00d9ff, 266px 60px #00d9ff, 270px 60px #00d9ff,
      274px 60px #00d9ff, 278px 60px #00d9ff, 282px 60px #00d9ff,
      234px 60px #00d9ff, 234px 60px #00d9ff;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1.25em);
  }

  .heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: transparent;
    box-shadow: none;
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover .heading::after {
    box-shadow: none;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 1em;
    z-index: 10;
    position: relative;
  }

  a {
    position: relative;
    transition: 0.4s ease-in-out;
    color: #00d9ff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 75px;
    border-radius: 50%;
    background: rgba(0, 217, 255, 0.1);
    border: 1px solid rgba(0, 217, 255, 0.3);
    z-index: 20;
    cursor: pointer;
  }
  
  .social-link {
    position: relative;
    transition: 0.4s ease-in-out;
    color: #00d9ff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 217, 255, 0.1);
    border: 1px solid rgba(0, 217, 255, 0.3);
    z-index: 20;
    cursor: pointer;
    text-decoration: none;
  }
  
  .social-link:hover {
    background: rgba(0, 217, 255, 0.2);
    border-color: rgba(0, 217, 255, 0.6);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
    transform: scale(1.2);
  }
  
  .social-link:active {
    opacity: 0.8;
  }
  
  a:after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    left: 0;
    background-color: transparent;
    box-shadow: none;
    border-radius: 50%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }

  a svg {
    transition: 0.3s ease-in-out;
    width: 24px;
    height: 24px;
    color: #00d9ff;
  }
  
  a:hover svg {
    scale: 1.3;
    filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.6));
  }
  
  a:hover:after {
    scale: 0;
    transform: none;
  }

  a::before {
    content: "";
    position: absolute;
    top: -700%;
    left: 1050%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #00d9ff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    transition: 1s ease;
    animation-delay: 1s;
  }

  a:nth-child(2)::before {
    animation-delay: 3s;
  }

  a:nth-child(3)::before {
    animation-delay: 5s;
  }

  .card:hover a::before {
    filter: blur(3px);
  }

  .image:active ~ .icons a::before {
    animation: none;
    opacity: 0;
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-55em) translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-70em) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0em) translateY(0em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(0em) translateY(0em);
    }
  }

  @keyframes glowing-stars {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

export default SocialCard;

