import { useState,useEffect,useReducer} from 'react';
import React from 'react';
import {initialState,reducer} from '../reducer.js';

let temp;


function Todo() {
    const [inputText, setInputText] = useState("");
    useEffect(() => {//执行时机:浏览器重绘之后，能拿到DOM状态，异步执行 不能用来更新dom
        document.title = "您有"+state.countList.length+"条任务";
    },[state]);

    function inputChange(val) {//写内部有会，每次渲染时候重新定义
        setInputText(val.currentTarget.value);
    }
    function addItem(){
        dispatch({ type:'addItem',inputText:inputText}); // 理解为acrion的type
        setInputText("");
    }
    // useEffect(() => {//这个方法是为了，查看函数的刷新用的
    //     console.info(temp == inputChange);
    //     temp = inputChange
    // });

    const [state, dispatch] = useReducer(reducer, initialState);//useReducer 当更新状态依赖于另一个值时。
    const {countList,time,message} = state;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' }); // 理解为acrion的type
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);
    return (
        <div>
            <p>TODO</p>
            <input value ={inputText} onChange={inputChange}/>
            <button onClick={addItem}>
                增加
            </button>
            {countList.map((item,i)=>{
                return <p key={i}>{item.text}</p>
            })}
            <div>这里是一个强行利用两个state的属性↓</div>
            <div>{message}</div>
        </div>
    );
}

module.exports = Todo;