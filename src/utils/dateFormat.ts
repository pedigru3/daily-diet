export function dateFormat(date: Date){
  
  function addZero(value: number) {
    return value < 10 ? '0' + value : value;
  }

  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = addZero(date.getFullYear() % 100);

  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate
}

export function formatDateDDMMYYY(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês é base 0, então adicionamos 1
  const year = date.getFullYear().toString();

  const formattedDate =  `${day}/${month}/${year}`;
  return formattedDate
}