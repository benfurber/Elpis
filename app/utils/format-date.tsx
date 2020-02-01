import moment from "moment";
import "moment/locale/pt-br";

const capitaliseTime = time => {
  if (typeof time !== "string") return time;
  return time.charAt(0).toUpperCase() + time.slice(1);
};

const formatDate = (date: Date, capitalise = true) => {
  const timeSince = moment(date)
    .locale("pt-br")
    .fromNow();

  if (capitalise) {
    return capitaliseTime(timeSince);
  }

  return timeSince;
};

export { formatDate };
