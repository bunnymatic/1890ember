App.ArtistIndexView = Ember.View.extend({
  templateName: 'templates/artists/index',
  artistsBinding: 'App.artistsController',
  refreshListing: function() {
    App.artistsController.findAll();
  }
});

