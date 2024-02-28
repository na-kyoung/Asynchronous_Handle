// App_2.js
// 동기적 수행
// 통신 함수 - Promise
// 함수 호출 - then/catch

import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

const api_url = 'http://localhost:4000/api/food';

function App() {
  const [userfoodList, setUserFoodList] = useState([]);
  const [foodcoaList, setFoodCOAList] = useState([]);
  const [foodpriceList, setFoodPriceList] = useState([]);

  // Promise - userFoodList API axios 호출 로직
  const userFoodList = () => {
    return new Promise(function(resolve, reject){
      axios.get(api_url)
      .then((response) => {
        setUserFoodList(response.data);
        resolve((response.data));
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  // Promise - foodCOA API axios 호출 로직
  const foodCOA = () => {
    return new Promise(function(resolve, reject){
      axios.get(api_url)
      .then((response) => {
        setFoodCOAList(response.data);
        resolve((response.data));
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  // Promise - foodPrice API axios 호출 로직
  const foodPrice = () => {
    return new Promise(function(resolve, reject){
      axios.get(api_url)
      .then((response) => {
        setFoodPriceList(response.data);
        resolve((response.data));
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  // 함수 호출 - 동기
  const getData = () => {
    console.log('START');
    userFoodList()
      .then((data) => {
        console.log('userFoodList', data);
        return foodCOA();
      })
      .catch((error) => {
        console.log('Error', error);
      })
      .then((data) => {
        console.log('foodCOA', data);
        return foodPrice();
      })
      .catch((error) => {
        console.log('Error', error);
      })
      .then((data) => {
        console.log('foodPrice', data);
      })
      .catch((error) => {
        console.log('Error', error);
      })
      .finally(()=>{
        console.log('END');
      });
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
