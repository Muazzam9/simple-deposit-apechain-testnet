// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract SimpleDeposit {
    // Mapping of address to deposit amount
    mapping(address => uint256) public deposits;
    
    // Events
    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    
    // Deposit APE
    function deposit() public payable {
        require(msg.value > 0, "Must deposit some APE");
        deposits[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }
    
    // Withdraw APE
    function withdraw(uint256 amount) public {
        require(deposits[msg.sender] >= amount, "Insufficient balance");
        
        deposits[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        
        emit Withdrawn(msg.sender, amount);
    }
    
    // Get balance
    function getBalance() public view returns (uint256) {
        return deposits[msg.sender];
    }
    
    // Get contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}