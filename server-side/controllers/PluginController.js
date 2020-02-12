const PluginModel = require('../shemas/PluginModelShema').pluginModel


var plugin = {
    savePlugin : ((pluginData) => {

         // Create an instance of user model
         var pluginInstance = new PluginModel(pluginData);

         // Save the new model instance, passing a callback
         pluginInstance.save(function (err) {

         if (err) return handleError(err);
         
        });

          return pluginData ;
        }),

    
   }

module.exports = {
    savePlugin : plugin.savePlugin
};


