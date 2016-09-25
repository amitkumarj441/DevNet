#Creating an app accomplishes few things
- Generates a unique application Client ID and Client Secret, needed to access the Spark authentication service
- Identifies the application's requested scopes (Spark service permissions)
- Specifies a Redirect URI for the application, where Spark OAuth2 authentication responses will be sent

1. Determine the app's Redirect URI. The Spark OAuth2 flow will redirect the user's browser to a number of different sites and URLs during the authentication sequence. When complete, Spark will need a way to send the browser back to the custom web app (with the OAuth2 authentication code.) This is done by specifying a unique Redirect URL URL which points back to the web application. In our case, the URL for the web page itself will be re-used as the Redirect URI:

- Click on this link to open the [sample app](https://learninglabs.cisco.com/posts/files/collab-spark-auth/spark-auth.html) in a new tab
- Copy the Redirect URI field value to the clipboard (the sample app detects this URL automatically)

2. Navigate to the Spark for Developers application registration page:

- Open a new browser tab, and navigate to the [Spark for Developers](https://developer.ciscospark.com/?utm_source=Llab2&utm_medium=step2&utm_campaign=spark) page.
- If you like, click on Getting Started and take a tour of the Spark API docs
- Log in, and under My Apps click on the large
