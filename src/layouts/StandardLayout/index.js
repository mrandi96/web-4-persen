import React from 'react';

export default function standardLayout({ children, flexAlign = '', style: externalStyle }) {
  let flexStyle = !flexAlign ? {} : { display: 'flex', flexDirection: 'row' };
  switch (flexAlign) {
    case 'justify': flexStyle.justifyContent = 'center';
      break;
    case 'align': flexStyle.alignItems = 'center';
      break;
    case 'all': {
      flexStyle.justifyItems = 'center';
      flexStyle.alignItems = 'center';
      break;
    }
    default: break;
  }

  const style = {
    width: '100vw',
    height: '100vh',
    ...flexStyle,
    ...externalStyle
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}