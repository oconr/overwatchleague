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
`new OverwatchLeague({options})`
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
* `getTeam(teamid/teamname)` - Retrieve a specific team
* `getNews()` - Retrieve all news items
* `getNewsPost(postid)` - Retrieve a specific news item
* `getLiveMatch()` - Retrieve live data for the current match
* `getStreams()` - Retrieve links to Overwatch League livestreams
* `getMaps()` - Retrieve a list of maps
* `getVideos()` - Retrieve a list of VODs for past matches
* `getStandings()` - Retrieve current standings
* `nextMatchForTeam(teamid/teamname)` - Retrieve the next match for a specific team
* `lastMatchForTeam(teamid/teamname)` - Retrieve the last match for a specific team
* `findTeamID(teamname)` - Returns the ID for the team name provided
* `findTeamName(teamid)` - Returns the name for the team ID provided

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
