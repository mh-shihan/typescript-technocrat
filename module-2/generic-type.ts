{
  function genericType<T>(arg: T): T {
    return arg;
  }

  const genericType2 = <T>(arg: T): T => arg;

  const first = genericType<number>(10);
  console.log("Number: ", first);
  console.log("String: ", genericType2("Shihan"));

  type GenericType<T> = Array<T>;

  const nums: GenericType<number> = [1, 2, 3, 4];
  console.log(nums);
}
