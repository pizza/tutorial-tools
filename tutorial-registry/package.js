Package.describe({
  name: 'mdg:tutorial-registry',
  version: '0.4.3',
  // Brief, one-line summary of the package.
  summary: 'Register tutorials in a central location',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor/tutorial-tools',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../docs/tutorial-registry.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.2');
  api.use([
    "jsx@0.2.4",
    'check'
  ]);
  api.addFiles('tutorial-registry.jsx');
  api.export('TutorialRegistry');
});
