export const getRelativeTimestamp = (dateString: string) => {
  const givenDateTime = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - givenDateTime.getTime();

  // Convert the time difference to seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  let timeDiff: string = '';

  if (weeks > 0) {
    weeks === 1 ? timeDiff = weeks.toString() + " week" : timeDiff = weeks.toString() + " weeks"
  }
  if (weeks === 0) {
    days === 1 ? timeDiff = days.toString() + " day" : timeDiff = days.toString() + " days";
  }
  if (days === 0) {
    timeDiff = (hours % 24).toString() + "h";
  }
  if (hours === 0) {
    timeDiff = (minutes % 60).toString() + "m";
  }
  if (minutes === 0) {
    timeDiff = (seconds % 60).toString() + "s";
  }

  return timeDiff;
}