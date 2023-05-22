### Setting

    {
        taskList : true
    }

### Examples

- [ ]something is wrong with the labour calculator
- [ ] manitou logo
- [x]
--- XT options to add
- [ ] signature pkg	17658
- [ ] xt blackout pkg 516
- [ ] prem audio pkg 1505
- [x]
- [x] [ ] flooring - snap in marine mat
- [ ] 27 3658
- [ ] 25 3498
- [ ] manitou worksheet missing a couple of values to print 
- [x]
= [ ] xt prem color	1920
= [ ] blackout pkg	516
= [ ] saltwater pkg	596 fix
= [ ] mercury dual 	12364

##### Features


--have a page for each brand 
 [x] ski-doo
 [x] suzuki 
 [x] can-am
 [x] manitou
 [x] sea-doo

--set up parts pages for them as well
 [ ] ski-doo
 [ ] suzuki 
 [ ] can-am
 [ ] sea-doo
 [x] manitou
 [x] switch

 --Have each logo banner go the models pages based on whats selected incase the customer wants to see something stupid
 [x] ski-doo
 [ ] suzuki 
 [x] can-am ---- ish something happened with the data and got currupted every time you click on the canam logo it brings you to manitou lol
 [x] sea-doo
 [x] switch
 [x] manitou

-- second print button so it prints the spec sheet of the model the customer is looking at so you can give it to the customer without having to dig through the ones you already downloaded or go through 16 web pages on can ams website to get to it
 [x] ski-doo
 [ ] suzuki 
 [ ] can-am - partial
 [x] sea-doo
 [x] switch
 [x] manitou

 [ ] new navbar since it sucks

 [ ] bullet list of features in readme - all the little things this app does saves so much fucking time, it all adds up
 
 [ ] dashboard (rush POC) - sales person should not have to leave the dashboard to get the info they need in order to call the list, just slows you down horrible
     ^- side note find a way to update that the call was completed and set a new call date a set amount of hours from when completed. 
     takes way to long especially when you send mass templated emails to 20 plus clients then your just sitting there like a donky clicking shit for 20 mins. 
     not doing anything productive like fuck does that shit take forever. 
     how has no one noticed this on the dev team, their sales guys must suck or they must only be doing one call at a time or else this wouldnt in the program. 
     you dont notice it as bad one call after the next but it just shows how much time your wasting clicking a fucking box.
     must waste atleast 30-60 minutes a day with that stupid button, time yourself to check this.

     ^- instead of doing the math, got an average while at work and asked chatgpt to do the math for you while you were writing emails..... the number she gave is not good should hide it somewhere on here for a laugh whenever you come accross it
     OR they can just make the program faster, wonder why the site is so slow there has to be some logic thats just clogging up resources client side

     ^-- might be easier to just copy the html and css of the dash board and use your own logic
     cant, whatever they used wrapped everything in one element that looked like it would take more time trying to split everything up than writing your own

     ^--- dont include the stats at the top why do you need to see that if your already making more calls than everyone

     ^---- or the side menu for that matter
 
 [ ] niotext - to not use that god aweful messenger anymore
 ^- started but the one you started really did not work well
 
 [ ] push client and deal details so your not inputting/writing the same information 6 times
 ^- script is half way donw in assets
 
 [ ] query website by stock number to see if its in stock
 
 [ ] email client - ie outlook, gmail

 [ ] acquire api keys - find a way where it won't get you fired since chris hates implementing new tools

 [ ] think of a way to implement this as a subscription based service - would need dealer binders for the other brands in order to do this

 [ ] have a second print button so it also prints the spec sheet of the model the customer is looking at so you can give it to the customer without having to dig through the ones you already downloaded or go through 16 web pages on can ams website to get to it
 ```
 
 ##### Back burner list
 ```
 [x] auto hide customer details in the card if none are given
 [ ] sub model for others to use it
 ```
 
 
# Other Dealers
### Quick Breakdown
#### More effecient way to provide customers pricing, when they wanted it yesterday.
> Dont let managers and other employees slow down the ones that want to run.
>  Everyone works at a different pace, there will always be the slow ones. You can make them more effecient though.

#### Provide all-in pricing along with monthly, bi-weekly and weekly payments in under 10 secs.
> The amount of deals I have had, just because of the speed. "Why did it take the last dealer 30 minutes to price the same vehicle?" All the time.... Right now, the dealer I work at is like this. Pricing a unit out for 30 minutes while the customer just sits at their desk dieing of boredom. It really portrays this image that you don't know enough about your job to complete it quickly.

#### Payments also include other provinces tax's, currently set up to do four from the get go.
> customer calls in and forgets to tell you their from another province or state?

#### Ease of use? Your first day employee could figure it out without guidance and look like a professional as he stumbles through scripts. Just a 3 step process

> 1. Client details!
> [example](/assets/client.png "client details")
> 2. Model information
> [example](/public/model.png "client details")
> 3. Pricing and finance information
> [example](/public/overview.png "client details")

#### Complicated line-up to sell? With more options and features, no one in the dealership has an idea how to price. This does it with ease and accuracy.

> We have a brand that we took in. 
For weeks no one knew how to price it. 
 The owner had made this "pricing sheet" to make it easier, only to make it harder. I once handed him one of these sheets for him to locate a unit and to confirm pricing, he looked at me and asked me what he was looking at. Don't take this the wrong way, hes been one of the better owners I have worked with.

## Detailed
Provide accurate pricing and the confirmation of customer details faster than anyone else. Once completed it currently prints all the relevant information on a work sheet, that the rest of the dealer can use. Soon it will have a feature where it pushes that deal to your current providor through an API.

Has 2 API's within the same application to pull model details like MSRP, commodity, color and whatever else you need it to provide. You can get away with one. With the brands we carry one had more features than the other's, this implementation provided a more stable and reliable result.

It can handle even the more complicated brands.
[example](/public/complicated.png "")
At the top you will see 4 tabs for the different model specfic options. The rest breaks down the pricing in an easy to digest way for sales staff to go over it with the client.

On the overview page, the way its set up now is that it will only populate the options the customer agreed to. All the other information will be there for your sales staff to explain the pricing. The last thing you want to to happen is for the customer to be in the box and didnt explain all the fees and walk.

Currently nothing is saved to a database, which makes the application fast, among other more legal reasons. New customer walks in? Just refresh the page and you will start from scratch.

As mentioned it prints a work sheet to give to your finance managers or whoever in order to work with the client to get them what they need. It's set to print as a pdf. It does this by taking the form information you input and places it on onto a pdf, by x and y coordinates so it can be placed where you want it to be.

### CRM Integration
Soon, it will push the deal through an api to the crm. There is zero gain for an employee to input the same information more than once, it just frustrates the employee. That your paying to complete the same menial task over and over. It will/can push all relevant information like vehicle details, customer and contact information. The form can be modified to fit your dealers needs, obviously every dealer is different. 

### Instant Chat messenger
Soon, it will have its own instant chat messenger that would essentially replace the chat messenger your crm uses, if it has one. The goal with this will be to make it more stable and faster. Faster not only with typing but loading speeds of the application itself.

### Inventory Status
This would show if it is currently in stock on the overview page, while providing the stock number. 
Every dealer will have a different application used for this, this may not work for your setup. The first option, the one you dont want to use, would be to query the dealers site and search by stock number.  The second option would be to query the api of your crm/web providor. This may seem trival to some but why open a new application, select a bunch of drop downs and stare down a list of 50+ units.

### Installation
If you want to try it, its being hosted here so your more than welcome to.

If your a sales person and want to implement this on your own, I'll make this as copy and paste it can get. If your not familiar with coding. Download [this](https://code.visualstudio.com) and follow along.

Once open select terminal -> new terminal from the drop downs at the top.
A terminal should pop up at the bottom of the window to paste the following commands.

`git clone https://github.com/8an3/8an3.github.io.git`
`cd 8an3.github.io`
`npm install`
With installation completed, to run the API's there is already a script to run the appis along with the webapp.
`npm run dev`
If for some reason this does not work, the following will launch the apis and the web app
`cd .\src\pages\api\`
`node app.js`
Open new terminal ( there will be + in the "terminal window" just to the right )
`cd .\src\pages\api\api\`
`node app.js`
Open a new window
As long as your in the parent folder
`npm start`
The web application will launch by itself and ready to use.

To modify the drop downs for your product lineup -  in the same folder as the API's there will be a file called data.csv. To populate this for your own use, use google sheets and input the product line up with whatever other information is relevant ie; freight, pdi, undercoating. You will be able to download as a csv from google sheets, copy and paste from the downloaded file.

The drop down menu has to match what you put in the api file.
Go back to google sheets and delete everything but the model column, copy and paste the column so that you have 2 empty columns on each side of the models. 

In the webapp under any of the brands there will be a file called listOptions.js.

Open it, copy up to the first double quotes on any of the units and paste that in the column just to the left of the model column. 
Back to listOptions copy everything after the second double quotes and paste in the column just right of the model column in google sheets.
In google sheets, in the first column paste:
`=CONCATENATE(B1:D1)`
If you highlight the cells, on at a time, there will be a round button on the right bottom side of those cells, drag this down till you reach the end of the model lineup. do the same for the other cells you pasted to the right.
Dont copy and paste into listOptions yet, we have to turn these into values because right now its just a formul1a that will be pasted over. 
Highlight all of the models in the first column, highlight the first cell and any empty column on the sheet and press  CTL + SHIFT + V. 
This turned the "formulas" in the values we need to make the application work.
Copy and paste into listOptions and your done.
If you want it to print a different pdf and cant get it to work, get in touch I'll help with that.

 ```
