<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP</title>
</head>
<body>

<header>

    <h1>Task for the Day</h1>

    <ul>
        <li>
            <strong>Title: </strong> <?= $task['title']; ?>
        </li>

        <li>
            <strong>Due Date: </strong> <?= $task['due']; ?>
        </li>

        <li>
            <strong>Assigned to: </strong> <?= $task['assigned_to']; ?>
        </li>

        <li>
            <strong>Status: </strong>

            <?php if ($task['completed']) : ?>
                <span class="icon">&#9989;</span>
            <?php else : ?>
                <span class="icon">&#9747;</span>

            <?php endif; ?>

        </li>
    </ul>

</header>


</body>
</html>