overtone-repl
=============

Standalone REPL for clojure/overtone


Introduction to Overtone
========================

4-min Overtone Live demo:
http://vimeo.com/22798433

17-min Overtone Live demo:
http://vimeo.com/46867490

43-min video on Overtone:
https://www.youtube.com/watch?v=imoWGsipe4k


Overtone Installation
=====================

Installation of Clojure/Leiningen and Overtone in Windows is actually challenging.
We wanted to customize a ZIP package pretty much ready to run for our Coderdojo class.

Hence, I took the following steps to create this ZIP package.

Just download the ZIP file, uncompress, and double-click on /bin/clj-1.bat


How to re-create a standalone Overtone REPL
-------------------------------------------

1) Clojure REPL

I found the following clojure REPL, pretty much ready to run:
http://bitbucket.org/kasim/clojurew/get/tip.zip

2) Add Overtone JAR libraries

	<ul>

	<li>Update the clojure.jar (from 1.3 to 1.5.1).</li>
	<li>Install Leiningen/Overtone and collect all the JARs from %HOME%/.m2 (Maven repository)</li>
	<li>Move all those JARs (except conflicting older clojure.jar's) into the clojurew environment.</li>
	</ul>

3) Integrate with SuperCollider

	<ul>
	<li>Install SuperCollider.</li>
	<li>Move the SuperCollider into the ZIP folder.</li>
	<li>Customize the path environment in bin/clj-1.bat to include the SuperCollider binaries.</li>
	</ul>


Testing Overtone
----------------

> lein repl

(+ 1 2)

(use 'overtone.live)

;; We use a saw-wave that we defined in the oscillators tutorial
(definst saw-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4] 
(* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
(saw freq)
vol))

;; We can play notes using frequency in Hz
(saw-wave 440)
(saw-wave 523.25)
(saw-wave 261.62) ; This is C4

;; We can also play notes using MIDI note values
(saw-wave (midi->hz 69))
(saw-wave (midi->hz 72))
(saw-wave (midi->hz 60)) ; This is C4

;; We can play notes using standard music notes as well
(saw-wave (midi->hz (note :A4)))
(saw-wave (midi->hz (note :C5)))
(saw-wave (midi->hz (note :C4))) ; This is C4! Surprised?

;; Define a function for convenience
(defn note->hz [music-note]
(midi->hz (note music-note)))

; Slightly less to type 
(saw-wave (note->hz :C5))

;; Let's make it even easier
(defn saw2 [music-note]
(saw-wave (midi->hz (note music-note))))

;; Great!
(saw2 :A4)
(saw2 :C5)
(saw2 :C4)

;; Let's play some chords


;; this is one possible implementation of play-chord
(defn play-chord [a-chord]
(doseq [note a-chord] (saw2 note)))

;; We can play many types of chords.
;; For the complete list, visit https://github.com/overtone/overtone/blob/master/src/overtone/music/pitch.clj and search for "def CHORD"
(play-chord (chord :C4 :major))

;; We can play a chord progression on the synth
;; using times:
(defn chord-progression-time []
(let [time (now)]
(at time (play-chord (chord :C4 :major)))
(at (+ 2000 time) (play-chord (chord :G3 :major)))
(at (+ 3000 time) (play-chord (chord :F3 :sus4)))
(at (+ 4300 time) (play-chord (chord :F3 :major)))
(at (+ 5000 time) (play-chord (chord :G3 :major)))))

(chord-progression-time)

;; or beats:
(defonce metro (metronome 120))
(metro)
(defn chord-progression-beat [m beat-num]
(at (m (+ 0 beat-num)) (play-chord (chord :C4 :major)))
(at (m (+ 4 beat-num)) (play-chord (chord :G3 :major)))
(at (m (+ 8 beat-num)) (play-chord (chord :A3 :minor)))
(at (m (+ 14 beat-num)) (play-chord (chord :F3 :major))) 
)

(chord-progression-beat metro (metro))

;; We can use recursion to keep playing the chord progression
(defn chord-progression-beat [m beat-num]
(at (m (+ 0 beat-num)) (play-chord (chord :C4 :major)))
(at (m (+ 4 beat-num)) (play-chord (chord :G3 :major)))
(at (m (+ 8 beat-num)) (play-chord (chord :A3 :minor)))
(at (m (+ 12 beat-num)) (play-chord (chord :F3 :major)))
(apply-at (m (+ 16 beat-num)) chord-progression-beat m (+ 16 beat-num) [])
)
(chord-progression-beat metro (metro))

 