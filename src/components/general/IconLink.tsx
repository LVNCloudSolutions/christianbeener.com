import type { IconLinkConfig } from "../../utils/types";

export default function IconLink({ title, url, icon: Icon }: IconLinkConfig) {
	return (
		<a className="link" title={title} href={url} target="_blank">
			<Icon className="h-6 w-6 sm:h-6 sm:w-6 stroke-2" />
		</a>
	);
}
