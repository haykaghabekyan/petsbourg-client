import {from, of} from 'rxjs';
import {filter, mergeMap, map, catchError} from 'rxjs/operators';
import {PetService} from '../services/pet.service';
import {PET_PAGE_LOAD_ACTION_TYPE, petPageLoadSucceededAction, petPageLoadFailedAction} from './pet.actions';

export const petPageLoadEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === PET_PAGE_LOAD_ACTION_TYPE),
    mergeMap((action) => {
      const {petId} = action.payload;
      const promise = PetService.loadPetPage(petId);

      return from(promise)
        .pipe(
          map(({ data }) => {
            console.log('pet.epic result', data);
            const {pet, user, pets} = data;

            return petPageLoadSucceededAction({pet, user, pets});
          }),
          catchError(({response}) => {
            console.error('pet.epic', response);
            const {errors} = response.data;
            return of(petPageLoadFailedAction(errors.message));
          })
        );
    })
  );
};
