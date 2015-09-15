<?php

$mysqli = new mysqli('127.0.0.1',"root","","cognitive_new");
if ($mysqli->connect_errno)
{printf("Connectfailed: %s\n", $conn->connect_error);
exit();}

$sql = "SELECT * FROM MAN";

$result = $mysqli->query($sql);

$cur = "";
$i = 0;

while ($row = $result->fetch_row())
{
	$cur[$i]['MANID'] = $row[0];
	$cur[$i]['MANNAME'] = $row[1];
	$i++;
}

echo '{rows:'.json_encode($cur).'}';

$mysqli->close();
?>