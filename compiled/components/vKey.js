'use strict';

//VKey React class.  Represents one key on our virtual keyboard.
var VKey = React.createClass({
  displayName: 'VKey',

  //method for removing styling from key after its audio element has stopped playing.
  handleAudioEnd: function handleAudioEnd(event) {
    var $vKey = $('#' + this.props.keyId).parent();

    $vKey.removeClass('green red pressed');
    event.preventDefault();
    this.render();
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'key' },
      React.createElement(
        'p',
        { className: 'keyLabel' },
        keyCodes[this.props.keyId]
      ),
      React.createElement(
        'p',
        { className: 'filename' },
<<<<<<< 31e1535702b08db5f1b2b608c8a517cd19b1f92c
        this.props.path.split('/')[2].slice(0, -4).split("-").join(" ")
      ),
      React.createElement('audio', { id: this.props.keyId, src: this.props.path, onEnded: this.handleAudioEnd, preload: 'auto' })
    );
=======
        this.props.path.substr(12).slice(0, -4).split("-").join(" ")
      ),
      React.createElement('audio', { id: this.props.keyId, src: this.props.path, onEnded: this.handleAudioEnd, preload: 'auto' })
    ) //
    ;
>>>>>>> foo
  }
});