
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation/Navigation.jsx";
import { QrCodeGenerate } from "./components/Generate/QrCodeGenerate.jsx"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner.jsx"
import { ScanHistory } from "./components/ScanHistory.jsx";
import { GenerateHistory } from "./components/GenerateHistory.jsx";
export const Layout = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/generate" element={<QrCodeGenerate />} />
				<Route path="/scan" element={<QrCodeScanner />} />
				<Route path="/scanHistory" element={<ScanHistory />} />
				<Route path="/generateHistory" element={<GenerateHistory />} />
			</Routes>
		</>
	)
}
