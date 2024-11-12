import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {generateOptions} from '../utils/generateOptions'

const TOTAL_QUESTIONS = 10
const DEFAULT_TIME = 30
const SingleQuestion = ({questions, currentIndex, setCurrentIndex, setIsQuizEnded, handleAnswer}) => {

    const [timer, setTimer] = useState(DEFAULT_TIME);
    const [isClickable, setIsClickable] = useState(false);
    const [userChoice, setUserChoice] = useState({});


    const currentQuestion = questions[currentIndex];
    const options = useMemo(() => {
        return currentQuestion ? generateOptions(currentQuestion.title, questions) : [];
    }, [currentIndex, questions]);


    const checkedOption = (opt) => {
        setUserChoice(opt)
    }

    const handleNextQuestion = useCallback(() => {
        handleAnswer(userChoice);

        if (currentIndex >= TOTAL_QUESTIONS - 1) {
            setIsQuizEnded(true);
        } else {
            setCurrentIndex((prev) => prev + 1);
            resetQuestionState();
        }
    }, [userChoice, currentIndex]);

    const resetQuestionState = () => {
        setTimer(DEFAULT_TIME);
        setUserChoice({});
        setIsClickable(false);
    };

    const handleForward = () => {
        handleNextQuestion();
    }

    useEffect(() => {
        const handleCountdown = () => {
            if (timer > 1) {
                setTimer((prev) => prev - 1);
                if (timer === 21) setIsClickable(true);
            } else {
                handleNextQuestion();
            }
        };

        const countdown = setInterval(handleCountdown, 1000);

        return () => clearInterval(countdown);
    }, [timer]);


    const getButtonStyle = useCallback(
        (option) => (userChoice === option ? "border-blue-500 bg-blue-100" : "hover:bg-gray-100 bg-gray-50 border-blue-200"),
        [userChoice]
    );

    return (
        <div className='flex items-center justify-center w-full h-screen bg-gray-50'>
            <div className='flex flex-col gap-8 p-12 bg-white rounded-lg shadow-2xl lg:p-24 lg:w-1/2'>
                <div className='flex flex-col justify-between gap-12'>
                    <div className='flex justify-between'>
                        <h2 className='text-2xl'>Soru: <span
                            className='font-bold'>{currentIndex + 1}/{TOTAL_QUESTIONS}</span></h2>
                        <p className='text-lg font-lg'>Kalan süre: <span className='font-bold'>{timer} sn.</span></p>
                    </div>
                    <p className='pb-8 font-medium'><span className=''>{currentQuestion?.body}</span></p>
                </div>
                <div className='flex flex-col gap-4'>
                    {
                        options.map((opt, i) => (
                            <button disabled={!isClickable} key={i} onClick={() => {
                                checkedOption(opt)
                            }} value={opt}
                                    className={`p-4 border-2 rounded-md text-left text-black  ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'} ${getButtonStyle(opt)}`}>
                                <span className='font-bold text-blue-600'>{String.fromCharCode(65 + i)}</span> - <span
                                className=''>{opt}</span>
                            </button>
                        ))
                    }
                </div>
                <div className='text-right'>
                    <button onClick={handleForward}
                            className='px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700'>İleri
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleQuestion

