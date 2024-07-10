import { Link } from "react-router-dom"
export const Navigation = () => {
	return (
		<nav style={{ display: 'flex', flexDirection: 'column' }}>
			<Link to="/generate">Генерировать QR код</Link>
			<Link to="/scan/">Сканировать QR код</Link>
			<Link to="/generateHistory">История генерирования</Link>
			<Link to="/scanHistory">История сканирования</Link>
		</nav>
	)
}