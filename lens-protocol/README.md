Local copy of github/lens-protocol, contains all functionality of lens protocol and our smart contracts.


## Deploy Lens protocol on local fork

- open 2 terminals
- in each, navigate to lens-protocol/core
- in the first, enter:
  ```bash
  npm install 
  npm run compile
  npx hardhat node
  ```
- in the second, enter:
  ```bash
  npm run full-deploy-local
  ```

That's similar to https://docs.lens.xyz/docs/deploying-the-protocol

