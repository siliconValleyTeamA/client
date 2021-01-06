/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Button from 'components/global/SignupButton';

function EmailRegister() {
  return (
    <Button
      icon="iconMail"
      text="이메일로 가입"
      border="1px solid #ced4da"
      background="white"
      color="black"
    />
  );
}

export default EmailRegister;
