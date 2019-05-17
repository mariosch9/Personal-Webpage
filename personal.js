var images = [

{
	url: "img/img1.jpeg",
	caption: "Image1",
	info: "Image1"
},
{
	url: "img/img2.jpg",
	caption: "Image2",
	info: "Image2"
},
{
	url: "img/img3.jpg",
	caption: "Image3",
	info: "Image3"
},
{
	url: "img/img4.jpg",
	caption: "Image4",
	info: "Image4"
},
{
	url: "img/img5.jpg",
	caption: "Image5",
	info: "Image5"
},
{
	url: "img/img6.jpg",
	caption: "Image6",
	info: "Image6"
},
{
	url: "img/img7.jpg",
	caption: "Image7",
	info: "Image7"
},	
{
	url: "img/img8.jpg",
	caption: "Image8",
	info: "Image8"
},
{
	url: "img/img9.jpg",
	caption: "Image9",
	info: "Image9"
		
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