// App_4.js
// 동기적 수행
// 통신 함수 - async & await
// 함수 호출 - async & await

import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

const api_url = 'http://localhost:4000/api/food';

function App() {
  const [userfoodList, setUserFoodList] = useState([]);
  const [foodcoaList, setFoodCOAList] = useState([]);
  const [foodpriceList, setFoodPriceList] = useState([]);

  // async & await - userFoodList API axios 호출 로직
  const userFoodList = async () => {
    try{
      const response = await axios.get(api_url);
      console.log('userFoodList', response.data);
      setUserFoodList(response.data);
    } catch(error){
        console.log(error);
    }
  }

  // async & await - foodCOA API axios 호출 로직
  const foodCOA = async () => {
    try{
      const response = await axios.get(api_url);
      console.log('foodCOA', response.data);
      setFoodCOAList(response.data);
    } catch(error){
        console.log(error);
    }
  }

  // async & await - foodPrice API axios 호출 로직
  const foodPrice = async () => {
    try{
      const response = await axios.get(api_url);
      console.log('foodPrice', response.data);
      setFoodPriceList(response.data);
    } catch(error){
        console.log(error);
    }
  }

  // 함수 호출 - 동기
  const getData = async () => {
    console.log('START');
    await userFoodList();
    await foodCOA();
    await foodPrice();
    console.log('END');
  }

  // 첫 렌더링 시, API 데이터 호출 (한 번만 실행)
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="App">
      <h1> User Food List </h1>
      {userfoodList.map((item) => (
        <div key={item.id} style={{ display:'flex'}}>
          <div>{item.id} : {item.food}</div>
        </div>
      ))}
      <h1> Food COA List </h1>
      {foodcoaList.map((item) => (
        <div key={item.id} style={{ display:'flex'}}>
          <div>{item.id} : {item.coa}</div>
        </div>
      ))}
      <h1> Food Price List </h1>
      {foodpriceList.map((item) => (
        <div key={item.id} style={{ display:'flex'}}>
          <div>{item.id} : {item.price}원</div>
        </div>
      ))}
    </div>
  );
}

export default App;
