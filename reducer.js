let state = {count: 0};

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action)
  // render every change on a page
  render()
}

// dispatch({type: 'INCREASE_COUNT'})
// 	// => 1
// dispatch({type: 'INCREASE_COUNT'})
// 	// => 2
// dispatch({type: 'INCREASE_COUNT'})
//   // => 3

function render(){
  document.setInnerHTML = state.count
}

// call the render function
render()

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

