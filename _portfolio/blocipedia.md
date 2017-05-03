---
layout: post
title: Blocipedia
thumbnail-path: "img/blocipedia_cover.png"
short-description: Blocipedia lets you create your own private or public wikis.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia_cover.png)

<br>

## Summary

Wikis are great for working on community-sourced content requiring collaborative editing. Blocipedia allows users to create their own wikis and share them publicly or privately with other collaborators.


## Problem & Solution

**1. Users should be able to sign up for a free account by providing a valid user name, password, and email. They should also be able to sign in and out of Blocipedia.**

Solution: Devise gem was utilized for Blocipedia's authentication system. Devise takes away many of the granular details of building a custom authentication system. The gem handles the user sign up process, send emails for account confirmation, and allows users to sign in and out of Blocipedia.  


<br>

**2. Users with a standard account should be able to create, read, update, and delete public wikis.**

Solution: Created a wiki model with appropriate routes and resources within Rails, enabling users to perform CRUD operations on public wikis. 

{:.center}
![]({{ site.baseurl }}/img/blocipedia_wiki_page.png)

<br>

**3. Each user should be given the option to upgrade from a free to a paid plan, and vice versa.**

Solution: Designed and implemented a user flow for upgrading to a premium plan and downgrading to a regular plan. Stripe was incorporated to charge  users before switching a user's account role from standard to premium.

{:.center}
![]({{ site.baseurl }}/img/blocipedia_upgrade_plan.png)

<br>

**4. Premium users are able to create private wikis. They can also add and remove collaborators their private wikis.** 

Solution: Using the Pundit gem for authorization, users are assigned one of three roles: standard (free), premium, or admin. A collaborator model was also created to define the relationship between wikis and users. Coupled with Pundit, we're able to define what users can or can't do with our models. 

{:.center}
![]({{ site.baseurl }}/img/blocipedia_private_collaborator.png)

<br>

**5. Users should be able to edit wikis using Markdown syntax.** 

Solution: The Redcarpet gem was incorporated to parse Markdown syntax, allowing users to edit wikis using Markdown syntax. 


## Results 

Blocipedia offer users a simple solution to work on community-sourced content. Users are given several convenient options such as creating, reading, updating, or deleting wikis. They're able to bring on contributors with Blocipedia's Add Collaborators functionality, and set their wiki either as private or public. 


## Conclusion

We can make Blocipedia more user-friendly by adding the following functionalities:

 1. Let users see a preview of their Markdown while it's being edited
 2. Allow users to upload contents
 3. Include a dashboard that tracks each wiki's history
 4. Make each wiki have readable URLs 


