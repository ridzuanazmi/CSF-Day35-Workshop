export interface GameResponse {
    games: {name: string}[]
}

export const BOARDGAME_URL = 'http://localhost:8080/api/games'