## About

A website that lets you dance to In My Feelings, the viral song by Drake. It uses PoseNet to compare DrAIke's and your poses and score how well you copied him. 

Actually, this is really fun. You don't have be a dancer. Try it [here.](https://cryptic-taiga-14703.herokuapp.com/)

As you can guess, the name “DrAIke” is the compound word of Drake and AI. DrAIke refers to both this webiste and the master dancer in this game. Depending on how well you you copy DrAIke, you can earn the score and watch fun videos made by PoseNet. This project utilizes TensorFlow.js, the popular deep learning framework that runs on browers, and PoseNet, the project that detects the poses through computer vision. Both are developed by Google. (I love you Google!) 

This is one of our website pages. You will be shown in the pink box through webcam. PoseNet will estimate and show your poses  like the one in the blue box.
<img src="https://i.imgur.com/1akZnV3.jpg" alt="playground"/>

Oh, let me introduce DrAIke. He's a really great dancer. He's dream is to beat Drake and be the best dancer in the world.
<img src="https://media.giphy.com/media/1NZ5JH4Inu39bQnsks/giphy.gif" alt="draikeDancing" style="width: 200px;"/>

And DrAIke will show you his dancing videos depending on your score. This is only one of them. And it's Gangnam Style by Psy if you guessed right!
<img src="https://media.giphy.com/media/1hzAJNzt8lzxRTEHGA/giphy.gif" alt="gangnamStyle" style="width: 600px;"/>


We began this project when we got inspired by [this video](https://www.youtube.com/watch?v=prswDGGmYaE) of [Siraj Raval](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A/featured), the well-known Youtuber who ambitiously educate deep learning to people. He also provided us helpful feedbacks, and we could improve our website. Here is his PoseNet code: https://github.com/llSourcell/InMyFeelings_Challenge

We will keep adding the documents here and improve our website.  
Actually, we are highschoolers, and this is our first web project. So there can be many stupid codes. If you want to improve them, please let us know on "issues".



## For those of you who want to know more about PoseNet

You can also play the demo provided by Google. [Try it here!](https://montrealai.github.io/posenet-v3/)

<img src="https://raw.githubusercontent.com/irealva/tfjs-models/master/posenet/demos/camera.gif" alt="cameraDemo" style="width: 600px;"/>

PoseNet can be used to estimate either a single pose or multiple poses, meaning there is a version of the algorithm that can detect only one person in an image/video and one version that can detect multiple persons in an image/video.

[This](https://github.com/tensorflow/tfjs-models/tree/master/posenet) is a Pure Javascript implementation of PoseNet.

[Refer to this blog post](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5) for a high-level description of PoseNet running on Tensorflow.js.

## Credits

Credits for this code go to the Tensorflow team at Google.  
And thank you, Siraj Raval! I love(?) you. 
