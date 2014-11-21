var SelectReplace = function( el ) {
  this.el               = el;
  this.focusClassName   = 'select-focus';
  this.valueClassName   = 'select-value';
  this.wrapperClassName = 'select-wrapper';

  this.setup();
  this.bindEvents();

  return this;
};

SelectReplace.prototype = {

  setup: function() {
    // Create container
    this.container = document.createElement('span');
    this.container.classList.add(this.wrapperClassName);

    // Create value holder
    var value = document.createElement('span');
    value.classList.add(this.valueClassName);

    // Set this.el and value HTML to container
    this.container.innerHTML = value.outerHTML + this.el.outerHTML;

    // Replace this.el with new container
    this.el.outerHTML = this.container.outerHTML;

    // Get select and value vars
    this.select = document.getElementById(this.el.id);
    this.value  = document.getElementsByClassName(this.valueClassName)[0];

    // Set default state
    this.value.innerHTML = this.getCurrentValue();
  },

  bindEvents: function() {
    this.select.addEventListener('blur', this.removeClass.bind(this));
    this.select.addEventListener('change', this.setCurrentValue.bind(this));
    this.select.addEventListener('focus', this.addClass.bind(this));
  },

  setCurrentValue: function() {
    this.value.innerHTML = this.getCurrentValue();
  },

  removeClass: function() {
    this.container.classList.remove( this.focusClassName );
  },

  addClass: function() {
    this.container.classList.add( this.focusClassName );
  },

  getCurrentValue: function() {
    return this.select.value;
  }
};

module.exports = SelectReplace;
