export function union(a, b) {
  b.forEach((elem) => {
    if (a.indexOf(elem) < 0) {
      a.push(elem);
    }
  });
  return a;
}