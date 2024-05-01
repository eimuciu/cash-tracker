export const settingsData = {
  colors: {
    alcohol: 'red',
    books: 'green',
    sport: 'blue',
  },
  currency: '€',
  expenseCategories: ['alcohol', 'books', 'sport'],
  incomeSource: ['job', 'selling', 'interests', 'investment'],
  theme: {
    activeColor: '#880D1E',
    firstColor: '#D8D4F2',
    secondColor: '#D1AC00',
    thirdColor: '#C6E0FF',
    fourthColor: '#91F5AD',
    greyedColor: '#F5F5F5',
  },
  currenciesList: [],
  expenseIcons: {
    food: '/icons/burger.png',
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
    amount: 10,
    category: 'car',
    date: '2024-05-01',
    note: 'degalai degalineje',
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
