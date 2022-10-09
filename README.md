# ETH Bogota - Chain Statement 🏦

### Get your cross chain crypto assets statement without revealing your identity 🌻

We introduce a cross chain bank statement platform: **Chain Statement**, which allows users to generate their crypto asset bank statement from multiple chains, without revealing their identity on-chain.

## What Chain Statement Offer? 🪙

Unlike ordinary crypto dashboard in web3 or traditional bank statement in web2, **Chain Statement** offers the following features that will improve **privacy** and **smooth-onboarding-experience in web3**.

- Proof of Identity using zero knowledge 😊
- Decentralized Storage of Account Information 🌐
- Low-cost and lightning-fast Ethereum L2 blockchain ⚡
- User-friendly decentralised Ethereum scaling platform 💸

### Proof of Identity using zero knowledge 😊

It is easy to get the transactions data based on address, but how can you prove that this address belongs to you?
By using the zero knowledge features from [semaphore](https://semaphore.appliedzkp.org/), we allow user to generate unique identity which can be used to proof their identity and fetch their own chain statement.  
Users will generate their own identity based on

1. User Name
2. Birth Date
3. Passport Number
4. Password

Once the identity commitment is recorded on semaphore protocol, user only need to insert their information again and our platform will automatically generate proof for user. Once they are verified, they can download chain statement immediately.

### Decentralized Storage of Account Information 🌐

We are aware that censorship is a big problem in traditional financial services. Thus, we solve this problem by storing our user's chain statement on [IPFS](https://ipfs.tech/), in a form of PDF which consists of:
User can receive their chain statement which consits of:

1. Balance of each assets from multiple chains and addresses
2. User's Name
3. User's Passport Number

### Low-cost and lightning-fast Ethereum L2 blockchain ⚡

We don't want our users to pay high gas fee for just a simple generating chain statement request. Hence, our smart contract is deployed on [Optimism](https://www.optimism.io/), which is a Optimisitic-Rollup L2 blockchain that has low-cost and lightning-fast transaction experience.

### User-friendly decentralised Ethereum scaling platform 💸

User-friendly is also another main consideration for us when we're developing **Chain Statement**. With cheap transaction fee, strong community support and user-friendly characteristics, we deployed our smart contract to [Polygon](https://polygon.technology/).

## UI 💜

1. Landing Page  
   ![LandingPage](./public/static/LandingPage.jpg)
2. Create Identity  
   ![CreateIdentity](./public/static/CreateIdentity.jpg)
3. Claim Chain Statement  
   ![ClaimStatement](./public/static/ClaimStatement.jpg)
4. Chain Statement  
   ![ChainStatement](./public/static/SampleChainStatement.jpg)

## References

1. FrontEnd & Overview: https://github.com/Chain-Statements/frontend
2. BackEnd: https://github.com/Chain-Statements/backend/blob/master/README.md
3. Smart Contract: https://github.com/Chain-Statements/contracts/blob/master/README.md

## Start building

Install packages: `npm install`

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.`
