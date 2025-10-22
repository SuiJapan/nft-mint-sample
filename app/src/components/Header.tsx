import ConnectPanel from "./ConnectPanel";

/**
 * ヘッダーコンポーネント
 * @returns ヘッダー要素
 */
export const Header = () => {
	return (
		<header className="hero">
			<div>
				<h1>Sui NFT ミントハンズオン</h1>
				<p>
					ウォレットを接続し、名前・説明・画像 URL を入力して Testnet 上で NFT
					を 1 体ミントします。
				</p>
			</div>
			<ConnectPanel />
		</header>
	);
};
