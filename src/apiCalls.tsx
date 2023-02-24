export const getApiData = (category: string): Promise<any> => {
  return fetch(`https://opentdb.com/api.php?amount=20&category=${category}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response is not working");
    } else {
      return response.json();
    }
  });
};
