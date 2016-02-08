Exercise 5: Readme

User Interface Software, Winter - 2016
Christopher Chung (cc733@uw.edu) 
Ryan Gerber (ryan1105@uw.edu)

Title
The Neverending Fight

Description
This piece was inspired by the dogfights that would often be experienced during World War II between fighters in the sky. The undying and slightly suicidal hero faces off against an army of enemy fighters, who are intent on crashing and taking him down. The hero only has the ability to move in the y-axis since his tailwing is broken, but can shoot missiles to take down the enemies. The enemies are randomly spawned, and travel randomly selected angles between 165 to 205 degrees from right to left. There is a nice parallax between the clouds and enemies flying from right to left, which gives the piece a 3d effect with foreground and background. Finally, 8bit background music was added to the piece, to give it a retro feel, in line with the time period.

This piece could be installed as a loading screen for apps, providing a minigame for the user to play while they are waiting for the page/app to load, without having to install any additional files. We chose to keep the hero fixed on the x-axis, but follow mouseY, since enemies would spawn from right to left, and if the user could move freely in all four directions, they would collide with randomly spawning enemies too easily. Keeping him fixed also helps create a sense of space in the piece, since enemies and missiles will fly across the entire screen. The hero was given the option to shoot missiles when the left mouse button is pressed, which allow the user to interact with the enemies, while controlling the hero's plane through missiles which cause the enemy planes to explode on collision. Sound effects were added when missiles were shot, and when they collided with the enemies, to create a more realistic experience. An animation was also generated for the enemy sprites, which would play through an explosion sequence upon collission with a missile. If the hero collided with an enemy plane, the game would freeze, and text would appear on the center of the screen tha the game was over. However, user's were given the option to continue the game by pressing the "Shift" key, giving the a user a sense of defeat if they crash and lose, which helps make the user more competitive and immersed in the piece.

Work Breakdown
First, we brainstormed and took notes on paper regarding what user input we would like to add, and how it would affect the user's interaction with the piece. We both liked the idea of a shootemups having played them before, so we decided to add enemy planes, missiles, and collision to our piece. Similar to last week, we both started coding to get familiar with P5.js as wel as P5.play.js which has a lot of animation functions useful for games such as shootemups. This time, we used Github so that we could branch and merge are code, as well as rollback if anything breaks. 

After creating the sprites for the enemy plane, we split up our work. Chris worked on coding the collision function and randomizing the enemy planes' spawn location. Ryan worked on creating the visual artifacts, which were the enemy plane's natural state, and a image sequence of the enemy plane exploding. Once we got the enemy plane spawning correctly on the screen, we moved onto the missiles and collision. Ryan worked on getting the missile function working, as it was very similar to the enemy plane function, as they both use several of thes ame Sprite properties. Chris worked on getting the collision working for both the enemy planes and missiles, as well as the hero's plane and enemy planes. 

Once these two sections were working properly, we merged them in Git to the master. With this complete, we added the finishing touches, which were implementing the sound, adding a game over screen, and finally adding text at bottom of the screen with the control scheme. Chris worked on implementing the sound and game over screen, while Ryan added the text and finalized the enemy plane spawn rate and speed. 

Documentation
http://p5js.org/reference/
http://p5js.org/examples/
http://stackoverflow.com/
http://p5play.molleindustria.org/
(Character reference) http://www.behance.net/gallery/20559077/Character-design 
(Missile reference) http://commando2.wikia.com/wiki/C25_Marrugo

