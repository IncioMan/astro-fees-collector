export const queryBalance = (lcd, contract_address, assets) => {
    console.log(assets)
    return lcd.wasm.contractQuery(
        contract_address,
        {
            "balances": {
                "assets": assets,
            }
        } // query msg
    )
}