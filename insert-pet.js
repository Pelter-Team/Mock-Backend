import http from "k6/http";
import { check, sleep } from "k6";
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
};

function encodeParams(params) {
  const encodedParams = [];
  for (const key in params) {
    encodedParams.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
  }
  return encodedParams.join("&");
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
    image_url:
      "https://i.pinimg.com/474x/fa/98/82/fa988290ed5db0af24e733cdc5522158.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Fluffy",
    isSold: true,
    category: "Cat",
    subcategory: "Siamese",
    description: "A calm and affectionate cat",
    isVerified: true,
    price: 800,
    image_url:
      "https://i.pinimg.com/736x/35/91/02/359102065bcbcc5cfac4db0f8135b94e.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Buddy",
    isSold: false,
    category: "Dog",
    subcategory: "Labrador",
    description: "A loyal and friendly dog",
    isVerified: false,
    price: 1200,
    image_url:
      "https://i.pinimg.com/474x/0d/2f/57/0d2f57e33779c96833ceb2f2ed8bc819.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Mittens",
    isSold: false,
    category: "Cat",
    subcategory: "Maine Coon",
    description: "A large and fluffy cat",
    isVerified: true,
    price: 1500,
    image_url:
      "https://i.pinimg.com/474x/75/9b/51/759b51ea919d0e5852f3c77857062caa.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Rex",
    isSold: true,
    category: "Dog",
    subcategory: "German Shepherd",
    description: "A protective and intelligent dog",
    isVerified: true,
    price: 2000,
    image_url:
      "https://i.pinimg.com/474x/c3/44/1c/c3441ca5ac48b06f90450f04fb3f9a5c.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Whiskers",
    isSold: false,
    category: "Cat",
    subcategory: "Bengal",
    description: "An active and playful cat",
    isVerified: false,
    price: 900,
    image_url:
      "https://i.pinimg.com/736x/04/19/e6/0419e69ccfdb69a532e65f18fd2fd405.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Charlie",
    isSold: false,
    category: "Dog",
    subcategory: "Beagle",
    description: "A curious and friendly dog",
    isVerified: true,
    price: 1100,
    image_url:
      "https://i.pinimg.com/474x/04/0f/e5/040fe5701abfba60935922c629eb7208.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Luna",
    isSold: true,
    category: "Cat",
    subcategory: "Sphynx",
    description: "A hairless and affectionate cat",
    isVerified: true,
    price: 1300,
    image_url:
      "https://i.pinimg.com/736x/b0/35/c4/b035c471eb0fa5d2bca04706288b3587.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Max",
    isSold: false,
    category: "Dog",
    subcategory: "Bulldog",
    description: "A calm and courageous dog",
    isVerified: false,
    price: 950,
    image_url:
      "https://i.pinimg.com/474x/ed/78/c4/ed78c40c7883d049bd33fee83c6bbad7.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Bella",
    isSold: false,
    category: "Cat",
    subcategory: "Ragdoll",
    description: "A gentle and affectionate cat",
    isVerified: true,
    price: 1400,
    image_url:
      "https://i.pinimg.com/736x/ff/34/d6/ff34d6da0fbc8e3c5c060ce4636cbccd.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Daisy",
    isSold: true,
    category: "Dog",
    subcategory: "Poodle",
    description: "A smart and elegant dog",
    isVerified: true,
    price: 1200,
    image_url:
      "https://i.pinimg.com/474x/8e/3b/7e/8e3b7e6c8e4f9c6f3f3c8c8e3b7e6c8.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Buddy",
    isSold: false,
    category: "Dog",
    subcategory: "Golden Retriever",
    description: "A friendly and loyal dog",
    isVerified: true,
    price: 1500,
    image_url:
      "https://i.pinimg.com/474x/7e/3b/7e/7e3b7e6c8e4f9c6f3f3c8c8e3b7e6c8.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Mittens",
    isSold: false,
    category: "Cat",
    subcategory: "Siamese",
    description: "A curious and vocal cat",
    isVerified: true,
    price: 800,
    image_url:
      "https://i.pinimg.com/736x/dd/1f/28/dd1f2860df57d06da44fe2519b90d801.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Coco",
    isSold: true,
    category: "Dog",
    subcategory: "Chihuahua",
    description: "A small and lively dog",
    isVerified: false,
    price: 600,
    image_url:
      "https://i.pinimg.com/474x/ed/78/c4/ed78c40c7883d049bd33fee83c6bbad7.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Oliver",
    isSold: false,
    category: "Cat",
    subcategory: "Persian",
    description: "A fluffy and calm cat",
    isVerified: true,
    price: 950,
    image_url:
      "https://i.pinimg.com/736x/50/03/f9/5003f948e71c5d6d25b1299513c75a65.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Rocky",
    isSold: true,
    category: "Dog",
    subcategory: "Boxer",
    description: "A strong and energetic dog",
    isVerified: true,
    price: 1300,
    image_url:
      "https://i.pinimg.com/474x/5e/40/5b/5e405bed65968612da0f76e43cb3e889.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Sophie",
    isSold: false,
    category: "Cat",
    subcategory: "British Shorthair",
    description: "A calm and affectionate cat",
    isVerified: true,
    price: 1200,
    image_url:
      "https://i.pinimg.com/736x/ad/82/5d/ad825d2d0362ac0bba93362b56e6d1db.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Leo",
    isSold: false,
    category: "Dog",
    subcategory: "Shih Tzu",
    description: "A playful and friendly dog",
    isVerified: true,
    price: 1100,
    image_url:
      "https://i.pinimg.com/736x/4a/e5/ec/4ae5ec2c348bb19c5848234300e3a5b6.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Bella",
    isSold: false,
    category: "Cat",
    subcategory: "Maine Coon",
    description: "A large and sociable cat",
    isVerified: true,
    price: 1500,
    image_url:
      "https://i.pinimg.com/736x/06/cc/a7/06cca7059eebaaaf9e204449a89c4197.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Max",
    isSold: true,
    category: "Dog",
    subcategory: "Golden Retriever",
    description: "A friendly and intelligent dog",
    isVerified: true,
    price: 1300,
    image_url:
      "https://i.pinimg.com/736x/54/c4/5a/54c45a07cc6bb8e2c9453aaa5aada1ae.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Luna",
    isSold: false,
    category: "Cat",
    subcategory: "Sphynx",
    description: "A hairless and affectionate cat",
    isVerified: true,
    price: 1800,
    image_url:
      "https://i.pinimg.com/736x/da/ac/27/daac27293054ad829a6174b0f8a07d75.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Charlie",
    isSold: true,
    category: "Dog",
    subcategory: "Bulldog",
    description: "A calm and courageous dog",
    isVerified: true,
    price: 1400,
    image_url:
      "https://i.pinimg.com/736x/f1/2c/ea/f12cea73cfda28ff8aafeb51c6676bb7.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Daisy",
    isSold: false,
    category: "Cat",
    subcategory: "Bengal",
    description: "An active and playful cat",
    isVerified: true,
    price: 1600,
    image_url:
      "https://i.pinimg.com/736x/f7/8c/8d/f78c8df407482fad8bc2506c7a7cf630.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Rocky",
    isSold: true,
    category: "Dog",
    subcategory: "Poodle",
    description: "A smart and energetic dog",
    isVerified: true,
    price: 1700,
    image_url:
      "https://i.pinimg.com/736x/3c/fb/c8/3cfbc8a2fb28e2c7e9b69613f541fb67.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Molly",
    isSold: false,
    category: "Cat",
    subcategory: "Ragdoll",
    description: "A gentle and affectionate cat",
    isVerified: true,
    price: 1900,
    image_url:
      "https://i.pinimg.com/736x/21/c3/33/21c33330ff2db4045fda6188fbf79dc6.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Buddy",
    isSold: true,
    category: "Dog",
    subcategory: "Beagle",
    description: "A curious and friendly dog",
    isVerified: true,
    price: 1300,
    image_url:
      "https://i.pinimg.com/736x/86/66/00/866600bad20c99547bb03420a18d4b67.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
  {
    name: "Chloe",
    isSold: false,
    category: "Cat",
    subcategory: "Scottish Fold",
    description: "A sweet and playful cat",
    isVerified: true,
    price: 1600,
    image_url:
      "https://i.pinimg.com/736x/5e/40/5b/5e405bed65968612da0f76e43cb3e889.jpg",
    vaccine_book_url:
      "https://www.starwoodpet.com/hs-fs/hubfs/Acceptable%20Rabies%20Cert.png?width=576&height=657&name=Acceptable%20Rabies%20Cert.png",
  },
];

// TODO: set value of your accesstoken that available in your db
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwZWx0ZXIiLCJzdWIiOiJhY2NvdW50IiwiZXhwIjoxNzMyODk2NjIxLCJuYmYiOjE3MzI2Mzc0MjEsImlhdCI6MTczMjYzNzQyMSwiVXNlcklkIjoxfQ.qTK0iWyPdW4_IN5gSWtIoBLb5VJMpCm7MjkdEkzVLKU";
export default function () {
  let url = "http://127.0.0.1:8080/product/add";
  let params = {
    headers: {
      "Content-Type": "application/json",
      cookie: `access_token=${access_token}`,
    },
  };

  //   const temp = {
  //     termrateId: (Math.floor(Math.random() * 1) + 1).toString(),
  //     gameId: "1",
  //     secretKey: secretKeys[Math.floor(Math.random() * secretKeys.length)],
  //     couponId: "",
  //     UID: "myuuid",
  //   }
  //   let encodedParams = encodeParams(temp)
  for (const pet of petmock) {
    let res = http.post(url, JSON.stringify(pet), params);
    console.log(`Response status: ${res.status}, body: ${res.body}`);

    check(res, {
      "status was 200": (r) => r.status === 201,
    });
  }
}
