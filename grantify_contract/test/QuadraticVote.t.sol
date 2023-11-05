// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "../lib/forge-std/src/Test.sol";
import "../src/QuadraticVote.sol";

contract QVVTest is Test {
    QuadraticVote vote;

    function setUp() public {
        address sc_owner_addresse = ''; 
        vote = new QuadraticVote(sc_owner_addresse);
    }

    function testCreateProposal() public {
        uint id = vote.createProposal("Test Proposal", 10);
        assertEq(id, 1, "Proposal ID should be 1");
        
    }

    // TODO : add more tests
}
