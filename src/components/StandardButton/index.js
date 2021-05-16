import React from 'react';
import COLORS from '../../libs/colors';

export default function standardButton({ title, onClick, color: inputColor, style: externalStyle = {} }) {
  const backgroundColor = COLORS.BACKGROUND[inputColor] || 'white';
  const color = COLORS.TEXT[inputColor] || 'black';
  const borderColor = COLORS.BORDER_COLOR[inputColor] || 'transparent';
  const border = `2px solid ${borderColor}`;

  const style = {
    minWidth: '150px',
    height: 'fit-content',
    padding: '10px',
    borderRadius: '7px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor,
    color,
    border,
    ...externalStyle
  }

  return (
    <button style={style} onClick={onClick}>
      {title}
    </button>
  )
}