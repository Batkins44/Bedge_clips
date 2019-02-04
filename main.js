$(document).ready(function() {
    $(".vid-btn").click(() => {
        let vidID = event.target.id;

        $('#goal1').removeClass('clicked')
        $('#goal2').removeClass('clicked')
        $('#goal3').removeClass('clicked')
        $('#goal4').removeClass('clicked')

        $(`#${vidID}`).addClass('clicked');

        let url = `./gifs/${vidID}.gif`
        $("#player").html(
            `<img src="${url}" class="rlVid">`
        )
        
    })

$("#goals-btn").click(() => {
    console.log("goals")
    $('#vid-selector').html(`<div id="goals-vids" class="category-select">
    <button id="goal1" class="vid-btn clicked">
        1
    </button>
    <button id="goal2" class="vid-btn">
        2
    </button>
    <button id="goal3" class="vid-btn">
        3
    </button>
    <button id="goal4" class="vid-btn">
        4
    </button>
    </div>`)

    $("#player").html(
        `<img src="./gifs/goal1.gif" class="rlVid">`
    )

    $('#goals-btn').addClass('clicked');
    $('#saves-btn').removeClass('clicked');
    $('#plays-btn').removeClass('clicked');

    $(".vid-btn").click(() => {
        let vidID = event.target.id;
        $('#goal1').removeClass('clicked')
        $('#goal2').removeClass('clicked')
        $('#goal3').removeClass('clicked')
        $('#goal4').removeClass('clicked')

        $(`#${vidID}`).addClass('clicked');

        let url = `./gifs/${vidID}.gif`
        console.log(url);
        $("#player").html(
            `<img src="${url}" class="rlVid">`
        )
        
    })
})

$("#plays-btn").click(() => {
    console.log("plays")
    $('#vid-selector').html(`<div id=plays-vids class="category-select">
    <button id="great_play1" class="vid-btn clicked ">
        1
    </button>
    <button id="great_play2" class="vid-btn ">
        2
    </button>
    <button id="great_play3" class="vid-btn ">
        3
    </button>
    <button id="great_play4" class="vid-btn ">
        4
    </button>
    
    </div>`)

    $("#player").html(
        `<img src="./gifs/great_play1.gif" class="rlVid">`
    )

    $('#plays-btn').addClass('clicked');
    $('#saves-btn').removeClass('clicked');
    $('#goals-btn').removeClass('clicked');


    $(".vid-btn").click(() => {
        let vidID = event.target.id;

        $('#great_play1').removeClass('clicked')
        $('#great_play2').removeClass('clicked')
        $('#great_play3').removeClass('clicked')
        $('#great_play4').removeClass('clicked')

        $(`#${vidID}`).addClass('clicked');
        let url = `./gifs/${vidID}.gif`
        console.log(url);
        $("#player").html(
            `<img src="${url}" class="rlVid">`
        )
        
    })
})

$("#saves-btn").click(() => {
    console.log("saves")
    $("#vid-selector").html(`<div id="saves-vids" class="category-select">
    <button id="save1" class="vid-btn clicked">
        1
    </button>
    <button id="save2" class="vid-btn">
        2
    </button>
    </div>`);

    $("#player").html(
        `<img src="./gifs/save1.gif" class="rlVid">`
    )

    $('#saves-btn').addClass('clicked');
    $('#goals-btn').removeClass('clicked');
    $('#plays-btn').removeClass('clicked');

    $(".vid-btn").click(() => {
        let vidID = event.target.id;

        $('#save1').removeClass('clicked')
        $('#save2').removeClass('clicked')

        $(`#${vidID}`).addClass('clicked');
        let url = `./gifs/${vidID}.gif`
        console.log(url);
        $("#player").html(
            `<img src="${url}" class="rlVid">`
        )
        
    })
})

})

