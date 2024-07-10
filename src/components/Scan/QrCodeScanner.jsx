import { Scanner } from "@yudiel/react-qr-scanner"
import { useState } from "react";
import './qrCodeScanner.css'
import { SCAN_DATA } from '../../constance.js'
export const QrCodeScanner = () => {
	const [qr, setQr] = useState('');
	const scanHandler = (result) => {
		setQr(result[0].rawValue)
		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify([...prevData, result[0].rawValue])
		)
	}
	const settings = {
		audio: false,
		finder: false,
	}

	return (
		<div>
			<div className="qrCode">qrCode = {qr}</div>
			<Scanner
				onScan={scanHandler}
				components={settings}
				styles={{
					container: { width: 200 }
				}}>
			</Scanner>
		</div>
	)
}