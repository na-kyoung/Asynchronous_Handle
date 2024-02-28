const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 3;
const foodList = [
    {
        id : 1,
        food : 'Apple Juice',
        coa : 'Apple',
        price : 12000,
    },
    {
        id : 2,
        food : 'Rice Cake',
        coa : 'Rice',
        price : 6000,
    },
    {
        id : 3,
        food : 'Fried Pork',
        coa : 'Pork',
        price : 25000,
    },
    {
        id : 4,
        food : 'Grilled Fish',
        coa : 'Fish',
        price : 15000,
    },
    {
        id : 5,
        food : 'Cake',
        coa : 'Sugar',
        price : 9000,
    },
    {
        id : 6,
        food : 'Iced Coffee',
        coa : 'Coffee',
        price : 5000,
    },
];

// app.get('/', function (req, res) {
//   res.send('Hello World');
// })

// 데이터 가져오기
app.get('/api/food', (req,res) => {
    res.json(foodList);
})

// 데이터 추가
app.post('/api/food', (req, res) => {
    const { name, price } = req.body;
    foodList.push({
        id : id++,
        food,
        coa,
        price,
    })
    return res.send('Success');
})

app.listen(4000, () => {
    console.log('Server Start!');
});