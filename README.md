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

> **Update:** Changed `getWeeksMatches()` to include full week instead of 3 days either side. Added new expansion teams.

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
`new OverwatchLeague({options})`
* `options` (object): All options are optional
  * `locale` (string): The locale for response to be returned in
  * `useChina` (boolean, default `false`): Whether or not to use the Chinese API endpoint.

## Methods

#### Game Methods
* `getLiveMatch()` - Returns live data for the current match
* `getMatch(matchid)` - Returns data for a specific match
* `getMatches()` - Returns data for all matches
* `getWeeksMatches()` - Returns data for all matches for the current week
* `getConcludedWeek()` - Returns data for all matches played during the last week
* `getUpcomingWeek()` - Returns data for all matches during the upcoming week

#### General Methods
* `getInfo()` - Returns information about the Overwatch League
* `getSchedule()` - Returns current schedule, including past matches
* `getMaps()` - Returns a list of maps
* `getNews()` - Returns all news items
* `getNewsPost(postid)` - Returns a specific news item
* `getStandings(year, stage)` - Returns the current standings. The year will default to ***2019*** if one is not provided. You must provide a year if you are providing a stage. Valid stage values are "***stage1***", "***stage2***", "***stage3***" and "***stage4***".
* `getStreams()` - Returns links to Overwatch League livestreams
* `getVideos()` - Returns a list of VODs for past matches

#### Player methods
* `getPlayers(teamid/teamname)` - Returns the players for a specific team
* `getPlayerStats(playerid)` - Returns general & hero specific stats for a player

#### Team Methods
* `findTeamID(teamname)` - Returns the ID for the team name provided
* `findTeamName(teamid)` - Returns the name for the team ID provided
* `getGameDiff(teamid/teamname)` - Returns the game difference for a specific team
* `getGameLoss(teamid/teamname)` - Returns the game losses for a specific team
* `getGameTie(teamid/teamname)` - Returns the game ties for a specific team
* `getGameWin(teamid/teamname)` - Returns the game wins for a specific team
* `getRankings()` - Returns the current rankings
* `getMatchDraw(teamid/teamname)` - Returns the match draws for a specific team
* `getMatchLoss(teamid/teamname)` - Returns the match losses for a specific team
* `getMatchWins(teamid/teamname)` - Returns the match wins for a specific team
* `getPrimaryColor(teamid/teamname)` - Returns the hex code for a team's primary color
* `getSecondaryColor(teamid/teamname)` - Returns the hex code for a team's secondary color
* `getTeam(teamid/teamname)` - Returns a specific team
* `getTeamIcon(teamid/teamname)` - Returns the URL for a team's icon
* `getTeamLogo(teamid/teamname)` - Returns the URL for a team's logo
* `getTeams()` - Retrieve all teams
* `getWinPCT(teamid/teamname)` - Returns the match win percentage for a specific team
* `nextMatchForTeam(teamid/teamname)` - Retrieve the next match for a specific team
* `lastMatchForTeam(teamid/teamname)` - Retrieve the last match for a specific team

#### Variables
These are the accepted valued for team ID/team name (not case-sensitive)
* Teams
  * Dallas Fuel
    * ID: **4523**
    * Names: **Dallas Fuel/Dallas/Fuel**
  * Philadelphia Fusion
    * ID: **4524**
    * Names: **Philadelphia Fusion/Philadelphia/Fusion**
  * Houston Outlaws
    * ID: **4525**
    * Names: **Houston Outlaws/Houston/Outlaws**
  * Boston Uprising
    * ID: **4402**
    * Names: **Boston Uprising/Boston/Uprising**
  * New York Excelsior
    * ID: **4403**
    * Name: **New York Excelsior/New York/Excelsior/NYXL**
  * San Francisco Shock
    * ID: **4404**
    * Name: **San Francisco Shock/San Francisco/Shock**
  * Los Angeles Valiant
    * ID: **4405**
    * Name: **Los Angeles Valiant/LA Valiant/Valiant**
  * Los Angeles Gladiators
    * ID: **4406**
    * Name: **Los Angeles Gladiators/LA Gladiators/Gladiators**
  * Florida Mayhem
    * ID: **4407**
    * Name: **Florida Mayhem/Florida/Mayhem**
  * Shanghai Dragons
    * ID: **4408**
    * Name: **Shanghai Dragons/Shanghai/Dragons**
  * Seoul Dynasty
    * ID: **4409**
    * Name: **Seoul Dynasty/Seoul/Dynasty**
  * London Spitfire
    * ID: **4410**
    * Name: **London Spitfire/London/Spitfire**
  * Chengdu Hunters
    * ID: **7692**
    * Name: **Chengdu Hunters/Chengdu/Hunters**
  * Hangzhou Spark
    * ID: **7693**
    * Name: **Hangzhou Spark/Hangzhou/Spark**
  * Paris Eternal
    * ID: **7694**
    * Name: **Paris Eternal/Paris/Eternal**
  * Toronto Defiant
    * ID: **7695**
    * Name: **Toronto Defiant/Toronto/Defiant**
  * Vancouver Titans
    * ID: **7696**
    * Name: **Vancouver Titans/Vancouver/Titans**
  * Washington Justice
    * ID: **7697**
    * Name: **Washington Justice/Washington/Justice**
  * Atlanta Reign
    * ID: **7698**
    * Name: **Atlanta Reign/Atlanta/Reign**
  * Guangzhou Charge
    * ID: **7699**
    * Name: **Guangzhou Charge/Guangzhou/Charge**

* Locales
  * `de_DE` - German
  * `en_US` - English (United States)
  * `en_GB` - English (Great Britain)
  * `es_ES` - Spanish (Spain)
  * `es_MX` - Spanish (Mexico)
  * `fr_FR` - French
  * `it_IT` - Italian
  * `pt_BR` - Portuguese
  * `pl_PL` - Polish
  * `ru_RU` - Russian
  * `ko_KR` - Korean
  * `ja_JP` - Japanese
  * `zh_TW` - Chinese (Taiwan)
  * `zh_CH` - Chinese (China)
    * Instead of using `zh_CH`, I recommend using `useChina: true`
