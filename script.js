function countdown(){
    var dateEnd = new Date('2023-01-01 00:00:00'), //variable with date end countdown
    dateNow = new Date(), //variable with date right now start countdown
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000); //variable change big num to small


    //* Add variables dateleft - time left(оставшееся время), dateTemp - calculates the difference for days, then for hours, for minutes and for seconds
    var dateLeft = date,
        dateTemp = 0;


    //! Дни  ======================================================================================================
    dateTemp = Math.floor(dateLeft / (24*60*60)); // the rest of the time is / to hours(24)*minutes(60)*seconds(60)
    dateLeft -= dateTemp *24*60*60; //Counts the difference

    if (dateTemp < 10) dateTemp = '0' + dateTemp; //If number is < 10, then + 0 in the start of number 00, 01, 02
    document.querySelector('#days').innerHTML = dateTemp; //Finds an element by id and changes its date


    //! Часы  ======================================================================================================
    dateTemp = Math.floor(dateLeft / (60*60));
    dateLeft -= dateTemp *60*60;

    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#hours').innerHTML = dateTemp;


    //! Минуты  ======================================================================================================
    dateTemp = Math.floor(dateLeft / 60);
    dateLeft -= dateTemp *60;

    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#minutes').innerHTML = dateTemp;


    //! Секунды  ======================================================================================================
    dateTemp = Math.floor(dateLeft);
    dateLeft -= dateTemp;

    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#seconds').innerHTML = dateTemp;
}

setInterval(countdown, 1000); // Changes once per second