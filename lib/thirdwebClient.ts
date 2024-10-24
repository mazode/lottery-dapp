// lib/thirdwebClient.ts
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Create the client with your secretKey if in a server environment
export const client = createThirdwebClient({
  secretKey: "YOUR_SECRET_KEY",  // Replace with your actual secret key
});

// Connect to your contract
export const contract = getContract({
  client,
  chain: defineChain(11155111),  // Replace with the appropriate chain ID
  address: "0x9172be676b6Fa69C08E385C90B5CA2260DA31599", // Your contract address
});
