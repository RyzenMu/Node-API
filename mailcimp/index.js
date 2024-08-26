const mailchimp = require('@mailchimp/mailchimp_marketing');
const mailchimpKey ='d288a17cbb3d26acf2f28bb8a869d36c-us13';
const serverPrefix = 'us13';

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: mailchimpKey,
  server: serverPrefix,
});

const run = async () => {
  const response = await client.accountExports.listAccountExports();
  console.log(response);
};

run();
