(function() {
  var WorkoutDSLConsumer, data, dsl;

  data = {
    exercises: [
      {
        id: 1,
        name: "Barbell Squat",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/31/Male/m/31_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/31/Male/m/31_2.jpg"
      }, {
        id: 2,
        name: "Romanian Deadlift",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/171/Male/m/171_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/171/Male/m/171_2.jpg"
      }, {
        id: 3,
        name: "Lying Leg Curls",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/52/Male/m/52_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/52/Male/m/52_2.jpg"
      }, {
        id: 4,
        name: "Leg Press",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/57/Male/m/57_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/57/Male/m/57_2.jpg"
      }, {
        id: 5,
        name: "Leg Extensions",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/53/Male/m/53_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/53/Male/m/53_2.jpg"
      }, {
        id: 6,
        name: "Barbell Bench Press - Medium Grip",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/m/360_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/m/360_2.jpg"
      }, {
        id: 7,
        name: "Incline Dumbbell Press (Reverse Grip)",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/m/380_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/m/380_2.jpg"
      }, {
        id: 8,
        name: "Incline Dumbbell Flyes",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/38/Male/m/38_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/38/Male/m/38_2.jpg"
      }, {
        id: 9,
        name: "Cable Crossover",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/132/Male/m/132_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/132/Male/m/132_2.jpg"
      }, {
        id: 10,
        name: "Tricep Pushdown",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/343/Male/m/343_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/343/Male/m/343_2.jpg"
      }, {
        id: 11,
        name: "Standing Low-Pulley One-Arm Triceps Extension",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/149/Male/m/149_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/149/Male/m/149_2.jpg"
      }, {
        id: 12,
        name: "Close-Grip Barbell Bench Press",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/m/23_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/23/Male/m/23_2.jpg"
      }, {
        id: 13,
        name: "Standing Calf Raises",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/48/Male/m/48_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/48/Male/m/48_2.jpg"
      }, {
        id: 14,
        name: "Seated Calf Raise",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/152/Male/m/152_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/152/Male/m/152_2.jpg"
      }, {
        id: 15,
        name: "Dumbbell Bent Over Row",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/16/Male/m/16_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/16/Male/m/16_2.jpg"
      }, {
        id: 16,
        name: "Wide-Grip Lat Pulldown",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Male/m/10_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/10/Male/m/10_2.jpg"
      }, {
        id: 17,
        name: "Straight-Arm Pulldown",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/11/Male/m/11_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/11/Male/m/11_2.jpg"
      }, {
        id: 18,
        name: "Seated Cable Rows",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/45/Male/m/45_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/45/Male/m/45_2.jpg"
      }, {
        id: 19,
        name: "Barbell Curl",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/169/Male/m/169_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/169/Male/m/169_2.jpg"
      }, {
        id: 20,
        name: "Incline Dumbbell Curl",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/114/Male/m/114_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/114/Male/m/114_2.jpg"
      }, {
        id: 21,
        name: "Concentration Curls",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/m/136_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/m/136_2.jpg"
      }, {
        id: 22,
        name: "Bent-Knee Hip Raise",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/118/Male/m/118_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/118/Male/m/118_2.jpg"
      }, {
        id: 23,
        name: "Cable Crunch",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/163/Male/m/163_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/163/Male/m/163_2.jpg"
      }, {
        id: 24,
        name: "Cable Oblique Crunch",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/163/Male/m/163_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/163/Male/m/163_2.jpg"
      }, {
        id: 25,
        name: "Dumbbell Shoulder Press",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/328/Male/m/328_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/328/Male/m/328_2.jpg"
      }, {
        id: 26,
        name: "Side Lateral Raise",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/373/Male/m/373_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/373/Male/m/373_2.jpg"
      }, {
        id: 27,
        name: "Standing Dumbbell Upright Row",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/368/Male/m/368_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/368/Male/m/368_2.jpg"
      }, {
        id: 28,
        name: "Smith Machine Shrug",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/134/Male/m/134_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/134/Male/m/134_2.jpg"
      }, {
        id: 29,
        name: "Smith Machine Shrug",
        beforeImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/134/Male/m/134_1.jpg",
        afterImg: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/134/Male/m/134_2.jpg"
      }
    ],
    workouts: []
  };

  dsl = {
    phases: [
      {
        name: "Phase 3",
        startDay: 57,
        weeks: [
          {
            name: "13 - 15"
          }, {
            name: "9 - 11"
          }, {
            name: "6 - 8"
          }, {
            name: "3 - 5"
          }
        ],
        routine: [
          {
            name: "Chest, Triceps & Calfs",
            exercises: [
              {
                exercise: 6,
                reps: 4
              }, {
                exercise: 7,
                id: "71-2",
                weightRef: "64-2",
                reps: 3
              }, {
                exercise: 8,
                id: "71-3",
                weightRef: "64-3",
                reps: 3
              }, {
                exercise: 9,
                id: "71-4",
                weightRef: "64-4",
                reps: 3
              }, {
                exercise: 10,
                id: "71-5",
                weightRef: "64-5",
                reps: 4
              }, {
                exercise: 11,
                id: "71-6",
                weightRef: "64-6",
                reps: 3
              }, {
                exercise: 12,
                id: "71-7",
                weightRef: "64-7",
                reps: 3
              }, {
                exercise: 13,
                id: "71-8",
                weightRef: "64-8",
                reps: 4
              }, {
                exercise: 14,
                id: "71-9",
                weightRef: "64-9",
                reps: 4
              }
            ]
          }, {
            name: "Back, Biceps & Abs",
            exercises: [
              {
                exercise: 15,
                id: "72-1",
                weightRef: "65-1",
                reps: 4
              }, {
                exercise: 16,
                id: "72-2",
                weightRef: "65-2",
                reps: 4
              }, {
                exercise: 17,
                id: "72-3",
                weightRef: "65-3",
                reps: 3
              }, {
                exercise: 18,
                id: "72-4",
                weightRef: "65-4",
                reps: 3
              }, {
                exercise: 19,
                id: "72-5",
                weightRef: "65-5",
                reps: 3
              }, {
                exercise: 20,
                id: "72-6",
                weightRef: "65-6",
                reps: 3
              }, {
                exercise: 21,
                id: "72-7",
                weightRef: "65-7",
                reps: 3
              }, {
                exercise: 22,
                id: "72-8",
                weightRef: "65-8",
                reps: 3
              }, {
                exercise: 23,
                id: "72-9",
                weightRef: "65-9",
                reps: 3
              }, {
                exercise: 24,
                id: "72-10",
                weightRef: "65-10",
                reps: 3
              }
            ]
          }, {
            name: "Shoulders, Traps & Calves",
            exercises: [
              {
                exercise: 25,
                id: "74-1",
                weightRef: "67-1",
                reps: 4
              }, {
                exercise: 26,
                id: "74-2",
                weightRef: "67-2",
                reps: 3
              }, {
                exercise: 27,
                id: "74-3",
                weightRef: "67-3",
                reps: 3
              }, {
                exercise: 28,
                id: "74-4",
                weightRef: "67-4",
                reps: 3
              }, {
                exercise: 29,
                id: "74-5",
                weightRef: "67-5",
                reps: 4
              }, {
                exercise: 14,
                id: "74-6",
                weightRef: "67-6",
                reps: 4
              }, {
                exercise: 13,
                id: "74-7",
                weightRef: "67-7",
                reps: 4
              }
            ]
          }, {
            name: "Legs",
            exercises: [
              {
                exercise: 1,
                id: "75-1",
                weightRef: "68-1",
                reps: 4
              }, {
                exercise: 4,
                id: "75-2",
                weightRef: "68-2",
                reps: 3
              }, {
                exercise: 5,
                id: "75-3",
                weightRef: "68-3",
                reps: 3
              }, {
                exercise: 2,
                id: "75-4",
                weightRef: "68-4",
                reps: 4
              }, {
                exercise: 3,
                id: "75-5",
                weightRef: "68-5",
                reps: 3
              }
            ]
          }
        ]
      }
    ]
  };

  if (window.data == null) {
    window.data = {};
  }

  window.data.exercises = data.exercises;

  WorkoutDSLConsumer = (function() {
    function WorkoutDSLConsumer() {
      this.phases = dsl.phases;
      this.workoutDays = [];
    }

    WorkoutDSLConsumer.prototype.generateWorkout = function() {
      var phase, _i, _len, _ref;
      _ref = this.phases;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        phase = _ref[_i];
        this.generatePhase(phase);
      }
      return this.workoutDays;
    };

    WorkoutDSLConsumer.prototype.generatePhase = function(phase) {
      var day, dayIterator, week, weekIterator, _i, _len, _ref, _results;
      _ref = phase.weeks;
      _results = [];
      for (weekIterator = _i = 0, _len = _ref.length; _i < _len; weekIterator = ++_i) {
        week = _ref[weekIterator];
        _results.push((function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = phase.routine;
          _results1 = [];
          for (dayIterator = _j = 0, _len1 = _ref1.length; _j < _len1; dayIterator = ++_j) {
            day = _ref1[dayIterator];
            _results1.push(this.workoutDays.push(this.getWorkoutDay(day, weekIterator === 0, phase.startDay + (weekIterator * 7) + dayIterator, week.name)));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    WorkoutDSLConsumer.prototype.getWorkoutDay = function(day, isFirstWeek, dayNumber, repName) {
      var exercise, exercises, i, repCount, reps, _i, _j, _len, _ref, _ref1;
      exercises = [];
      _ref = day.exercises;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        exercise = _ref[i];
        reps = [];
        for (repCount = _j = 1, _ref1 = exercise.reps; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; repCount = 1 <= _ref1 ? ++_j : --_j) {
          reps.push({
            name: repName
          });
        }
        exercises.push({
          exercise: exercise.exercise,
          id: "" + dayNumber + "-" + (i + 1),
          weightRef: (isFirstWeek ? false : "" + (dayNumber - 7) + "-" + i),
          reps: reps
        });
      }
      return {
        name: "" + day.name,
        exercises: exercises
      };
    };

    return WorkoutDSLConsumer;

  })();

  window.data.workouts = new WorkoutDSLConsumer().generateWorkout();

}).call(this);

(function() {
  angular.module('workout', ['ngAnimate', 'ngTouch']).factory("NavService", function(WorkoutService) {
    return {
      state: "selectDay",
      slideMotion: "slide-left",
      isOn: function(path) {
        return this.state === path;
      },
      backTo: function(path) {
        this.slideMotion = "slide-left";
        return this.state = path;
      },
      moveTo: function(path) {
        this.slideMotion = "slide-right";
        return this.state = path;
      },
      selectDay: function(day) {
        WorkoutService.selectDay(day);
        return this.moveTo("selectWorkout");
      },
      backToDayList: function() {
        WorkoutService.deselectDay();
        return this.backTo("selectDay");
      },
      backToWorkoutList: function() {
        WorkoutService.deselectWorkout();
        return this.backTo("selectWorkout");
      },
      selectWorkout: function(workout) {
        WorkoutService.selectWorkout(workout);
        return this.moveTo("workout");
      }
    };
  }).factory("PersistanceService", function() {
    var PersistanceService;
    return new (PersistanceService = (function() {
      function PersistanceService() {
        this.getSnapshot();
      }

      PersistanceService.prototype.getSnapshot = function() {
        var error;
        try {
          return this.snapshot = JSON.parse(localStorage["workoutApp"]);
        } catch (_error) {
          error = _error;
          this.snapshot = {};
          return console.log(error);
        }
      };

      PersistanceService.prototype.persist = function() {
        var error;
        try {
          return localStorage["workoutApp"] = JSON.stringify(this.snapshot);
        } catch (_error) {
          error = _error;
          return console.log(error);
        }
      };

      PersistanceService.prototype.saveWorkoutRep = function(workoutId, rep, weight) {
        var _base;
        if ((_base = this.snapshot)[workoutId] == null) {
          _base[workoutId] = [];
        }
        this.snapshot[workoutId][rep] = weight;
        return this.persist();
      };

      PersistanceService.prototype.getWorkoutExercise = function(workoutId) {
        return this.snapshot[workoutId] || [];
      };

      PersistanceService.prototype.getWorkoutRep = function(workoutId, rep) {
        var _ref;
        return ((_ref = this.getWorkoutExercise(workoutId)) != null ? _ref[rep] : void 0) || false;
      };

      return PersistanceService;

    })());
  }).factory("WorkoutService", function(PersistanceService, RunWorkoutService) {
    var WorkoutService;
    return new (WorkoutService = (function() {
      function WorkoutService() {
        this.days = window.data.workouts;
        this.exercises = window.data.exercises;
        this.curentDay = null;
        this.title = "12 Weeks to Size";
      }

      WorkoutService.prototype.selectDay = function(day) {
        this.currentDay = day;
        return this.title = day.name;
      };

      WorkoutService.prototype.deselectDay = function() {
        this.title = "12 Weeks to Size";
        return this.currentDay = null;
      };

      WorkoutService.prototype.selectWorkout = function(workout) {
        var exercise;
        exercise = this.getExercise(workout.exercise);
        this.title = exercise.name;
        return RunWorkoutService.setWorkout(workout, exercise);
      };

      WorkoutService.prototype.deselectWorkout = function() {
        return this.title = this.currentDay.name;
      };

      WorkoutService.prototype.getExercise = function(exerciseId) {
        return _.find(this.exercises, function(e) {
          return e.id === exerciseId;
        });
      };

      WorkoutService.prototype.completedWorkout = function(workout) {
        return PersistanceService.getWorkoutExercise(workout.id).length === workout.reps.length;
      };

      return WorkoutService;

    })());
  }).factory("RunWorkoutService", function(PersistanceService) {
    var RunWorkoutService;
    return new (RunWorkoutService = (function() {
      function RunWorkoutService() {
        this.currentRep = 0;
        this.workout = null;
        this.inputWeight = "";
      }

      RunWorkoutService.prototype.setWorkout = function(workout, exercise) {
        this.workout = workout;
        this.exercise = exercise;
        this.currentRep = this.recordedWorkouts().length;
        return this.inputWeight = "";
      };

      RunWorkoutService.prototype.getResult = function(rep) {
        return PersistanceService.getWorkoutRep(this.workout.id, rep);
      };

      RunWorkoutService.prototype.getPreviousResult = function() {
        var max, min, results, total;
        results = PersistanceService.getWorkoutExercise(this.exercise.weightRef);
        if (results != null) {
          total = _.reduce(results, function(memo, num) {
            return memo + sum;
          });
          min = _.min(results);
          max = _.max(results);
          return "" + (Math.ceil(total / results.length, 0)) + "KG (" + min + " - " + max + ")";
        } else {
          return "No recording";
        }
      };

      RunWorkoutService.prototype.recordedWorkouts = function() {
        return PersistanceService.getWorkoutExercise(this.workout.id) || [];
      };

      RunWorkoutService.prototype.isCompleted = function() {
        var results;
        results = this.recordedWorkouts();
        return (results != null ? results.length : void 0) === this.workout.reps.length;
      };

      RunWorkoutService.prototype.saveRep = function(weight) {
        PersistanceService.saveWorkoutRep(this.workout.id, this.currentRep, weight);
        return this.currentRep++;
      };

      return RunWorkoutService;

    })());
  }).factory("WeightModal", function(RunWorkoutService) {
    var WeightModal;
    return new (WeightModal = (function() {
      function WeightModal() {
        this.reset();
      }

      WeightModal.prototype.reset = function() {
        this.visible = false;
        return this.weightModel = null;
      };

      WeightModal.prototype.show = function() {
        return this.visible = true;
      };

      WeightModal.prototype.hide = function() {
        this.visible = false;
        return this.reset();
      };

      WeightModal.prototype.saveWeight = function() {
        if (this.weightModel > 0) {
          RunWorkoutService.saveRep(this.weightModel);
          return this.hide();
        }
      };

      return WeightModal;

    })());
  }).controller("AppCtrl", function($scope, WeightModal, RunWorkoutService, WorkoutService, NavService) {
    $scope.WeightModal = WeightModal;
    $scope.RunWorkoutService = RunWorkoutService;
    $scope.WorkoutService = WorkoutService;
    $scope.NavService = NavService;
    return $scope.getCSSClass = function() {
      var cssClass;
      cssClass = {};
      cssClass[NavService.slideMotion] = true;
      cssClass['modal-active'] = WeightModal.visible;
      return cssClass;
    };
  });

}).call(this);
