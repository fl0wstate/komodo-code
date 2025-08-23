import { useState } from 'react';
import { Button } from './components/ui/button';


export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="destructive" onClick={handleClick}>
          {showMessage ? ".." : "Hello click me!"}
        </Button>

        {showMessage && (
          <div className='mt-4 text-2xl text-blacktext-center border border-amber-300 p-4'>
            Welcome to Komodo-Code Editor
          </div>
        )}
      </div>
    </>
  );
}
