import { useEffect, useState, useCallback } from "react";
import { fetchQuestions } from "../services/questionService";
import Questions from "./Questions.jsx";
import Result from "./Result";
import Welcome from "./Welcome";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [testAnswers, setTestAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const restart=()=>{
    setCurrentIndex(0)
    setIsQuizEnded(false)
    setTestAnswers([])
    setQuizStarted(false)
  }
  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  const handleStart = useCallback(() => {
    setQuizStarted(true);
  }, []);

  const handleAnswer = useCallback(
      (answer) => {
        const currentQuestion = questions[currentIndex];
        setTestAnswers((prev) => [
          ...prev,
          {
            question: currentQuestion?.body,
            correctAnswer: currentQuestion?.title,
            userAnswer: answer,
          },
        ]);
      },
      [questions, currentIndex]
  );

  const isLoading = questions.length === 0;

  const renderContent = () => {
    if (isLoading) return <p>Yükleniyor...</p>;
    if (!quizStarted) return <Welcome handleStart={handleStart} />;
    if (isQuizEnded) return <Result restart={restart} testAnswers={testAnswers} />;
    return (
        <Questions
            questions={questions}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setIsQuizEnded={setIsQuizEnded}
            handleAnswer={handleAnswer}
        />
    );
  };

  return <div className="flex items-center justify-center">{renderContent()}</div>;
};

export default Quiz;
