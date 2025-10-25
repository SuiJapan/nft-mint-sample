import { Transaction } from "@mysten/sui/transactions";

export type MintFormValues = {
	name: string;
	description: string;
	imageUrl: string;
};

function getEnv(name: string): string {
	const raw = import.meta.env[name];
	if (!raw) {
		throw new Error(`${name} が設定されていません。`);
	}
	return raw;
}

/**
 * NFTミント用のトランザクションを作成するメソッド
 * @param values ミントに必要な引数の情報
 * @returns
 */
export function buildMintTransaction(values: MintFormValues): Transaction {
	const packageId = getEnv("VITE_PACKAGE_ID");
	const moduleName = getEnv("VITE_MODULE");
	const functionName = getEnv("VITE_FN_MINT");

	const tx = new Transaction();
	// NFTコントラクトのmint関数を呼び出すトランザクションデータを作成
	tx.moveCall({
		target: `${packageId}::${moduleName}::${functionName}`,
		arguments: [
			tx.pure.string(values.name),
			tx.pure.string(values.description),
			tx.pure.string(values.imageUrl),
		],
	});

	return tx;
}

const SUI_VISION_BASE = "https://testnet.suivision.xyz";

export function explorerLink(
	kind: "package" | "object" | "tx" | "account",
	id: string,
) {
	switch (kind) {
		case "package":
			return `${SUI_VISION_BASE}/package/${id}`;
		case "object":
			return `${SUI_VISION_BASE}/object/${id}`;
		case "tx":
			return `${SUI_VISION_BASE}/txblock/${id}`;
		case "account":
			return `${SUI_VISION_BASE}/account/${id}`;
		default:
			return SUI_VISION_BASE;
	}
}
