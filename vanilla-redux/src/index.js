import {legacy_createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    //todo를 추가하고 지우기를 원한다.
    //새로운 todo와 함께 array를 리턴할 수 있다.
    switch(action.type){
        case ADD_TODO:
            return [];
        case DELETE_TODO:
            return [];
        default: //state가 없는 경우
            return state;
    }
};
//reducer은 현재 어플리케이션의 state와 action이라는 두 가지 인자를 가진다.

const store = legacy_createStore(reducer);

//리스트를 만들고 리스트 아이템을 리스트에 넣어주는 createToDo를 호출한다.
// const createToDo = toDo => {
//     const li = document.createElement("li");
//     li.innerText = toDo;
//     ul.appendChild(li);
// };

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    //todo 변수는 input값에서 할당되는 것.
    input.value = "";
    store.dispatch({type: ADD_TODO, text: toDo});
};

form.addEventListener("submit", onSubmit);
//form이 submit이 되면 input에서 값을 가져올 것.

//MUTATE STATE는 절대 사용하지 말기.