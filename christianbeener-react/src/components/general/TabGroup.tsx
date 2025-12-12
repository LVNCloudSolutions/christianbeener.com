import { ProfileCircle, Suitcase } from "iconoir-react";

export default function TabGroup(props: { activeTab: any; setActiveTab: any }) {
	const { activeTab, setActiveTab } = props;
	const tabs = [
		{
			name: "Services",
			icon: Suitcase,
		},
		{
			name: "Recruiters",
			icon: ProfileCircle,
		},
	];

	return (
		<div className="cursor-pointer flex flex-row items-center justify-center mb-4 gap-2 p-1 px-0 rounded-xl max-w-2xl mx-auto">
			{tabs.map((tab) => {
				return (
					<button
						className={`cursor-pointer font-semibold flex flex-row items-center justify-center gap-2 w-full py-3 ml-2 my-1 rounded-lg ${
							activeTab === tab.name.toLowerCase()
								? "bg-primary text-white"
								: "bg-card"
						}`}
						onClick={() => setActiveTab(tab.name.toLowerCase())}
					>
						<tab.icon />
						{tab.name}
					</button>
				);
			})}
		</div>
	);
}
