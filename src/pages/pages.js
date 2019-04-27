import { useState,useEffect } from 'react';
import React from 'react';
import _ from 'lodash';

function Todo() {
    // 声明一个名为“count”的新状态变量
    const [InputText, setInputText] = useState("");
    const [countList, setCountList] = useState([]);
    function inputChange(val) {
        setInputText(val.currentTarget.value);
    }
    function addItem(){
        let newlist = _.cloneDeep(countList);
        newlist.push(InputText);
        setInputText("");
        setCountList(newlist);
    }
    useEffect(() => {
        document.title = "您有"+countList.length+"条任务";
    });
    return (
        <div>
            <p>TODO</p>
            <input value ={InputText} onChange={inputChange}/>
            <button onClick={addItem}>
                增加
            </button>
            {countList.map((item)=>{
                return <p>{item}</p>
            })}
        </div>
    );
}
module.exports = Todo;