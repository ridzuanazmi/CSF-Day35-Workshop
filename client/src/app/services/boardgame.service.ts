import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BOARDGAME_URL, GameResponse } from '../model/Boardgame';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  constructor(private http: HttpClient) { }

  // GET /api/games?limit=limit
  // Returns a promise
  getGames(limit: number): Promise<string[]> {
    const params = new HttpParams().set("limit", limit.toString());
  
    return firstValueFrom(
      this.http.get<GameResponse>(BOARDGAME_URL, { params }).pipe(
        map((response) => response.games.map((game) => game.name))
      )
    );
  }
}
