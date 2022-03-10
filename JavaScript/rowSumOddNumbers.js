function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
console.log(comp(a1, a2));
