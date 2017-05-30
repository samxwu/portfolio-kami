---
layout: post
title: Bloc-It-Off
thumbnail-path: "img/bloc_it_off_cover.png"
short-description: Bloc-It-Off lets you create self-destructing to-do lists.

---

{:.center}
![]({{ site.baseurl }}/img/bloc_it_off_cover.png)

<br>

## Summary

We often put off items on our to-do lists, leading our lists to collect junk. Bloc-It-Off aims to resolve to-do list clutter by automatically deleting to-do items that have not been completed after seven days. The idea is if an item isn't important enough to be completed within seven days, it shouldn't be on your to-do list.


## Problem & Solution

**1. Users should be able to sign up for a free account by providing a valid user name, password, and email. They should also be able to sign in and out of Bloc-It-Off.**

Solution: Devise gem was utilized for Bloc-It-Off's authentication system. Devise takes away many of the granular details of building a custom authentication system. The gem handles the user sign up process, send emails for account confirmation, and allows users to sign in and out of Bloc-It-Off.


<br>

**2. Users should be able to create multiple to-do items.**

Solution: Created an item model and controller with appropriate actions that is associated with a user. Created an items form partial such that users can submit new items.

{:.center}
![]({{ site.baseurl }}/img/bloc_it_off_create.png)

<br>

**3. Users should be able to mark to-do items as complete and have them deleted.**

Solution: Employed `:delete` links within an `_item` partial to "complete" a to-do item. Ajax was used to delete to-do items without reloading the page.

{:.center}
![]({{ site.baseurl }}/img/bloc_it_off_complete.png)


{:.center}
![]({{ site.baseurl }}/img/bloc_it_off_delete.png)


**4. Users have seven days to complete a to-do item before it's deleted automatically.** 

Solution: Adopted the distance_of_time_in_words helper method to display the number of days since a to-do item was created.


<br>

**5. To-do lists should be automatically deleted after seven days.** 

Solution: Rake is a utility that can be used to automate administrative tasks within a Rails application. To automatically delete items after seven days, a custom rake task was built to delete expired to-do items. 


## Results 

Bloc-It-Off helps to keep to-do lists manageable and relevant with its auto delete feature. By enforcing a time constraint, users are more likely to finish a task they set out to do. 


## Conclusion

Possible improvements for Bloc-It-Off include the following:

 1. Allow the user to add collaborators to a to-do item
 2. Send users email alerts when a to-do item is about to expire
 3. Automate the delete Rake task to run each day


