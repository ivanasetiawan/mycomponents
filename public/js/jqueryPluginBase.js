
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

  // Create the defaults once
  var pluginName = 'map';
  var defaults = {
    image: 'http://maps.google.com/mapfiles/kml/pal2/icon4.png',
    center: new google.maps.LatLng(52.091953,5.115509)
  };

  // The actual plugin constructor
  function Plugin(element, options) {
    this.$element = $(element);

    this.options = $.extend( {}, defaults, options );

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype = {
    // Initialize plugin
    init: function() {
      //console.log('init plugin ' + this._name);
      this.addEventListeners();
      this.displayMap();
    },

    // Add event listeners
    addEventListeners: function () {
      this.$element.on('click', '.view-map', $.proxy(this, 'show'));
    },
    displayMap: function(){
      this.map = new google.maps.Map(this.$element.find('.map-canvas')[0], {
        center: this.options.center,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    },
    show: function(event){
      var $anchor = $(event.currentTarget),
        myLatlng = new google.maps.LatLng($anchor.data('latitude'),$anchor.data('longitude'));

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        icon: this.options.image
      });
      event.preventDefault();
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));

      }
    });
  };

})( jQuery, window, document );
