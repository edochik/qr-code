import { SCAN_DATA } from "../constance.js"
import { QRCodeSVG } from "qrcode.react"

export const ScanHistory = () => {
	const scanHistory = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
	return (<div>
		<ol>{scanHistory.map((code, index) => (
			<li key={index}>
				<p>{code}</p>
				<QRCodeSVG className="qrcode" value={code} size={100} />
			</li>
		))}</ol>
	</div>)
}