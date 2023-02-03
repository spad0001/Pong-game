<?php

function checkAge($age) {
    return ($age < 21) ? false : true;
}

echo checkAge(33) ? 'Welcome to the club' : 'Sorry! Cannot come in';
