export const getAsset = (assetName, assets)=>{
    const asset = assets[assetName]
    if(asset.type === "native_token"){
        return {
            "native_token": {
                "denom": assetName
            }
        }
    }
    if(asset.type === "token"){
        return {
            "token": {
                "contract_addr": assetName
            }
        }
    }
}