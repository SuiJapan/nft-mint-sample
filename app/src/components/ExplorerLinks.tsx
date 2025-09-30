type ExplorerLinksProps = {
  digest: string;
  objectId: string | null;
};

const ExplorerLinks = ({ digest, objectId }: ExplorerLinksProps) => {
  return (
    <div className="explorer-links">
      <h3>Sui Vision で確認</h3>
      <p>
        <a href="https://suivision.xyz/?network=testnet" target="_blank" rel="noreferrer">
          Sui Vision (Testnet)
        </a>
        を開き、下記の ID を検索欄に貼り付けてください。
      </p>
      <ul>
        <li>Tx Digest: <span className="mono">{digest}</span></li>
        {objectId ? <li>Object ID: <span className="mono">{objectId}</span></li> : null}
      </ul>
    </div>
  );
};

export default ExplorerLinks;
