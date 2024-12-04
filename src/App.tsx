import React, { useEffect } from 'react';
import { Steps } from 'antd';

const submissionStatus = null
const appFormStatus = 'DRAFT'
const illusStatus = 'ERROR'
const App: React.FC = () => {

  return (
    <Steps
      className='steps-illustration'
      items={[
        {
          title: 'Ilustration',
          status: 'error',
          className: appFormStatus !== null ? 'illusItem' : '',
          description: illusStatus
        },
        {
          title: 'SPAJ',
          status: 'process',
          className: submissionStatus !== null ? 'spajItem ' : '',
          description: appFormStatus
        },
        {
          title: 'Submission',
          status: submissionStatus !== null ? 'process' : undefined,
          description: submissionStatus ?? 'null'
        },
      ]}
    />
  )
};

export default App;