Package.describe({
  name: 'guidouil:bootswatch-paper-noglyph',
  summary: 'Bootswach paper theme 3.3.1 without the glyphicons font',
  version: '1.0.0',
  git: 'https://github.com/guidouil/meteor-bootswatch-paper-noglyph'
});


Package.onUse(function (api) {
  api.versionsFrom("1.0.1");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('paper');
  api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

});
