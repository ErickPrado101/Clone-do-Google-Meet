import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const MeetingInfo = ({ user }) => {
  const { callInput } = useSelector((state) => state.video);

  const closeMeetingInfo = (e) => {
    const meetingInfoDiv = e.target.parentElement.parentElement;
    meetingInfoDiv.style.display = 'none';
  };

  return (
    <MeetingInfoContainer>
      <Header>
        <h3>Sua reunião está pronta</h3>
        <span class='material-icons-outlined' onClick={closeMeetingInfo}>
          close
        </span>
      </Header>
      <Body>
        <Button>
          <i class='material-icons-outlined' style={{ fontSize: '20px' }}>
            person_add_alt
          </i>
          <p style={{ marginLeft: '10px' }}>Adicionar outros</p>
        </Button>
        <h4>
        Ou compartilhe este link da reunião com quem você quer que participe
        </h4>
        <LinkBox>
          <p>{callInput}</p>
          <span class='material-icons-outlined'>content_copy</span>
        </LinkBox>
        <InfoBox>
          <span class='material-icons-outlined'>local_police</span>
          <p>
          As pessoas que usarem este link da reunião precisarão receber sua permissão para participar.
          </p>
        </InfoBox>
        <p>Participando como {user?.email} </p>
      </Body>
    </MeetingInfoContainer>
  );
};

const MeetingInfoContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  background-color: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 300px;
  max-width: 300px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 0;
  color: #202124;

  > h3 {
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5rem;
  }

  > span {
    :hover {
      cursor: pointer;
      opacity: 0.2;
    }
  }
`;

const Body = styled.div`
  > button {
    background-color: #00796b;
    color: white;
    font-family: 'Google Sans', Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.25px;
    line-height: 36px;
    text-transform: none;

    display: flex;
    align-items: center;
    padding: 3px 15px;

    margin-bottom: 20px;
    :hover {
      background-color: #00675b;
    }
  }

  > h4 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #3c4043;
    margin-top: 8px;
  }

  > p {
    letter-spacing: 0.025em;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: #5f6368;
  }
`;

const LinkBox = styled.div`
  background: #f1f3f4;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;
  padding: 10px;
  > p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #202124;
    border-radius: 5px;
  }

  > span {
    :hover {
      cursor: pointer;
      opacity: 0.2;
    }
  }
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 15px 0;
  > p {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: #5f6368;
  }

  > span {
    font-size: 20px;
    border-radius: 50%;
    padding: 2px;
    background-color: #e8f0fe;
    color: #4285f4;
    margin-right: 5px;
  }
`;

export default MeetingInfo;
