I have included a screenshot of a website.  

I would give you the HTML, but it's almost unreadable, so I'll spare you.  If you want to read it anyway, the URL is https://www.reddit.com/r/pics/comments/haucpf/ive_found_a_few_funny_memories_during_lockdown/



I have also included a little web-app that lets you play with data and dynamically modify the data, to see the effects on the generated HTML.  (See the demo video.)  You should serve these static assets, possibly via some built-in trick of VSCode, or whatever.  You could install and use Express if you want.




## Goal

I want you to experiment with *two different ways* to programmatically generate HTML from data: using `.innerHtml`, and using `createElement`.

To complete this, you will write a bunch of JS in the file called `your_code_here.js`.

You will probably also need to write some CSS, and I suggest doing that in `comments_style.css`.  I have left some sample CSS in that file, that I used when I was solving this problem, but you are welcome to change that as much (or as little) as you want.


## Pre-task

You will have to figure out what HTML to create!  You can't do DOM manipulation if you're too timid about creating HTML, and appropriate accompanying CSS.  So you need to start imagining what HTML you want your code to create.

I'm terrible with HTML, so I bet you can be at least as good as me if you try!

I suggest duplicating `index.html` to a dummy filename like `cheating_index.html`, and then in that new file, write the HTML by hand, hard-coding in whatever data you want to, until you have some idea how to solve the HTML-and-CSS challenges.


## Task: HTML via innerHtml, non-recursive

Using `.innerHTML`, make `simple_simple` work.  You'll still need to loop over the comments, because you don't know how many comments there are.


## Task: HTML via innerHtml, recursive

Extend your `.innerHtml`-based solution, so that it can handle nested comments.  



## Task: HTML via createElement (wthout innerHtml), non-recursive

Save your previous solution to a different filename, so that you can start over.

Using `createElement`, make `simple_simple` work.  You'll still need to loop over the comments, because you don't know how many comments there are.


## Task: HTML via createElement (wthout innerHtml), recursive

Extend your `.innerHtml`-based solution, so that it can handle nested comments.  



