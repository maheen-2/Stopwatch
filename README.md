# Stopwatch

Hey folks, I just create a minimalistic stopwatch. Just as what an ordinary stopwatch does, my does as well!!

# Features:

🟡 Start/ Stop at any time or Reset

🟠 Counts the time in hours, minutes, seconds, and milliseconds.

### This project requires basic knowledge of HTML, CSS and JavaScript. There are multiple ways by which u can make a stopwatch, mine is below:

🔵 First, I created the basic structure of the stopwatch with HTML and then garnished it with some CSS.

🔴 I added 3 buttons to start, stop and reset the countdown.

🟣 Then, I applied the magical effect of JS which made the stopwatch actually work:

- Select all the HTML elements u require in this JS file.
- Set **var[count, sec, min, hr] = 0** will mek sure that their initial value is 0 logically.
- Run the **functions start(), stop() and reset()** that u created in HTML file & give them logic.
- Create  a variable **var timer = false** which decides whether the stopwatch is ON / OFF.
- Create another function called **stopwatch** which contains the main logic of the stopwatch.
- In start(), run **timer = true** & pass **stopwatch()** in it so that whenever the timer starts stopwatch() function runs.
- In stop() & reset(), run **timer = false**.
- Also in reset(), **set count, sec, min, hr to 0** & make their **innerHTML set to "00"** so that whenever reset button is clicked, all values return to 00 not 0. Must set it to 00 in a string as mathematically their is no such thing as 00 so u can say we used a trick! 😉
- Now our main logic begins which lies in stopwatch function:
    1. pass in a logic that **if(timer == true)** then **count = count + 1**.
    2. Inside it, pass in a logic that when count reaches 100, then **sec = sec + 1**  & count becomes 0 & starts the count again as 1sec = 100 count.
    3. Also when the sec reaches 60, then **min = min + 1** & sec becomes 0 & starts the count again as 1min = 60sec.
    4. And when the min reaches 60, then **hr = hr + 1** & min & sec becomes 0 & starts again as 1hr = 60min.
    5. Then, since we want that single-digit time (1 - 9) to be displayed as double-digit (01 - 10) create new var **countString, secString, minString, hrString** & put an **if** condition on each of them that if they are less than 10 then they are displayed as **count/sec/min/hrString = "0" + count/sec/min/hrString**.
    6. Set the innerHTML of each of them to their string value.
    7. Lastly, call setTimeOut() which sets a timer that executes stopwatch function once the timer (in ms) expires.


Feel free to fork and send a pull request for any changes/improvements! 👋🏼
