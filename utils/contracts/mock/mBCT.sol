// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import '@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

/// @notice A mock of a carbon token for testnet 
/// Instead of LP swaps, mint can be used
/// Instead of actual retirement, burn is used
contract mockBCT is
    ERC20Upgradeable
{
    using SafeERC20Upgradeable for IERC20Upgradeable;

    uint256 price;

    // ----------------------------------------
    //      Events
    // ----------------------------------------

    event Retired(address account, address erc20, uint256 amount);

    constructor(_price) {
        setPrice(_price);
    }

    /// @notice mint tokens to any account
    /// @param _account account that will be minted to
    /// @param _amount amount of tokens that will be minted
    function mint(address _account, uint256 _amount) external {
        _mint(_account, _amount);
    }

    /// @notice set fictional price
    /// @param _price price in wmatic
    function setPrice(uint256 _price) external {
        price = _price;
    }

    /// @notice retire tokens by burning
    /// @param _account account from which it will be burned
    /// @param _amount amount of tokens that will be minted
    function retire(address _account, uint256 _amount) external {
        //TODO: check how allowance can work here
        require(msg.sender = _account);
        _burn(_account, _amount);
    }

}