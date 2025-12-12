import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import App from "./App.tsx";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<GoogleReCaptchaProvider
			reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
			useEnterprise={false}
		>
			<App />
		</GoogleReCaptchaProvider>
	</StrictMode>
);
