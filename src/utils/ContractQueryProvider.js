// required modules
const { LCDClient} = require('@terra-money/terra.js');
// connecting to terra blockchain
const terra = new LCDClient({
    URL: 'https://pisco-lcd.terra.dev',
    chainID: 'pisco-1',
});

export const queryBalance = (contract_address) => {
    // maker testnet address
    const query = terra.wasm.contractQuery(
        contract_address,
        {
            "balances": {
                "assets": [
                    {
                        "token": {
                            "contract_addr": "terra167dsqkh2alurx997wmycw9ydkyu54gyswe3ygmrs4lwume3vmwks8ruqnv"
                        }
                    },
                    {
                        "token": {
                            "contract_addr": "terra1xqtstvlwcpz3kpcpw6vqh2grstw34wcezws5pawll95uuysu0hnqk6muds"
                        }
                    }
                    ],
            }
        } // query msg
    ).then(result => { console.log(result) })
}