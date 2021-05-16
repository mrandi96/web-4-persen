import React from 'react';
import FullScreen from '../../layouts/StandardLayout';
import Card from '../../components/Card';
import Input from '../../components/StandardInput';
import Button from '../../components/StandardButton'

export default function register() {
  return (
    <FullScreen flexAlign="all">
      <Card>
        <h1>Register</h1>
        <Input label="Full Name" type="text" placeholder="John Doe" />
        <Input label="Contact Number" type="text" placeholder="08xxxxxxxxxx" />
        <Input label="Email" type="email" placeholder="user@domain.com" />
        <Input label="Password" type="password" placeholder="Input your password here" />
        <Button style={{ float: 'right' }} title="Submit" color="primary" onClick={() => {}} />
      </Card>
    </FullScreen>
  )
}
