# Web-APIs-Code-Quiz-HW-4

The goal of this assignment was to create a quiz that utilizes event listeners to to proceed through the quiz.

A for loop was created in order to run through the quiz object array. This for loop also dynamically creates the buttons
to for the answer selection. 

The addEventListener uses an on click event to determine whether the selected button matches the correct answer. Whether
the button selected is true or false. The next question and set of answers are automatically populated.

The timer is also dynamic is way that, if the wrong answer is selected, it subtracts 10 seconds from the timer.

The answer selected is also reflected onto the score with correct and incorrect answers. It increments 1 and decrements 1 as answers are selected.