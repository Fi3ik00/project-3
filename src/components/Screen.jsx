import styles from '../App.module.css';

export function Screen({ operand1, operand2, operator, result }) {
	return (
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
	);
}
