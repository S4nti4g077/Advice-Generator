const getAdviceFromApi = async (adivceId) => {
  return await new axios.get(`https://api.adviceslip.com/advice/${adivceId}`);
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 200 + 1);
};

const updateAdviceDescription = (description) => {
  const advice = document.querySelector(".advice1");

  advice.innerText = `"${description}"`;
};

const updateAdviceNumber = (id) => {
  const adviceNum = document.querySelector(".advice-number");

  adviceNum.innerText = `ADVICE #${id}`;
};

const getAdvice = async () => {
  try {
    const random = generateRandomNumber();

    return await getAdviceFromApi(random);
  } catch (error) {
    console.error(error);
  }
};

const updateAdviceSection = async () => {
  let res;

  try {
    res = await getAdvice();
  } catch {
    res = await getAdvice();
  }

  updateAdviceDescription(res.data.slip.advice);
  updateAdviceNumber(res.data.slip.id);
  console.log(res.data.slip.id);
  console.log(res.data.slip.advice);
};

const form = document.querySelector("#generate-button");

form.addEventListener("click", async function (event) {
  event.preventDefault();
  try {
    await updateAdviceSection();
  } catch (error) {
    console.error(error);
  }
});
