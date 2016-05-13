# Medica Installation

*(Ubuntu only)*

![](http://sailsjs.org/images/bkgd_squiddy.png)

1. Nodejs >= 5.x

	See: https://nodejs.org/en/download/package-manager/

	```
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
	sudo apt-get install -y nodejs
	```

	To compile and install native addons from npm you may also need to install build tools:
	```
	sudo apt-get install -y build-essential
	```

2. MongoDB

	See: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

	```
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
	
	echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

	sudo apt-get update
	sudo apt-get install -y mongodb-org
	```

3. Clone the project using Git


4. Install `sails`, `bower`, `grunt`
	
	```
	sudo npm install -g sails bower grunt-cli 
	```

5. Install Node and Bower dependencies.

	```
	npm install
	bower install 
	```

6. Update database config in `config/` folder.
7. *Lift the sails* 

	```
	sails lift 
	```

8. Visit [http://localhost:1337](http://localhost:1337)