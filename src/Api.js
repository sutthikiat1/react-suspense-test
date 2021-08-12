const getUserProfiles = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) =>
    response.json()
  );

const fetchUserProfile = () => {
  let result = [];
  let status = "pending";

  const suspender = (id) =>
    getUserProfiles(id).then(
      (response) => {
        status = "success";
        result = response;
      },
      (error) => {
        status = "error";
        result = error;
      }
    );

  return (id) => {
    switch (status) {
      case "pending":
        throw suspender(id);
      case "error":
        throw result;
      default:
        return result;
    }
  };
};

export default fetchUserProfile();
