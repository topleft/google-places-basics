## Google Places API JavaScript Library

Who doesn't love a good map!?! So let's make our own with the bare essentials of the Google Places API.


The Google Places API is used by all Google maps to get detailed information on millions of locations around the world. This info can be used to plan your next holiday, find all your favorite coffee shops or maybe research a new business plan. By the end of this tutorial you will be able to get a map into your HTML page and put markers on the map with info windows via an auto-complete search field.

This tutorial assumes a begginer ability in setting up web pages using JavaScript, jQuery, CSS and HTML.

## Here we go...

### Part 1

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

You can grab the finished files for Part 1 [here]()

### Part 2

#### Markers and Infowindows

>Quick Note: If you are following along with the linked github repository, you'll see I add some bootstrap styling to class this project up a bit. Bootstrap is a css library created by Twitter. It uses nested divs and classes heavily (among other techniques) to organize html into a grid system and apply styling.

Markers are one of the things that make Google maps really functional and rich with information. For your map you may want to add markers to places that you've been in the world, or all the breweries you want to visit on you next road trip. A paleantologist could pinpoint exact locations of where T-Rex fossils have been found and then share that map with her colleagues. Markers are powerful and fun. Even better, adding them is easy too.

Markers are objects provided by the Google Places API and they, much like maps, have properties we can set and customize. Markers 'belong' to a given map, so we need to specify this map, via a variable name, when we create a new marker. we also need to set the position of a marker. We can do this in many ways, for now we will use latitude and longitude.

Add this code to main.js below the map instantiation(instantiation means creating a new 'instance' or object of a certain type).

```
var marker = new google.maps.Marker({
    position: {lat:38.153661, lng:-107.758774},
    map: map
  });
```

What is that marker pointing to? Wouldn't it be nice to have some more information about this location? Google has an object for that...info window...

```
  var infowindow = new google.maps.InfoWindow({
    content: "<div><h2>Colorado Boy</h2><p>Brew Pub in Ridgeway, CO</p></div>"
  });
```
We've created our info window, and now we need a way to access it. Add a click event handler to the marker like this:

```
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

```

Have a look at the two peices of code above and try to figure out why the info window opens on our marker. Info windows dont belong to markers like markers belong to maps. Info windows are there own object. The way we bind them to a marker is by passing that a marker's variable name in when we call `.open()` on the info window.

You can grab the finished files for Part 2 [here]()




