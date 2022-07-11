// required modules
import {pools} from '../data/pools';
const {MsgExecuteContract} = require('@terra-money/terra.js');


const getAsset = (asset)=>{
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

export const collectFees = async (pool, wallet, lcd) => {
    console.log(pool)
    const assets = pool.assets
    const contract_address = 'terra146ffs60x8seza3cq9a447mhw0zqeylkj37ye4uj7rl2uwhvgq89sts2ess'
    // maker collect function
    const asset1 = getAsset(assets[0])
    const asset2 = getAsset(assets[1])
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
        const executeTx = await wallet.sign({
            msgs: [execute]
        })
        .then(tx => {
            console.log(tx.result);
            return lcd.tx.broadcastSync(tx.result);
        })
        .then(result => {
            console.log(result.txhash)
        });
    }
    await start();
}