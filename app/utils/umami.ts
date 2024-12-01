import { getClient } from "@umami/api-client";
import axios from "axios";

// async function getAccessToken() {
//   const response = await axios("https://cloud.umami.is/api/auth/login", {
//     headers: {
//       accept: "application/json",
//       "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//       authorization:
//         "Bearer xcRZzuqzzIAPQLQwnrzb0FmcOvd1zvEugsPmTQMTnOkE6BWlYp0f5zTOtRg+t1Y3rpjmzH3yuadHa6HLQqaBDQtPcYDiHiWSuDk8xnMhn9g+P6DDFu1Ygrgz9NcgPBY4AlL4BkurkI4C2KZ2QspNo0ffz4+9zA3iy/KD8iq4gCKZFOul2MlIgcZf+gRHWc9cypZh4yqWu6MvLNIHe0DSMwc60cefZI3lG6Q1zNkOwG2OUq4bcDfodF3bDsTDDoCVKIs1cDs1gLtiPXCnV7QSitixOk+OHAzDdjU7dYmhaxvqE0dItCn0ehs9IUV4xLQEX/nefBvK6WwiOg9EFLI7ZdoubPY9XznleTFUyw==",
//       "cache-control": "max-age=0",
//       "content-type": "application/json",
//       priority: "u=1, i",
//       "sec-ch-ua":
//         '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"Windows"',
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "x-umami-share-token": "undefined",
//     },
//     Referrer: "https://cloud.umami.is/login",
// 	Cookie: 'AspxAutoDetectCookieSupport=1',
//     referrerPolicy: "strict-origin-when-cross-origin",
//     body: `{"email":"${process.env.UMAMI_EMAIL}","password":"${process.env.UMAMI_PASSWORD}"}`,
//     method: "POST",
//     credentials: "include",
//   });
//   return response.json();
// }

export async function getAnalytics() {
  const client = getClient();

  const { ok, data, status, error } = await client.getWebsiteStats(
    "6aa87951-0901-491a-bad4-df0e86e21eba",
    { startAt: 1721386433000, endAt: 1733054236000 }
  );
  console.log(data);
  return data?.pageviews?.value;
}
