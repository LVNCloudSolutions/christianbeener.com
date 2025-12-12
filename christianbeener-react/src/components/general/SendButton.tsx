import { SendDiagonalSolid } from "iconoir-react";

export default function SendButton({
	isSubmitting,
}: {
	isSubmitting: boolean;
}) {
	return (
		<button
			type="submit"
			className="btn cursor-pointer w-full py-3 bg-primary text-white rounded-lg flex flex-row justify-center gap-1 items-center"
		>
			<SendDiagonalSolid className="text-light" />
			Send
		</button>
	);
}
