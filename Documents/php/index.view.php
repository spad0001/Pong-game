<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP</title>
    <style>
        header {
            background-color: grey;
            padding: 2em;
            text-align: center;
        }

    </style>
</head>
<body>

<header>

    <ul>
        <?php
            foreach ($animals as $animal) {
                echo "<li>$animal</li>";
        }
        ?>
    </ul>

</header>


</body>
</html>