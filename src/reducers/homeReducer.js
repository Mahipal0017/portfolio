import * as Actions from '../actions/home';

const initialState = {
    loadedPageNames: [],
};

const HomeReducer = (state = initialState, action) =>{
    const { payload: pageWhereAnimationCompleted } = action;

    switch (action.type){
        case Actions.SET_PAGE_ANIMATION_COMPLETE:
            return {
                ...state,
                loadedPageNames: [...state.loadedPageNames, pageWhereAnimationCompleted],
              };

              default:
            return state;
    }
}

export default HomeReducer;