# overwatchleague

> A Node.JS library for accessing and using the Overwatch League API

**NOTE:** The Overwatch League API is not officially supported by Blizzard, and is subject to change at any time. The documentation for the API has been developed by the community, and may or may not be complete. Keep this in mind before relying on this for a production app!

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
const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();

OWL.findTeamName(4410).then(response => {
    console.log(response.data);
});
```

Output: `London Spitfire`

## Options
`new OverwatchLeague([options])`
* `options` (object): All options are optional
  * `locale` (string): The locale for response to be returned in
  * `useChina` (boolean, default `false`): Whether or not to use the Chinese API endpoint.

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
