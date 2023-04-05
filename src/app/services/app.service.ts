import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // NOTE: Could also declare this as a property with a public get and private (or no) set
  private readonly ApplicationTitle = 'Stickysaurus Notes & Stuff';

  constructor() { }

  public getApplicationTitle(): string {
    return this.ApplicationTitle;
  }
}
