// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract Yearbook {

    event newEntryAdded(bytes32 entryId, address memoryCreator, uint256 eventTimestamp, string memoryCID);

    struct entryInfo {
      bytes32 entryId;
      string memoryCID;
      address memoryOwner;
      address[] friends;
      uint256 eventTimestamp;
    }

    mapping(bytes32 => entryInfo) public idToEntry;

    function createNewMemory(
        string calldata memoryCID,
        uint eventTimestamp,
        address[] memory friendsList
    ) external returns (address) {
        //hash the msg.sender and the eventtimestamp
        bytes32 entryId = keccak256(
            abi.encodePacked(
                msg.sender,
                eventTimestamp
            )
        );

        idToEntry[entryId] = entryInfo(entryId, memoryCID, msg.sender, friendsList, eventTimestamp);
        emit newEntryAdded(entryId, msg.sender, eventTimestamp, memoryCID);
        return msg.sender; //return the creator of this memory's address so we can use it in lit protocol to gate it
    }


}
