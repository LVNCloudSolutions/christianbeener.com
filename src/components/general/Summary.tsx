import { BIO } from "../../utils/constants";

export default function Summary() {
	return (
		<div className="md:col-span-3 p-4 border-l-4 border-accent pl-8">
			<h1 className="text-4xl sm:text-4xl font-extrabold mb-5 leading-tight text-white">
				{BIO.title}
			</h1>
			<p className="text-md text-slate-400 mb-5 font-mono">
				{BIO.summary}
			</p>
		</div>
	);
}
