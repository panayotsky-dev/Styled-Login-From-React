import React from 'react'
import { Card, Input, Form, Button } from './form'
import styled from 'styled-components'



export default function Loginform() {
  return (
    <Card>
      <Form>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Button> Submit           
        </Button>      
      </Form>        
    </Card>
  )
}
