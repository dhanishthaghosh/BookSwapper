import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}
// setting default for varient
Message.defaultProps = {
  variant: 'info',// blue color
}

export default Message