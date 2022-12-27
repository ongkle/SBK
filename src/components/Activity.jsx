import React, { useState, useEffect } from "react";

function NFTTransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      // Replace this with your NFT contract address
      const contractAddress = "0x1234567890";

      // Replace this with your Web3 provider
    //   const provider = new Web3.providers.HttpProvider(
    //     "https://rinkeby.infura.io/v3/YOUR_API_KEY"
    //   );
    //   const web3 = new Web3(provider);

      // Get the ABI for your NFT contract
      const contractABI = [
        {
          constant: true,
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        // Other contract ABI goes here
      ];

      // Create an instance of the contract
    //   const contract = new web3.eth.Contract(contractABI, contractAddress);

      // Call the "getPastEvents" method of the contract to get the transaction history
    //   const events = await contract.getPastEvents("Transfer", { fromBlock: 0 });

      // Set the transactions state with the retrieved events
    //   setTransactions(events);
    }

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>NFT Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Token ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transactionHash}>
              <td>{transaction.transactionHash}</td>
              <td>{transaction.returnValues.from}</td>
              <td>{transaction.returnValues.to}</td>
              <td>{transaction.returnValues.tokenId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NFTTransactionHistory;
