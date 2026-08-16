const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({
  projectId: process.env.GCLOUD_PROJECT || 'bussola-hackathon',
  // Local: usa emulador ou credenciais via gcloud auth application-default login
  // Produção: configure GOOGLE_APPLICATION_CREDENTIALS com path do service account
});

module.exports = { datastore };
