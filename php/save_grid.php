<?
$mysqli = new mysqli('127.0.0.1',"root","","cognitive_new");
if ($mysqli->connect_errno)
{printf("Connectfailed: %s\n", $conn->connect_error);
exit();}

$data = json_decode(file_get_contents('php://input'), true);
foreach ( $data as $row ){
	$sql = "UPDATE EDUCATION SET EDUNAME = '$row[EDUNAME]' WHERE EDUID = '$row[EDUID]'";

}
$result = $mysqli->query($sql);
if($result)
	$mysqli->close();
?>