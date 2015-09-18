<?php

$mysqli = new mysqli('127.0.0.1',"root","","cognitive_new");
if ($mysqli->connect_errno)
{printf("Connectfailed: %s\n", $conn->connect_error);
exit();}
/*$sql = "SELECT M.MANID,
			   M.MANNAME,
			   E.EDUID,
			   E.EDUNAME,
			   S.STAID,
			   S.STANAME
		FROM MAN M, EDUCATION E, STATE S
		WHERE M.MANID = E.MANID   
	 	AND   M.MANID = S.MANID
		";
*/
$sql = "SELECT MAN.MANID,
			   MAN.MANNAME,
			   EDUCATION.EDUID,
			   EDUCATION.EDUNAME,
			   STATE.STAID,
			   STATE.STANAME
		FROM MAN 
		LEFT JOIN EDUCATION 
			ON MAN.MANID = EDUCATION.MANID
		LEFT JOIN STATE 
			on MAN.MANID = STATE.MANID
		";	
$result = $mysqli->query($sql);

$cur = "";
$i = 0;

while ($row = $result->fetch_row())
{
	$cur[$i]['MANID'] = $row[0];
	$cur[$i]['MANNAME'] = $row[1];
	$cur[$i]['EDUID'] = $row[2];
	$cur[$i]['EDUNAME'] = $row[3];
	$cur[$i]['STAID'] = $row[4];
	$cur[$i]['STANAME'] = $row[5];
	$i++;
}

echo '{rows:'.json_encode($cur).'}';

$mysqli->close();
?>