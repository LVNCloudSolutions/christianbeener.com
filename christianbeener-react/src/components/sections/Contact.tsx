import { useState } from "react";
import TabGroup from "../general/TabGroup";
import ContactForm from "../general/ContactForm";
import { SERVICE_FORM, RECRUITER_FORM } from "../../constants";

export default function Contact() {
	const [activeTab, setActiveTab] = useState("services");

	return (
		<>
			<p className="text-center text-slate-400 mb-4 tech-label">
				Please use the tabs below to direct your message to the correct
				channel.
			</p>
			<TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
			<ContactForm
				form={activeTab === "services" ? SERVICE_FORM : RECRUITER_FORM}
			/>
		</>
	);
}
