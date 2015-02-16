var app = angular.module("PinPin",[]);

app.controller("BookCtrl", function ($scope){
	$scope.books=[
		{title:'Dear Life: Stories', author:'Munro, Alice'},
		{title:'Under the Tuscan Sun', author:'Mayes, Frances'}
	];
});