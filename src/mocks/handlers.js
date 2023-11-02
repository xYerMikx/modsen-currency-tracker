import { http, HttpResponse } from "msw"

import MockBanks from "./data/mockBanks.json"
import MockByBase from "./data/mockByBase.json"
import MockChartData from "./data/mockChartData.json"
import MockCurrencies from "./data/mockCurrencies.json"

export const handlers = [
  http.get("/base", () => {
    return HttpResponse.json(MockByBase)
  }),
  http.get("/currencies", () => {
    return HttpResponse.json(MockCurrencies)
  }),
  http.get("/chart", () => {
    return HttpResponse.json(MockChartData.data)
  }),
  http.get("/banks", () => {
    return HttpResponse.json(MockBanks)
  }),
]
