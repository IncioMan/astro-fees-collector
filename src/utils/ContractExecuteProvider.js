// required modules
import {getAsset} from './AssetProvider'
const {MsgExecuteContract} = require('@terra-money/terra.js');


const getInfoAsset = (asset)=>{
    if(asset.type === "native_token"){
        return {
            "info": {
                "native_token": {
                    "denom": asset.name
                }
            }
        }
    }
    if(asset.type === "token"){
        return {
            "info": {
                "token": {
                    "contract_addr": asset.name
                }
            }
        }
    }
}

export const collectFees = async (contract_address, pool, wallet, lcd, handleTxHash) => {
    console.log(pool)
    const assets = pool.assets
    // maker collect function
    const asset1 = getInfoAsset(assets[0])
    const asset2 = getInfoAsset(assets[1])
    const execute = new MsgExecuteContract(
        wallet.walletAddress, // sender
        contract_address, // contract account address
        {
            "collect": {
                "assets": [
                asset1, asset2
                ],
            }
        }, // handle msg
    );
    const start = async function () {
        const executeTx = await wallet.post({
            msgs: [execute]
        })
        .then(tx => {
            console.log(tx)
            handleTxHash(tx.result.txhash)
        })
    }
    await start();
}