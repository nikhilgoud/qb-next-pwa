import React, { useEffect, useState } from 'react';

export const Timer = () => {
  const [time, SetTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      SetTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        //width: 'fit-content',
        //position: 'absolute',
      }}
    >
      <div style={{ fontSize: '1.5rem' }}>{time.toLocaleTimeString()}</div>
      <div style={{ fontSize: '0.8rem' }}>{time.toLocaleDateString()}</div>
    </div>
  );
};
