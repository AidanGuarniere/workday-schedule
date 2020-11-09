// task content array
var textAreaContent = {

};

//calender display
var header = document.header;
const m = moment();
var m2 = m.format("dddd, MMMM Do")
var m3 = m.format("YYYY")


 $(currentDay).text(m2)
 $(currentYear).text(m3)


// check current time
 $('.info').each(function(){
   var currentTime = moment().hours();
   // convert time to a number value
   var currentHour = Number(currentTime);
   console.log(currentHour)

  // check task time and convert it to a number
   var pId = $(this).children('div').children("p").attr("id");
    var taskTime = Number(pId);
    console.log("task time as a number", taskTime);

  // apply past class if past
  if(taskTime < currentHour){
    $(this).children("textarea").addClass('past')
  }

  // apply present class if present
  else if(taskTime === currentHour) {
    $(this).children("textarea").addClass('present')
  }

  // apply future class if future
  else{
    $(this).children("textarea").addClass('future')}

 });



// save content from textarea
 $(".saveBtn").on("click", function() {
  var targetTextArea = $(this).parent('.info').children('textarea')
  // console.log(targetTextArea.val());
  var textAreaId =  targetTextArea.attr('id')
  
  // console.log(targetTextArea.attr('id'))
  //send to local storage
  localStorage.setItem("task-"+ textAreaId ,targetTextArea.val());
   
});

 function getLocalStorage() {
if (localStorage.getItem("textarea")){
  textAreaContent = JSON.parse(localStorage.getItem('textarea'));
  }
 }

  function setTextContent (){
    for (const [key, value] of Object.entries(textAreaContent)){
      $("#"+key).val(value);
    }
  }

$(document).ready(function(){
  getLocalStorage();
  setTextContent();
})
  