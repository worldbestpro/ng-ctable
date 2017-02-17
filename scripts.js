(function(angular) {
  'use strict';
  angular.module('BlankApp', ['dataGrid', 'pagination', 'ngMaterial'])
    .controller('Controller', ['$scope', function($scope) {
      $scope.students = [{"section" : {
        "name" : "Fall with Major Injury",
        "heading" : "Fall with Major Injury",
        "description" : "Awesome custom directive",
        "data" : {
          "columns" : [
            { "label" : "Resident Name", "tooltip" : "This is a test tooltip {2}", "align" : "left" },
            { "label" : "MRN", "align" : "right" },
            { "label" : "A1300", "align" : "left" },
            { "label" : "A0310A", "align" : "right" },
            { "label" : "A0310B", "align" : "left" },
            { "label" : "A0310H{1}" },
            { "label" : "J1800 -" },
            { "label" : "J1900 -" },
            { "label" : "Total MDS' with Dashes" },
            { "label" : "Total MDS' Submitted" }
          ],
          "results" : [
            [
              "John Smith",
              "21542",
              "10/10/2016",
              "1",
              "1",
              "",
              "-",
              "-"
            ],
            [
              "David Jones",
              "54854",
              "10/9/2016",
              "2",
              "5",
              "1",
              "-",
              "-"
            ],
            [
              "John Smith",
              "21542",
              "10/10/2016",
              "1",
              "1",
              "",
              "-",
              "-"
            ],
            [
              "David Jones",
              "54854",
              "10/9/2016",
              "2",
              "5",
              "1",
              "-",
              "-"
            ],
            [
              "Total MDS' with (-)",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              "6",
              "250"
            ]
          ]
        }
      }}];
    }])
    .directive('myStudents', function() {
      return {
        restrict: 'E',
        scope: {
          data: '='
        },
        templateUrl: 'main.html',
        link: function(scope) {
          scope.students = scope.data;
          scope.getName = function(value) {
            var start = value.indexOf('{');
            var end = value.indexOf('}');

            if (start < end) {
              var first = value.slice(0, start);
              var second = value.slice(start+1, end);
              var third = value.slice(end+1, value.lenth);

              return [first, second, third];
            } else {
              return [value, "", ""];
            };
          }
          scope.isVisible = function(value) {
            if (value == null || value == '')
              return false;
            else
              return true;
          }
          scope.updateResult = function(value) {
            var len = value.length;
            for (var i = 0; i < 10-len; i++)
              value.push(null);
            return value;
          }
          scope.getValue = function(value) {
            if (value == null || value == undefined)
              return "";
            else if (value == "")
              return "";
            else
              return value;
          }
          scope.getCSSFontStyle = function(value) {
            if (value == "-")
              return 'txt-italic';
            else if (value == "")
              return 'null-stripe';
            else
              return 'txt-normal';
          }
          scope.getCSSAlignment = function(student, index) {
            if (student.section.data.columns[index].align == 'left')
              return 'txt-left';
            else if (student.section.data.columns[index].align == 'right')
              return 'txt-right';
            else
              return 'txt-center';
          }
        }
      };
    });
})(window.angular);