import {
	SuiClientProvider,
	WalletProvider,
	createNetworkConfig,
} from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { appNetworkConfig, defaultNetworkName } from "./lib/network";

// @mysten/dapp-kitのスタイルをインポート
import "@mysten/dapp-kit/dist/index.css";
import "./styles.css";

const queryClient = new QueryClient();
// ネットワーク設定を取得
const { networkConfig } = createNetworkConfig(appNetworkConfig);
const defaultNetwork = defaultNetworkName;

const container = document.getElementById("root");
if (!container) {
	throw new Error("#root が見つかりません");
}

/**
 * アプリケーションのルートコンポーネントをレンダリングします。
 * @mysten/dapp-kitが提供しているSuiClientProviderとWalletProviderで全体をラップ
 */
createRoot(container).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<SuiClientProvider
				networks={networkConfig}
				defaultNetwork={defaultNetwork}
			>
				<WalletProvider autoConnect>
					<App />
				</WalletProvider>
			</SuiClientProvider>
		</QueryClientProvider>
	</StrictMode>,
);
