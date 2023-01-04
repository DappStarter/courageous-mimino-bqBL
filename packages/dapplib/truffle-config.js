require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant hope enter fog switch'; 
let testAccounts = [
"0xf1a3cca36bf06cd79ef0ffc09eb31536d1aed446cc9dc51d008cfb4129727b68",
"0x5b818ab3ffc380c73da44ba28edade29896d50ce70880059bc6ef2c6fe6ffc2b",
"0x8529463fb5d45ce54bbcfed2da70042f2f4e494affca108dc6c83e292492192d",
"0xbeadb79e698db80747a0957481911057bbe87bd805125805740ad1e1466e71c3",
"0x40c09dee0efbe41a645a9893ad741df7d3df5ca010d65f1361420ff04f3fe3f4",
"0x75f6ad7e28c8f3daa769e58b66985d897d20afc3b7df1fdacd0d121b82576596",
"0x360baabf5f9bf9515a27bfec3d0f7d5d1b95eef581bd385271c6b54f1f92e4ee",
"0x164a7516b6bb6449ca9e9907dc6319ebc6abf13d9db993397a926d2a4a4e4833",
"0x5450093080b3a9c94ee8a17d5f949054173a977795920b451504db91a58b0881",
"0x6ad6e1b6c9a517e2f93da5969e4006b170fcf6a4a4f2daaf33f7476563b6659f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

