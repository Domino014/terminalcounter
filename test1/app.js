/*
Descending String Interval in the Terminal
Goal:
Develop a small script using JavaScript
and have the output display in a terminal window using Node.
Assignment:
Now that you have Node installed, you're able to execute and display the output of your JavaScript
programs within the terminal window.
For this assignment, write a program that will
countdown from 10. Instead of using actual numbers
for the countdown, have the output display a
string consisting of asterisk marks, corresponding to the number in the countdown. Each countdown tick should be displayed on a new line.
For example, if the countdown is at 5, there s
hould be five asterisk marks *****.
This probably sounds a little confusing,
so here is an example of what the final d
isplay should look like 😄
descending-string-exercise.gif
The countdown should start from 10.
Each countdown tick should be on a new line.
Instead of numbers, the countdown tick should consist of asterisk marks.
*/
console.log("TEST");

var outer = function(){
  var counter = 10;
  return function(){
    var stars = "";  // "**"+"*"
    for(var i=0; i<counter; i++)
    {
      stars = stars + "*"; //concatenates stars
    }
    console.log(stars);
    counter-=1;
    return counter;
  };
};

var countup = outer();
/*
for(var i=0; i<5; i++)
{
  console.log("Counter: " + countup());
}
*/

while(countup() > 0) //While loop: You don't have to update the loop.
{
  //console.log("Keep going...");
}
console.log("All done");

