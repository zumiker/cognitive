<?php

$mysqli = new mysqli('127.0.0.1',"root","","cognitive_new");
if ($mysqli->connect_errno)
{printf("Connectfailed: %s\n", $conn->connect_error);
exit();}

$sql = "SELECT DISTINCT EDUNAME			   
		FROM EDUCATION";

$result = $mysqli->query($sql);

$cur = "";
$i = 0;

while ($row = $result->fetch_row())
{
	$cur[$i]['EDUNAME'] = $row[0];
	$i++;
}

echo '{rows:'.json_encode($cur).'}';

$mysqli->close();
?>