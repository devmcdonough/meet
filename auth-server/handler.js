'use strict';

const { google } = require("googleapis");
// const { jsx } = require("react/jsx-runtime");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [ "https://devmcdonough.github.io/meet"];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  /* Scopes array passed to the scope option (I don't know what this means but ok) */
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) =>
{
  // Decode authorization code from url query
  const code = decodeURIComponent(`{event.pathParameters.code}`);
  return new Promise((resolve, reject) => {
    // Exchange authorization code for access to token with a callback after exchange.
    //The callback is an arrow function with results as "error" and "response"
    oAuth2Client.getToken(code, (error, response) => {
    if (error) {
      return reject(error);
    }
    return resolve(response);
  });
  })
  .then((results) => {
    //Respond with OAuth token
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(results),
    };
  })
  .catch((error) => {
    //Handle error
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  });
};

module.exports.getCalendarEvents = async (event) =>
{
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response);
      }
    );
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ events: results.data.items}),
      };
    })
    .catch((error) => {
      return { 
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
