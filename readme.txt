Exercise 5: Readme

User Interface Software, Winter - 2016
Christopher Chung (cc733@uw.edu) 
Ryan Gerber (ryan1105@uw.edu)



Title:

The Neverending Fight



<<<<<<< HEAD
Description:

This piece was inspired by the dogfights that would often be experienced during World War II between fighters in the sky. The maniacal and slightly suicidal hero faces off against an army of enemy fighters, who are intent on taking him down. The hero only has the ability to move in the y-axis since his tailwing is broken, but can shoot an infinite supply of missiles to take down the enemies. The enemies are randomly spawned, and travel randomly selected angles between 165 to 205 degrees from right to left. There is a nice parallax between the clouds and enemies flying from right to left, which gives the piece a 3d effect with foreground and background. Finally, 8bit background music was added to the piece, to give it a retro feel, in line with the time period.

This piece could be installed as a loading screen for apps, providing a mini-game for the user to play while they are waiting for the page/app to load, without having to install any additional files. We chose to keep the hero fixed on the x-axis, but follow mouseY, since enemies would spawn from right to left, and if the user could move freely in all four directions, they would collide with randomly spawning enemies too easily. Keeping him fixed also helps create a sense of space in the piece, since enemies and missiles will fly across the entire screen. The hero was given the option to shoot missiles when the left mouse button is pressed, which allows the user to interact with the enemies, while controlling the hero's plane through missiles, which causes the enemy planes to explode on collision. Sound effects were added when missiles were shot, and when they collided with the enemies, to create a more realistic experience. An animation was also generated for the enemy sprites, which would play through an explosion sequence upon collision with a missile. If the hero collided with an enemy plane, the game would freeze, and text would appear on the center of the screen that the game was over. However, user's were given the option to continue the game by pressing the "Shift" key, giving the a user a sense of defeat if they crash and lose, which helps make the user more competitive and immersed in the piece.



Work Breakdown (From Ryan):

For this project we worked in iterative phases of ideation, discovery and then problem solving in order to implement the various features within the gameplay. At first we would both discuss what things were most important for the interactive experience- things like having the ability to steer the plane up and down, as well as shoot missiles, and smaller caveats like having the enemy pilots zooming around at randomized trajectories to add to the chaos. Same too with smaller details like the sky gradient, the variable speed and size cloud background, and the smoke particles billowing out from the pilot’s engine. There were a host of other features we either thought be cool to explore or things we had even included, but for this final mockup chose not to include either due to time constraints or due to occluding the simplicity of the gameplay. 

For the next stage, we both explored solutions on how to implement the ideas we had come up with; looking at various projects on the web that dealt with similar problems, as well as taking inspiration from existing arcade classics and trying to replicate them with the various functions that we already had discovered within P5. 

Finally, we worked separately to fine tune the operations of the experience, Ryan mostly tackling graphics, styles and animations, and Chris working on debugging and re-writing the code so that it worked seamlessly and in perfect harmony. We used Git in order to sync back and forth, which once we figured it out, became a very valuable tool for tracking changes and staying up to date with the project. 



Work Breakdown (From Chris):

First, we brainstormed and took notes on paper regarding what user input we would like to add, and how it would affect the user's interaction with the piece. We both liked the idea of a shootemups having played them before, so we decided to add enemy planes, missiles, and collision to our piece. Similar to last week, we both started coding to get familiar with P5.js as wel as P5.play.js which has a lot of animation functions useful for games such as shootemups. This time, we used Github so that we could branch and merge are code, as well as rollback if anything breaks. 
>>>>>>> origin/master

After creating the sprites for the enemy plane, we split up our work. Chris worked on coding the collision function and randomizing the enemy planes' spawn location. Ryan worked on creating the visual artifacts, which were the enemy plane's natural state, and a image sequence of the enemy plane exploding. Once we got the enemy plane spawning correctly on the screen, we moved onto the missiles and collision. Ryan worked on getting the missile function working, as it was very similar to the enemy plane function, as they both use several of thes ame Sprite properties. Chris worked on getting the collision working for both the enemy planes and missiles, as well as the hero's plane and enemy planes. 

Once these two sections were working properly, we merged them in Git to the master. With this complete, we added the finishing touches, which were implementing the sound, adding a game over screen, and finally adding text at bottom of the screen with the control scheme. Chris worked on implementing the sound and game over screen, while Ryan added the text and finalized the enemy plane spawn rate and speed. 



Things to work on in the future:

As fun as this simple flyer is, one can’t help but think of ways to improve upon the model. Some other areas, given more time, we would love to include are things like tilting and easing as the pilot dips and dives around the screen, as well as some leeway within the X axis for the plane to move. Without a more complicated easing rigged up this was a bit too choppy for the current game. Also, improving bounding boxes for our simple collision engine here would go a long ways towards making the impacts more dangerous. The interaction between enemies and the hero too could be improved, allowing them to shoot and swarm the pilot, as well as better crafting the pilot’s guns to be more smooth and restricted in fire power. 

In the end, however, The Never-ending Flight is a simple, fun and lightweight game for all to enjoy. We had fun making it, and we home you have as much fun playing!

-Ryan & Chris 

Documentation
http://p5js.org/reference/
http://p5js.org/examples/
http://stackoverflow.com/
http://p5play.molleindustria.org/
(Character reference) http://www.behance.net/gallery/20559077/Character-design 
(Missile reference) http://commando2.wikia.com/wiki/C25_Marrugo

