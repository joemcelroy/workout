angular.module('workout', [])

.factory "NavService", (WorkoutService) ->

  return {

    state: "selectDay"
    slideMotion: "slide-left"

    isOn: (path) ->
      @state is path

    backTo: (path) ->
      @slideMotion = "slide-left"
      @state = path

    moveTo: (path) ->
      @slideMotion = "slide-right"
      @state = path

    selectDay: (day) ->
      WorkoutService.selectDay(day)
      @moveTo("selectWorkout")

    backToDayList: ->
      WorkoutService.deselectDay()
      @backTo("selectDay")

    backToWorkoutList: ->
      WorkoutService.deselectWorkout()
      @backTo("selectWorkout")

    selectWorkout:(workout) ->
      WorkoutService.selectWorkout(workout)
      @moveTo("workout")


  }


.factory "PersistanceService", ->

  new class PersistanceService

    constructor: ->
      @getSnapshot()

    getSnapshot: ->
      try 
        @snapshot = JSON.parse localStorage["workoutApp"]
      catch error
        @snapshot = {}
        console.log error

    persist: ->
      try
        localStorage["workoutApp"] = JSON.stringify @snapshot
      catch error
        console.log error 

    saveWorkoutRep:(workoutId, rep, weight) ->
      @snapshot[workoutId] ?= []
      @snapshot[workoutId][rep] = weight
      @persist()

    getWorkoutExercise: (workoutId) ->
      @snapshot[workoutId]

    getWorkoutRep: (workoutId,rep) ->
      @getWorkoutExercise(workoutId)?[rep] or false


.factory "WorkoutService", (PersistanceService, RunWorkoutService) ->

  new class WorkoutService

    constructor: ->
      @days = window.data.workouts
      @exercises = window.data.exercises

      @curentDay = null

      @title = "12 Weeks to Size"

    selectDay:(day) ->
      @currentDay = day
      @title = day.name
    
    deselectDay: ->
      @title = "12 Weeks to Size"
      @currentDay = null

    selectWorkout: (workout) ->
      exercise = @getExercise(workout.exercise)
      @title = exercise.name
      RunWorkoutService.setWorkout(workout, exercise)

    deselectWorkout: ->
      @title = @currentDay.name

    getExercise: (exerciseId) ->
      _.find @exercises, (e) -> e.id is exerciseId


.factory "RunWorkoutService", (PersistanceService) ->

  new class RunWorkoutService

    constructor: ->
      @currentRep = 0
      @workout = null
      @inputWeight = ""

    setWorkout: (@workout, @exercise) ->
      @currentRep = @recordedWorkouts().length
      @inputWeight = ""

    getResult: (rep) ->
      PersistanceService.getWorkoutRep(@workout.id,rep)

    getPreviousResult: ->
      results = PersistanceService.getWorkoutExercise(@exercise.weightRef)

      if results?

        total = _.reduce results, (memo, num) -> memo + sum 
        min = _.min(results)
        max = _.max(results)

        "#{Math.ceil(total / results.length,0)}KG (#{min} - #{max})"
      else 
        "No recording"

    recordedWorkouts: ->
      PersistanceService.getWorkoutExercise(@workout.id) or []

    isCompleted: ->
      results = @recordedWorkouts()
      results?.length is @workout.reps.length

    saveRep: (weight) ->
      PersistanceService.saveWorkoutRep(@workout.id, @currentRep, weight)
      @currentRep++



.factory "WeightModal", (RunWorkoutService) ->

  new class WeightModal

    constructor: ->
      @reset()

    reset: ->
      @visible = false
      @weightModel = null

    show: ()->
      @visible = true

    hide:->
      @visible = false
      @reset()

    saveWeight: ->
      if @weightModel > 0
        RunWorkoutService.saveRep(@weightModel)
        @hide()


.controller "AppCtrl", ($scope, WeightModal, RunWorkoutService, WorkoutService, NavService) ->
  $scope.WeightModal = WeightModal
  $scope.RunWorkoutService = RunWorkoutService
  $scope.WorkoutService = WorkoutService
  $scope.NavService = NavService

