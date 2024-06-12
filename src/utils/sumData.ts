export function sumData(dataArr: any) {
  return dataArr.reduce((acc: any, curr: any) => {
    acc += curr.amount;
    return acc;
  }, 0);
}
