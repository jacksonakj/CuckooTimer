/* Author: 

*/
var viewModel = new ViewModel();
viewModel.today(new Date());
viewModel.totalTime(0);
ko.applyBindings(viewModel);

setInterval(function() {viewModel.totalTime(viewModel.totalTime() + 1);}, 1000);






















