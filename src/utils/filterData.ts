const filterByCustomDate = (data: any, options: any) => {
  console.log(data);
  console.log(options);
  return data.filter(
    (item: any) =>
      new Date(new Date(item.date).toDateString()) >=
        new Date(new Date(options.startDate).toDateString()) &&
      new Date(new Date(item.date).toDateString()) <=
        new Date(new Date(options.finishDate).toDateString()),
  );
};

const filterDataByThisMonth = (data: any) => {
  const currentMonth = new Date().getMonth();
  return data.filter(
    (item: any) => currentMonth === new Date(item.date).getMonth(),
  );
};

const filterDataByLastMonth = (data: any) => {
  const currentMonth = new Date().getMonth() - 1;
  return data.filter(
    (item: any) => currentMonth === new Date(item.date).getMonth(),
  );
};

const filterDataByThisYear = (data: any) => {
  const currentYear = new Date().getFullYear();
  return data.filter(
    (item: any) => currentYear === new Date(item.date).getFullYear(),
  );
};

function filterData(array: any, theCase: string, options?: any) {
  return array;
  // if (options.startDate?.length !== 0 && options.finishDate?.length !== 0) {
  //   switch (theCase) {
  //     case 'CUSTOM_DATE': {
  //       return filterByCustomDate(array, options);
  //     }
  //     default:
  //       break;
  //   }
  // }
  // switch (theCase) {
  //   case 'THIS_MONTH': {
  //     return filterDataByThisMonth(array);
  //   }
  //   case 'LAST_MONTH': {
  //     return filterDataByLastMonth(array);
  //   }
  //   case 'THIS_YEAR': {
  //     return filterDataByThisYear(array);
  //   }
  //   default:
  //     break;
  // }
}

export { filterData };
