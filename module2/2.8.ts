{
  // Promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to lead data");
      }
    });
  };

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    // console.log("Show me the promised data: " + data);
    return data;
  };
  showData();
  //
}
