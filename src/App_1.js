// App_1.js
// 비동기적 수행
// 통신 함수 - axios

import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

const api_url = 'http://localhost:4000/api/food';

function App() {
  const [userfoodList, setUserFoodList] = useState([]);
  const [foodcoaList, setFoodCOAList] = useState([]);
  const [foodpriceList, setFoodPriceList] = useState([]);

  // axios - userFoodList API 호출 로직
  const userFoodList = () => {
      axios.get(api_url)
      .then((response) => {
        console.log('userFoodList', response.data);
        setUserFoodList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // axios - foodCOA API 호출 로직
  const foodCOA = () => {
      axios.get(api_url)
      .then((response) => {
        console.log('foodCOA', response.data);
        setFoodCOAList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // axios - foodPrice API 호출 로직
  const foodPrice = () => {
      axios.get(api_url)
      .then((response) => {
        console.log('foodPrice', response.data);
        setFoodPriceList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 함수 호출 - 비동기
  const getData = () => {
    console.log('START');
    userFoodList();
    foodCOA();
    foodPrice();
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
