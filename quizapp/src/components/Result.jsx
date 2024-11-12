
const Result = ({ testAnswers,restart }) => {
    return (
        <div className='flex flex-col items-center w-full bg-slate-50'>
            <div className="my-12 shadow-xl lg:w-1/2">
                <table className="text-left bg-white">
                    <thead className="text-xl border-b bg-sky-100">
                        <tr>
                            <th className='px-6 py-6'>
                                Soru
                            </th>
                            <th className='px-6 py-6'>
                                Doğru Cevap
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            testAnswers.map((ans, i) => (
                                <tr key={i} className="odd:bg-whit border-b">
                                    <td className='w-3/5 px-6 py-4'>{ans.question}</td>
                                    <td className='w-1/5 px-6 py-4'>{ans.correctAnswer}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={restart} className="w-1/2 py-5 mt-6 mb-24 text-lg font-semibold tracking-wider text-white bg-blue-600 rounded-lg px-7 hover:bg-blue-700">Tekrar Dene</button>
        </div>
    )
}

export default Result