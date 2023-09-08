# Overview

Repo for Lens Carbon based on ETHPrague 2023 Hackathon submission

Project name: **Lens carbon**

Tagline: **Lens collect partial carbon retirements**

## Summary
- A publisher of a publication can set partial carbon retirement of their collection fee. I.e. a fraction of their income is directly sent to carbon retirements with their specified details.
- A collector of a publication collects the same way as usual. They see the fee as well as the amount for retirement and related details. Publications with carbon retirements can be made more visible to further incentivise collection.
- The profile page of a user shows their total amount of retired carbon through collections of their publications by others as well as through their own collections.
- A leadership dashboard shows a ranking of users based on retired carbon.
- Where applicable, carbon amounts are clickable links that lead to a dashboard that shows the trace of each carbon retirement all the way to the carbon certificates and their details.

## Features
### Publish a publication
- set collect fee and currency as usual
- choose "retire carbon" as additional collection function
- specify fraction of fee, carbon token and optionally more details

<img src="wireframes/publish.png?raw=true" width=70%>

### Collect a publication
- see collect fee, retirement amount, carbon token and details
- collect as usual without any additional interaction
- user only needs to hold enough currency. Swap to carbon token is part of the collect transaction.

<img src="wireframes/collect.png?raw=true" width=70%>

### Profile view
- total t carbon retired by others via own publications
- total t carbon retired by collecting publications from others

<img src="wireframes/profile.png?raw=true" width=40%>


### Leadership dashboard
- ranking of users based on either metric from profile view

<img src="wireframes/ranking.png?raw=true" width=30%>


### Future features
- enable carbon retirements for sponsored publications or collects with quadratic funding etc.

<img src="wireframes/sponsored_retirements.png?raw=true" width=70%>

## Implementation

- Set collection rule: choose "carbon percentage" instead of everything
- Collection workflow: make visible that collection will retire carbon

# Repository structure

The repo consists of different more or less dependent folders. Each one contains an own readme.

- **hardhat**:
- **lens-app**: A separate frontend from the hackathon
- **lens-protocol**: Local copy of github/lens-protocol, contains all functionality of lens protocol and our smart contracts
- **lenster-main**: Local copy of github/lenster, frontend of Lenster with our modifications
- **utils**: Folder with helper stuff

# Deployments
## Lenster app local deployment (Frontend)
See readme in lenster-main

## Deploy Lens protocol on local fork (Smart Contracts)
See readme in lens-protocol
