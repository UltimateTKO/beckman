function Square(value) {
	return <button className="Square">{value}</button>;
}

function Board() {
	const squareRows = Array.from({ length: 3 }, (_, i) => i).map((num) =>
		Square(num)
	);
	const createOne = (i, j) =>
		Array.from({ length: i }, (_, inI) =>
			Array.from(
				{ length: j },
				(_, inJ) => inI + 1 + inJ + inI * (j - 1)
			).map((num) => Square(num))
		).map((elements) => <div>{elements}</div>);
	return <>{createOne(3, 3)}</>;
}

export default Board;
