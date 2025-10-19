import { useCurrentAccount } from "@mysten/dapp-kit";
import { useState } from "react";

import ConnectPanel from "./components/ConnectPanel";
import ExplorerLinks from "./components/ExplorerLinks";
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
      <header className="hero">
        <div>
          <h1>Sui NFT ミントハンズオン</h1>
          <p>
            ウォレットを接続し、名前・説明・画像 URL を入力して Testnet 上で NFT を 1 体ミントします。
          </p>
        </div>
        <ConnectPanel />
      </header>

      <main className="content">
        <section className="panel">
          <h2>1. ミント設定</h2>
          <MintForm onComplete={setMintResult} account={account?.address ?? null} />
        </section>

        <section className="panel">
          <h2>2. 結果確認</h2>
          {mintResult ? (
            <>
              <ResultCard result={mintResult} />
              <ExplorerLinks digest={mintResult.digest} objectId={mintResult.objectId} />
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
