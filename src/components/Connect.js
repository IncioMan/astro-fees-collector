import { Button } from "@chakra-ui/react";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import React, { useEffect } from "react";
export default function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();

  useEffect(()=>{
    console.log(JSON.stringify({ status, network, wallets }, null, 2))
  },[status])

  return (
    <>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          <Button
            key={"connect-" + availableConnectTypes.EXTENSION}
            onClick={() => connect(availableConnectTypes.EXTENSION)}
          >
            Connect {availableConnectTypes.EXTENSION}
          </Button>
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <Button onClick={() => disconnect()}>Disconnect</Button>
      )}
    </>
  );
}