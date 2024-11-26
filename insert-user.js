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

const usermock = [
  {
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    password: "password123",
    role: "admin",
    phone_number: "123-456-7890",
  },
  {
    name: "Jane",
    surname: "Smith",
    email: "jane.smith@example.com",
    password: "password123",
    role: "admin",
    phone_number: "234-567-8901",
  },
  {
    name: "Alice",
    surname: "Johnson",
    email: "alice.johnson@example.com",
    password: "password123",
    role: "user",
    phone_number: "345-678-9012",
  },
  {
    name: "Bob",
    surname: "Brown",
    email: "bob.brown@example.com",
    password: "password123",
    role: "user",
    phone_number: "456-789-0123",
  },
  {
    name: "Charlie",
    surname: "Davis",
    email: "charlie.davis@example.com",
    password: "password123",
    role: "user",
    phone_number: "567-890-1234",
  },
  {
    name: "David",
    surname: "Wilson",
    email: "david.wilson@example.com",
    password: "password123",
    role: "user",
    phone_number: "678-901-2345",
  },
  {
    name: "Eva",
    surname: "Garcia",
    email: "eva.garcia@example.com",
    password: "password123",
    role: "user",
    phone_number: "789-012-3456",
  },
  {
    name: "Frank",
    surname: "Martinez",
    email: "frank.martinez@example.com",
    password: "password123",
    role: "user",
    phone_number: "890-123-4567",
  },
  {
    name: "Grace",
    surname: "Hernandez",
    email: "grace.hernandez@example.com",
    password: "password123",
    role: "user",
    phone_number: "901-234-5678",
  },
  {
    name: "Henry",
    surname: "Lopez",
    email: "henry.lopez@example.com",
    password: "password123",
    role: "user",
    phone_number: "012-345-6789",
  },
  {
    name: "Isabella",
    surname: "Gonzalez",
    email: "isabella.gonzalez@example.com",
    password: "password123",
    role: "user",
    phone_number: "123-456-7891",
  },
  {
    name: "Jack",
    surname: "Wilson",
    email: "jack.wilson@example.com",
    password: "password123",
    role: "user",
    phone_number: "234-567-8902",
  },
  {
    name: "Kathy",
    surname: "Anderson",
    email: "kathy.anderson@example.com",
    password: "password123",
    role: "user",
    phone_number: "345-678-9013",
  },
  {
    name: "Leo",
    surname: "Thomas",
    email: "leo.thomas@example.com",
    password: "password123",
    role: "user",
    phone_number: "456-789-0124",
  },
  {
    name: "Mia",
    surname: "Taylor",
    email: "mia.taylor@example.com",
    password: "password123",
    role: "user",
    phone_number: "567-890-1235",
  },
  {
    name: "Noah",
    surname: "Moore",
    email: "noah.moore@example.com",
    password: "password123",
    role: "user",
    phone_number: "678-901-2346",
  },
  {
    name: "Olivia",
    surname: "Jackson",
    email: "olivia.jackson@example.com",
    password: "password123",
    role: "user",
    phone_number: "789-012-3457",
  },
  {
    name: "Paul",
    surname: "White",
    email: "paul.white@example.com",
    password: "password123",
    role: "user",
    phone_number: "890-123-4568",
  },
  {
    name: "Quinn",
    surname: "Harris",
    email: "quinn.harris@example.com",
    password: "password123",
    role: "user",
    phone_number: "901-234-5679",
  },
  {
    name: "Rachel",
    surname: "Clark",
    email: "rachel.clark@example.com",
    password: "password123",
    role: "user",
    phone_number: "012-345-6780",
  },
  {
    name: "Sam",
    surname: "Lewis",
    email: "sam.lewis@example.com",
    password: "password123",
    role: "user",
    phone_number: "123-456-7892",
  },
];
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
  for (const pet of petmock) {
    let res = http.post(url, JSON.stringify(pet), params);
    console.log(`Response status: ${res.status}, body: ${res.body}`);

    check(res, {
      "status was 200": (r) => r.status === 201,
    });
  }
}
