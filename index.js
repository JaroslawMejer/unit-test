const formatDate = (timeInSeconds) => {
  	timeInSeconds = Number(timeInSeconds);
    var h = Math.floor(timeInSeconds / 3600);
    var m = Math.floor(timeInSeconds % 3600 / 60);
    var s = Math.floor(timeInSeconds % 3600 % 60);

    var hDisplay = h > 0 ? h + ((m == 0 && s == 0) ? "h" : "h ") : "";
    var mDisplay = m > 0 ? m + (s == 0 ? "m" : "m ") : "";
    var sDisplay = s > 0 ? s + "s" : ((m > 0 || h > 0) ? "" : "0s");
    return hDisplay + mDisplay + sDisplay;
}

module.exports = formatDate;