import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// import {reduxFirestore, getFirestore} from 'redux-firestore';
// import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
// import fbConfig from '../config/fbConfig';

// const middleware = composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}) ));

const middleware = applyMiddleware(thunk
    // .withExtraArgument({getFirebase, getFirestore})
    );
const store = createStore(rootReducer, compose(
    middleware,
    // reduxFirestore(fbConfig), 
    // reactReduxFirebase(fbConfig)
    ) 
);

export default store;
