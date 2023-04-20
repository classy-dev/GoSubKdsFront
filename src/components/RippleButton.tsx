import React, {useState, useRef, useEffect} from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button<{
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  margin?: string;
  customStyle?: string;
}>`
  position: relative;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  line-height: 1;
  border-radius: 0.8rem;
  font-size: 3.6rem;
  background-color: ${({backgroundColor}) => backgroundColor || '#5ea152'};
  color: ${({textColor}) => textColor || '#fff'};
  width: ${({width}) => width || '17.9rem'};
  height: ${({height}) => height || '9rem'};
  margin: ${({margin}) => margin};
  &:disabled {
    opacity: 0.7;
  }
  ${({customStyle}) =>
    customStyle &&
    css`
      ${customStyle}
    `}
`;

const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple 600ms linear;
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  customStyle,
  ...props
}) => {
  const [ripples, setRipples] = useState<Array<React.ReactElement>>([]);
  const nextKey = useRef(0);

  const addRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.x - size / 2;
    const y = event.clientY - rect.y - size / 2;
    const key = nextKey.current++;
    setRipples(prev => [
      ...prev,
      <Ripple key={key} style={{top: y, left: x, width: size, height: size}} />,
    ]);
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <Button {...props} onMouseDown={addRipple} customStyle={customStyle}>
      {children}
      {ripples}
    </Button>
  );
};

export default RippleButton;
