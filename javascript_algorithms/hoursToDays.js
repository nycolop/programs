export function changeHoursToDays(hours) {
    let result = {
      hours,
      days: null
    };
    
    if (hours >= 24) {
      let finalDays = 0;
      for (let i = 24; i <= days; i+=24) {
        finalDays++;
      }
      result.days = finalDays;
    }
  
    return result;
}