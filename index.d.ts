import { AxiosPromise, AxiosInstance } from "axios";

declare module "overwatchleague" {
  export enum Match {
    PENDING = "PENDING",
    CONCLUDED = "CONCLUDED"
  }

  export type Locale =
    | "de_DE"
    | "en_US"
    | "en_GB"
    | "es_ES"
    | "es_MX"
    | "fr_FR"
    | "it_IT"
    | "pt_BR"
    | "pl_PL"
    | "ru_RU"
    | "ko_KR"
    | "ja_JP"
    | "zh_TW"
    | "zh_CH";

  export type TeamIdentifier = number | string;

  export default class owl {
    constructor(locale?: Locale, useChina?: boolean);

    match: Match;

    api: AxiosInstance;

    /*
     * SECTION: Match Methods
     */

    /**
     * Gets the Match that is currently live.
     */
    getLiveMatch(): AxiosPromise;

    /**
     * Gets the Match with the given ID
     */
    getMatch(id: string): AxiosPromise;

    /**
     * Gets all Matches that have ever been played.
     */
    getMatches(): AxiosPromise;

    /**
     * Gets the Matches that are played this week
     */
    getWeeksMatches(): AxiosPromise;

    /**
     * Gets the Matches of this week, that are already concluded.
     */
    getConcludedWeek(): AxiosPromise;

    /**
     * Gets the Matches of this week, that have not been played yet.
     */
    getUpcomingWeek(): AxiosPromise;


    getPlayerStatsByMap(matchId: number, mapNumber: number): AxiosPromise;

    /*
     * SECTION: General Methods
     */

    /**
     * Gets some informations about legal/privacy terms.
     */
    getInfo(): AxiosPromise;

    /**
     * Gets the Schedule
     */
    getSchedule(year?: number): AxiosPromise;

    /**
     * Gets informations about all maps.
     */
    getMaps(): AxiosPromise;

    /**
     * Gets the current "News"
     */
    getNews(): AxiosPromise;

    /**
     * Gets a NewsPost with a specific ID
     */
    getNewsPost(id: string): AxiosPromise;

    /**
     * Gets the current standings
     */
    getStandings(year?: number, stage?: string): AxiosPromise;

    /**
     * Gets the streams that are currently live.
     */
    getStreams(): AxiosPromise;

    /**
     * Gets informations about where to get VOD's of past matches.
     */
    getVideos(): AxiosPromise;

    /*
     * SECTION: Player Methods
     */

    /**
     * Gets the players of a specific team
     */
    getPlayers(team: string): AxiosPromise;

    /**
     * Gets the stats of a specifc player.
     */
    getPlayerStats(player: string): AxiosPromise;

    /*
     * SECTION: Team Methods
     */

    // Conversion

    /**
     * Gets a specific team
     */
    getTeam(id: TeamIdentifier): AxiosPromise;

    /**
     * Gets the ID from a team name
     */
    findTeamID(name: string): Promise<{ data: number }>;

    /**
     * Gets the name of the team from a team id.
     */
    findTeamName(id: number): Promise<{ data: string }>;

    // Game

    /**
     * Gets the game differential of a team
     */
    getGameDiff(id: TeamIdentifier): Promise<{ data: number }>;

    /**
     * Gets the loss' game count of a team
     */
    getGameLoss(id: TeamIdentifier): Promise<{ data: number }>;

    /**
     * Gets the tie' game count of a team
     */
    getGameTie(id: TeamIdentifier): Promise<{ data: number }>;

    /**
     * Gets the win' game count of a team
     */
    getGameWin(id: TeamIdentifier): Promise<{ data: number }>;

    // Match

    /**
     * Gets the Match draw' count of a specific team.
     */
    getMatchDraw(id: TeamIdentifier): Promise<{ data: number }>;

    /**
     * Gets the Match loss' count of a specific team.
     */
    getMatchLoss(id: TeamIdentifier): Promise<{ data: number }>;

    /**
     * Gets the Match win' count of a specific team.
     */
    getMatchWins(id: TeamIdentifier): Promise<{ data: number }>;

    // Visuals

    /**
     * Gets the primary color of a specific team.
     */
    getPrimaryColor(id: TeamIdentifier): Promise<{ data: string }>;

    /**
     * Gets the secondary color of a specific team.
     */
    getSecondaryColor(id: TeamIdentifier): Promise<{ data: string }>;

    /**
     * Gets the Icon of a specific team
     */
    getTeamIcon(id: TeamIdentifier): AxiosPromise;

    /**
     * Gets the Logo of a specific team.
     */
    getTeamLogo(id: TeamIdentifier): AxiosPromise;

    // General

    /**
     * Gets the current Rankings
     */
    getRankings(): AxiosPromise;

    /**
     * Gets a list of all teams.
     */
    getTeams(): AxiosPromise;

    /**
     * Gets the win-percentage for a team.
     */
    getWinPCT(id: TeamIdentifier): AxiosPromise;

    // Next / Previous Games

    /**
     * Gets the last played match for a team.
     */
    lastMatchForTeam(id: TeamIdentifier): AxiosPromise;

    /**
     * Gets the next match for a team
     */
    nextMatchForTeam(id: TeamIdentifier): AxiosPromise;
  }
}
