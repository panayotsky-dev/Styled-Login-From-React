import React from 'react'
import { Card, Input, Form, Button } from './form'




export default function Loginform() {
  return (
    <Card class="card">
      <Form class="form">
        <Input class="email" type="email" placeholder="Email"/>
        <Input class="password" type="password" placeholder="Password"/>
        <Button class="button"> Submit </Button>      
      </Form>        
    </Card>
  )
}
