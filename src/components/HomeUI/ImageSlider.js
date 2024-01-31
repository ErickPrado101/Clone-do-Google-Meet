import React, { Fragment } from 'react';
import styled from 'styled-components';

import i3 from '../../images/imageSlider2.png';
import i4 from '../../images/imageSlider1.png';
import i1 from '../../images/imageSlider3.png';
import i2 from '../../images/imageSlider4.png';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './imageSlider.css';

const ImageSlider = () => {
  return (
    <Fragment>
      <Carousel plugins={['arrows']}>
        <CarousalContainer>
          <ImageContainer src={i1} alt='' />
          <ImageContent>
            <h2>Obtenha um link que você pode compartilhar</h2>
            <p>
              clique <strong>NOVA REUNIÃO</strong> para obter um link que você pode enviar para{' '}
              <br /> pessoas com quem você deseja se encontrar
            </p>
            <div>
              <span style={{ color: '#00675b' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
            </div>
          </ImageContent>
        </CarousalContainer>

        <CarousalContainer>
          <ImageContainer src={i2} alt='' />
          <ImageContent>
            <h2>Ver todos juntos</h2>
            <p>
            Para ver mais de uma pessoa ao mesmo tempo, vá para Alterar
              <br /> layout em Mais opções no menu
            </p>

            <div>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: '#00675b' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
            </div>
          </ImageContent>
        </CarousalContainer>

        <CarousalContainer>
          <ImageContainer src={i3} alt='' />
          <ImageContent>
            <h2>Planejar com antecedência</h2>
            <p>
              Clique <strong>NOVA REUNIÃO</strong>para agendar novas reuniões em
               Google <br /> Calendário e envio de convites aos participantes
            </p>

            <div>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: '#00675b' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
            </div>
          </ImageContent>
        </CarousalContainer>

        <CarousalContainer>
          <ImageContainer src={i4} alt='' />
          <ImageContent>
            <h2>Sua reunião é segura</h2>
            <p>
            Ninguém pode participar de uma reunião a menos que seja convidado ou <br /> admitido pelo
               hospedar
            </p>

            <div>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: 'grey' }}>.</span>
              <span style={{ color: '#00675b' }}>.</span>
            </div>
          </ImageContent>
        </CarousalContainer>
      </Carousel>
    </Fragment>
  );
};

const ImageContainer = styled.img`
  width: 80%;
  height: auto;
  /* border: 1px solid black; */
`;

const ImageContent = styled.div`
  text-align: center;
  /* border: 1px solid black; */
  width: 100%;

  > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 2rem;
    margin-top: 12px;
  }

  > p {
    letter-spacing: 0.01428571em;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
  }

  > div > span {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    line-height: 0;
  }
`;

const CarousalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;
export default ImageSlider;
