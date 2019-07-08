#Uprooted

## Motivation: 
1. Why do people need this product?
* This application will alert other journalist, and the general public, when a journalist is abducted.

2. How can it help people?
* It will help journalists to be found if they are ever adbucted by allowing users to post the journalist's photo and demographic information, and the last place seen. 

3. Which single action do you want your users to accomplish through the product?
* We want users to be able to post missing journalists' photos, information, and periodically remove journalists once a certain time period has elasped. If a user wants to repost a journalist they will be able to do so.

## MVC Outline
1. Who is the user(s)?
There are two users in our story: the journalists who wish to report on the abducted person, and the user who posts about the abducted journalist. 

2. What is the end goal of the user?
* For a user to report when journalist goes missing.
* A central place for journalist to be able to report to the international community a journalist who is missing.

3. What actions does the user need to take to reach and acheive their end goal?

### User Type I
* For users to post an abducted journalist they need to:

1. First utilize the picture carousel to see if the journalist's picture has been posted. If the user has not been posted they should go to step 2.
2. Navigate to the right side of the webpage to place the missing journalist's biographic info: state the gender, name, age, location, and what organization the user works for.
3. Periodically missing journalist who have not been found within a specific time period will be erased, users will have the option to re-add their missing journalist by using step 2.

### User Type II
* In order for a journalist to report on another missing journalist:
1. They should view the top of our webpage where they will see a carousel of pictures of missing journalists.
* Using the Carousel npm package users will be able to scroll through photos in hopes of seeing someone they recognize, or be able to report about. Once they click the image it will redirect the user to more information about the person.
2. On the top of the webpage the user should utilize a search a bar to search either the location or name of the missing person.
3. They should go to our social media accounts to find out about the missing journalist.

## Design Process (Semantic Element Used)
* Using Bootstrap
1. Navbar 
2. Main Section - for forms 
3. Aside Section - to display stats of who was found, who was reported, who is still missing.
4. Input textbox for information

## Technology Used
1. Express
2. Path
3. Carousel Slick Package
4. Node
5. SQL
6. Heroku
7. Knex
8. Nodemon

## Demo

### Index.html
* Enter demographic info and view picture carousel here:

![image](https://user-images.githubusercontent.com/22041405/60815267-1dbca700-a14c-11e9-8605-c5b247e4c7e1.png)


### Lists.html

*View the list of missing journalist data provided by SQL:

![image](https://user-images.githubusercontent.com/22041405/60815422-77bd6c80-a14c-11e9-96f4-fcda8022b872.png)

### Contact.html

* "Contact Us" landing page:

![image](https://user-images.githubusercontent.com/22041405/60815526-ae938280-a14c-11e9-9793-170957b6b844.png)

