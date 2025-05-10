import React, { useEffect, useState } from 'react';

export const ApiStatus = () => {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [message, setMessage] = useState<string>('Checking API connection...');

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categories');
        if (response.ok) {
          setStatus('connected');
          setMessage('Connected to API successfully');
        } else {
          setStatus('error');
          setMessage(`API error: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        setStatus('error');
        setMessage(`Failed to connect to API: ${error instanceof Error ? error.message : String(error)}`);
      }
    };

    checkApiStatus();
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 p-3 rounded-lg shadow-lg ${
      status === 'connected' ? 'bg-green-100 text-green-800' : 
      status === 'error' ? 'bg-red-100 text-red-800' : 
      'bg-yellow-100 text-yellow-800'
    }`}>
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${
          status === 'connected' ? 'bg-green-500' : 
          status === 'error' ? 'bg-red-500' : 
          'bg-yellow-500'
        }`}></div>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};
