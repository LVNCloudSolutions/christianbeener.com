import { useState } from "react";
import TabGroup from "../general/TabGroup";
import Form from "../general/Formral/Form";

export default function Contact() {
	const [activeTab, setActiveTab] = useState("services");

	return (
		<>
			<p className="text-center text-slate-400 mb-4 tech-label">
				Please use the tabs below to direct your message to the correct
				channel.
			</p>
			<TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
			<Form activeForm={activeTab} />
		</>
	);
}
