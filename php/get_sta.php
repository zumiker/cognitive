<?php

$mysqli = new mysqli('127.0.0.1',"root","","cognitive_new");
if ($mysqli->connect_errno)
{printf("Connectfailed: %s\n", $conn->connect_error);
exit();}

$sql = "SELECT S.STAID,
			   S.MANID,
			   S.STANAME,
			   M.MANNAME
		FROM STATE S, MAN M
		WHERE S.MANID = M.MANID";

$result = $mysqli->query($sql);

$cur = "";
$i = 0;

while ($row = $result->fetch_row())
{
	$cur[$i]['STAID'] = $row[0];
	$cur[$i]['MANID'] = $row[1];
	$cur[$i]['STANAME'] = $row[2];
	$cur[$i]['MANNAME'] = $row[3];
	$i++;
}

echo '{rows:'.json_encode($cur).'}';

$mysqli->close();
?>