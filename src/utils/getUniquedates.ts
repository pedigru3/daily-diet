import { dateFormat } from "./dateFormat"

export function getUniqueDates(dates: Date[]){
  let uniqueDates: string[] = []

  dates.sort((a, b) => b.getTime() - a.getTime());
  
  const datesFormated = dates.map((date) => dateFormat(date))
  datesFormated.forEach((data) => {
    if (!uniqueDates.includes(data)){
      return uniqueDates.push(data)
    }
  })

  return uniqueDates
}