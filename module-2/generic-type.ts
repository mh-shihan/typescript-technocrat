{
  function genericType<T>(arg: T): T {
    return arg;
  }

  const first = genericType<number>(10);
  console.log(first);
}
