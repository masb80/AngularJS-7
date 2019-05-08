<?php
/**
 * Returns the list of cars.
 */
require 'connectControler.php';
    
$users = [];
$sql = "SELECT id, name FROM user";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['id']    = $row['id'];
    $users[$cr]['name'] = $row['name'];
    $cr++;
  }
    
  echo json_encode(['data'=>$users]);
}
else
{
  http_response_code(404);
}
