import ContactForm from "../general/ContactForm";
import { SERVICE_FORM } from "../../utils/constants";

export default function Contact() {
	return (
		<>
			<ContactForm form={SERVICE_FORM} />
		</>
	);
}
