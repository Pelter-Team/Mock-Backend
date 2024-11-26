import http from "k6/http"
import { check, sleep } from "k6"
export let options = {
  // vus: 100,
  // duration: '30s',
  scenarios: {
    exactRequests: {
      executor: "per-vu-iterations",
      vus: 1, // Number of virtual users
      iterations: 1,
      maxDuration: "1s", // Maximum duration for the scenario
    },
  },
}

function encodeParams(params) {
  const encodedParams = []
  for (const key in params) {
    encodedParams.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
  }
  return encodedParams.join("&")
}
const petmock = [
    {
      name: "Pelter",
      isSold: false,
      category: "Dog",
      subcategory: "Persian",
      description: "A friendly and playful cat",
      isVerified: true,
      price: 1000,
      images_url:
        "https://i.pinimg.com/474x/fa/98/82/fa988290ed5db0af24e733cdc5522158.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Fluffy",
      isSold: true,
      category: "Cat",
      subcategory: "Siamese",
      description: "A calm and affectionate cat",
      isVerified: true,
      price: 800,
      images_url:
        "https://i.pinimg.com/736x/35/91/02/359102065bcbcc5cfac4db0f8135b94e.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Buddy",
      isSold: false,
      category: "Dog",
      subcategory: "Labrador",
      description: "A loyal and friendly dog",
      isVerified: false,
      price: 1200,
      images_url:
        "https://i.pinimg.com/474x/0d/2f/57/0d2f57e33779c96833ceb2f2ed8bc819.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Mittens",
      isSold: false,
      category: "Cat",
      subcategory: "Maine Coon",
      description: "A large and fluffy cat",
      isVerified: true,
      price: 1500,
      images_url:
        "https://i.pinimg.com/474x/75/9b/51/759b51ea919d0e5852f3c77857062caa.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Rex",
      isSold: true,
      category: "Dog",
      subcategory: "German Shepherd",
      description: "A protective and intelligent dog",
      isVerified: true,
      price: 2000,
      images_url:
        "https://i.pinimg.com/474x/c3/44/1c/c3441ca5ac48b06f90450f04fb3f9a5c.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Whiskers",
      isSold: false,
      category: "Cat",
      subcategory: "Bengal",
      description: "An active and playful cat",
      isVerified: false,
      price: 900,
      images_url:
        "https://i.pinimg.com/474x/c7/37/57/c73757e043118b0630e681eecb51ab20.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Charlie",
      isSold: false,
      category: "Dog",
      subcategory: "Beagle",
      description: "A curious and friendly dog",
      isVerified: true,
      price: 1100,
      images_url:
        "https://i.pinimg.com/474x/04/0f/e5/040fe5701abfba60935922c629eb7208.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Luna",
      isSold: true,
      category: "Cat",
      subcategory: "Sphynx",
      description: "A hairless and affectionate cat",
      isVerified: true,
      price: 1300,
      images_url:
        "https://i.pinimg.com/474x/5e/40/5b/5e405bed65968612da0f76e43cb3e889.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Max",
      isSold: false,
      category: "Dog",
      subcategory: "Bulldog",
      description: "A calm and courageous dog",
      isVerified: false,
      price: 950,
      images_url:
        "https://i.pinimg.com/474x/ed/78/c4/ed78c40c7883d049bd33fee83c6bbad7.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
    {
      name: "Bella",
      isSold: false,
      category: "Cat",
      subcategory: "Ragdoll",
      description: "A gentle and affectionate cat",
      isVerified: true,
      price: 1400,
      images_url:
        "https://i.pinimg.com/474x/a0/28/4c/a0284c7e489557338525d2a652520d02.jpg",
      vaccine_book_url: "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
    },
]
// TODO: set value of your accesstoken that available in your db
const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwZWx0ZXIiLCJzdWIiOiJhY2NvdW50IiwiZXhwIjoxNzMyODY0MTgzLCJuYmYiOjE3MzI2MDQ5ODMsImlhdCI6MTczMjYwNDk4MywiVXNlcklkIjozfQ.LNhKlEMk1jk21kH2f394XrPd3Ez_nlZ74dl2Z3OfIAU"
export default function () {
  let url = "http://127.0.0.1:8080/product/add"
  let params = {
    headers: {
      "Content-Type": "application/json",
      "cookie": `access_token=${access_token}`,
    },
  }

  //   const temp = {
  //     termrateId: (Math.floor(Math.random() * 1) + 1).toString(),
  //     gameId: "1",
  //     secretKey: secretKeys[Math.floor(Math.random() * secretKeys.length)],
  //     couponId: "",
  //     UID: "myuuid",
  //   }
  //   let encodedParams = encodeParams(temp)
  for (const pet of petmock) {
      let res = http.post(url, JSON.stringify(pet), params)
      console.log(`Response status: ${res.status}, body: ${res.body}`);

      check(res, {
        "status was 200": (r) => r.status === 201,
      })
  }
}
