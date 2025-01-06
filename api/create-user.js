const axios = require("axios");
const API_URL = "http://192.168.1.10:9090/api/auth/local/register";
const API_TOKEN = "Bearer cc41cdd4689833cccfc4fbbfff25fd61a04f4988382e71ba401faeb3daf0cf0f38f695187ff1bbaadebd3b9f86ea88bd3eab36b94273cfdd0c0d11d7c36e86cc4ebcc04c047ab0282b80aa817b7975fa649853246249c3d8de36605b38d2a5ad9aaafd1d5de497ecfb7e327eb704e510b77a692ceea2385a082af1a698d9e617";
const payload = {
    username: "penpitchaprayonghom",
    email: "s6602041520161@email.kmutnb.ac.th",
    password: "penpitcha150345",

};
axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("send API ได้", response.data);
  })
  .catch((err) => {
    console.log("ไม่ได้ ", err.message);
  });