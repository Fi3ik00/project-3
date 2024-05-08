import { NUMS } from '../nums';
import styles from '../App.module.css';

export function Buttons({ handleNumberClick, handleOperatorClick }) {
	return (
		<div className="buttons">
			{NUMS.map((num) => (
				<button
					className={
						['C', '+', '-', '='].includes(num)
							? styles['btn-calc']
							: styles['btn-num']
					}
					key={num}
					onClick={(event) => {
						!isNaN(Number(event.target.textContent))
							? handleNumberClick(event)
							: handleOperatorClick(event.target.textContent);
					}}
				>
					{num}
				</button>
			))}
		</div>
	);
}
