// test valid input information
function testInput() {
    var n1 = document.getElementById("Name");
    var n2 = document.getElementById("Email");
    var n3 = document.getElementById("Phone");
    var n4 = document.getElementById("Message");
    if (n1.value == "" || (n2.value == "" && n3.value == "")) {
        {
            alert("Please fill in the blank");
            return false;
        }
    } else {
        return true;
    }
}
// JavaScript map
function initMap() {
    var num = new google.maps.LatLng(10.044223, 105.760802);
    var myOptions = {
        zoom: 16,
        center: num,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    var mymap = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
        position: num,
        map: mymap,
        title: "SmartStore Company !",
    });
}