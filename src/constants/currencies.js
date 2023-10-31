import AUD from "@/assets/icons/australian-dollar.svg"
import BTC from "@/assets/icons/bitcoin.svg"
import CAD from "@/assets/icons/canadian-dollar.svg"
import USD from "@/assets/icons/dollar.svg"
import EUR from "@/assets/icons/euro.svg"
import GBP from "@/assets/icons/libra.svg"
import ARS from "@/assets/icons/peso.svg"
import CNY from "@/assets/icons/won.svg"
import JPY from "@/assets/icons/yen.svg"

import { getCodes } from "../utils/getCodes"

export const currencies = [
  {
    name: "Commercial Dollar",
    imageSrc: USD,
    code: "USD",
  },
  {
    name: "Argentine Peso",
    imageSrc: ARS,
    code: "ARS",
  },
  {
    name: "Canadian Dollar",
    imageSrc: CAD,
    code: "CAD",
  },
  {
    name: "Yen",
    imageSrc: JPY,
    code: "JPY",
  },
  {
    name: "Australian Dollar",
    imageSrc: AUD,
    code: "AUD",
  },
  {
    name: "Yuan",
    imageSrc: CNY,
    code: "CNY",
  },
  {
    name: "Euro",
    imageSrc: EUR,
    code: "EUR",
  },
  {
    name: "Bitcoin",
    imageSrc: BTC,
    code: "BTC",
  },
  {
    name: "Libra",
    imageSrc: GBP,
    code: "GBP",
  },
]

export const currenciesCodes = getCodes(currencies)
