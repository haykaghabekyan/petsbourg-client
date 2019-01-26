import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { PetEditService } from '../services/pet-edit.service';
import { PET_EDIT_PAGE_LOAD_ACTION_TYPE, petEditPageLoadSucceededAction, petEditPageLoadFailedAction } from './pet-edit.actions';

export const loadPetEditPageEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === PET_EDIT_PAGE_LOAD_ACTION_TYPE),
        mergeMap((action) => {
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
