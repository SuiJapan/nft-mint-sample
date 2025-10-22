const PRESET_NETWORKS = {
	localnet: "http://127.0.0.1:9000",
	devnet: "https://fullnode.devnet.sui.io:443",
	testnet: "https://fullnode.testnet.sui.io:443",
	mainnet: "https://fullnode.mainnet.sui.io:443",
} as const;

type PresetKey = keyof typeof PRESET_NETWORKS;

type NetworkConfig = Record<string, { url: string }>;

function resolveNetwork(): { name: string; url: string } {
	const envName = import.meta.env.VITE_SUI_NETWORK ?? "testnet";
	if (envName in PRESET_NETWORKS) {
		const key = envName as PresetKey;
		return { name: key, url: PRESET_NETWORKS[key] };
	}

	const envUrl = import.meta.env.VITE_SUI_RPC_URL;
	if (!envUrl) {
		throw new Error(
			`不明なネットワーク ${envName} が指定されました。PRESET（${Object.keys(PRESET_NETWORKS).join(", ")}) または VITE_SUI_RPC_URL を設定してください。`,
		);
	}
	return { name: envName, url: envUrl };
}

const resolved = resolveNetwork();

export const appNetworkConfig: NetworkConfig = {
	[resolved.name]: { url: resolved.url },
};
export const defaultNetworkName = resolved.name;
