import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import type { SuiTransactionBlockResponse } from "@mysten/sui/client";
import { FormEvent, useMemo, useState } from "react";

import { buildMintTransaction } from "../lib/sui";
import type { MintResult } from "../lib/types";

const DEFAULT_IMAGES = [
	{
		label: "Aurora",
		description: "カラフルなオーロラ風グラデーション",
		url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
	},
	{
		label: "Crystal",
		description: "透明感のあるクリスタルアート",
		url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
	},
	{
		label: "Echo",
		description: "波紋のようなミニマルパターン",
		url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
	},
] as const;

type MintFormProps = {
	onComplete: (result: MintResult) => void;
	account: string | null;
};

type FormState = "idle" | "submitting";

/**
 * MintForm Component
 * @param param0
 * @returns
 */
const MintForm = ({ onComplete, account }: MintFormProps) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [useDefaultImage, setUseDefaultImage] = useState(true);
	const [selectedImage, setSelectedImage] = useState<string>(
		DEFAULT_IMAGES[0].url,
	);
	const [customImage, setCustomImage] = useState("");
	const [state, setState] = useState<FormState>("idle");
	const [error, setError] = useState<string | null>(null);
	const client = useSuiClient();
	const { mutateAsync: signAndExecuteTransaction } =
		useSignAndExecuteTransaction();

	const imageUrl = useMemo(() => {
		if (useDefaultImage) {
			return selectedImage;
		}
		return customImage.trim();
	}, [useDefaultImage, selectedImage, customImage]);

	const isDisabled = !account || state === "submitting";

	const validate = () => {
		if (!name.trim()) {
			return "名前を入力してください";
		}
		if (!imageUrl) {
			return "画像 URL を指定してください";
		}
		return null;
	};

	const resetForm = () => {
		setDescription("");
		setName("");
		if (!useDefaultImage) {
			setCustomImage("");
		}
	};

	const extractObjectId = (response: SuiTransactionBlockResponse) => {
		const created = response.effects?.created ?? [];
		const first = created.find((item) => item.reference?.objectId);
		return first?.reference?.objectId ?? null;
	};

	/**
	 * Mint メソッドを押した時の処理
	 * @param event
	 * @returns
	 */
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError(null);

		const validationError = validate();
		if (validationError) {
			setError(validationError);
			return;
		}

		if (!account) {
			setError("ウォレットを接続してください");
			return;
		}

		setState("submitting");

		try {
			// トランザクションデータを作成
			const tx = buildMintTransaction({
				name: name.trim(),
				description: description.trim(),
				imageUrl,
			});

			// トランザクションに署名＆送信
			const { digest } = await signAndExecuteTransaction({
				transaction: tx,
			});

			// 実行結果を取得する
			const receipt = await client.waitForTransaction({
				digest,
				options: {
					showEffects: true,
					showEvents: true,
				},
			});

			const objectId = extractObjectId(receipt);
			onComplete({ digest, objectId });
			resetForm();
		} catch (err) {
			const message =
				err instanceof Error ? err.message : "トランザクションに失敗しました";
			setError(message);
		} finally {
			setState("idle");
		}
	};

	return (
		<form className="mint-form" onSubmit={handleSubmit}>
			<label className="field">
				<span>名前 *</span>
				<input
					value={name}
					onChange={(event) => setName(event.target.value)}
					placeholder="例）Sui Workshop NFT"
				/>
			</label>

			<label className="field">
				<span>説明</span>
				<textarea
					value={description}
					onChange={(event) => setDescription(event.target.value)}
					rows={3}
					placeholder="ハンズオンで作成した NFT の説明を入力"
				/>
			</label>

			<fieldset className="field">
				<legend>画像の選択 *</legend>
				<div className="toggle">
					<label>
						<input
							type="radio"
							name="image-mode"
							checked={useDefaultImage}
							onChange={() => setUseDefaultImage(true)}
						/>
						テンプレート画像を使う
					</label>
					<label>
						<input
							type="radio"
							name="image-mode"
							checked={!useDefaultImage}
							onChange={() => setUseDefaultImage(false)}
						/>
						自分で URL を指定する
					</label>
				</div>

				{useDefaultImage ? (
					<div className="image-options">
						{DEFAULT_IMAGES.map((item) => (
							<button
								key={item.url}
								type="button"
								className={
									item.url === selectedImage
										? "image-option active"
										: "image-option"
								}
								onClick={() => setSelectedImage(item.url)}
								disabled={state === "submitting"}
							>
								<img src={item.url} alt={item.label} loading="lazy" />
								<span>{item.label}</span>
								<small>{item.description}</small>
							</button>
						))}
					</div>
				) : (
					<input
						value={customImage}
						onChange={(event) => setCustomImage(event.target.value)}
						placeholder="https:// から始まる画像 URL"
					/>
				)}
			</fieldset>

			{error && <p className="error">{error}</p>}

			<button type="submit" className="primary" disabled={isDisabled}>
				{state === "submitting"
					? "ミント中..."
					: account
						? "NFT をミント"
						: "ウォレットを接続"}
			</button>
		</form>
	);
};

export default MintForm;
