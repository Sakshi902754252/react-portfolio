import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 12rem;
  
  .skills-section, .experience-content {
    flex: 1;
    width: 50%;
  }
  
  .skills-section {
    padding-right: 2rem;
    background: linear-gradient(145deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);
    border-radius: 10px;
    padding: 2rem;
  }
  
  .experience-content {
    padding-left: 2rem;
  }

  h2, h3 {
    color: var(--white);
    margin-bottom: 2rem;
  }

  .skills-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s;
    
    &:hover {
      transform: scale(1.1);
    }
    
    svg {
      font-size: 5rem;
      margin-bottom: 1rem;
      animation: ${float} 3s ease-in-out infinite;
    }
    
    .skill-name {
      font-size: 1.4rem;
      color: var(--green);
      margin-bottom: 0.5rem;
    }

    .skill-level {
      font-size: 1.2rem;
      color: var(--text-secondary);
    }
  }


  .experience-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .experience-item {
    display: flex;
    background-color: var(--bg-light);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .icon {
    font-size: 3rem;
    color: var(--green);
    margin-right: 2rem;
  }

  .details {
    flex: 1;
  }

  .details h3 {
    color: var(--green);
    margin-bottom: 0.5rem;
  }

  .details p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .details ul {
    list-style-type: none;
    padding-left: 0;
  }

  .details li {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 2rem;

    &:before {
      content: "•";
      color: var(--green);
      position: absolute;
      left: 0;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    
    .skills-section, .experience-content {
      width: 100%;
      padding: 0;
    }
    
    .skills-section {
      margin-bottom: 4rem;
    }
    
    .skills-icons {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .experience-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .icon {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .details li {
      padding-left: 0;
      &:before {
        display: none;
      }
    }
  }
`;