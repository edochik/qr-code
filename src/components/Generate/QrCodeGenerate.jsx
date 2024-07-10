import { QRCodeSVG } from "qrcode.react"
import { useState } from "react"
import './qrCodeGenerate.css'
import { GENERATE_DATA } from "../../constance.js"
export const QrCodeGenerate = () => {
	const [text, setText] = useState('')
	const [result, setResult] = useState('');
	const handleChangeText = (e) => {
		setText(e.target.value)
		setResult('')
	}

	const onClickText = () => {
		setResult(text)
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
		localStorage.setItem(
			GENERATE_DATA,
			JSON.stringify([...prevData, text])
		)
		setText('')
	}
	return (
		<div className="container">
			<div className="wrapper">
				{result && <QRCodeSVG className="qrcode" value={text} />}
			</div>
			<input
				className="input"
				type="text"
				placeholder="Введите текс..."
				value={text}
				onChange={handleChangeText}
			/>
			<button
				className="button"
				type="button"
				onClick={onClickText}
			>Сгенерировать QR</button>
		</div>
	)
}