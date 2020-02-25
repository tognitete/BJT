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
          
    getPluginByName : ((pluginName) => {

       return new Promise((resolve, reject) => {

             var query = PluginModel.find({ 'nom': pluginName });
               
             query.exec(function (err,plugin) {
      
              if (err) {reject("Échec")}
              else  {
                resolve(plugin);
              }
               
              });
      
            }
      
            )     
             
    }),

    getCommentsForAPlugin : ((pluginName,callback) => {

      var query = PluginModel.find({"nom": pluginName});

      query.select("commentaire")
            
      query.exec(function (err,comments) {
      if (err) return handleError(err);
          callback(comments)
      });

    })

    
}

   

module.exports = {
    savePlugin : plugin.savePlugin,
    getAllPlugins : plugin.getAllPlugins,
    getPluginByName : plugin.getPluginByName,
    savePluginComment : plugin.savePluginComment,
    getCommentsForAPlugin : plugin.getCommentsForAPlugin
};


