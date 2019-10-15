 //The html of the contents of the Iframe updates to a full html file, with html and a header with a style of the cssPanel. It then closes the style, head and starts the body, which gets the html content from the html panel. 
function updateOutput(){
    
     $("iframe").contents().find("html").html("<html><head><style type ='text/css'>" + $("#cssPanel").val() + "</style></head><body>" +
    $("#htmlPanel").val() + "</body></html>");
    
    //evalutes the javascript inside javascript panel then ouptuts it inside the IFrame(outputPanel)
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    
    
    
    
}
//when toggle button is hovered over with pointer it turns grey, when its not hovered over it goes back to its orginal color
$(".toggleButton").hover(function() {

    $(this).addClass("highlightedButton");

}, function() {
   
    $(this).removeClass("highlightedButton")


});
//when toggle button is clicked on active the highlight on the button is removed, it also shows the respective panel that is clicked upon.
$(".toggleButton").click(function() {
    $(this).toggleClass("active");

    $(this).removeClass("highlightedButton");

    var panelId = $(this).attr("id") + "Panel";
    
    $("#" + panelId).toggleClass("hidden");
    
   //the amount of active panels that their can be is 4 but if their is panel that is "hidden" it will not show on page
    var numberOfActivePanels = 4 - $('.hidden').length;
 
    //width of the window is determined by how many active panels are on 
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
   
})
//selects all classes with panel and adjust the height to the size of the window
$(".panel").height($(window).height() - $("#header").height() - 15);
//selects all classes with panel and adjust the width to the size of the window
$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

//Anytime there is a change in the text areas the output in the Iframe(outputPanel) is updated, with the updateOutput function
$("textarea").on('change keyup paste', function() {
    
    updateOutput();
});