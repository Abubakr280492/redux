


const initialState = {
    angular: 0,
    react: 0,
    vuejs:0
}

//reducer func   
export default(state = initialState, action) => {
    //evalute what passed state manipulation 

    switch(action.type){
        case 'VOTE_ANGULAR':
            console.log("vote Angular");
            return Object.assign({},state,{
                angular: state.angular +1   
            })
        case 'VOTE_REACT':
            console.log("vote react");

            return Object.assign({},state,{
                react: state.react +1   
            })
        case 'VOTE_VUEJS':
            console.log("vote vue");

            return Object.assign({},state,{
                vuejs: state.vuejs +1   
            })
        default:
            return state
    }
}