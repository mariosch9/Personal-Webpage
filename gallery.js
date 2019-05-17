var images = [

{
	url: "img/img1.jpeg",
	caption: "Scenic View of Beach",
	info: "Scenic View of Beach"
},
{
	url: "img/img2.jpg",
	caption: "Green Trees & Rail Road ",
	info: "Green Trees & Rail Road "
},
{
	url: "img/img3.jpg",
	caption: "Rock & Sea Landscape",
	info: "Rock & Sea Landscape"
},
{
	url: "img/img4.jpg",
	caption: "Lake",
	info: "Lake"
},
{
	url: "img/img5.jpg",
	caption: "Riverside Bench During Autumn",
	info: "Riverside Bench During Autumn"
},
{
	url: "img/img6.jpg",
	caption: "Canada",
	info: "Canada"
},
{
	url: "img/img7.jpg",
	caption: "Autumn",
	info: "Autumn"
},	
{
	url: "img/img8.jpg",
	caption: "Japan in Spring",
	info: "Japan in Spring"
},
{
	url: "img/img9.jpg",
	caption: "Tropical",
	info: "Tropical"
		
}];
var gallery = document.getElementById('gallery');

for(var i = 0; i < images.length; i++) {
		var image = images[i];
		var mydiv = document.createElement('div');
		var mya = document.createElement('a');
		var img = document.createElement('img');
		var h3 = document.createElement('h3');
		h3.setAttribute('class','captinfo');
		h3.innerHTML = images[i].caption;
		mya.setAttribute('class','example');
		mya.setAttribute('data-lightbox','mygallery');
		mya.setAttribute('data-title',images[i].caption);
		
		mya.href = images[i].url;
		mya.src = images[i].url;
		
	    
	    img.src = images[i].url;
		img.alt = images[i].caption;
		img.setAttribute('width', '200');
		img.setAttribute('height', '200');
		mya.appendChild(img);
		mydiv.appendChild(mya);
		mydiv.appendChild(h3);
		
	
	 gallery.appendChild(mydiv);
		
		
	}
	var x = 0;
	function myBackground() {
		
    if (x==0) {
    var el = $('.body4');
    el.addClass('body5');
    el.removeClass('body4');
	x = 1;
	console.log(x);
    } else {
    var el = $('.body5');
    el.addClass('body4');
    el.removeClass('body5');
	x = 0;
	console.log(x);
    }
	}