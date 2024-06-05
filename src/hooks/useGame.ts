import { shuffleArray } from '@/helpers/helper';
import { useEffect, useState } from 'react';
const useGame = () => {
	const originalGrid = [1, 2, 3, 4, 5, 6, 7, 8, null];
	const [grid, setGrid] = useState(originalGrid);
	const [finish, setFinish] = useState(false);
	const [moveCounter, setMoveCounter] = useState(0);

	const handleClick = (value: any, index: any) => {
		const indexNull = grid.indexOf(null);
		const [cursorRow, cursorColumn] = getRowAndCol(index);
		const [nullRow, nullColumn] = getRowAndCol(indexNull);

		handleMove(cursorRow, cursorColumn, nullRow, nullColumn, grid, indexNull, index, value);
	};

	const handleMove = (
		cursorRow: number,
		cursorColumn: number,
		nullRow: number,
		nullColumn: number,
		newGrid: (number | null)[],
		indexNull: number,
		index: number,
		value: number
	) => {
		const isSameRow = cursorRow === nullRow;
		const isSameCol = cursorColumn === nullColumn;
		const isAdjacentRow = cursorRow + 1 === nullRow || cursorRow - 1 === nullRow;
		const isAdjacentCol = cursorColumn + 1 === nullColumn || cursorColumn - 1 === nullColumn;

		if ((isSameRow && isAdjacentCol) || (isSameCol && isAdjacentRow)) {
			setMoveCounter(prevValue => prevValue + 1);

			move(newGrid, indexNull, index, value);

			if (checkGameConclusion(newGrid)) {
				setFinish(true);
			}
		}
	};

	const move = (newGrid: (number | null)[], indexNull: number, index: number, valor: number) => {
		newGrid.splice(indexNull, 1, valor);
		newGrid.splice(index, 1, null);
		setGrid(newGrid);
	};

	const checkGameConclusion = (newGrid: (number | null)[]) => {
		return newGrid.every((element, index) => element === originalGrid[index]);
	};

	const getRowAndCol = (index: number) => {
		const dimensions = [3, 3];
		let row = Math.floor(index / dimensions[1]);
		let col = index - row * dimensions[0];
		return [row, col];
	};

	const resetGame = () => {
		setGrid(shuffleArray(originalGrid));
		setFinish(false);
		setMoveCounter(0);
	};

	useEffect(() => {
		setGrid(shuffleArray(originalGrid));
	}, []);

	return { grid, finish, handleClick, resetGame, moveCounter };
};

export default useGame;
