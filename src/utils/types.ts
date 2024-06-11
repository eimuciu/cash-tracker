export const settingsData = {
  colors: {
    food: '#C75000',
    holiday: '#92B4F4',
    sport: '#B96AC9',
    car: '#9EBC9E',
  },
  currency: '€',
  expenseCategories: ['food', 'holiday', 'sport', 'car'],
  incomeSource: ['job', 'selling', 'interests', 'investment'],
  // theme: {
  //   activeColor: '#880D1E',
  //   firstColor: '#D8D4F2',
  //   secondColor: '#D1AC00',
  //   thirdColor: '#C6E0FF',
  //   fourthColor: '#91F5AD',
  //   greyedColor: '#F5F5F5',
  // },
  theme: {
    activeColor: '#002E66',
    firstColor: '#F5F5F5',
    secondColor: '#F5F5F5',
    thirdColor: '#D6E9FF',
    fourthColor: '#F5F5F5',
    greyedColor: 'white',
  },
  currenciesList: ['Euro €', 'Dollars $', 'Pounds £'],
  expenseIcons: {
    food: '/icons/burger.png',
    holiday: '/icons/holiday.png',
    sport: '/icons/sport.png',
    car: '/icons/car.png',
  },
  incomeIcons: {
    job: '/icons/salary.png',
    selling: '/icons/investment.png',
  },
};

export const budgetData = {
  '2024-01': [],
  '2024-02': [],
  '2024-03': [],
  '2024-04': [],
  '2024-05': [
    { budget: 200, category: 'car' },
    { budget: 200, category: 'food' },
  ],
};

export const expenseData = [
  {
    amount: 5,
    category: 'food',
    date: '2024-05-01',
    note: 'traskuciai, energetinis gerimas',
  },
  {
    amount: 5,
    category: 'food',
    date: '2024-05-01',
    note: 'traskuciai, energetinis gerimas',
  },
  {
    amount: 10,
    category: 'car',
    date: '2024-05-01',
    note: 'degalai degalineje',
  },
  {
    amount: 10,
    category: 'car',
    date: '2024-05-01',
    note: 'degalai degalineje',
  },
  {
    amount: 10,
    category: 'holiday',
    date: '2024-05-01',
    note: 'atostogos',
  },
  {
    amount: 30,
    category: 'holiday',
    date: '2024-05-01',
    note: 'atostogos',
  },
  {
    amount: 10,
    category: 'sport',
    date: '2024-05-01',
    note: 'sportas',
  },
  {
    amount: 10,
    category: 'sport',
    date: '2024-05-01',
    note: 'sportas',
  },
  {
    amount: 10,
    category: 'sport',
    date: '2024-05-01',
    note: 'sportas',
  },
];

export const incomeData = [
  {
    amount: 1000,
    source: 'job',
    date: '2024-05-01',
    note: 'alga',
  },
  {
    amount: 500,
    source: 'selling',
    date: '2024-05-01',
    note: 'pardaviau kompa',
  },
];

export function sumDataByCategory(arr: any) {
  return arr.reduce((acc: any, curr: any) => {
    if (acc[curr.category]) {
      acc[curr.category] = acc[curr.category] + curr.amount;
    } else {
      acc[curr.category] = curr.amount;
    }
    return acc;
  }, {});
}

export function createStatsList(obj: any, settings: any) {
  return Object.keys(obj).map((x: any) => ({
    name: x,
    amount: obj[x],
    color: settings.colors[x],
  }));
}

console.log(sumDataByCategory(expenseData));
console.log(createStatsList(sumDataByCategory(expenseData), settingsData));
