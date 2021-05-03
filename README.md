# ExpCowin
Cowin is a platform by GOI to find and book a vaccination center to get people vaccinated. But it has become harder to book one. ExpCowin can help people by letting people know if any center is available with doses within the next 4 weeks. It can be automated with CRON too but I haven't set it up yet.

---

## General info

This tool basically start up two API endpoint which if you visit with proper queries, will give you (and email you if you set up sendgrid support) information about available vaccination centers with number of available doses in that particular location you mentioned in the queries.

You can go through the API documentation in [Postman](https://documenter.getpostman.com/view/8816927/TzRNDUgd)

My plan was to deploy it in Heroku but then I found out there is a geoblock in the gov API so it wont work if hosted outside India. If anyone can host it in India then please let me know how it goes. But for now you can run it in your machine with CRON job, should work just fine.

---

## Requirements

For development, you will need Node.js. To support email, you will also need to get API key for SendGrid.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.0

    $ npm --version
    6.9.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
 

## Install

    $ git clone https://github.com/41x3n/ExpCowin.git
    $ cd ExpCowin
    $ npm install
    Create a .env file in root directory of the repo and enter details -
    ```
    API_KEY="Your sendgrid API without quotes"
    to="The email you want to send the alert without quote"
    from="The email you used as sender in sendgrid without quote"
    ```

## Running the project

    $  npm start

---

## Status

Project is: _ongoing_

---

## Contact

  * [@41x3n](https://twitter.com/41x3n) - feel free to contact me!
