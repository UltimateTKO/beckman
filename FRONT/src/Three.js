import { useState } from "react";

export { Play };

const state = { maru: "〇", batu: "Ｘ", empty: "　" };
const playerMarkArray = [state.maru, state.batu];
const boardXY = 3;

function Square({ value, num, onSquareClick }) {
	return (
		<button key={num.toString()} className="Square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function Board(playerIndex, setCurrentMove) {
	const [stateArray, setState] = useState(Array(boardXY * boardXY).fill(state.empty));

	const squareClick = (num) => {
		if (playerMarkArray.includes(stateArray[num])) {
			return;
		}
		const copyStateArray = stateArray.slice();
		copyStateArray[num] = playerMarkArray[playerIndex];
		setState(copyStateArray);
		setCurrentMove((playerIndex + 1) % 2);
	};

	const createBoard = (i, j) =>
		Array.from({ length: i }, (_, inI) =>
			Array.from({ length: j }, (_, inJ) => inI + inJ + inI * (j - 1)).map((num) => (
				<Square value={stateArray[num]} num={num} onSquareClick={() => squareClick(num)}></Square>
			))
		).map((elements) => <div>{elements}</div>);
	return [stateArray, setState, <>{createBoard(boardXY, boardXY)}</>];
}

function decideWinner(stateArray) {
	const result = (column) => {
		if (column === 0) {
			return [
				// 一行目
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[index])).size,
				// 左ななめ
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[index * boardXY + index])).size,
				// 一列目
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[index * boardXY])).size,
			];
		} else if (column > 0 && column < boardXY - 1) {
			return [
				// n列
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[column + index * boardXY])).size,
			];
		} else if (column === boardXY - 1) {
			return [
				// 右ななめ
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[(index + 1) * column])).size,
				// 右端一列
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[column + index * boardXY])).size,
			];
		} else if (column % boardXY === 0) {
			return [
				// n行
				new Set(Array.from({ length: boardXY }, (_, index) => stateArray[column + index])).size,
			];
		} else {
			return [];
		}
	};
	const columnCountUp = (column) => {
		if (column < boardXY) {
			return column + 1;
		} else {
			return column + boardXY;
		}
	};
	for (let column = 0; column < boardXY * (boardXY - 1); column = columnCountUp(column)) {
		if (result(column).includes(1)) {
			return stateArray[column];
		}
	}
	return state.empty;
}

function Play() {
	const [playerIndex, setCurrentMove] = useState(0);
	const [stateArray, setState, board] = Board(playerIndex, setCurrentMove);
	const result = decideWinner(stateArray);
	const judgeString = result === state.empty ? "restart" : result + "の勝ち!";
	return (
		<div>
			{board}
			<br />
			<button
				onClick={() => {
					const copyStateArray = stateArray.slice().map((index) => state.empty);
					setState(copyStateArray);
					setCurrentMove(0);
				}}
			>
				{judgeString}
			</button>
		</div>
	);
}
