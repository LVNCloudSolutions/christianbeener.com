import { SendDiagonalSolid } from "iconoir-react";

export default function SendButton() {
	return (
		<button
			type="submit"
			className="cursor-pointer w-full py-3 bg-primary text-white rounded-lg flex flex-row justify-center gap-1 items-center"
		>
			<SendDiagonalSolid className="text-light" />
			Send
		</button>
	);
}
