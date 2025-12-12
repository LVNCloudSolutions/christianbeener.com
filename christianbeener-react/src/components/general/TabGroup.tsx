import { TABS } from "../../constants";

export default function TabGroup(props: { activeTab: any; setActiveTab: any }) {
	const { activeTab, setActiveTab } = props;

	return (
		<div className="cursor-pointer flex flex-row items-center justify-center mb-4 gap-2 p-1 px-0 rounded-xl max-w-2xl mx-auto">
			{TABS.map(({ icon: Icon, name }) => {
				return (
					<button
						key={name}
						className={`btn cursor-pointer font-semibold flex flex-row items-center justify-center gap-2 w-full py-3 ml-2 my-1 rounded-lg ${
							activeTab === name.toLowerCase()
								? "bg-primary text-white"
								: "bg-card"
						}`}
						onClick={() => setActiveTab(name.toLowerCase())}
					>
						<Icon />
						{name}
					</button>
				);
			})}
		</div>
	);
}
