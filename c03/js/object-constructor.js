var hotel = new Object();

hotel.name='Park';
hotel.rooms=120;
hotel.booked=77;

hotel.checkAvailablility = function(){
    return this.rooms-this.booked;
};

var elName = document.getElementByID('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
