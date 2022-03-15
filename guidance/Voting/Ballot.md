# Voting Contract

## There is a chairperson who can give right to the voters(simple people) to vote

## some voters(simple people) votes one person(P1) and others vote another person(P2)

## P1 votes to one proposal(Boat) and P2 votes to another proposal(Paddy)

**_Note : There may remain more than one proposals and person(P1,P2......)_**

**_Rules_**

1. One Person = > 1 vote
2. That person can not vote who is being voted
3. Only chairperson can give vote right
4. You have to specify Proposal names while deploying
5. chairperson can vote
6. is voted person votes to any proposal then that proposal will get all the vote(weight) or if he/she votes to any other person then that person will get all the vote(weight)

# Guide

In Voter struct

1. weight 1 means you can vote now
2. weight more than 1 means some one voted you
3. delegate is who are you voting to
4. vote refers Proposal id
5. that person call
6. s vote function who is voted by others

In delegate function

1. if that person you are voting has already voted add the vote to that proposals voteCount directly which proposal your delegated person is voting
2. if that person you are voting has not already voted add the vote to his weight
