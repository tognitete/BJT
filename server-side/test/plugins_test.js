var assert = require('assert');
var pluginController = require('../controllers/PluginController');
var bcrypt = require('bcrypt');
const PluginModel = require('../shemas/PluginModelShema').pluginModel

describe('Plugins', function() {
    var plugin = {
        nom: "my_plugin",
        version : "v1",
        description : "Lorem ipsum",
        pictures : "pretty pictures",
        opensource : "true",
        topic : "topic",
        tag : "cool,nice",
        tutoriel : "none",
        commentaire : ["cool", "nice"],
        fichier : "plugin.dll"
    }

    describe('create', function() {
        afterEach(function(done) { 
            pluginController.removePlugin({nom: plugin.nom}, function() {
                done();
            });
        });

        it('should be able to create a new plugin', function(done) {
            pluginController.savePlugin(plugin, function(err) {
                if (err) done(err);

                var query = PluginModel.findOne({ 'nom': plugin.nom });
                query.exec(function (err,plug) {
                    if (err) { done(err); }
                    else {
                        assert.equal(plug.nom, plugin.nom);
                        assert.equal(plug.version, plugin.version);
                        assert.equal(plug.description, plugin.description);
                        assert.equal(plug.pictures, plugin.pictures);
                        assert.equal(plug.opensource, plugin.opensource);
                        assert.equal(plug.topic, plugin.topic);
                        assert.equal(plug.tag, plugin.tag);
                        assert.equal(JSON.stringify(plug.commentaire), JSON.stringify(plugin.commentaire));
                        assert.equal(plug.fichier, plugin.fichier);
                        done();
                    }
                });
            });
        });

    });
});
