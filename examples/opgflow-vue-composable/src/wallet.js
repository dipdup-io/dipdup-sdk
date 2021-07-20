import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

export default function useBeacon() {
    const Tezos = new TezosToolkit("https://rpc.tzkt.io/florencenobanet/");
    const wallet = new BeaconWallet({ name: "OPGFlow Demo" });

    Tezos.setWalletProvider(wallet);

    const connect = async function() {
        const activeAccount = await wallet.client.getActiveAccount();
        if (!activeAccount) {
            const permissions = await wallet.client.requestPermissions({ network: { type: "florencenet" } });
            console.log("New connection:", permissions.address);
            return permissions.address;
        } else {
            return activeAccount.address;
        }
    };

    return {
        wallet,
        connect,
        Tezos
    }
}