Assuming:

Time wasted between calls: 12 minutes for every 20 calls made.
Total workday duration: 8 hours (480 minutes).
Time taken to make a single call: Let's assume it takes 5 minutes per call (excluding the wasted time).
To calculate the number of calls you can make, we need to consider the wasted time:

Number of calls per cycle = 20 calls
Time wasted per cycle = 12 minutes

To calculate the number of cycles you can complete during a workday:

Number of cycles = Total workday duration / (Time taken per call * Number of calls per cycle + Time wasted per cycle)

Number of cycles = 480 minutes / (5 minutes * 20 calls + 12 minutes) = 480 minutes / 112 minutes = 4.29 (approx.)

Since you cannot complete a fraction of a cycle, you can complete a maximum of 4 cycles during a workday.

To calculate the number of calls made:

Number of calls = Number of cycles * Number of calls per cycle

Number of calls = 4 cycles * 20 calls per cycle = 80 calls

So, you can make approximately 80 calls during a workday.

To calculate the total time wasted:

Total time wasted = Number of cycles * Time wasted per cycle

Total time wasted = 4 cycles * 12 minutes per cycle = 48 minutes

Therefore, you can make approximately 80 calls during a workday, with a total time wasted of 48 minutes due to the 12-minute interval every 20 calls.
 ```