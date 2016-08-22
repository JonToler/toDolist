//Business Logic
function Item(nameIn, dueDateIn, descriptionIn) {
  this.name = nameIn;
  this.date = dueDateIn;
  this.description = descriptionIn;
  this.done = false;
}
Item.prototype.DoneToggle = function(status) {
  if(status) {
    this.done = true;
  }
  else {
    this.done = false;
  }
}

//UI Logic
$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var nameIn = $("#task-name").val();
    var dueDateIn = $("#task-date").val();
    var descriptionIn = $("#task-description").val();
    var item = new Item(nameIn,dueDateIn,descriptionIn);
    $("#listOutput").append("<li>" + item.name + "</li>");
    $("li").last().click(function(){
      item.DoneToggle(confirm(item.name + "\nDue Date: " + item.date + "\nDescription: " + item.description + "\n\nRemove this task from your list?"));
      if (item.done) {
        this.remove();
      }
    });
    $("#task-name").val("");
    $("#task-date").val("");
    $("#task-description").val("");
  });
});
