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


    getAllPlugins : ((callback) => {
 
        var query = PluginModel.find();
            
        query.exec(function (err,plugins) {
        if (err) return handleError(err);
            callback(plugins)
        });
    }),
          
    getPluginByName : ((pluginName,callback) => {

      var query = PluginModel.find({ 'nom': pluginName }); 
            query.exec(function (err,user) {
            if (err) return handleError(err);
              callback(user)
            });
             
    })
    
}

   

module.exports = {
    savePlugin : plugin.savePlugin,
    getAllPlugins : plugin.getAllPlugins,
    getPluginByName : plugin.getPluginByName
};


