import fetch from "cross-fetch";

export const GET_CHALLENGES_REQUEST = 'GET_CHALLENGES_REQUEST';
export const GET_CHALLENGES_SUCCESS = 'GET_CHALLENGES_SUCCESS';

function getChallengesRequest() {
    return {
        type: GET_CHALLENGES_REQUEST,
        lastUpdated: Date.now(),
        isFetching: true
    }
}

function getChallengesSuccess(challenges) {
    return {
        type: GET_CHALLENGES_SUCCESS,
        lastUpdated: Date.now(),
        isFetching: false,
        received: challenges.received,
        sent: challenges.sent,
    }
}

export function GetChallenges() {
    return (dispatch) => {
        dispatch(getChallengesRequest());
        
        fetch('http://127.0.0.1:2020/v1/u/challenges', {
            headers: {
                'Content-Type': 'application/json',
                'ac-token': localStorage.getItem('ac-token'),
            },
            method: 'GET',
        }).then((response) => response.json())
        .then((json) => {
            dispatch(getChallengesSuccess(json));
        })
    }
}