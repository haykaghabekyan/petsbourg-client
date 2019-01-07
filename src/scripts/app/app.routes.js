import React from 'react';
import { IndexPage, indexPageLoadAction } from '../pages/index';
import { HomePage, homePageLoadAction } from '../pages/home';
// import { privateRoutes } from './routes/private';
// import { publicRoutes } from './routes/public';

import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

const observableFromStore = store => {
    return Observable.create(observer => {
        const unsubscribe = store.subscribe(() => observer.next(store.getState()));
        observer.next(store.getState());
        return unsubscribe;
    })
};

export const getRoutes = () => {
    return [{
        path: '/',
        exact: true,
        component: IndexPage,
        loadPage: (store) => {
            store.dispatch(indexPageLoadAction());

            return {
                ready: observableFromStore(store).pipe(
                    map(state => !state.indexPage.isLoading),
                    filter(x => x === true),
                    take(1)
                ),
            };
        },
    }, {
        path: '/home',
        exact: true,
        component: HomePage,
        loadPage: (store) => {
            store.dispatch(homePageLoadAction());

            return {
                ready: observableFromStore(store).pipe(
                    map(state => !state.homePage.isLoading),
                    filter(x => x === true),
                    take(1)
                ),
            };
        },
    }];

    // if (!isLoggedIn) {
    //     return publicRoutes;
    // }
    //
    // return privateRoutes;
};
