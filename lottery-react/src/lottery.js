import web3 from "./web3";

const address = <YOUR_WALLET_ADDRESS>;
const abi = <YOUR_CONTRACT_ABI>

export default new web3.eth.Contract(abi, address);
