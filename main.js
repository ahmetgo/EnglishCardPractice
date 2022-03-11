const inforWord = $("#inforWord");
const mostWord = $("#mostWord");
const topCon = $("#topCon");
const midCon = $("#midCon");
const quesSection = $(".question-area");
const back = $(".back");
const nextWord = $(".next-word");
const addFavorites = $(".add-favorites");
const list = $(".list");
const card = $(".card");
const cardFront = $("#cardFront");
const cardBack = $("#cardBack");
const informaticsNext = $("#informaticsNext");
const moviesNext = $("#moviesNext");


quesSection.hide();
inforWord.click(function(){
    hideEl();
    moviesNext.hide();
    informaticsNext.show();
    quesSection.show();
    reset();
    informaticsNext.click(function(){
        cardFront.css("z-index","1");
        cardBack.css("z-index","0");

        $.getJSON("json/all.json", function (data){
            const rand = Math.floor(Math.random() * 9239);
    
            for (var i = 0; i <= data.length; i++) {
                if (i == rand) {
                    $("#cardFront .word p").text(data[i].İngilizce);
                    $("#cardBack .word p").text(data[i].Türkçe);
                    
                }
                
                
            }
        })
    })

    
})
mostWord.click(function(){
    hideEl();
    informaticsNext.hide();
    moviesNext.show();
    quesSection.show();
    reset();
    moviesNext.click(function(){
        cardFront.css("z-index","1");
        cardBack.css("z-index","0");

        $.getJSON("series-most-used.json", function (data){
            const rand = Math.floor(Math.random() * 5000);
    
            for (var i = 0; i <= data.length; i++) {
                if (i == rand) {
                    $("#cardFront .word p").text(data[i].Kelime);
                    $("#cardBack .word p").text(data[i].Anlamı);
                    
                }
                 
            }
           
        })
     
    })
})


cardFront.click(function(){
    $(this).css("z-index","0");
    cardBack.css("z-index","1");
    
})
cardBack.click(function(){
    $(this).css("z-index","0");
    cardFront.css("z-index","1");
})


back.click(function(){
    hideQues();
    midCon.show();
    topCon.show();
})

var sayac = window.localStorage.length;

addFavorites.click(function(){
    sayac++;
    var words = $("#cardFront .word p").html() +" - "+$("#cardBack .word p").html();
    window.localStorage.setItem(sayac,words);  

    const listOpen = "<li>"+window.localStorage.getItem(`${sayac}`)+"</li>";
    $(".favorites ul").append(listOpen);

});
for(var i = 1; i <= window.localStorage.length; i++){
    const listOpen = "<li>"+window.localStorage.getItem(`${i}`)+"</li>";
    $(".favorites ul").append(listOpen);
}

//tümünü sil
$(".delete-all").click(function(){
    window.localStorage.clear();
    $(".favorites ul li").remove();
    sayac = 0;
})

list.click(function(){
    $(".favorites").toggleClass("favorites-toggle");
})
function hideEl(){
    midCon.hide();
    topCon.hide();
}
function reset(){
    $(".card .word p").html("Kelime");

}
function hideQues(){
    quesSection.hide();
}
console.log($('#cartctdata li').text());

