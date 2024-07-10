import { QRCodeSVG } from "qrcode.react"
import { GENERATE_DATA } from "../constance.js"
export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

	return (<div>
		<ol>{data.map((code, index) => (
			<li key={index}>
				<p>{code}</p>
				<QRCodeSVG className="qrcode" value={code} size={100} />
			</li>
		))}</ol>
	</div>)
}