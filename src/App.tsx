import React, { useEffect } from 'react';
import { Steps } from 'antd';

const submissionStatus = null
const appFormStatus = 'DRAFT'
const ilusStatus = 'FINISH'
const App: React.FC = () => {

  return (
    <Steps
      // current={current}
      className='steps-illustration'
      items={[
        {
          title: 'Ilustration',
          status: 'error',
          className: appFormStatus !== null ? 'illusItem' : '',
        },
        {
          title: 'SPAJ',
          status: 'error',
          className: submissionStatus !== null ? 'spajItem ' : ''
        },
        {
          title: 'Submission',
          status: submissionStatus !== null ? 'process' : undefined
        },
      ]}
    />
  )
};

export default App;