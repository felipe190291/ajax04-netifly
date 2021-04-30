

var showFriend=function (){
     $("#lista").empty();
    $.get("http://localhost:5000/amigos",function(data){
        data.forEach(amigo => {
            $("#lista").append("<h5>"+amigo.name+"</h5>")

        });
    })
}
$("#boton").click(showFriend)

$("#search").click(function(){
    var id=$("input[name=input]").val()
    if (id){
   $.get("http://localhost:5000/amigos/"+id,function(data){
$("#amigo").html( "<h1>"+data.name+"</h1>" )
$("input[name=input]").val("")
})
}
else alert("no sea m6n50")
})

$("#delete").click(function(){
    var id=$("input[name=input]").val()
   $.ajax({url:"http://localhost:5000/amigos/"+id,type:"delete",success:function(data){
         $("#success").html("<h1>"+"Amigo eliminado!"+"</h1>")
        $("input[name=input]").val("");
        showFriend()

    }
})
})


// const BASE_URL = 'http://localhost:5000';
// ​
// $('img').hide();
// $('#boton').click(getAllFriends)
// $('#search').click(getOneFriend)
// $('#delete').click(deleteFriend)
// ​
// function getAllFriends() {
//   $('img').show();
//   $.get(BASE_URL + '/amigos', renderAllFriends)
// }
// ​
// function renderAllFriends(friends) {
//   $('#lista').empty();
// ​
//   for (let { name } of friends) {
//     const li = document.createElement("li");
//     li.innerText = name;
//     $("#lista").append(li)
//   }
// ​
//   $('img').hide();
// }
// ​
// function getOneFriend() {
//   $.get(`${BASE_URL}/amigos/${$('#input').val()}`, renderOneFriend)
// }
// ​
// function renderOneFriend({ name }) {
//   $('#amigo').text(name)
// }
// ​
// function deleteFriend() {
//   $.ajax({
//     url: `${BASE_URL}/amigos/${$('#inputDelete').val()}`,
//     type: 'DELETE',
//     success: renderDelete
// });
// }
// ​
// function renderDelete() {
//   $('#sucess').text("Tu amigo fue borrado con exito")
// } 