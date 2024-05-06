import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const getResult = () => {
		let res;
		if (operator === '+') {
			res = Number(operand1) + Number(operand2);
		} else if (operator === '-') {
			res = Number(operand1) - Number(operand2);
		}

		setOperand2('');
		setOperator('');
		setResult(res);
	};

	const handleOperatorClick = (newOperator) => {
		if (result !== '') {
			setOperand1(String(result));
			setResult('');
		}
		setOperator(newOperator);
	};

	const handleNumberClick = (event) => {
		if (operator === '' && operand1.length < 5) {
			setOperand1(`${operand1}${event.target.textContent}`);
		}
		if (operand1 !== '' && operator !== '' && operand2.length < 5) {
			setOperand2(`${operand2}${event.target.textContent}`);
		}
	};

	return (
		<div className={styles['calc']}>
			<div className={styles['calc-screen']}>
				{result === '' ? (
					<p
						className={
							operand1.length + operand2.length > 9
								? styles['text-formatting']
								: null
						}
					>
						{operand1 + operator + operand2}
					</p>
				) : (
					<p className={styles['active']}>{result}</p>
				)}
			</div>
			<div className="buttons">
				<button
					className={styles['btn-calc']}
					onClick={() => {
						setOperand1('');
						setOperand2('');
						setOperator('');
						setResult('');
					}}
				>
					C
				</button>
				<button
					className={styles['btn-calc']}
					onClick={() => {
						operand1 !== '' ? handleOperatorClick('+') : setOperator('');
					}}
				>
					+
				</button>
				<button
					className={styles['btn-calc']}
					onClick={() => {
						operand1 ? handleOperatorClick('-') : setOperator('');
					}}
				>
					-
				</button>
				<button
					className={styles['btn-calc']}
					onClick={() => {
						if (operand1 !== '' && operator !== '' && operand2 !== '') {
							getResult();
						}
					}}
				>
					=
				</button>

				{NUMS.map((num) => (
					<button
						className={styles['btn-num']}
						key={num}
						onClick={(event) => handleNumberClick(event)}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	);
};
