/* Author: 

*/
ko.bindingHandlers.dateString = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
		var pattern = allBindings.datePattern || 'MM/dd/yyyy';
        $(element).text(valueUnwrapped.toString(pattern));
    }
}

var viewModel = new ViewModel();
viewModel.today(new Date());
viewModel.totalTime(0);
ko.applyBindings(viewModel);

setInterval(function() {viewModel.totalTime(viewModel.totalTime() + 1);}, 1000);






















