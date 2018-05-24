# overwatchleague

> A Node.JS library for accessing and using the Overwatch League API

## Install

Install `overwatchleague`

With yarn:

```bash
$ yarn install overwatchleague
```

With NPM:
```bash
$ npm install overwatchleague --save
```

## Usage

```js
const OWL = require('overwatchleague');

OWL.findTeamName(4410).then(response => {
    console.log(response.data);
});
```

Output: `London Spitfire`

## Methods

* `getInfo()` - Retrieve information about the Overwatch League
* `getRankings()` - Retrieve current rankings
* `getSchedule()` - Retrieve current schedule, including past matches
* `getMatches()` - Retrieve all matches
* `getMatch(matchid)` - Retrieve a specific match
* `getTeams()` - Retrieve all teams
* `getTeam(teamid)` - Retrieve a specific team
* `getNews()` - Retrieve all news items
* `getNewsPost(postid)` - Retrieve a specific news item
* `getLiveMatch()` - Retrieve live data for the current match
* `getStreams()` - Retrieve links to Overwatch League livestreams
* `getMaps()` - Retrieve a list of maps
* `getVideos()` - Retrieve a list of VODs for past matches
* `getStandings()` - Retrieve current standings
* `findTeamID(teamname)` - Returns the ID for the team name provided
* `findTeamName(teamid)` - Returns the name for the team ID provided
