import { useState } from "react";
import TabGroup from "../general/TabGroup";
import ContactForm from "../general/ContactForm";
import { SERVICE_FORM, RECRUITER_FORM } from "../../constants";
import ToastNotification from "../general/ToastNotification";

export default function Contact() {
	const [activeTab, setActiveTab] = useState("services");
	// NEW: State for Toast and Submission Status
	const [toastStatus, setToastStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [toastMessage, setToastMessage] = useState("");
	const handleToastClose = () => {
		setToastStatus("idle");
		setToastMessage("");
	};

	return (
		<>
			<p className="text-center text-slate-400 mb-4 tech-label">
				Please use the tabs below to direct your message to the correct
				channel.
			</p>
			<TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
			<ContactForm
				form={
					activeTab === "services"
						? (SERVICE_FORM as any)
						: (RECRUITER_FORM as any)
				}
				setToastStatus={setToastStatus}
				setToastMessage={setToastMessage}
			/>

			<ToastNotification
				status={toastStatus}
				message={toastMessage}
				onClose={handleToastClose}
			/>
		</>
	);
}
