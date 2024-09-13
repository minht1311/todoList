What happened during the 2 weeks it took to build this app:
// Categorized by features added (or not)

Initial frame:
- Learned how to use JS in a 2-week *span*
- Using HTML/CSS skills from last semester
- Build something from scratch instead of using a template

v1:
- Included CSS into the main file for simplicity
- Initial HTML structure built, stayed the same throughout later revisions
- Scraped online resources for basic tasks like mapping close buttons to each task element, resulting in rather spaghetti code (some feature stuck around because of how well they work compared to my own solutions)
- Only supports creating new elements without storing them for later use
- Generated a date alongside each task (actually the easiest one to implement)
- Found out that nothing that i learned in school benefitted the project because of how different JS is
- Still didn't comment much while coding
- Around 250 lines of raw code

v2:
- Separated CSS to another file for easier management and cleaner main file
- Attempted the same for JS scripts but found out said scripts won't run unless directly included on index
- Implemented storing tasks into localStorage, approached storing tasks using 1 key and a parsed JSON that gets spliced post parsing for other functions (extremely sketchy and hard to manage)
- loadTasks was originally a separate button so i can test out bugs while not have to constantly reload the UI
- Changed to separate keys near the end of the project, found out the backend code can't handle gaps in key indexes, implemented spaghetti code to handle null keys, sometime still fails and ends up modifying keys when adding new ones
- Found out functions needed to be copied across both newElement and loadTasks because one handles tasks created before page refreshing and one handles post refresing
- Implemented a really buggy way of handling null task inputs, sometimes still trips and results in null tasks when editing anyway, which are deleted when loadTasks is ran onload (might be a good thing, might be not)
- Attempted a mutationObserver to detect when an item had a class change by an event listener, and pushes the same element with a toggled completion boolean accordingly, turns into a nightmare at v3
- Approx 290 lines of raw code

v3 (current revision):
- Attempted a date dropdown that lets user select a due date, and turns a task red if overdue, green if completed, and grey if there is no due date
- Found out that i could make a datetime input and it would work, but a prebuilt tool was cleaner, and it lets me parse datetime inputs easier
+ Someone went as far as to say "when it comes to anything datetime related in coding, just use things others people have made, they suffered so you don't have to"
+ That someone might've been Tom Scott
- Tried a second mutObs for changing class, found out that it was either conflicting with the first mutObs or with itself, creating a massive infinite loop and tons of memory leakage
- Turned smallest revision into the longest, took nearly a week to sort out
- Resorted to adding styles to the element instead of a class change, apparently that was intefering with the other class toggle
- Code (semi) works
- Cleaned some funcs up by moving from scraping the UI to scraping the corresponding localStorage key
- Left some debug code behind for future use, classList code still exists in case it can be implemented
- Nearly 700 raw lines, mostly due to mashing 2 mutObs to avoid conflicts, but results in 6 different cases which is hard to read

Notes:
+ Mostly learned how to code in JS and browser storage manipulation, still stuck with manual debugging, and how to integrate prebuilt tools into existing projects (flatpickr for the datetime dropdown)
+ mutationObserver is a lot more complicated than it should be/sound like
+ There must be a better option that if/elses or switch cases
+ Parsing and handling JSONs into browser storage isn't challenging, it's the code handling said JSONs bugging out
+ Except for the initial frame and some of the mutationObserver code, most of the resources online didn't help much except for basic JS features, since the problems were so niche
+ Debugging was done by hand using alerts and spans, more straightforward than the browser's debugging tool, but this prevents me from knowing exactly why that mutObs entered a loop, will look into the problem into the future
+ This project was hell, partly because i've never handled JS before, and partly because JS is ass (might be from it's weak typing characteristics)
+ JS really hates comparing dates even though it's the one parsing dates into localeStrings, turns out time strings without 2 hour numbers is invalid, so re-parsing into a different locale was necessary
+ The actual solution to so many bugs is something completely different, and sometimes stupidly simple
+ Might actually help my capstone project if i decide to go with JS and still handles most of the frontend code, might even reuse some ideas from this project
