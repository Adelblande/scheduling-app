export function getDateEnd(washingType: string, dateIni: Date) {
  if (washingType === "completa") {
    return new Date(dateIni.setMinutes(dateIni.getMinutes() + 45));
  } else {
    return new Date(dateIni.setMinutes(dateIni.getMinutes() + 30));
  }
}
