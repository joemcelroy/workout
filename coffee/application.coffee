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
  $scope.showWeightModal = false
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
    if $scope.db[repRef]?
      total = 0
      min = $scope.db[repRef][0]
      max = 0
      for recording in $scope.db[repRef]
        if recording > max
          max = recording
        if recording < min
          min = recording
        total+= recording

      return "#{Math.ceil(total / $scope.db[repRef].length,0)}KG (#{min} - #{max})"
    else 
      "No recording"

  $scope.getResult = (ref,index) ->
    if $scope.db[ref]?[index]?
      $scope.db[ref][index]
    else
      false

  $scope.resetWorkout = ->
    $scope.currentRep = 0
    delete $scope.db[$scope.selectedWorkout.id]
    saveData()

  $scope.completedWorkout = (workout) ->
    workout.reps.length is $scope.db[workout.id]?.length

  $scope.finishedWorkout = ->
    $scope.selectedWorkout?.reps.length is $scope.currentRep

  $scope.nextWorkout = ->
    $scope.inputWeight = ""
    $scope.backToSelectWorkout()

  $scope.cancelRecordWeight = ->
    $scope.showWeightModal = false

  $scope.recordWeight = ->
    $scope.showWeightModal = true

  $scope.submitWeight = ->
    if $scope.inputWeight > 0
      $scope.showWeightModal = false
      saveWorkoutRep $scope.selectedWorkout.id, $scope.currentRep, $scope.inputWeight
      $scope.currentRep++

