import { IExecDataProtector, getWeb3Provider } from "@iexec/dataprotector";

const { PRIVATE_KEY } = process.env; 
// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// instantiate
const dataProtector = new IExecDataProtector(web3Provider);