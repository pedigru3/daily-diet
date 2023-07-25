export function stringToDate(dateStr: string, timeStr: string): Date {

    const [day, month, year] = dateStr.split(".");
    const [hours, minutes] = timeStr.split(":");
  
    // Verificando se os valores obtidos são numéricos
    if (isNaN(Number(day)) || isNaN(Number(month)) || isNaN(Number(year)) ||
        isNaN(Number(hours)) || isNaN(Number(minutes))) {
      throw Error('Valores não numéricos')
    }
  
    const convertedDate = new Date(Number(`20${year}`), Number(month) - 1, Number(day), Number(hours), Number(minutes));
  
    // Verificando se o objeto Date é válido
    if (isNaN(convertedDate.getTime())) {
      throw Error('Data ou hora inválida')
    }
  
    return convertedDate;
}