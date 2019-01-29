import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { PetAddService } from '../services/pet-add.service';
import {
    PET_ADD_PAGE_LOAD_ACTION,
    petAddPageLoadSucceededAction,
    petAddPageLoadFailedAction,
    PET_ADD_PAGE_LOAD_BREEDS_ACTION,
    petAddPageLoadBreedsSuccededAction,
    petAddPageLoadBreedsFailedAction,
    PET_ADD_PAGE_SAVE_ACTION,
    petAddPageSaveSucceededAction,
    petAddPageSaveFailedAction,
} from './pet-add.actions';

export const petAddPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_ADD_PAGE_LOAD_ACTION),
        mergeMap(() => {
            const promise = PetAddService.loadPetTypes();

            return from(promise)
                .pipe(
                    map(result => {
                        const { petTypes } = result;
                        return petAddPageLoadSucceededAction({
                            petTypes,
                        });
                    }),
                    catchError(error => of(petAddPageLoadFailedAction(error.message)))
                );
        })
    );
};

export const petAddPageLoadBreedsEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_ADD_PAGE_LOAD_BREEDS_ACTION),
        mergeMap(({ petType }) => {
            const promise = PetAddService.loadPetBreeds(petType);

            return from(promise)
                .pipe(
                    map(result => {
                        const { petBreeds } = result;
                        return petAddPageLoadBreedsSuccededAction({
                            petBreeds,
                        });
                    }),
                    catchError(error => of(petAddPageLoadBreedsFailedAction(error.message)))
                );
        })
    );
};

export const petAddPageSaveEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_ADD_PAGE_SAVE_ACTION),
        mergeMap(action => {
            const promise = PetAddService.savePet(action.payload);

            return from(promise)
                .pipe(
                    map(result => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.resolve(result.pet);
                        }
                        return petAddPageSaveSucceededAction(result.pet);
                    }),
                    catchError(error => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.reject(error.message);
                        }
                        return of(petAddPageSaveFailedAction(error.message));
                    })
                );
        })
    );
};
