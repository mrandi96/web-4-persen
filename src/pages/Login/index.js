import React from 'react';
import FullScreen from '../../layouts/StandardLayout';
import Card from '../../components/Card';
import Input from '../../components/StandardInput';
import Button from '../../components/StandardButton';

export default function login() {
  return (
    <FullScreen flexAlign="all">
      <Card>
        <h1>Login</h1>
        <Input label="Email" placeholder="user@domain.com" type="email" />
        <Input label="Password" placeholder="Input your password here" type="password" />
        <Button style={{ float: 'right' }} title="Submit" color="primary" onClick={() => {}} />
      </Card>
    </FullScreen>
  )
}
