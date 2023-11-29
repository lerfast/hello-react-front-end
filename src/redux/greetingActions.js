export const getGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/greetings'); // Asegúrate de que esta URL sea correcta
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch({ type: 'GET_GREETING', payload: data.message });
  } catch (error) {
    console.log(error);
  }
};
