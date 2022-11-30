import axios from "axios";

export const uplaodImages = async (formData, path, token) => {
  try {
    debugger;
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/uploadImages`,
      formData,
      {
        headers: {
        "Content-Type": 'multipart/form-data',
          Auhorization: `Bearer ${token}`
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
