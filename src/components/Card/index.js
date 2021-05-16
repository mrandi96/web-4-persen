import React from 'react';

const styles = {
  container: {
    margin: '0 auto',
    width: '50vw',
    minWidth: '800px',
    height: '90vh',
    minHeight: '600px',
    border: '1px solid #ccc',
    borderRadius: '11px',
    padding: '0 15px'
  }
}

export default function card({ children }) {
  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}
