//redux에서 create store를 import하자.
//store은 유저의 data를 넣는 곳. 유저의 state
//state는 유저의 applicaton에서 바뀌는 data
//리덕스에는 createStore이라는 function이 있다.
//리덕스는 유저의 data를 관리하는데 도와주는 역할을 하기 위해 만들어졌다.
//여기서는 redux가 -1이나 +1을 count하는 걸 도와주기 위해 만들어진 것.
import {legacy_createStore} from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer이라는 함수를 만들자.
//data를 modify해준다.
//reducer나 modifier는 처음으로, data를 바꿔준다.
//modifier와 reducer이 return하는 건 application의 data가 된다.
//countModifier가 return하는 모든 것은 data가 된다.
//const reducer = () => {};
//application의 data를 modify하고 싶으면 countModifier(data의 modifier)를 사용하면 된다.
//store를 만들면 countModifier를 initial state로 불러온다. state가 undefined가 된다.
//그래서 여기에 default를 더하자. default로 state는 0이 된다. => state를 initializing하는 것.
//default로 data modifier는 현재의 state와 함게 불려진다.
//action은 redux에서 function을 부를 때 쓰는 두 번재 parametar, 혹은 argument
//action은 countModifier과 소통하기 위한 방법인 action
//count modifier에게 action을 보낼 수 있는 방법은 store를 사용하는 방법, 즉, countStore.dispatch()
//전송한 message는 aciton에 넣으면 되고, action을 체크해 보면 된다.
//여기서 count는 현재의 state. 현재의 state는 1이다. count는 1이 된다. count = 0 => 1 = 0 / aciton은 add로
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD"){
    return count + 1;
    //return된 것은 현재의 state
  } else if(action.type === "MINUS"){
    return count -1;
  } else {
    return count;
    //count를 return하면 count는 0이다.
    //만약 action이 더 없으면 count를 return하자.
  }
};

//store, dispatch, action을 말하면 리덕스가 countModifier를 부를 거고,
//dispatch와 함께 countModifier에게 메세지, action을 보내는 것.

//data를 어딘가에 넣어줘야 한다. store라는 곳에 저장 되어야 한다.
//data의 store를 만들자. reducer를 만들어달라는 에러가 나오기 때문에 reducer 함수를 만들자.
//const store = legacy_createStore(reducer);
const countStore = legacy_createStore(countModifier);
//message를 그 store에 보낸다.
//그리고 message를 send하는 방법은 dispatch를 사용하면 된다.
//action에 보낼 수 있다. object의 형태로
//action 'add'를 보내는 것. count는 0이다.
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "MINUS"});

console.log(countStore.getState());

//console.log(countStore.getState);
//get state하면, state는 0과 같게 된다.
//첫 번째 state, default state가 0이라는 뜻.

//console.log(countStore.getState()); //위에서 return하는 값을 get하게 된다.


// //카운터 만들기
// //data가 바뀌는 곳. count가 유일하게 바뀌는 코드. 우리가 가지고 있는 유일한 data
// let count = 0;

// //innerText는 한 번만 일어난다.
// number.innerText = count;

// //handleAdd 혹은 minus를 클릭할 때마다 함수를 만들어야 한다.
// //html에게 count를 업데이트 하라고 알려주기.
// const updateText = () => {
//   number.innerText = count;
// };

// //count를 modify하기 위한 코드들.
// //changing count //단, 값이 업데이트되진 않는다.
// //updateText() 함수를 가져와서 현재 카운터와 함께 text를 repaint하자.
// const handleAdd = () => {
//   count = count + 1;
//   updateText();
//   //html에게 뭔가가 바뀌었다고 알려주기 위해 함수를 쓰는 것.
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);