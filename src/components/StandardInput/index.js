import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 0',
    alignItems: 'center',
  },
  label: {
    flex: 1
  },
  input: {
    flex: 4,
    padding: '10px 7px'
  }
}

export default function standardInput({ label, type, placeholder }) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input style={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
}