import React, { Fragment } from 'react';
import AboutLinks from '../AboutPage UI/AboutLinks';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const About = () => {
  const [user] = useAuthState(auth);
  return (
    <AboutContainer>
      <AboutInfo>
        <Info>
          <h1
            style={{
              textAlign: 'center',
              fontSize: '2.75rem',
              fontWeight: '400',
            }}
          >
            Sobre o projeto
          </h1>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.5rem',
              color: '#5f6368',
            }}
          >
           Obrigado por visitar o meu projeto deu clone do Google Meet. Este é um 
             aplicativo de bate-papo por vídeo e mensagens baseado na interface do Google Meet. <br />{' '}
            
          </p>
          <h2
            style={{
              // textAlign: 'center',
              fontSize: '1.75rem',
              fontWeight: '500',
              marginTop: '20px',
              color: '#00796b',
            }}
          >
            {`Tecnologia usada :`}
          </h2>
          <ul
            style={{
              // textAlign: 'center',
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.5rem',
              color: '#5f6368',
            }}
          >
            <li>ReactJs, React-hooks, React Router Dom</li>
            <li>Redux, Redux-Thunk, Redux-dev-tools</li>
            <li>React Styled-Components</li>
            <li>Firebase/Firestore, React-firebase-hooks</li>
          </ul>
          <Me>
            <p>
              <h4 style={{ color: '#5f6368' }}> Desenvolvido por </h4>
              <h1 style={{ color: 'var(--font-color-3)' }}>Érick Prado Gonçalves</h1>
            </p>
            <div></div>
            <p>
              {}
              <br />
              <span style={{ color: 'var(--font-color-3)' }}>
                {' '}
                <i>Busco meprego,caso queira conversar para futuros projetos (27988080038)</i>
              </span>
              <br />
              <br />
              <span style={{ color: 'var(--font-color-3)' }}>
                {' '}
                Até mais
              </span>
              <br />
            </p>
          </Me>
        </Info>
        <AboutLinks></AboutLinks>
        {user ? (
          <Fragment>
            <Button
              href='/'
              git
              a
              style={{
                width: 'fit-content',
                padding: '5px 0',
                marginLeft: '5px',
                position: 'fixed',
                right: '140px',
                top: '20px',
                textTransform: 'none',
              }}
            >
              <p
                style={{
                  color: '#63676c',
                  fontSize: 'normal',
                  padding: '0 5px',
                }}
              >
                Home{' '}
              </p>
              <span
                className='material-icons-outlined'
                style={{ color: '#63676c', fontSize: '2rem' }}
              >
                home
              </span>
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{
                width: 'fit-content',
                padding: '5px 0',
                marginLeft: '5px',
                position: 'fixed',
                right: '20px',
                top: '20px',
                textTransform: 'none',
              }}
            >
              <p
                style={{
                  color: '#63676c',
                  fontSize: 'normal',
                  padding: '0 5px',
                }}
              >
                Logout{' '}
              </p>
              <span
                className='material-icons-outlined'
                style={{ color: '#63676c', fontSize: '2rem' }}
              >
                logout
              </span>
            </Button>
          </Fragment>
        ) : (
          ''
        )}
      </AboutInfo>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const AboutInfo = styled.div`
  overflow: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  overflow: auto;
  margin-bottom: 3rem;
  > h1 {
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 3rem;
  }

  > h2 {
    margin-bottom: 1rem;
  }

  > ul {
    margin-bottom: 2rem;
    > li {
      margin-bottom: 1rem;
    }
  }
`;

const Me = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default About;
