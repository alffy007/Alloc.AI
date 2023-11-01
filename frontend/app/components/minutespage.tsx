import { Button } from '@nextui-org/react';
import React from 'react'
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Minutespage = () => {

    const {
        transcript,
        browserSupportsSpeechRecognition
        
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
      const handleStartListening = () => {
     
        SpeechRecognition.startListening().catch((error) => {
         
          console.error('Error starting listening:', error);
        });
      };

    return (
        <div className="bg-[#010101] flex min-h-screen w-full">

            <div
                className="flex w-full flex-col bg-slate-100 sm:w-64 m-4 rounded-3xl p-2"
                style={{ flex: 3 }}
            >
                <div className="h-full py-12 bg-slate-100 sm:py-16 lg:py-7 w-full">
                    <div className="h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                        <div className="h-full flex flex-col justify-center   bg-gray-200 rounded">
                        <div className='h-full p-3'>
                    {transcript}
             
                </div>
                      <div className=' flex flex-row justify-center'>
                      <Button onClick={handleStartListening} className='bg-gray-300 w-fit rounded p-3 m-3 hover:bg-gray-100'>Start Meeting <BsFillMicFill /></Button>
                            <Button onClick={SpeechRecognition.stopListening} className='bg-gray-300 ml-3 w-fit rounded p-3 m-3 hover:bg-gray-100'>Stop Meeting <BsFillMicMuteFill /></Button>

                      </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Minutespage