## Google Places API JavaScript Library

Who doesn't love a good map!?! So let's make our own with the bare essentials of the Google Places API.


The Google Places API is used by all Google maps to get detailed information on millions of locations around the world. This info can be used to plan your next holiday, find all your favorite coffee shops or maybe research a new business plan. By the end of this tutorial you will be able to get a map into your HTML page and put markers on the map with info windows via an auto-complete search field.

This tutorial assumes a begginer ability in setting up web pages using JavaScript, jQuery, CSS and HTML.

## Here we go...

#### Create a basic front-end project structure
Go [here](https://github.com/topleft/google-places-basics/tree/f87f0ae7f2ba34df9b72a6482835324a7390c7d1) for a copy of what I am using. You can clone it if you know how to use git, you can cut and paste the contents into your own project structure, or make your own files with this as a reference.

##### Project Structure
```
Root Directory
  - CSS Directory
      main.css
  - JS Directory
      main.js
  index.html
  readme.md
```


#### Accessing the API
Google has made it super simple to get started with their maps and services. Add this script tag to your index.html file right below the jQuery script tag.

```
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
```

Now we have access to Google Maps objects and methods through key words in our JavaScript.
By adding this script tag, our program is calling on the Google Places JavaScript API.
When our program runs it will ask Google for information via a specific set of syntax or code that we will write into our main.js file. The details of this syntax has been made available to us in [this](https://developers.google.com/maps/documentation/javascript/tutorial) documentation. As a coder, you will learn to love excellent docs like these ones, they have all the keys to unlocking Google Maps.


#### Create a Map
Now lets create a map. Add this line of code to main.js file inside of the "document.on('ready')".

```
  var map = new google.maps.Map(document.getElementById('map-div'),{
    center: {lat:39.393981, lng:-106.016311},
    zoom: 7
  });
```

We have:
* set the variable `map` to a new map object created by using the Google syntax
* given it a place to be in the index.html by grabbing the ID selector `map-div`
* set the center property of the map to coordinates in Colorado
* set the zoom property of the map

There are a lot more properties that you can add to a google map. Check out the
[docs](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
for more options to cutomize maps for your purposes.


#### Make Some Space
We need to give this map a place to be in our index.html. We specified an ID of `map-div` when we created our map object, so we need to put that into an html tag...probably a div :)

Add this code into index.html inside the body element.

```
<div id="map"></div>
```

Finally, we need to create some space for our map to occupy. At this point, if you pull up index.html, nothing will show on the page. This is because the map will not create a space for itself, it will only take up an area provided for it. How should we "create" space or our map?...CSS will do the trick.

Add this to main.css

```
#map-div {
  height: 500px;
  width: 1000px;
}
```

Okay, lets open up index.html and see what we've got!


