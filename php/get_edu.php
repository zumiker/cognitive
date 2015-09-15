<?php

$mysqli = new mysqli('127.0.0.1',"root","","cognitive_new");
if ($mysqli->connect_errno)
{printf("Connectfailed: %s\n", $conn->connect_error);
exit();}

$sql = "SELECT E.EDUID,
			   E.MANID,
			   E.EDUNAME,
			   M.MANNAME
		FROM EDUCATION E, MAN M
		WHERE E.MANID = M.MANID";

$result = $mysqli->query($sql);

$cur = "";
$i = 0;

while ($row = $result->fetch_row())
{
	$cur[$i]['EDUID'] = $row[0];
	$cur[$i]['MANID'] = $row[1];
	$cur[$i]['EDUNAME'] = $row[2];
	$cur[$i]['MANNAME'] = $row[3];
	$i++;
}

echo '{rows:'.json_encode($cur).'}';

$mysqli->close();
?>