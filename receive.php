<?php

var_dump($_POST);

        file_put_contents('config.json', $_POST);
         $s = file_get_contents('config.json');
        echo("yo");
        var_dump($s);

        ?>