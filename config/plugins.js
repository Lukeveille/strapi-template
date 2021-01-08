module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_KEY'),
    },
    settings: {
      defaultFrom: 'email@domain.com',
      defaultReplyTo: 'email@domain.com',
    },
  }
});
