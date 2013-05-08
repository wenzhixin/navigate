/**
 * jQuery plugin: navigate
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 */

(function($) {
	
	function Navigate($el, options) {
		this.$el = $el;
		this.options = options;
		this.$ul = $('<ul class="navigate"></ul>');
		this.$el.append(this.$ul);
	}
	
	Navigate.prototype = {
		constructor : Navigate,
		
		init: function() {
			var that = this;
			var html = [];
			$.each(this.options.items, function(i, item) {
				html.push('<li' + (i === that.options.index ? ' class="active"' : '') + '>');
				html.push(
					'<a href="' + item.link + '" target="' + (item.target || '_self') + '">',
						item.name,
					'</a>');
				if (item.hasOwnProperty('children')) {
					html.push('<ul class="children">');
					$.each(item.children, function(i, child) {
						html.push(
							'<li>',
								'<a href="' + child.link + '" target="' + (child.target || '_self') + '">',
									child.name,
								'</a>',
							'</li>');
					});
					html.push('</ul>');
				}
				html.push('</li>');
			});
			this.$ul.html(html.join(''));
			this.events();
		},
		
		events: function() {
			var that = this;
			this.$ul.find('>li').hover(function() {
				$(this).find('.children').slideDown(that.options.delay);
			}, function() {
				$(this).find('.children').slideUp(that.options.delay);
			});
		}
	};
	
	$.fn.navigate = function() {
		var option = arguments[0], 
			args = arguments,

			value, 
			allowedMethods = [];

		this.each(function() {
			var $this = $(this), 
				data = $this.data('navigate'), 
				options = $.extend({}, $.fn.navigate.defaults, typeof option === 'object' && option);

			if (!data) {
				data = new Navigate($this, options);
				$this.data('navigate', data);
			}

			if (typeof option === 'string') {
				if ($.inArray(option, allowedMethods) < 0) {
					throw "Unknown method: " + option;
				}
				value = data[option](args[1]);
			} else {
				data.init();
			}
		});

		return value ? value : this;
	};
	
	$.fn.navigate.defaults = {
		index: 0,
		delay: 200,
		items: []
	};
	
})(jQuery);
