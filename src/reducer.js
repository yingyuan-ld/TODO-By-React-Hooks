import _ from 'lodash';
const initialState = {
    countList: [],
    time: 0,
    message:""
};
function reducer(state, action) {
    let newstate = _.cloneDeep(state);
    if (action.type === 'tick') {
    	newstate.time++;
    	newstate.message = `您还有${newstate.countList.length}条任务，您用时${newstate.time}`;
        return newstate;
    } else if (action.type === 'addItem') {
	    newstate.countList.push({text:action.inputText,done:false});
        return newstate;
    } else {
        throw new Error();
    }
}

export {initialState,reducer}