<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="img/about.jpg" type="image/x-icon" />
	<title>Silphashree</title>
	<link rel="stylesheet" type="text/css" href="sass/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<body>
<main>
	<section >
		<div id="sidebar">
		<img class="my-img" src="img/my_img.png" width="50%">
		<a class="sidebar-item item01" href="#about">About</a>
		<a class="sidebar-item item02" href="#work">Works</a>
		<a class="sidebar-item item03" href="#contact">Contacts</a>
		</div>
		<div class="overlay"><a href=""></a></div>
	</section>
	<section class="margin-body">
		<div class="face">
			<img class="face-img " src="img/cat_face.jpg"/>
		</div>

		<div class="pole clearfix">
			<a href="#"><img data-bar="#sidebar" class="menu" src="img/menu.jpg" height="90%"></a>
			<img class="paw float-left" src="img/hand.png">
			<img class="paw float" src="img/hand.png">
		</div>

		<div class="board-grp clearfix">
			<div class="board-bg clearfix">
				<div class="">
					<a name="about" href="#"></a>
					<h1 class="txt-heading">About</h1>
					<p class="txt-para">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare justo id fermentum ornare. Duis dictum metus mi, eget rhoncus odio malesuada id. Etiam eros nulla, luctus at enim at, ultrices euismod mauris. Curabitur molestie vitae metus a mattis. Aliquam quis purus non sapien laoreet elementum. Suspendisse dictum diam dui, sed porttitor purus hendrerit eu. Sed ut efficitur risus. Aliquam ultrices egestas lorem, id consequat nunc lacinia at. Integer cursus molestie tempus. Quisque porta metus nulla, sed laoreet velit semper sit amet. Pellentesque vitae ipsum erat. Sed non accumsan nisi. Praesent urna velit, imperdiet non placerat vel, egestas at justo. Quisque diam nunc, commodo in sagittis quis, porta ultrices tellus.
					</p>
					<p class="txt-para">
						Fusce in libero et orci convallis laoreet ut a nulla. Sed diam nunc, imperdiet quis risus in, sodales eleifend turpis. Cras vehicula lorem eu lacus elementum sollicitudin vel eu tellus. Integer consequat, tellus eget fringilla lacinia, ante nisl fermentum ex, vel iaculis nisi nibh id diam. Etiam non erat nec ipsum eleifend interdum vel sed diam. Donec mollis faucibus pulvinar. Maecenas maximus purus vel aliquet feugiat. Praesent porttitor, magna id eleifend varius, velit mi scelerisque magna, molestie molestie mauris enim eget velit. Integer quis blandit urna, eget elementum sem. Duis aliquam eros magna, sed dignissim dui ullamcorper at.
					</p>
					<a href=""><img src="img/resume.png" width="200px" height="200px"></a>
					<a href="https://github.com/roshh1?tab=repositories"><img src="img/github.png" width="200px" height="200px"></a>
				</div>

				<div class="">
					<a name="work" href=""></a>
					<h1 class="txt-heading">My works</h1>
					
					<div class="">
													

						<div>
							<a class="work-list Gayathri float-left" href="">Gayathri Gallerie</a>
						</div>

						<div>
							<a name="esthetician01" id="esth-small" class="work-list nails float-left" data-exp="#nail-exp" href="#esthetician02">Esthetician</a>
						</div>
						<div id="nail-exp" class="work-exp float-left clearfix">
						 <a name="esthetician02" class="float close" data-small="#esth-small" data-close="#nail-exp" href="#esthetician01">X</a>
						 <div id="slider" class="my-img">
							<ul class="slides">
							<li class="slide"><img class="my-img" src="img/nail_01.jpg"> </li>
							<li class="slide"><img class="my-img" src="img/nail_02.jpg"> </li>
							<li class="slide"><img class="my-img" src="img/nail_03.jpg"> </li>
							<li class="slide"><img class="my-img" src="img/nail_04.jpg"> </li>
							<li class="slide"><img class="my-img" src="img/nail_05.jpg"> </li>
							<li class="slide"><img class="my-img" src="img/nail_01.jpg"> </li>
							</ul>
						 </div>
						</div>

						<div>
							<a name="gen1" id="gen-small" class="work-list animation float-left" data-exp="#general" href="#gen">General Showreel</a>
						</div>
						<div id="general" class="work-exp float-left clearfix">
						<a name="gen" class="float close" data-small="#gen-small" data-close="#general" href="#gen1">X</a>
						  <iframe class="my-img" width="560" height="315" src="https://www.youtube.com/embed/1ajXImXzAEk" frameborder="0" allowfullscreen></iframe>
						  <p class="">General Showreel</p>
						</div>

						<div>
							<a name="film02" id="film-small" class="work-list animation float-left" data-exp="#film" href="#film01">Stop Motion Film</a>
						</div>
						<div id="film" class="work-exp float-left clearfix">
						<a name="film01" class="float close" data-small="#film-small" data-close="#film" href="#film02">X</a>
						  <iframe class="my-img" width="560" height="315" src="https://www.youtube.com/embed/sZUT67oAAUY?list=FL8HgZVGQWBidKQqMqItthsg" frameborder="0" allowfullscreen></iframe>
						  <p class="">Short Film</p>
						</div>	

						
						<div>
							<a name="rig02" id="rig-small" class="work-list animation float-left" data-exp="#rig" href="#rig01">Rigging Showreel</a>
						</div>
						<div id="rig" class="work-exp float-left clearfix">
						<a name="rig01" class="float close" data-small="#rig-small" data-close="#rig" href="#rig02">X</a>
						  <iframe class="my-img" width="560" height="315" src="https://www.youtube.com/embed/SHnPOtNhOzY" frameborder="0" allowfullscreen></iframe>
						  <p class="">Rigging Showreel</p>
						</div>	

					</div>	
				</div>

				<div class="form">
					<a name="contact" href=""></a>	
					<div class="float-left">
						<p class="txt-para">email: roshh1@gmail.com</p>
						<p class="txt-para">Toronto/Cananda</p>
						<a href="https://www.facebook.com/silpha.shree"><img src="img/fb.png" width="50px" height="50px"></a>
						<a href="https://www.instagram.com/silphashree/"><img src="img/instagram.png" width="50px" height="50px"></a>
						<a href="https://ca.linkedin.com/in/silpha-shree-3bb544b6"><img src="img/linkedin.png" width="50px" height="50px"></a>
					</div>		
					<div class="float-left">
						<form id="contact_form" class="" action="#" method="POST" enctype="multipart/form-data">
						<h3 class="txt-heading">Send a massage</h3>
						<div class="row">
								<label class="txt-para" for="name">Your name:</label><br />
								<input id="name" class="input" name="name" type="text" value="" size="30" /><br />
						</div>
						<div class="row">
								<label class="txt-para" for="email">Your contact number:</label><br />
								<input id="email" class="input" name="email" type="text" value="" size="30" /><br />
						</div>
						<div class="row">
								<label class="txt-para" for="email">Your email:</label><br />
								<input id="email" class="input" name="email" type="text" value="" size="30" /><br />
						</div>
						<div class="row">
								<label class="txt-para" for="message">Your message:</label><br />
								<textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
						</div>
						<input id="submit_button" type="submit" value="Send email" />
						</form>
					</div>
				</div>
			</div>
		</div>


			<div class="">
				<img class="pole-bottom" src="img/pole.jpg" width="100%" height="100px">
			</div>

			<div class="face">
				<img class="face-img" src="img/cat_bottom.jpg"/>
			</div>

	</section>
</main>

<script type="text/javascript" src= "js/jquery.js"></script>
</body>
</html>
