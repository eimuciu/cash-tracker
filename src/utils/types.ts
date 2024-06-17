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
    interests: '/icons/default.png',
    investment: '/icons/default.png',
  },
};

export const budgetData = {
  '2024-01': [{ budget: 200, category: 'holiday' }],
  '2024-02': [{ budget: 200, category: 'holiday' }],
  '2024-03': [{ budget: 200, category: 'holiday' }],
  '2024-04': [{ budget: 200, category: 'holiday' }],
  '2024-05': [{ budget: 200, category: 'holiday' }],
  '2024-06': [
    { budget: 200, category: 'car' },
    { budget: 200, category: 'food' },
  ],
};

export const expenseData = [
  {
    amount: 5,
    category: 'food',
    date: 'Thu, 1 Jun 2024 08:28:53 GMT',
    note: 'traskuciai, energetinis gerimas',
  },
  {
    amount: 5,
    category: 'food',
    date: 'Thu, 2 Jun 2024 08:28:53 GMT',
    note: 'traskuciai, energetinis gerimas',
  },
  {
    amount: 10,
    category: 'car',
    date: 'Thu, 3 Jun 2024 08:29:54 GMT',
    note: 'degalai degalineje',
  },
  {
    amount: 10,
    category: 'car',
    date: 'Thu, 4 Jun 2024 08:29:54 GMT',
    note: 'degalai degalineje',
  },
  {
    amount: 10,
    category: 'holiday',
    date: 'Thu, 5 Jun 2024 08:29:54 GMT',
    note: 'atostogos',
  },
  {
    amount: 30,
    category: 'holiday',
    date: 'Thu, 6 Jun 2024 08:29:54 GMT',
    note: 'atostogos',
  },
  {
    amount: 10,
    category: 'sport',
    date: 'Thu, 7 Jun 2024 08:29:54 GMT',
    note: 'sportas',
  },
  {
    amount: 10,
    category: 'sport',
    date: 'Thu, 8 Jun 2024 08:29:54 GMT',
    note: 'sportas',
  },
  {
    amount: 10,
    category: 'sport',
    date: 'Thu, 9 Jun 2024 08:29:54 GMT',
    note: 'sportas',
  },
  {
    amount: 10,
    category: 'sport',
    date: 'Sat, 4 May 2024 08:29:54 GMT',
    note: 'sportas',
  },
];

export const incomeData = [
  {
    amount: 1000,
    category: 'job',
    date: 'Thu, 1 Jun 2024 08:29:54 GMT',
    note: 'alga',
  },
  {
    amount: 500,
    category: 'selling',
    date: 'Thu, 2 Jun 2024 08:29:54 GMT',
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
