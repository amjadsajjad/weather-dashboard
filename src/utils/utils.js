function formatDateAndTime(seconds,type) {
    const milliseconds = seconds * 1000;
    const dateObject = new Date(milliseconds);

    let options

    if (type === 'time') {
        options = {
            hour: 'numeric',
            minute: 'numeric'
        }

    }
    else if(type === 'date') {
        options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    }



    return new Intl.DateTimeFormat("en-us", options).format(dateObject)
}

export { formatDateAndTime };
