// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.8.0;

import "../lib/forge-std/src/Script.sol";
import "../src/QuadraticVote.sol";


contract QVVDeploy is Script {
    function run() public {
        address sc_owner_addresse = ''; 
        QuadraticVote vote = new QuadraticVote(sc_owner_addresse);
    }

    // TODO : add more Script functions
}
