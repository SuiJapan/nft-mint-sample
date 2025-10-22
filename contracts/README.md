# NFTコントラクトのサンプルコード

## 動かし方

- ビルド

  ```bash
  sui move build
  ```

  以下のようになればOK!

  ```bash
  [note] Dependencies on Bridge, MoveStdlib, Sui, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from Move.toml.
  FETCHING GIT DEPENDENCY https://github.com/MystenLabs/sui
  Cloning into '/root/.move/https___github_com_MystenLabs_sui_main'...
  remote: Enumerating objects: 33801, done.
  remote: Counting objects: 100% (23/23), done.
  remote: Compressing objects: 100% (23/23), done.
  remote: Total 33801 (delta 0), reused 1 (delta 0), pack-reused 33778 (from 2)
  Receiving objects: 100% (33801/33801), 17.89 MiB | 23.49 MiB/s, done.
  Resolving deltas: 100% (3465/3465), done.
  INCLUDING DEPENDENCY Sui
  INCLUDING DEPENDENCY MoveStdlib
  BUILDING nft_sample
  ```

- デプロイ

  ```bash
  sui client publish --gas-budget 100000000
  ```

  以下のようになればOK!

  ```bash
  UPDATING GIT DEPENDENCY https://github.com/MystenLabs/sui
  INCLUDING DEPENDENCY Sui
  INCLUDING DEPENDENCY MoveStdlib
  BUILDING nft_sample
  Skipping dependency verification
  Transaction Digest: CBynC8J8hzNJuU8hFxpRCn4HfBrZzF1RbcGfb4PHi3k8
  ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
  │ Transaction Data                                                                                             │
  ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                   │
  │ Gas Owner: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                │
  │ Gas Budget: 100000000 MIST                                                                                   │
  │ Gas Price: 1000 MIST                                                                                         │
  │ Gas Payment:                                                                                                 │
  │  ┌──                                                                                                         │
  │  │ ID: 0x87f0feb42244660701759fccc7c3d287b04db0e1eaa2abde0a3bfef7de085a1b                                    │
  │  │ Version: 349180263                                                                                        │
  │  │ Digest: CHDsh5Hu9kafuiEN4vAtgJNE4o9PdCN5aWmPnC26aeRv                                                      │
  │  └──                                                                                                         │
  │                                                                                                              │
  │ Transaction Kind: Programmable                                                                               │
  │ ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │
  │ │ Input Objects                                                                                            │ │
  │ ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
  │ │ 0   Pure Arg: Type: address, Value: "0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b" │ │
  │ ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯ │
  │ ╭─────────────────────────────────────────────────────────────────────────╮                                  │
  │ │ Commands                                                                │                                  │
  │ ├─────────────────────────────────────────────────────────────────────────┤                                  │
  │ │ 0  Publish:                                                             │                                  │
  │ │  ┌                                                                      │                                  │
  │ │  │ Dependencies:                                                        │                                  │
  │ │  │   0x0000000000000000000000000000000000000000000000000000000000000001 │                                  │
  │ │  │   0x0000000000000000000000000000000000000000000000000000000000000002 │                                  │
  │ │  └                                                                      │                                  │
  │ │                                                                         │                                  │
  │ │ 1  TransferObjects:                                                     │                                  │
  │ │  ┌                                                                      │                                  │
  │ │  │ Arguments:                                                           │                                  │
  │ │  │   Result 0                                                           │                                  │
  │ │  │ Address: Input  0                                                    │                                  │
  │ │  └                                                                      │                                  │
  │ ╰─────────────────────────────────────────────────────────────────────────╯                                  │
  │                                                                                                              │
  │ Signatures:                                                                                                  │
  │    b2MjAChfCx4R8Jcv0+dcLKcB6/twCxzlFEZZlsNxQvVmPCYGPLPHMZEfOEwxF/VkoQs82iyotcZ+KFus2k+4BA==                  │
  │                                                                                                              │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
  ╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
  │ Transaction Effects                                                                               │
  ├───────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ Digest: CBynC8J8hzNJuU8hFxpRCn4HfBrZzF1RbcGfb4PHi3k8                                              │
  │ Status: Success                                                                                   │
  │ Executed Epoch: 895                                                                               │
  │                                                                                                   │
  │ Created Objects:                                                                                  │
  │  ┌──                                                                                              │
  │  │ ID: 0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2                         │
  │  │ Owner: Immutable                                                                               │
  │  │ Version: 1                                                                                     │
  │  │ Digest: 2T7rAsRoxkUUf2rkmWAXy1be7PBgiPsKHVJvhG9uKWxN                                           │
  │  └──                                                                                              │
  │  ┌──                                                                                              │
  │  │ ID: 0x6c4df484fdf1988e83bba9ba1a094f185369683cfd8b96498818a428fc7283cd                         │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )  │
  │  │ Version: 349180264                                                                             │
  │  │ Digest: DyofprUeZJkLAGAZTtHoLFfhsfAG5HFeLYh45HjCvRSm                                           │
  │  └──                                                                                              │
  │  ┌──                                                                                              │
  │  │ ID: 0xd427efa03508e4dcd1bc5fda241d2cdc012f7fbbb42ac5ca5e9447c3da174048                         │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )  │
  │  │ Version: 349180264                                                                             │
  │  │ Digest: 4zcZp9H85yFVgCxjvrNCnRBtGrRdjKUwFHyLWKJ3RY8g                                           │
  │  └──                                                                                              │
  │  ┌──                                                                                              │
  │  │ ID: 0xf268634698520a661778a22d4eee977117403e63f3e8bc2c5fd4eb218dec4872                         │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )  │
  │  │ Version: 349180264                                                                             │
  │  │ Digest: C99ztwfooozTjWBbovfKAGk7rrJLSLYVh37Mhg2CErFT                                           │
  │  └──                                                                                              │
  │ Mutated Objects:                                                                                  │
  │  ┌──                                                                                              │
  │  │ ID: 0x87f0feb42244660701759fccc7c3d287b04db0e1eaa2abde0a3bfef7de085a1b                         │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )  │
  │  │ Version: 349180264                                                                             │
  │  │ Digest: 3pFEejpr6uNAqeCPRStgbxwQjKxA7F4ieQjqLNGQ7TDa                                           │
  │  └──                                                                                              │
  │ Gas Object:                                                                                       │
  │  ┌──                                                                                              │
  │  │ ID: 0x87f0feb42244660701759fccc7c3d287b04db0e1eaa2abde0a3bfef7de085a1b                         │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )  │
  │  │ Version: 349180264                                                                             │
  │  │ Digest: 3pFEejpr6uNAqeCPRStgbxwQjKxA7F4ieQjqLNGQ7TDa                                           │
  │  └──                                                                                              │
  │ Gas Cost Summary:                                                                                 │
  │    Storage Cost: 18346400 MIST                                                                    │
  │    Computation Cost: 1000000 MIST                                                                 │
  │    Storage Rebate: 978120 MIST                                                                    │
  │    Non-refundable Storage Fee: 9880 MIST                                                          │
  │                                                                                                   │
  │ Transaction Dependencies:                                                                         │
  │    q1xnh2ax83LcU4RFdFJyEBy94JXGEpchSsiSe5yhHKv                                                    │
  │    2KEeApqRXkCMTYuN1caxxFNngaGSbBpAFxKwJoGopfZT                                                   │
  │    Dd9pn1zFcSJjinxQewFd2gQdR4XKsHxFioD5MYnwLZQz                                                   │
  ╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
  ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
  │ Transaction Block Events                                                                                                         │
  ├──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │  ┌──                                                                                                                             │
  │  │ EventID: CBynC8J8hzNJuU8hFxpRCn4HfBrZzF1RbcGfb4PHi3k8:0                                                                       │
  │  │ PackageID: 0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2                                                 │
  │  │ Transaction Module: nft                                                                                                       │
  │  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                                    │
  │  │ EventType: 0x2::display::DisplayCreated<0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2::nft::WorkshopNFT> │
  │  │ ParsedJSON:                                                                                                                   │
  │  │   ┌────┬────────────────────────────────────────────────────────────────────┐                                                 │
  │  │   │ id │ 0xf268634698520a661778a22d4eee977117403e63f3e8bc2c5fd4eb218dec4872 │                                                 │
  │  │   └────┴────────────────────────────────────────────────────────────────────┘                                                 │
  │  └──                                                                                                                             │
  │  ┌──                                                                                                                             │
  │  │ EventID: CBynC8J8hzNJuU8hFxpRCn4HfBrZzF1RbcGfb4PHi3k8:1                                                                       │
  │  │ PackageID: 0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2                                                 │
  │  │ Transaction Module: nft                                                                                                       │
  │  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                                    │
  │  │ EventType: 0x2::display::VersionUpdated<0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2::nft::WorkshopNFT> │
  │  │ ParsedJSON:                                                                                                                   │
  │  │   ┌─────────┬──────────┬───────┬─────────────────────────────────────────────────┐                                            │
  │  │   │ fields  │ contents │ key   │ name                                            │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ value │ {name}                                          │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ key   │ description                                     │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ value │ {description}                                   │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ key   │ image_url                                       │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ value │ {image_url}                                     │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ key   │ link                                            │                                            │
  │  │   │         │          ├───────┼─────────────────────────────────────────────────┤                                            │
  │  │   │         │          │ value │ {link}                                          │                                            │
  │  │   ├─────────┼──────────┴───────┴─────────────────────────────────────────────────┤                                            │
  │  │   │ id      │ 0xf268634698520a661778a22d4eee977117403e63f3e8bc2c5fd4eb218dec4872 │                                            │
  │  │   ├─────────┼────────────────────────────────────────────────────────────────────┤                                            │
  │  │   │ version │ 1                                                                  │                                            │
  │  │   └─────────┴────────────────────────────────────────────────────────────────────┘                                            │
  │  └──                                                                                                                             │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
  ╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
  │ Object Changes                                                                                                              │
  ├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ Created Objects:                                                                                                            │
  │  ┌──                                                                                                                        │
  │  │ ObjectID: 0x6c4df484fdf1988e83bba9ba1a094f185369683cfd8b96498818a428fc7283cd                                             │
  │  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                               │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )                            │
  │  │ ObjectType: 0x2::package::UpgradeCap                                                                                     │
  │  │ Version: 349180264                                                                                                       │
  │  │ Digest: DyofprUeZJkLAGAZTtHoLFfhsfAG5HFeLYh45HjCvRSm                                                                     │
  │  └──                                                                                                                        │
  │  ┌──                                                                                                                        │
  │  │ ObjectID: 0xd427efa03508e4dcd1bc5fda241d2cdc012f7fbbb42ac5ca5e9447c3da174048                                             │
  │  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                               │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )                            │
  │  │ ObjectType: 0x2::package::Publisher                                                                                      │
  │  │ Version: 349180264                                                                                                       │
  │  │ Digest: 4zcZp9H85yFVgCxjvrNCnRBtGrRdjKUwFHyLWKJ3RY8g                                                                     │
  │  └──                                                                                                                        │
  │  ┌──                                                                                                                        │
  │  │ ObjectID: 0xf268634698520a661778a22d4eee977117403e63f3e8bc2c5fd4eb218dec4872                                             │
  │  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                               │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )                            │
  │  │ ObjectType: 0x2::display::Display<0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2::nft::WorkshopNFT>  │
  │  │ Version: 349180264                                                                                                       │
  │  │ Digest: C99ztwfooozTjWBbovfKAGk7rrJLSLYVh37Mhg2CErFT                                                                     │
  │  └──                                                                                                                        │
  │ Mutated Objects:                                                                                                            │
  │  ┌──                                                                                                                        │
  │  │ ObjectID: 0x87f0feb42244660701759fccc7c3d287b04db0e1eaa2abde0a3bfef7de085a1b                                             │
  │  │ Sender: 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b                                               │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )                            │
  │  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                                               │
  │  │ Version: 349180264                                                                                                       │
  │  │ Digest: 3pFEejpr6uNAqeCPRStgbxwQjKxA7F4ieQjqLNGQ7TDa                                                                     │
  │  └──                                                                                                                        │
  │ Published Objects:                                                                                                          │
  │  ┌──                                                                                                                        │
  │  │ PackageID: 0x5c8bc2ae8aeaca5801736b57f948b337429301f10fa78f9a79707bc7523287d2                                            │
  │  │ Version: 1                                                                                                               │
  │  │ Digest: 2T7rAsRoxkUUf2rkmWAXy1be7PBgiPsKHVJvhG9uKWxN                                                                     │
  │  │ Modules: nft                                                                                                             │
  │  └──                                                                                                                        │
  ╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
  ╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
  │ Balance Changes                                                                                   │
  ├───────────────────────────────────────────────────────────────────────────────────────────────────┤
  │  ┌──                                                                                              │
  │  │ Owner: Account Address ( 0x325dc55425c0e97520b7aa3392095899a56d5fb3deeb5bdad21ec87f491b412b )  │
  │  │ CoinType: 0x2::sui::SUI                                                                        │
  │  │ Amount: -18368280                                                                              │
  │  └──                                                                                              │
  ╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
  ```