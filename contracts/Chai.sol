// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract chai{
    struct Memo{
        string name;
        string message;
        uint256 timestamp;
       address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner=payable(msg.sender);
    }  

    function buyChai(string )
}