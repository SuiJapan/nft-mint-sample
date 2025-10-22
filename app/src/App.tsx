import { useCurrentAccount } from "@mysten/dapp-kit";
import { useState } from "react";

import ExplorerLinks from "./components/ExplorerLinks";
import { Header } from "./components/Header";
import MintForm from "./components/MintForm";
import ResultCard from "./components/ResultCard";
import type { MintResult } from "./lib/types";

/**
 * App Component
 * @returns
 */
function App() {
	// 接続中のウォレットアカウント情報を取得する
	const account = useCurrentAccount();
	const [mintResult, setMintResult] = useState<MintResult | null>(null);

	return (
		<div className="page">
			<Header />
			<main className="content">
				<section className="panel">
					<h2>1. ミント設定</h2>
					<MintForm
						onComplete={setMintResult}
						account={account?.address ?? null}
					/>
				</section>
				<section className="panel">
					<h2>2. 結果確認</h2>
					{mintResult ? (
						<>
							<ResultCard result={mintResult} />
							<ExplorerLinks
								digest={mintResult.digest}
								objectId={mintResult.objectId}
							/>
						</>
					) : (
						<p className="muted">まだミント結果はありません。</p>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
