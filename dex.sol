// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Dex {
    mapping(address => mapping(uint => uint)) public balances;

    function deposit(uint _amount, uint _token) external {
        balances[msg.sender][_token] += _amount;
    }

    function withdraw(uint _amount, uint _token) external {
        require(balances[msg.sender][_token] >= _amount, "Insufficient balance");
        balances[msg.sender][_token] -= _amount;
    }
}

