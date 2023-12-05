import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 10px;
  line-height: 1.5;
  border: 1px solid lightgray;
  font-weight: bold;
  margin: 2px;
  font-family: 'Jeju Gothic', sans-serif;

  color: ${(props) => props.color || 'gray'};
  background: ${(props) => props.background || 'white'};

  ${(props) =>
    props.twenty &&
    css`
    color: white;
    background: navy;
    border-color: navy;  
`}
    
  ${(props) =>
    props.thirdty && 
    css`
    color: white;
    background: purple;
    border-color: purple; 
  `}

  ${(props) =>
    props.forthy &&
    css`
    color: white;
    background: green;
    border-color: green; 
  `}

  ${(props) =>
    props.early &&
    css`
    color: white;
    background: DarkCyan;
    border-color: DarkCyan; 
  `}

  ${(props) =>
    props.comedy &&
    css`
    color: black;
    background: MediumSpringGreen;
    border-color: MediumSpringGreen; 
  `}

  ${(props) =>
    props.romance &&
    css`
    color: white;
    background: DeepPink;
    border-color: DeepPink; 
  `}

  ${(props) =>
    props.night &&
    css`
    color: white;
    background: DarkOrange;
    border-color: DarkOrange; 
  `}

  ${(props) =>
    props.thriller &&
    css`
    color: white;
    background: SlateBlue;
    border-color: SlateBlue; 
  `}

  ${(props) =>
    props.horror &&
    css`
    color: white;
    background: Red;
    border-color: Red; 
  `}

  ${(props) =>
    props.evening &&
    css`
    color: white;
    background: DarkGoldenRod;
    border-color: DarkGoldenRod; 
  `}

  ${(props) =>
    props.action &&
    css`
    color: black;
    background: GreenYellow;
    border-color: GreenYellow; 
  `}




`;



function Tag({...props }) {
  return <StyledButton  type='button' {...props}></StyledButton>;
}

export default Tag;
