# encora-test
Write some code that can be used in a
templating engine.
This should take a map of variables ("day" => "Thursday", "name" => "Billy") as
well as a string template ("${name} has an appointment on ${day}") and perform
substitution as needed.
This needs to be somewhat robust, throwing some kind of error if a template
uses a variable that has not been assigned in the map, as well as provide a way
to escape the strings ("hello ${${name}}" -> "hello ${Billy}")
