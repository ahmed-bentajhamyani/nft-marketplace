// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract MetaMessage {
    string private message ;

    constructor(string memory _msg){
        message = _msg;
    }

    function getMessage() public view returns(string memory){
        return message;
    }

    function changeMessage(string memory newMsg) public {
        message = newMsg;
    }

}