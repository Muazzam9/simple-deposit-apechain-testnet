# Simple APE Deposit Contract

This project demonstrates a basic deposit contract for APE tokens on the APE testnet (Caldera).

## Prerequisites

1. Install MetaMask
2. Get some test APE tokens

### Setting up APE Testnet in MetaMask

1. Open MetaMask
2. Add new network with these details:
   - Network Name: ApeChain Curtis Testnet
   - RPC URL: https://curtis-rpc.apemove.com/
   - Chain ID: 33111
   - Currency Symbol: APE
   - Block Explorer URL: https://curtis.explorer.caldera.xyz/

### Getting Test APE

1. Visit the APE faucet: https://curtis.hub.caldera.xyz/
2. Connect your wallet
3. Request test APE (you'll receive 1 APE)

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/Muazzam9/simple-deposit-apechain-testnet.git
cd simple-deposit
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PRIVATE_KEY=your_private_key
APE_TESTNET_RPC_URL=https://curtis.rpc.caldera.xyz/http
APE_SCAN_API_KEY=your_ape_scan_api_key
```

## Deployment

1. Compile the contracts:

```bash
npx hardhat compile
```

2. Deploy to APE testnet:

```bash
npx hardhat run scripts/deploy-deposit.ts --network apeTestnet
```

3. Verify the contract on APEscan:

```bash
npx hardhat verify --network apeTestnet DEPLOYED_CONTRACT_ADDRESS
```

## Contract Interaction

### Using APEscan

1. Go to https://curtis.explorer.caldera.xyz/
2. Search for your contract address
3. Click on "Contract" tab
4. Click "Write Contract" to interact

### Deposit APE

1. Find the `deposit()` function
2. In the "Value" field (at the top), enter amount (e.g., 0.01)
3. Click "Write"

### Withdraw APE

1. Find the `withdraw()` function
2. Enter amount in wei (e.g., for 0.01 APE: 10000000000000000)
3. Click "Write"

### Check Balances

- Use `getBalance()` to see your deposit
- Use `getContractBalance()` to see total contract balance

## Common Issues & Solutions

1. **Transaction Failed**

   - Make sure you have enough APE for gas
   - Check that you're on APE testnet
   - Verify input amounts

2. **Verification Failed**
   - Double check the contract address
   - Ensure compiler version matches
   - Wait a few blocks after deployment

## Contract Details

The SimpleDeposit contract allows users to:

- Deposit APE tokens
- Withdraw their deposited APE
- Check their balance
- View total contract balance

## License

MIT
# simple-deposit-apechain-testnet
