var params = parseQueryStr(window.location.search.substring(1)); // Parse the query string params into a dictionary
if (params['code']) { // If the query param 'code' exists, then...
 document.getElementById('code').value = params['code']; // Display the auth code
 document.getElementById('tokenButton').removeAttribute('hidden'); // Reveal the 'Request Access Token' button
}
