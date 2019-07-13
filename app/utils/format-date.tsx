import moment from "moment";
import "moment/locale/pt-br";

const capitalise = time => {
  if (typeof time !== "string") return time;
  return time.charAt(0).toUpperCase() + time.slice(1);
};

const formatDate = (date: Date) => {
  const timeSince = moment(date)
    .locale("pt-br")
    .fromNow();
  return capitalise(timeSince);
};

export { formatDate };
