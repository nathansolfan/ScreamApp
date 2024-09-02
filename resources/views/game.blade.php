<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scream Go Clone</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        canvas {
            border: 1px solid black;
            margin-top: 20px;
        }
    </style>
    @vite('resources/js/game.js')
</head>
<body>
    <h1>Scream Go Clone</h1>
    <p>Use the spacebar to make the character jump!</p>
    <canvas id="gameCanvas" width="800" height="400"></canvas>
</body>
</html>
