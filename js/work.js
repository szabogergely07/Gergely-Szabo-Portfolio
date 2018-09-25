var works = [
	{
		title: "Bikes in Vienna",
		pic: "img/bikewien.png",
		url: "http://bikewien.herokuapp.com",
		id: "works1",
		specs: "During my web developer studies I created this project with expected results, which was controlled by my tutor and mentor. The goal was to create a fully functional application to sell bikes online with a safe payment method, create accounts for users and have the ability to search and comment on products.",
		tools: "The app was created with Ruby on Rails, you find <a href='https://github.com/szabogergely07/MyFirstApp2.0' target='_blank'>HERE</a> all the tools I used. The most challenging was implementing ActionCable and the most liked was performance optimization."
	},
	{
		title: "Blog Website",
		pic: "img/newsblog.jpg",
		url: "http://newsblog.herokuapp.com",
		id: "works2",
		specs: "A responsive blog website with user registration and a possibility to create new blog posts with a click. Tags and comments are also a part of this site.",
		tools: "Ruby on Rails app with basic gems, like cancancan or devise, plus acts-on-taggable. Currently users can register and able to create new posts with admin rights. Comments feature is being also created. The template is from W3layouts."
	},
	{
		title: "NailStudio",
		pic: "img/nailweb.jpg",
		url: "http://pearle-nail.bitballoon.com/",
		id: "works3",
		specs: "Useful and clean portfolio page for a Naildesigner.",
		tools: "HTML and CSS have only been used, the theme is from Bootstrapious."
	},
	{
		title: "Laravel App",
		pic: "img/laravel.png",
		url: "http://gregslaravelapp.herokuapp.com",
		id: "works4",
		specs: "This project is my showcase for a fully working Laravel application, it manages users, posts, categories, comments. It is under construction, but you can follow my work.",
		tools: "Php with Laravel Homestead, PhpMyAdmin for MySQL, Heroku for production <hr> <h4>Progress</h4>\
                <p class=\"modal-project\">You can test my app in production if you login <a href=\"http://gregslaravelapp.herokuapp.com/login\" target=\"_blank\">HERE</a> with these credentials:<br>Email: greg@greg.com / Password: greg123 / Then click on Admin <br>\
                The admin area was created first for the application. Here we can see the registered users, we can authorize them to be admin, so have full access. We can create posts and add a category to them. I am starting notes not from the very beginning, you can check the previous progress on my GitHub account. <br>\
                10.04.2018 - Deploying to Heroku with creating a ClearDB Mysql databse, as I am running on Mysql in development. Here we have to create a different database.php file or the file with different settings for the connection to the database. I also created a partial for error messages by creating user/post etc.. <br>\
                11.04. - In development I created a photo upload section, but on development I would need to start using Amazon Web Services (AWS) to store files as it is not possible on Heroku. I decided not to do this, for now I am using weblinks to show pictures and later on I will setup AWS.<br>\
                12-14.04. - I am getting an error message from the browser in development: \"The page has expired\". Solution: change session driver to database instead of file in .env file.<br>Delete User function and middleware authorization (Admin) added.<br>\
                18.04. - Flash messages added to CRUD and custom 404 page to view. Posts controller has been created, routes/views/model have been set.<br>Problem in dev: 'failed to open stream: Permission denied'<br>Solution: There is a permission problem in storage, the command 'chmod -R 777 app/storage' helps.<br>\
                19.04 - PostRequest added for posts form validation. Categories CRUD is ready.<br>\
                23.04 - Comment model and controller have been created with view and routes. View's being made dynamic.<br>\
                21.05 - Creating sample users with factory seeding. I had to include the 'faker' dependency in composer.json in 'require' section and update composer in heroku bash. Then seeding has worked.\
                </p>"
	},
	{
		title: "VR Scene",
		pic: "img/vr_scene.png",
		url: "https://szabogergely07.github.io/VR-trial/",
		id: "works5"
	},
	{
		title: "LetsMeet - Meetup.com clone",
		pic: "img/workinprogress.png",
		url: "#",
		id: "works6"
	},
	{
		title: "Random Quote Machine",
		pic: "img/workinprogress.png",
		url: "#",
		id: "works7"
	},
	{
		title: "Local weather",
		pic: "img/workinprogress.png",
		url: "#",
		id: "works8"
	},
	{
		title: "Wikipedia Viewer",
		pic: "img/workinprogress.png",
		url: "#",
		id: "works9"
	},
	{
		title: "Nightlife Coordination",
		pic: "img/workinprogress.png",
		url: "#",
		id: "works10"
	}
  ];

