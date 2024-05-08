import styles from './App.module.css';
import { useState } from 'react';
import { Buttons } from './components/Buttons.jsx';
import { Screen } from './components/Screen.jsx';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const handleOperatorClick = (newOperator) => {
		if (result !== '') {
			setOperand1(String(result));
			setResult('');
		}
		if (newOperator === '+' && operand1) {
			setOperator(newOperator);
		}
		if (newOperator === '-' && operand1) {
			setOperator(newOperator);
		}
		if (newOperator === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setResult('');
		}
		if (newOperator === '=' && operand1 && operand2) {
			let res;
			if (operator === '+') {
				res = Number(operand1) + Number(operand2);
			} else if (operator === '-') {
				res = Number(operand1) - Number(operand2);
			}

			setOperand2('');
			setOperator('');
			setResult(res);
		}
	};

	const handleNumberClick = (event) => {
		if (operator === '' && operand1.length < 5) {
			setOperand1(operand1 + event.target.textContent);
		}
		if (operand1 !== '' && operator !== '' && operand2.length < 5) {
			setOperand2(operand2 + event.target.textContent);
		}
	};

	return (
		<div className={styles['calc']}>
			<Screen
				operand1={operand1}
				operand2={operand2}
				operator={operator}
				result={result}
			></Screen>

			<Buttons
				handleNumberClick={handleNumberClick}
				handleOperatorClick={handleOperatorClick}
			></Buttons>
		</div>
	);
};
