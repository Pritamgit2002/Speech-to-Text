import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const refresh = () => window.location.reload(true)
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }


    return (
        <> 
            <div className="container ">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p className="font-bold">Convert your speech into text , it supports Hindi and English as well. </p>

                <div className="main-content bg-slate-100 border-solid border-5 border-red-900" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style ml-2 mt-20 gap-2 md:1px  ">
                    <button onClick={setCopied} className="md:rounded-xl">
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                    <button onClick={refresh} className="md:rounded-xl	">
                      Refresh
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;