// AJAX - Asynchronous JavaScript and XML

// Ajax Requests with JQuery

function fetchRandomDogImage() {

    // Method 1

    // var xhrRequest = new XMLHttpRequest();
    // xhrRequest.onload = function() {
    //     console.log(xhrRequest.response);
    //     var responseJSON = JSON.parse(xhrRequest.response);
    //     var imgURL = responseJSON.message;
    //     $('#dog-image').attr('src', imgURL);
    // };
    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    // xhrRequest.send();

    // Method 2

    // $.ajax({
    //     url: "https://dog.ceo/api/breeds/image/random",
    //     method: "GET",
    //     success: function(data) {
    //         var imgURL = data.message;
    //         $('#dog-image').attr('src', imgURL);
    //     }
    // });

    // Method 3

    $.get("https://dog.ceo/api/breeds/image/random",
        function(data) {
            var imgURL = data.message;
            $('#dog-image').attr('src', imgURL);
        }
    ).fail(function(xhr, textStatus, errorThrown) {
        console.log("Request Failed");
        alert("Request failed")
    });


};



$('#fetch-dog-image-button').click(fetchRandomDogImage);