angular.module('workout', [])

.directive 'ngTap', ->

  (scope, element, attrs) ->
    tapping = false
    element.bind 'touchstart', (e) -> tapping = true
    element.bind 'touchmove', (e) -> tapping = false
    element.bind 'touchend', (e) -> scope.$apply(attrs['ngTap'], element) if tapping
    element.bind 'click', (e) ->
      if window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) is null
        scope.$apply(attrs['ngTap'], element)

.controller "AppCtrl", ($scope) ->
  $scope.state = "selectDay"
  $scope.title = "12 Weeks to Size"
  $scope.exercises = window.data.exercises

  $scope.days = window.data.workouts

  saveWorkoutRep = (ref, index, weight) ->
    if !$scope.db[ref]?
      $scope.db[ref] = []

    $scope.db[ref][index] = weight
    saveData()    

  readData = ->
    try 
      $scope.db = JSON.parse localStorage["workoutApp"]
    catch error
      $scope.db = {}
      console.log error

  saveData = ->
    try
      localStorage["workoutApp"] = JSON.stringify $scope.db
    catch error
      console.log error 

  readData()


  $scope.selectDay = (day) ->
    $scope.selectedDay = day
    $scope.state = "selectWorkout"
    $scope.workouts = day.exercises
    $scope.title = day.name

  $scope.backToSelectDay = ->
    $scope.title = "12 Weeks to Size"
    $scope.state = "selectDay"

  $scope.backToSelectWorkout = ->
    $scope.title = $scope.selectedDay.name
    $scope.state = "selectWorkout"

  $scope.selectWorkout = (workout) ->
    $scope.selectedWorkout = workout
    $scope.state = "workout"
    $scope.title = $scope.exercises[workout.exercise].name
    $scope.currentRep = 0

  $scope.getPreviousResult = (repRef) ->
    if repRef?
      "90KG"
    else 
      "70KG"

  $scope.getResult = (ref,index) ->
    if $scope.db[ref]?[index]?
      $scope.db[ref][index]
    else
      false

  $scope.resetWorkout = ->
    $scope.currentRep = 0
    $scope.db[$scope.selectedWorkout.id] = []
    saveData()

  $scope.completedWorkout = (workout) ->
    workout.reps.length == $scope.db[workout.id]?.length

  $scope.finishedWorkout = ->
    $scope.selectedWorkout?.reps.length == $scope.currentRep

  $scope.nextWorkout = ->
    $scope.weight = ""
    $scope.backToSelectWorkout()

  $scope.cancelRecordWeight = ->
    $scope.state = "workout"

  $scope.recordWeight = ->
    $scope.state = "typeWeight"
    $("input").focus()

  $scope.submitWeight = ->
    if $scope.weight > 0
      $scope.state = "workout"
      saveWorkoutRep $scope.selectedWorkout.id, $scope.currentRep, $scope.weight
      $scope.currentRep++

