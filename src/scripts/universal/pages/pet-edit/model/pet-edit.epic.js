import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { PetEditService } from '../services/pet-edit.service';
import {
    PET_EDIT_PAGE_LOAD_ACTION_TYPE,
    petEditPageLoadSucceededAction,
    petEditPageLoadFailedAction,
    PET_EDIT_PAGE_UPDATE_ACTION,
    petEditPageUpdateSucceededAction,
    petEditPageUpdateFailedAction,
    PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION,
    petEditPageUpdatePetsListAction
} from './pet-edit.actions';

export const petEditPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_EDIT_PAGE_LOAD_ACTION_TYPE),
        mergeMap(action => {
            const { petId } = action.payload;
            const promise = PetEditService.load(petId);

            return from(promise)
                .pipe(
                    map(result => {
                        const { pet, user, pets, petTypes, petBreeds } = result;

                        return petEditPageLoadSucceededAction({ pet, user, pets, petTypes, petBreeds });
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
        filter(action => action.type === PET_EDIT_PAGE_UPDATE_ACTION),
        mergeMap(action => {
            const promise = PetEditService.update(action.payload.petId, action.payload);

            return from(promise)
                .pipe(
                    map(({ pet }) => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.resolve();
                        }
                        return petEditPageUpdateSucceededAction({ pet });
                    }),
                    catchError(error => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.reject();
                        }
                        return of(petEditPageUpdateFailedAction(error.message));
                    })
                );
        })
    );
};

export const petEditPageUpdatePetsListEpic = action$ => {
    return action$
        .pipe(
            filter(action => action.type === PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION),
            map(action => {
                const { pet } = action.payload;

                return petEditPageUpdatePetsListAction({ pet });
            })
        );
};
