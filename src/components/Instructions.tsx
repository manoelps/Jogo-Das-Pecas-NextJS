import { Dispatch, SetStateAction } from 'react';

type Props = {
	setSeeInstructions: Dispatch<SetStateAction<boolean>>;
};

const Instructions: React.FC<Props> = ({ setSeeInstructions }) => {
	return (
		<div className="absolute w-full lg:w-[400px]  top-0  lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 bg-white text-purple-600 rounded-b-lg lg:rounded-lg z-10 shadow shadow-black/80 border-2 border-white">
			<div className=" pt-4 pl-4 pr-4  flex justify-center flex-col">
				<div className="flex flex-col gap-4">
					<h2 className="">Início do Jogo</h2>
					<div className="font-medium pl-2">
						Ao iniciar o jogo, você verá uma série de cards dispostos em uma grade, com 1 espaço vago
					</div>
					<h3>Instruções: </h3>
					<span className="font-medium">
						Coloque em ordem numérica (da esquerda para a direita e depois de cima para baixo), com o espaço em branco no canto
						inferior direito.
					</span>
				</div>
			</div>
			<div className="flex justify-center items-center mt-4 bg-gray-100 p-4 rounded-b-lg">
				<button
					onClick={() => {
						setSeeInstructions(false);
					}}
					className="font-medium"
				>
					FECHAR
				</button>
			</div>
		</div>
	);
};

export default Instructions;
