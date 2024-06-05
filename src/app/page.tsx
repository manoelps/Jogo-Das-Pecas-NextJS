'use client';

import Instructions from '@/components/Instructions';
import useGame from '@/hooks/useGame';
import { useState } from 'react';
import Confetti from 'react-confetti';

const Home = () => {
	const [seeInstructions, setSeeInstructions] = useState(false);

	const { grid, finish, handleClick, resetGame, moveCounter } = useGame();

	return (
		<main className="flex flex-col items-center justify-between mt-24 gap-10">
			{finish && <Confetti />}

			<span className="text-2xl font-extrabold shadow shadow-[#56BAEC] px-11 py-4 rounded-md">JOGO DAS PEÇAS</span>
			<div className="flex flex-col gap-1">
				<div className="grid grid-cols-3 gap-2">
					{grid.map((value, index) => (
						<button
							key={index}
							onClick={() => {
								handleClick(value, index);
							}}
							disabled={finish}
							className={`w-24 h-24 flex items-center justify-center rounded-md font-bold text-3xl text-white ${
								!finish &&
								value &&
								'bg-purple-500 hover:bg-purple-600 cursor-pointer active:scale-95 shadow-sm shadow-black'
							} ${finish && value && 'bg-green-600  cursor-not-allowed shadow-sm shadow-black'}`}
						>
							{value && value}
						</button>
					))}
				</div>

				<div className="flex justify-between items-center font-normal text-gray-600">
					<div
						onClick={() => {
							setSeeInstructions(!seeInstructions);
						}}
						className="flex justify-center items-center font-semibold text-purple-600 cursor-pointer w-5 h-5 bg-white rounded-full shadow shadow-black/50 active:scale-95"
					>
						?
					</div>
					<span>Movimentos: {moveCounter}</span>
					{seeInstructions && <Instructions setSeeInstructions={setSeeInstructions} />}
				</div>
			</div>
			<div className="flex justify-center items-center py-8">
				<button
					onClick={resetGame}
					className={
						'px-8 py-3 lg:px-6 lg:py-2 md:px-6 md:py-2 text-white bg-purple-600 font-semibold rounded-md shadow shadow-black hover:bg-purple-500 active:scale-95'
					}
				>
					NOVA PARTIDA
				</button>
			</div>
		</main>
	);
};

export default Home;
