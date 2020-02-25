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

    afterEach(function(done) { 
        pluginController.removePlugin({nom: plugin.nom}, function() {
            done();
        });
    });

    describe('create', function() {

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

    describe('get', function() {
        beforeEach(function(done) {
            pluginController.savePlugin(plugin, function(err) {
                if (err) { done(err); }
                else { done(); }
            });
        });

        it('should be able to find the plugin by its name', function(done) {
            pluginController.getPluginByName(plugin.nom)
                .then((res) => {
                    assert.equal(res[0].nom, plugin.nom);
                    assert.equal(res[0].version, plugin.version);
                    assert.equal(res[0].description, plugin.description);
                    assert.equal(res[0].pictures, plugin.pictures);
                    assert.equal(res[0].opensource, plugin.opensource);
                    assert.equal(res[0].topic, plugin.topic);
                    assert.equal(res[0].tag, plugin.tag);
                    assert.equal(JSON.stringify(res[0].commentaire), JSON.stringify(plugin.commentaire));
                    assert.equal(res[0].fichier, plugin.fichier);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });

        it('should be in all plugins', function(done) {
            pluginController.getAllPlugins(function(res) {
                for (var p of res) {
                    if (p.nom == plugin.nom) {
                        done();
                        return;
                    }
                }
                done(new Error("Not found"));
            });
        });
    });

    describe('comments', function() {
        beforeEach(function(done) {
            pluginController.savePlugin(plugin, function(err) {
                if (err) { done(err); }
                else { done(); }
            });
        });

        it('should get comments for a plugin', function(done) {
            pluginController.getCommentsForAPlugin(plugin.nom, function(res) {
                assert.equal(JSON.stringify(res[0].commentaire), JSON.stringify(plugin.commentaire));
                done();
            });
        });
    });
});
