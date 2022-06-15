import { format } from "date-fns";

const d = Date.parse("2022-04-16T18:31:00+02:00");
const outputDate = `${format(d, "yyyy-MM-dd'T'HH:mm")}`;

const ourTime = document.getElementById('ourTime');

ourTime.innerHTML = outputDate;

console.log(outputDate);