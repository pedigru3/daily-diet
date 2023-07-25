import { MealInterface } from "src/entities/MealEntity";

export const data:MealInterface[] = [
  {
    id: "1",
    title: "Café da manhã saudável",
    type: "GOOD",
    description: "Um delicioso café da manhã com frutas frescas, iogurte e granola.",
    createdAt: new Date("2023-07-23T08:00:00")
  },
  {
    id: "2",
    title: "Almoço equilibrado",
    type: "GOOD",
    description: "Um almoço nutritivo com salada, arroz integral e filé de frango grelhado.",
    createdAt: new Date("2023-07-23T12:30:00")
  },
  {
    id: "3",
    title: "Lanche da tarde indulgente",
    type: "BAD",
    description: "Um lanche recheado com bolos e doces.",
    createdAt: new Date("2023-07-24T16:00:00")
  },
  {
    id: "4",
    title: "Jantar leve",
    type: "GOOD",
    description: "Um jantar leve com sopa de legumes e uma porção de salada.",
    createdAt: new Date("2023-07-24T19:00:00")
  },
  {
    id: "5",
    title: "Sobremesa saborosa",
    type: "BAD",
    description: "Uma sobremesa deliciosa e calórica com sorvete, chocolate e chantilly.",
    createdAt: new Date("2023-07-22T20:30:00")
  },
  {
    id: "6",
    title: "Ceia simples",
    type: "GOOD",
    description: "Uma ceia simples com uma fruta e um chá.",
    createdAt: new Date("2023-07-22T22:00:00")
  }
];