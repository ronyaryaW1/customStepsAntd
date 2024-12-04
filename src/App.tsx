import React from 'react';
import { Steps } from 'antd';

const submissionStatus = 'SUBMITTED'
const appFormStatus = 'EXPIERED'
const illusStatus = 'ERROR'
const App: React.FC = () => {
  return (
    <Steps
      className='steps-illustration'
      items={[
        // Flow codenya jadi gini, di itemnya punya classname masing2 yang bakal ngatur style connectornya,
        // nah jadi di spaj sama ilustration itu ngecek dulu status di step depannya null apa ga ? kalo ga null kita aktifin connectornya dengan cara kasih classNamenya 
        {
          title: 'Ilustration',
          status: 'error',
          className: appFormStatus !== null ? 'illusItem' : '', // step ilus ngecek status spaj null atau ga
          description: illusStatus
        },
        {
          title: 'SPAJ',
          status: 'wait',
          className: submissionStatus !== null ? 'spajItem ' : '', // step spaj ngecek status submssion null atau ga
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