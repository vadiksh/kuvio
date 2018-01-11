$(function() {

	//material input
	$('.material-input textarea, .material-input input').val('').change(function(event) {
        var field = $(this);
        if(field.val() != '') {
            field.addClass('ng-not-empty').removeClass('dirty');
            field.parent().removeClass('dirty');
        } else {
            field.removeClass('ng-not-empty')
        }
    });

    // Applied globally on all textareas with the "autoExpand" class

	$('textarea.autoExpand').each(function () {
	  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
	}).on('input', function () {
	  this.style.height = 'auto';
	  this.style.height = (this.scrollHeight) + 'px';
	});
});