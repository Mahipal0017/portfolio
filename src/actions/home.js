export const SET_PAGE_ANIMATION_COMPLETE = "SET_PAGE_ANIMATION_COMPLETE";

export function setPageLoadComplete(loadedPageName){
    return {
        type: SET_PAGE_ANIMATION_COMPLETE,
        payload: loadedPageName
    }
}