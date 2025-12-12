import type { IconLinkButtonConfig } from "../../utils/types";

export default function IconLinkButton({
	url,
	icon: Icon,
	text,
	isPrimary,
}: IconLinkButtonConfig) {
	const btnClass: string = isPrimary ? "btn-primary" : "btn-secondary";
	const classList = btnClass.concat(
		" btn flex justify-center gap-2 px-4 py-3 text-center rounded-lg"
	);
	return (
		<a href={url} className={classList}>
			<Icon className="h-5 w-5 stroke-2 mt-0.5" />
			{text}
		</a>
	);
}
