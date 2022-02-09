# Introduction

This is a sample of a discord chat bot that was made collaboratively.

# My Contributions 

- In utils file 
  - I created `boolVC.js` to check if author or user is in the same VoiceChat as the bot
  - also created `boolDeaf.js` to check if the user is deafened in the VoiceChat

- In commands 
  - I added multiple **new music features** to the `okPlayMusic.js` file(which uses modules from `botFunctions/musicFunctions`)
    - this includes handling edge cases such as situations where the user is not in the VC but tries to excute a command
    - a democratic skip function that requires a majority vote to skip a song using Queue
    - **created random song function** which uses `billboard-hot-100` npm package to get a song from the most recent billboard charts
  - I fixed bugs in `chatBot.js`, `help.js`, `kanye.js`
  - I **solved a timeout API error** in `insult.js` which uses `./botFunctions/insult.js`

- In botFunctions
  - created and modified the files which were then used for bot commands  

### This was part of a Open Source Competition where I made contributions to multiple projects and secured second place
### https://www.linkedin.com/posts/aasf-iiitmg_github-opensource-gsoc-activity-6861640955703934976-VX43


### You can view the entire repository on https://github.com/hitenSharm/Discord-Meme-and-Music-Bot/tree/development
