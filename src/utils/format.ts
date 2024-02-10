import Moment from "moment";
Moment.locale("pt");

export function formatDate(date: Date) {
  return Moment(date).format("DD/MM/YYYY");
}

export function formatHour(date: Date) {
  return Moment(date).format("HH:mm");
}
