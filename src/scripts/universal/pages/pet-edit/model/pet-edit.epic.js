import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { PetEditService } from '../services/pet-edit.service';
import {
    PET_EDIT_PAGE_LOAD_ACTION_TYPE,
    petEditPageLoadSucceededAction,
    petEditPageLoadFailedAction,
    PET_EDIT_PAGE_UPDATE_PET_ACTION,
    petEditPageUpdateSucceededAction,
    petEditPageUpdateFailedAction,
} from './pet-edit.actions';

export const petEditPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_EDIT_PAGE_LOAD_ACTION_TYPE),
        mergeMap(action => {
            const { petId } = action.payload;
            const promise = PetEditService.loadPetPage(petId);

            return from(promise)
                .pipe(
                    map(result => {
                        const { pet, user, pets } = result;

                        return petEditPageLoadSucceededAction({ pet, user, pets });
                    }),
                    catchError(error => {
                        return of(petEditPageLoadFailedAction(error.message));
                    })
                );
        })
    );
};

export const petEditPageUpdateEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_EDIT_PAGE_UPDATE_PET_ACTION),
        mergeMap(action => {
            const promise = new Promise((resolve => { resolve({}); }));

            return from(promise)
                .pipe(
                    map(result => {
                        return petEditPageUpdateSucceededAction({});
                    }),
                    catchError(error => {
                        return of(petEditPageUpdateFailedAction(error.message));
                    })
                );
        })
    );
};
