App.ArtistIndexView = Ember.View.extend({
  templateName: 'artists-view',
  artistsBinding: 'App.artistsController',
  refreshListing: function() {
    App.artistsController.findAll();
  }
});

