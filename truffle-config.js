var HDWalletProvider = require('truffle-hdwallet-provider')

var mnemonic = 'episode illegal barrel twist glare wrap certain crater beauty lens still vapor'

module.exports = {
    
    networks: {
        development: {
            host: '127.0.0.1',
            port: 9545,
            network_id: '*'
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/1af798f096dd4e4aa2043c72bda256bc')
            },
            network_id: '4',
            gas: 4500000,
            gasPrice: 10000000000
        }
    }
};