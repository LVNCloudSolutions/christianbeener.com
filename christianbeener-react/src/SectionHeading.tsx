import { Typography } from "@material-tailwind/react";

export default function SectionHeading({ title }: { title: string }) {
	return (
		<>
			<Typography
				as="h2"
				className="text-4xl font-bold text-center mb-5 border-b-4 border-primary pb-3"
			>
				{title}
			</Typography>
		</>
	);
}
