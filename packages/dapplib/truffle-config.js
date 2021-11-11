require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strike crouch place arrow inflict praise army gaze'; 
let testAccounts = [
"0x4fc450bf18e568c5bf53f5d4f1bcc2a8e2ed8d06e5ff9d37b2ab90f9ee79ac6c",
"0x5d0ef1a9459ccd515b40bb18ca399fa74b350e287f72daf90deca28165312293",
"0xa7f14187f9de6a0651c2bb89586c09411feb8e517154c0bbd0988907b5abad87",
"0x61af9021765233560412191e60f0e3a747779093a6cbfa66a38ad3a7b98aaf62",
"0xb8817de4fdcbf9f1950dbaf4507696f156a2c7156179fd13ed1ebf6686c41b77",
"0x424c6594c7f156dd0d1bbd30c1371516126254aebdec8d16802d01f5cb378758",
"0x0002453114e1f91ed5ed60f6956d4ee50659be19def4469007cd941c03679240",
"0xc516a04cec8ed7d166a2e42bb9780440c44954bf0becc1496237706b4b3a42c3",
"0xaff9f7066af73471d87f22b9efda53a13c2f125a3bc3daf28efdeeca69c5446e",
"0x4b95fdaf42aab7a3351216c5e4697d77d84768074813a2089f3f40f70fb6a8f7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

