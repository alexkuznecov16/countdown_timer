function countdown(){
    var dateEnd = new Date('2023-01-01 00:00:00'), //variable with date end countdown
    dateNow = new Date(), //variable with date right now start countdown
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000); //variable change big num to small


    //* Add variables dataleft - time left(оставшееся время), dataTemp - calculates the difference for days, then for hours, for minutes and for seconds
    var dataLeft = date,
        dataTemp = 0;


    //! Дни  ======================================================================================================
    dataTemp = Math.floor(dataLeft / (24*60*60)); // the rest of the time is / to hours(24)*minutes(60)*seconds(60)
    dataLeft -= dataTemp *24*60*60; //Counts the difference

    if (dataTemp < 10) dataTemp = '0' + dataTemp; //If number is < 10, then + 0 in the start of number 00, 01, 02
    document.querySelector('#days').innerHTML = dataTemp; //Finds an element by id and changes its data


    //! Часы  ======================================================================================================
    dataTemp = Math.floor(dataLeft / (60*60));
    dataLeft -= dataTemp *60*60;

    if (dataTemp < 10) dataTemp = '0' + dataTemp;
    document.querySelector('#hours').innerHTML = dataTemp;


    //! Минуты  ======================================================================================================
    dataTemp = Math.floor(dataLeft / 60);
    dataLeft -= dataTemp *60;

    if (dataTemp < 10) dataTemp = '0' + dataTemp;
    document.querySelector('#minutes').innerHTML = dataTemp;


    //! Секунды  ======================================================================================================
    dataTemp = Math.floor(dataLeft);
    dataLeft -= dataTemp;

    if (dataTemp < 10) dataTemp = '0' + dataTemp;
    document.querySelector('#seconds').innerHTML = dataTemp;
}

setInterval(countdown, 1000); // Changes once per second