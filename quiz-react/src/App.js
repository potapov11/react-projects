import './App.css';
import { useState, useRef } from 'react';
import questionsArr from './Questions';

console.log(questionsArr);

function App() {
	const [numberQuestion, setNumberQuestion] = useState(0);
	const [lineWidth, setLineWidth] = useState(0);

	const element = useRef(null);

	function checkIsCorrect(answer) {
		if (answer === questionsArr[numberQuestion].correctAnswer) {
			setNumberQuestion((prevState) => prevState + 1);
			addRemoveClass();
			setLineWidth((prevState) => prevState + 10);

			console.log(numberQuestion, '...numberQuestion in checkIsCorrect');

			console.group(lineWidth);
		} else {
			addShakeClass();
		}
	}

	function addRemoveClass() {
		if (element.current) {
			element.current.classList.add('left-transform');
		}

		if (element.current && element.current !== null) {
			console.log(element.current);
			console.log(numberQuestion);

			if (numberQuestion < 4) {
				setTimeout(() => {
					element.current.classList.remove('left-transform');
				}, 1000);
			}
		}
	}

	function addShakeClass() {
		if (element.current) {
			element.current.classList.add('shake');
		}

		if (element.current) {
			setTimeout(() => {
				element.current.classList.remove('shake');
			}, 1000);
		}
	}

	return (
		<div className="App">
			<div className="container">
				{numberQuestion <= 3 ? (
					<div className="block">
						<div className="win-line" style={{ width: lineWidth + '%' }}></div>
						<div className="card" ref={element}>
							<h3 className="card__question">{questionsArr[numberQuestion].question}</h3>

							<div className="card__options">
								<ul className="card__list">
									{questionsArr[numberQuestion].answers.map((item, index) => (
										<li key={index} onClick={(e) => checkIsCorrect(e.target.textContent)}>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				) : (
					<h2>Вы победили</h2>
				)}
			</div>
		</div>
	);
}

export default App;
