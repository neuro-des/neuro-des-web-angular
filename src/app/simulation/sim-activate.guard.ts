import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SimActivateGuard implements CanActivate {
    constructor(private ds : DataService, private router : Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return true;
        switch(next.url[0].path) {
            case '1':
                return true;
            case '2':
                return this.ds.startCompleted ? true : this.router.parseUrl('/sim/1');
            case '3':
                return this.ds.mapCompleted ? true : this.router.parseUrl('/sim/2');
            case '4':
                return this.ds.paramsCompleted ? true : this.router.parseUrl('/sim/3');
            default:
                return false;
        }
  }

}
