import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { cn } from './lib/utils';


export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button
          variant="destructive"
          className={cn(showMessage && 'hidden')}
          onClick={handleClick}>
          Click Me
        </Button>

        {showMessage && (
          <Card className='max-w-2xl mx-auto border-none bg-inherit shadow-none'>
            <CardContent className='text-2xl md:text-7xl lg:text-7xl tex-[#363A4F] w-full bg-inherit'>
              Welcome to <span className='italic font-semibold'>Komodo</span> Editor
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
