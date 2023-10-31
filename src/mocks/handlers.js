import { http, HttpResponse } from "msw"

import { mockByBase, mockCurrencies } from "@/constants/mocks"

export const handlers = [
  http.get("/base", () => {
    return HttpResponse.json(mockByBase)
  }),
  http.get("/currencies", () => {
    return HttpResponse.json(mockCurrencies)
  }),
]
