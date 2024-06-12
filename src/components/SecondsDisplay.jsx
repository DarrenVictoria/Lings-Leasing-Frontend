import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinkFast = keyframes`
  50% {
    opacity: 0;
  }
`;

const blinkSlow = keyframes`
  50% {
    opacity: 0;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'VT323', monospace;
  font-size: 3rem;
  color: #00A8A8;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  margin-bottom: 1rem;
`;

const Digit = styled.span`
  animation: ${(props) => (props.position === 'minutes' ? blinkFast : blinkSlow)} 1s infinite;
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: #00A8A8;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;

const SecondsDisplay = ({ seconds }) => {
  const formatSeconds = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formattedTime = formatSeconds(seconds);

  return (
    <TimeContainer>
      {formattedTime.split('').map((char, index) => (
        <React.Fragment key={index}>
          {char === ':' ? (
            <Separator>{char}</Separator>
          ) : (
            <Digit position={index < 2 ? 'minutes' : 'seconds'}>{char}</Digit>
          )}
        </React.Fragment>
      ))}
    </TimeContainer>
  );
};

export default SecondsDisplay;