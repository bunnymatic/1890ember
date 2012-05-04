
App.Artist  = Ember.Resource.extend({
  resourceUrl: 'http://artistsdev.missionartistsunited.org/artists',

  fullName: Ember.computed(function() {
    return this.get('firstname') + ' ' + this.get('lastname');
  }).property('firstname', 'lastname')
});