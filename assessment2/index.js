exports.handler = async (event) => {
  const responseData = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "GET",
    }
  );
  const jsonResponse = await responseData.json();
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: jsonResponse,
      message: "Data was successfully retrieved",
      statusCode: 200,
    }),
  };
  return response;
};
