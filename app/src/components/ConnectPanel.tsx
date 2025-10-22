import {
	ConnectButton,
	useCurrentAccount,
	useCurrentWallet,
} from "@mysten/dapp-kit";

import { defaultNetworkName } from "../lib/network";

/**
 * ConnectPanel Component
 * @returns
 */
const ConnectPanel = () => {
	const account = useCurrentAccount();
	const walletState = useCurrentWallet();
	const networkLabel = defaultNetworkName;
	const walletLabel = walletState.isConnected
		? walletState.currentWallet.name
		: "未接続";

	return (
		<div className="connect-panel">
			<div className="connect-info">
				<span className="label">ネットワーク</span>
				<span>{networkLabel}</span>
			</div>
			<div className="connect-info">
				<span className="label">ウォレット</span>
				<span>{walletLabel}</span>
			</div>
			<div className="connect-info">
				<span className="label">アカウント</span>
				<span className="mono">{account?.address ?? "未接続"}</span>
			</div>
			<ConnectButton className="connect-button">
				{walletState.isConnected ? "ウォレット接続済み" : "ウォレットを接続"}
			</ConnectButton>
		</div>
	);
};

export default ConnectPanel;
