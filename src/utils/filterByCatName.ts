export default function filterByCatName(arr: any, catName: string) {
  return arr.filter((x: any) => x.category === catName);
}
