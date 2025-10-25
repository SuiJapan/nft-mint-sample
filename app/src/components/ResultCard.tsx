import type { MintResult } from "../lib/types";

/**
 * ResultCard Componet
 * @param param0
 * @returns
 */
const ResultCard = ({ result }: { result: MintResult }) => {
	return (
		<div className="result-card">
			<dl>
				<div>
					<dt>トランザクションダイジェスト</dt>
					<dd className="mono">{result.digest}</dd>
				</div>
				<div>
					<dt>作成されたオブジェクト ID</dt>
					<dd className="mono">
						{result.objectId ?? "レスポンスに含まれていません"}
					</dd>
				</div>
			</dl>
			<p className="muted">
				オブジェクト ID は Explorer
				で所有者やフィールドを確認するときに使用します。
			</p>
		</div>
	);
};

export default ResultCard;
